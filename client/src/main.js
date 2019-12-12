// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'
// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import Axios from 'axios'
import Vuetify from 'vuetify'
import VueTippy from 'vue-tippy'
import draggable from 'vuedraggable'

Vue.use(VueTippy, {
  directive: 'tippy', // => v-tippy
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      }
    }
  }
})

// Sync store with router
sync(store, router)
let config = require('./environment/' + process.env.NODE_ENV + '.json')
firebase.initializeApp(config)
Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(BootstrapVue)
Vue.use(draggable)

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

/* eslint-disable */
export const app = new Vue({
	i18n,
	router,
	store,
  vuetify: new Vuetify(),
	render: h => h(App)
}).$mount('#app')
