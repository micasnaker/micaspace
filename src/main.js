import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App.vue'
import axios from 'axios'
import router from './router/index'
import store from './store/index'
import '../static/js/animation.js'
import '../static/js/tween.js'
import '../static/css/normalize.css'
import '../static/css/public.css'
import '../static/css/font/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// Vue.use(VueResource)
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(mavonEditor)

new Vue({
  el: '#app',
  router,
  //   axios,
  store,
  components: { App },
  template: '<App/>'
  // watch:{
  //   '$route'(to,from){
  //      console.log(to)
  //    }
  // }

  // components: { App },
  // template: '<App/>'
})


