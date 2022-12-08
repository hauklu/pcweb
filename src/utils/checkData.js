import { toast } from '@/utils/toast' // 提示
import { IdCodeValid } from '@/utils' // 提示

/**
 * 格式化手机号码, 中间换成省略号
 *
 * @export
 * @param {*} tel
 * @return {*}
 */
export function telFormat(tel) {
  if (tel.toString().length === 11) {
    const newTel = tel.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    return newTel
  } else {
    console.log('error, 手机号码格式错误')
  }
}

/**
 *
 * 校验用户名格式, 6-30位字符
 * @export
 * @param {string} username 用户名字符
 * @returns
 */
export function checkName(username) {
  if (typeof username === undefined || typeof username === 'undefined') {
    username = ''
  }
  username = username.toString()
  if (!username.match(/^[a-zA-Z0-9_-]{6,30}$/)) {
    toast('用户名格式不正确,应为6-30位字符')
    return false
  }
  return true
}

/**
 *
 * 校验账号, 6-20 位数字与字母或字符组合（非纯数字, 或纯字母, 或纯其它字符）
 * @export
 * @param {*} username
 * @param {*} type //是否开启格式验证
 * @return {*}
 */
export function checkUsername(username, type) {
  if (typeof username === undefined || typeof username === 'undefined' || username === '') {
    username = ''
    toast('账号不能为空')
    return false
  }
  if (type) {
    username = username.toString()
    if (!username.match(/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/)) {
      toast('账号格式不正确\n应为6-20位数字与字母或字符组合\n(非纯数字)', 1500)
      return false
    }
  }
  return true
}

/**
 *
 * 校验密码格式, 6-20位数字或字母或_-
 * @export
 * @param {*} pwd
 * @returns
 */
export function checkpwd(pwd) {
  if (typeof pwd === undefined || typeof pwd === 'undefined' || pwd === '') {
    pwd = ''
    toast('密码不能为空')
    return false
  }
  pwd = pwd.toString()
  if (!pwd.match(/^[a-zA-Z0-9_-]{6,20}$/)) {
    toast('密码格式不正确,应为6-30位字符', 1500)
    return false
  }
  return true
}

/**
 *
 * 校验手机号码
 * @export
 * @param {*} tel
 * @returns
 */
export function checkTel(tel) {
  if (typeof tel === undefined || typeof tel === 'undefined' || tel === '') {
    tel = ''
    toast('手机号码不能为空')
    return false
  }
  tel = tel.toString()
  if (!tel.match(/^1[0-9]\d{9}$/)) {
    toast('手机号码格式不正确')
    return false
  }
  return true
}

/**
 *
 * 校验验证码
 * @export
 * @param {*} code //验证码
 * @returns
 */
export function checkCode(code) {
  if (typeof code === undefined || typeof code === 'undefined' || code === '') {
    code = ''
    toast('验证码不能为空')
    return false
  }
  code = code.toString()
  if (!code.match(/^[a-zA-Z0-9_-]{4,8}$/)) {
    toast('验证码格式不正确')
    return false
  }
  return true
}

/**
 *
 *
 * @export
 * @param {*} data 姓名
 * @returns
 */
export function checkRealName(data) {
  if (typeof data === undefined || typeof data === 'undefined') {
    data = ''
  }
  if (!data.match(/^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/)) {
    toast('请输入真实姓名')
    return false
  }
  return true
}
/**
 *
 *
 * @export
 * @param {*} IdCode 身份证号码检测
 */
export function checkRealCode(IdCode) {
  const idInfo = IdCodeValid(IdCode)
  if (!idInfo.status) {
    toast(idInfo.msg)
    return false
  }
  return true
}
