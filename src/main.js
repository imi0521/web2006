import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './router/permission'
import store from './store'
import './plugins/element.js'
import './plugins/Mycomponent.js'
import './assets/css/common.css'
import i18n from'./plugins/i18n.js'
import './utils/eventbus'

import {initProject} from'./utils/init.js'
initProject();   //初始化


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
