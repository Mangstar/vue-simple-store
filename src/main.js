import Vue from 'vue'
import App from './App.vue'

import Store from './store'
import Router from './route'

import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
  store: Store
})
