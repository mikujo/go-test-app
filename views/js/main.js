const router = new VueRoputer({
  routes: [
    {path: '/', component: httpVueLoader('/views/static/product.vue')},
    {path: '/search', component: httpVueLoader('/views/static/search.vue')}
  ]
})

const app = new Vue({
  el: '#app',
  router
})
