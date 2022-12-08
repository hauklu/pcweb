import request from '@/utils/request'
import {
  checkTel,
  checkCode,
  checkUsername,
  checkpwd
} from '@/utils/checkData' // 校验格式
import { toast } from '@/utils/toast'
/**
 *
 *账号登录
 * @export
 * @param {*} data
 * @returns
 */
export function userLogin(data) {
  if (!checkUsername(data.account) || !checkpwd(data.password)) return Promise.reject(false)
  return request.post('/market/v1/login/account', data)
}

/**
 *
 *用户信息查询
 * @export
 * @param {*}
 * @returns
 */
export function userInfo() {
  return request.get('/market/v1/info')
}

/**
 *
 *推广协议上报
 * @export
 * @param {*} data
 * @returns
 * {
 *  game_id:''
 * }
 */
export function identification(data) {
  return request.post('/market/v1/identification', data)
}

/**
 * 账号密码注册
 * @export
 * @param {object} data
 * @return {*}
 * post
 * data: {
 *  account: 123456a,
 *  password: 123xxx
 * }
 */
export function userRegister(data) {
  if (data.password !== data.password_confirmation) {
    toast('两次密码输入不一致，请重新输入')
    return Promise.reject(false)
  }
  if (!checkUsername(data.account, true) || !checkpwd(data.password)) return Promise.reject(false)
  return request.post('/market/v1/register/account', data)
}

/**
 *
 * 手机登录前, 获取验证码
 * @export
 * @param {object} data
 * @return {*}
 * get
 * data: {
 *  tel: 132xxxxxxxx
 * }
 *
 */
export function requestTelCode(data) {
  if (!checkTel(data.tel)) return Promise.reject(false)
  return request.get('/market/v1/sms/login', {
    params: { tel: data.tel }
  })
}

/**
 * 手机登录
 * @export
 * @param {object} data
 * post
 * data: {
 *  tel: 132xxxxxxxx,
 *  code: 200xxx
 * }
 *
 */
export function requestLogin(data) {
  if (!checkTel(data.tel) || !checkCode(data.code)) return Promise.reject(false)
  return request.post('/market/v1/login/code', data)
}

/**
 * 修改密码前, 获取验证码
 * @export
 * @param {object} data
 * @return {*}
 * get
 * data: {
 *  tel: 132xxxxxxxx
 * }
 *
 */
export function resetTelCode(data) {
  if (!checkTel(data.tel)) return Promise.reject(false)
  return request.get('/market/v1/sms/password/logout', { params: data })
}

/**
 * 修改密码 -> 通过手机验证码
 * @export
 * @param {object} data
 * @return {*}
 * post
 * data: {
 *  tel: 132xxxxxxxx,
 *  code: 200xxx,
 *  password: 132xxxxxxxx
 * }
 */
export function resetPasswordByTelcode(data) {
  // return Promise.resolve({
  //   'code': 0,
  //   'data': {},
  //   'message': ''
  // })
  if (!checkTel(data.tel) || !checkCode(data.code) || !checkpwd(data.password)) return Promise.reject(false)
  return request.post('/market/v1/password/sms/logout', data)
}

/**
 *
 *分链列表
 * @export
 * @param {*} data
 * @returns
 */
export function getMarketGameList(data) {
  return request.get('/market/v1/package/list')
}

/**
 *
 *创建分链游戏列表
 * @export
 * @param {*}
 * @returns
 */
export function getGameList() {
  return request.get('/market/v1/game/list')
}

/**
 *
 *创建分链素材列表
 * @export
 * @param {*}
 * @returns
 */
export function getMaterialList() {
  return request.get('/market/v1/material/list')
}

/**
 *
 *创建分链素
 * @export
 * @param {*}
 * @returns
 */
export function addGameLink(data) {
  return request.post('/market/v1/package/add', data)
}
