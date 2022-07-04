const router = new VueRouter({
  routes: [
    {path: '/', component: httpVueLoader('/views/static/product.vue')},
    {path: '/search', component: httpVueLoader('/views/static/search.vue')}
  ]
})

const app = new Vue({
  el: '#app',
  router
})
