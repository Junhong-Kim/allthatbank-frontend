import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

axios.defaults.paramsSerializer = params => {
  return qs.stringify(params, { indices: false })
}
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vuetify, {
  theme: {
    primary: '#2196f3',
    secondary: '#6ec5ff',
    accent: '#0068bf',
    error: '#ff6090'
  },
  iconfont: 'md'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
