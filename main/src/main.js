import Vue from 'vue'
import App from './App.vue'
import "@/utils/microApp/index";
import router from "./utils/router";
import VueRouter from 'vue-router'; 
import './style/common.css'
Vue.config.productionTip = false

Vue.use(VueRouter) 
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
