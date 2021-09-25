import Vue from 'vue'
import Router from 'vue-router'


import search from '@/components/search'
import websitedetails from '@/components/websitedetails'
import details from '@/components/details'






Vue.use(Router)

//const router = new VueRouter({})

export default new Router({
  routes: [

    {
      path: '/search',
      name: 'search',
      component: search
    },

    {
      path: '/websitedetails',
      name: 'websitedetails',
      component: websitedetails
    },

    {
      path: '/details',
      name: 'details',
      component: details
    },



  ]
})
// // 全局前置守卫（回调函数）
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth == true) {
//     // 去首页 判断登录
//     // token
//     if (window.localStorage.getItem('token') != undefined) {
//       // 存在就放行
//       next()
//     } else {
//       // new一个实例出来
//       new Vue().$message.error('滚犊子！！！')
//       // 不存在
//       router.push('/login')
//     }
//   } else {
//     // 放过去
//     next()
//   }
// })
