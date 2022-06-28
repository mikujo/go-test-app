module.exports = {
  data: function() {
    return {
      computedProducts: [],
      productName: '',
      isEntered: false,
      options: [
        {value: -1, label: 'ALL'},
        {value: 0, label: '未購入'},
        {value: 1, label: '購入済'}
      ],
    }
  },
  // 算出プロパティ
  computed: {
    // 商品情報の状態一覧を表示する
    labels() {
      return this.options.reduce(function(a, b) {
        return Object.assign(a, {[b.value]: b.label})
      }, {})
    }
  },

  methods: {
    doSearchProduct() {
      axios.get('/searchProduct', {
        params: {
          productName: this.productName
        }
      }).then(res => {
        if (res.status != 200) {
          throw new Error('Response Error')
        } else {
          let resultProducts = res.data
          this.computedProducts = resultProducts
        }
      })
    }
  },
}
