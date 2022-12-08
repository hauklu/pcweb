// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import sdk_version from '../package.json'
import './assets/js/flexible.js'
// import './assets/js/lib-flexible.js'

// swiper star
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)
// swiper end

// vxe-table start
import 'xe-utils'
import './utils/table'
// vxe-table end

// vant start
import { Lazyload, Icon } from 'vant'
import 'vant/lib/index.css'
Vue.use(Lazyload)
Vue.use(Icon)
// vant end

import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()

Vue.config.productionTip = false
Vue.prototype.$sdk_version = sdk_version.version
Vue.prototype.$deploy = require(`@/utils/deploy/js/${process.env.PLATFORM}`)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
