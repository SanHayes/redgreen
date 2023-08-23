import Vue from 'vue'
import App from './App'
import http from "utils/http.js"
import store from "./store"
import i18n from './lang/i18n.js'  
import en from './lang/en_US.js'
import hi from './lang/hi.js'
import baseAPI from "./config/config.js";

i18n.registerLocale({en,hi})   
Vue.prototype.$api = baseAPI;
Vue.prototype.$store = store;
Vue.prototype.$http = http;
Vue.prototype._i18n = i18n 

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	 i18n,
	...App
})
app.$mount()
