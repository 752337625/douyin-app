import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reast.css'
import 'amfe-flexible/index'
import fastclick from 'fastclick'
fastclick.attach(document.body);
import VueLazyload from 'vue-lazyload'
Vue.use( VueLazyload, {
	loading: require( '@/assets/images/default.png' ),
	error: require( '@/assets/images/default.png' )
} )
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
