import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './module' // 引入业务逻辑模块
// import store from '@/store'
// import { getCookie } from '@/utils' // cookie读取、设置、删除

// 重复点击同一路由问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: RouterConfig,
  // 路由每次切换都定位到顶部
  scrollBehavior: () => ({
    x: 0,
    y: 0
  })
})

router.beforeEach((to, from, next) => { // 前置路由守卫
  document.title = to.meta.title
  if (to.matched.length <= 0) { // 未知的路由404页面
    return next({ path: '/404', replace: true })
  }
  const path_last = to.path.substr(to.path.length - 1, 1) // 取路由最后一个字符
  if (to.path !== '/' && path_last === '/') { // 如果路由最后带有斜杠则去除
    next({ path: to.path.substr(0, to.path.length - 1) })
    return
  }
  // checkLogin(to, from, next)
  next()
})

// // 登录检测
// function checkLogin(to, from, next) {
//   // 获取token, 不存在则跳转到登录
//   if (getCookie('_un_o_tk_')) {
//     // 获取角色信息, 失败则需要清除token, 跳转到登录, 重新存储token和用户信息
//     // store.dispatch('lump/getUserInfo').then(res => {
//     //   store.commit('lump/IS_LOGIN_VIEW', false)
//     //   next()
//     // }).catch(() => {
//     //   store.dispatch('lump/fedLogout')
//     //   store.commit('lump/IS_LOGIN_VIEW', true)
//     //   next()
//     // })
//     next()
//   } else {
//     // store.commit('rebate/IS_LOGIN_VIEW', true)
//     next()
//   }
// }

export default router
