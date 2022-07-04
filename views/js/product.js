module.exports = {
  data: function() {
    return {
      products: [],
      productName: '',
      productMemo: '',
      current: -1,
      options: [
        {value: -1, label: 'ALL'},
        {value: 0, label: '未購入'},
        {value: 1, label: '購入済'}
      ],
      isEntered: false
    }
  },

  computed: {
    labels() {
      return this.options.reduce(function(a, b) {
        return Object.assign(a, { [b.value]: b.label})
      }, {})
    },

    computedProducts() {
      return this.products.filter(function(el) {
        let option = this.current < 0 ? true :this.current === el.state
        return option
      }, this)
    },

    validate() {
      let isEnteredProductName = 0 < this.productName.length
      this.isEntered = isEnteredProductName
      return isEnteredProductName
    }
  },

  created: function() {
    this.doFetchAllProducts()
  },

  methods: {
    doFetchAllProducts() {
      axios.get('/fetchAllProducts')
        .then(res => {
          if (res.status != 200) {
            throw new Error('Response Error')
          } else {
            let resultProducts = res.data
            this.products = resultProducts
          }
        })
    },
    doFetchProduct(product) {
      axios.get('/fetchProduct', {
        params: {productID: product.id}
      }).then(res => {
        if (res.status != 200) {
          throw new Error('Response Error')
        } else {
          let resultProduct = res.data
          let index = this.products.indexOf(product)
          this.products.splice(index, 1, resultProduct[0])
        }
      })
    },
    doAddProduct() {
      const params = new URLSearchParams();
      params.append('productName', this.productName)
      params.append('productMemo', this.productName)

      axios.post('/addProduct', params)
        .then(res => {
          if (res.status != 200 ) {
            throw new Error('Response Error')
          } else {
            this.doFetchAllProducts()
            this.initInputValue()
          }
        })
    },
    doChangeProductState(product) {
      const params = new URLSearchParams();
      params.append('productID', product.id)
      params.append('productState', product.state)

      axios.post('/updateProduct', params)
        .then(res => {
          if (res.status != 200) {
            throw new Error('Response Error')
          } else {
            this.doFetchProduct(product)
          }
        })
    },
    doDeleteProduct(product) {
      const params = new URLSearchParams();
      params.append('productID', product.id)

      axios.post('/deleteProduct', params)
        .then(res => {
          if (res.status != 200) {
            throw new Error('Response Error')
          } else {
            this.doFetchAllProducts()
          }
        })
    },
    initInputValue() {
      this.current = -1
      this.productName = ''
      this.productMemo = ''
    }
  }
}