/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios'
import store from '@/store'
// cookie读取、设置、删除
import { getCookie, setCookie, delCookie } from '@/utils/index'
import { toast } from '@/utils/toast'

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, error) => {
  let message = ''
  // 状态码判断
  switch (status) {
    // 401: 未登录状态或登录失效
    case 401:
      message = '用户未登录或登录信息失效'
      delCookie('_un_o_tk_')
      window.location.reload()
      break
    // 422: 其他错误并提示返回错误
    case 422:
      if (error.data && error.data.errors) {
        for (const key in error.data.errors) {
          const errors = error.data.errors[key]
          for (const index in errors) {
            message += errors[index] + ' | '
          }
        }
      }
      break
    case 404:
      // code -1 接口访问404未找到路由
      message = '未找到数据，请联系管理员'
      break
    case 999:
      // code -1 接口访问404未找到路由
      message = '网络开了小差，请刷新重试下哦~'
      break
    default:
      message = status
      console.log(error)
  }
  toast(message, 1500)
}

// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 6, // 设置请求超时时长
  baseURL: process.env.BASE_API, // 设置baseUrl 如果请求完整api链接则会忽略此设置
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded' // 设置post请求头
    }
  }
})

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  config => {
    // console.log('请求成功')
    // console.log(config)
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    config.headers['Accept'] = 'application/json'
    config.headers['Info'] = store.getters['lump/_un_o_headers_io_'] || localStorage._un_o_headers_io_
    if (getCookie('_un_o_tk_')) {
      config.headers['Authorization'] = `Bearer ${getCookie('_un_o_tk_')}`
    }
    return config
  },
  error => Promise.error(error)
)

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  response => {
    // console.log('响应成功')
    // console.log(response)
    // 拦截响应header头信息 => 用户信息token 并储存
    if (response.headers.authorization) {
      const auth = response.headers.authorization.match(/Bearer (\S*)/)[1]
      setCookie('_un_o_tk_', auth)
    }
    // 请求已发出成功 但定义返回错误
    if (response.data.code !== 0) {
      toast(response.data.message)
      return Promise.reject(response.data)
    }
    // 请求成功code==0 resolve返回
    return Promise.resolve(response.data.data)
  },
  // 请求失败
  error => {
    const {
      response
    } = error
    // console.log('响应失败')
    // console.log(response)
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response)
      return Promise.reject(response)
    } else {
      errorHandle(999)
      return Promise.reject(response)
      // 处理断网的情况 暂时无处理
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
    }
  }
)

export default instance
