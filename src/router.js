import Vue from 'vue'
import Router from 'vue-router'
import SavingProduct from './views/SavingProduct.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: {
        name: 'saving'
      }
    },
    {
      path: '/saving',
      name: 'saving',
      component: SavingProduct
    },
    {
      path: '/deposit',
      name: 'deposit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/DepositProduct.vue')
    }
  ]
})
