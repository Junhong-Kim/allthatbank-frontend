import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: {
        name: 'search'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/SearchProduct.vue')
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: () => import('./views/SearchProductResult.vue')
    },
    {
      path: '/saving',
      name: 'saving',
      component: () => import('./views/SavingProduct.vue')
    },
    {
      path: '/deposit',
      name: 'deposit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/DepositProduct.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/ProductDetail.vue')
    }
  ]
})
