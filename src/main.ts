import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// @ts-ignore
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store'
import './registerServiceWorker'
import http from './utils/http'
import FastClick from 'fastclick' // 引入插件
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
  loading: require('./assets/lazy.png')
})

interface FastClickType {
  attach?: any
}

// 使用 fastclick
(FastClick as FastClickType).attach(document.body)

if (document && document.documentElement) document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$http = http

if (module.hot) {
  module.hot.accept()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
