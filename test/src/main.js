// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'



Vue.prototype.$http = axios;
// // http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     if (localStorage.token) { //判断token是否存在
//       config.headers.Authorization = localStorage.token;  //将token设置成请求头
//       config.log("qingqiutou")
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//     config.log("dwada")
//   }
// );

// // http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if (response.data.errno === 999) {
//       router.replace('/');
//       console.log("token过期");
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
// export default axios;





Vue.use(ElementUI);

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
