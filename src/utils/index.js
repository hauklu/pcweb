/*
 * @Description: In User Settings Edit
 * @Author: 9w
 * @Date: 2019-08-09 10:22:39
 * @LastEditTime: 2019-08-12 18:13:10
 * @LastEditors: Please set LastEditors
 */
import { toast } from '@/utils/toast'
const MD5 = require('js-md5')

/**
 *
 * 禁止滚动穿透
 * @param {*} status
 * @export
 */
export const forbidScrollThrough = (function forbidScrollThrough() {
  let scrollTop
  return function forbidScrollThroughInner(status) {
    if (status) {
      scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      // position fixed会使滚动位置丢失，所以利用top定位
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollTop}px`
      document.body.style.left = '0px'
      document.body.style.right = '0px'
    } else {
      // 恢复时，需要还原之前的滚动位置
      document.body.style.position = 'static'
      document.body.style.top = '0px'
      window.scrollTo(0, scrollTop)
    }
  }
}())

/**
 *
 *获取平台
 * @export
 * @returns
 */
export function isSysName() {
  var ua = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(ua) || /macintosh/.test(ua)) {
    return 'ios'
  } else if (/android/.test(ua)) {
    return 'android'
  }
}

/**
 *
 *获取cookie
 * @export
 * @param {*} name
 * @returns
 */
export function getCookie(name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  try {
    arr = document.cookie.match(reg)
    return (arr[2])
  } catch (err) {
    return null
  }
}

/**
 *
 *设置cookie
 * @export
 * @param {*} c_name
 * @param {*} value
 * @param {*} expiredays
 */
export function setCookie(c_name, value, expiredays) {
  var exdate = new Date()
  expiredays = expiredays || 365
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = c_name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + ';path=/'
}

/**
 *
 *删除cookie
 * @export
 * @param {*} name
 */
export function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/'
  }
}

/**
 *
 *储存账号密码
 * @export
 * @param {*} user
 * @returns
 */
export function setUserList(user) {
  var userList = getUserList() || []
  if (!user.username || !user.password) {
    return false
  }
  userList = userList.filter((item, index) => {
    return item.username !== user.username && index < 9
  })
  if (!userList) userList = []
  userList.unshift(user)
  localStorage.w9UList = JSON.stringify(userList)
  setCookie('w9UList', JSON.stringify(userList))
}

/**
 *
 *读取账号密码
 * @export
 * @returns
 */
export function getUserList() {
  if (localStorage.w9UList) return JSON.parse(localStorage.w9UList)
  localStorage.w9UList = decodeURIComponent(getCookie('w9UList')) || []
  return JSON.parse(decodeURIComponent(getCookie('w9UList')))
}

/**
 *
 * 储存用户登录的历史记录, 去重和排序最后点击
 * @export
 * @param {*} tel
 * @param {*} account
 */
export function setLoginUser(tel, account, password) {
  if (typeof tel !== 'string') {
    console.log('error!, setLoginUser() type must be String')
    return
  }
  var user = {
    tel: tel || '',
    account: account || '',
    password: password || ''
  }
  var userList = []
  if (Array.isArray(getLoginUser())) userList = getLoginUser() || []
  if (userList.length > 30) userList.splice(30)
  userList.forEach((item, index) => {
    if ((user.account === item.account && user.account !== '') || (user.tel === item.tel && user.tel !== '')) {
      userList.splice(index, 1)
    }
  })
  userList.unshift(user)
  localStorage.w9LoginUser = JSON.stringify(userList)
  setCookie('w9LoginUser', JSON.stringify(userList))
}

/**
 *
 * 读取用户登录的历史记录
 * @export
 * @returns
 */
export function getLoginUser() {
  if (localStorage.w9LoginUser) return JSON.parse(localStorage.w9LoginUser)
  if (decodeURIComponent(getCookie('w9LoginUser')) === 'null') {
    localStorage.w9LoginUser = []
  } else {
    localStorage.w9LoginUser = decodeURIComponent(getCookie('w9LoginUser'))
  }
  return localStorage.w9LoginUser
}

/**
 *
 *验证码倒计时
 * @export
 * @param {boolean} status 是否开启倒计时
 * @param {string} uname 挂载方法名称
 * @param {function} suss 正在倒计时
 * @param {function} oksuss 倒计时结束
 * @param {int} time 倒计时结束
 * @returns
 */
export function _countdown(status, uname, suss, oksuss, time) {
  const name = 'initerval' + uname
  if (status) {
    let count = time || 60
    window[name] = window.setInterval(function() {
      if (count > 0) {
        count--
        const msg = count
        suss && suss(msg)
      } else {
        oksuss && oksuss(true)
        window.clearInterval(window[name])
      }
    }, 1000)
  } else {
    if (window[name] === undefined || window[name] === 'undefined') {
      return false
    }
    window.clearInterval(window[name])
  }
}

/**
 *
 *获取浏览器内核标识版本
 * @export
 * @returns
 */
export function getBrowserInfo() {
  var agent = navigator.userAgent.toLowerCase()
  var regStr_ie = /msie [\d.]+;/gi
  var regStr_ff = /firefox\/[\d.]+/gi
  var regStr_chrome = /chrome\/[\d.]+/gi
  var regStr_saf = /safari\/[\d.]+/gi
  var reStr_applewebkit = /applewebkit\/[\d.]+/gi
  // IE
  if (agent.indexOf('msie') > 0) {
    return agent.match(regStr_ie)[0]
  }
  // firefox
  if (agent.indexOf('firefox') > 0) {
    return agent.match(regStr_ff)[0]
  }
  // Chrome
  if (agent.indexOf('chrome') > 0) {
    return agent.match(regStr_chrome)[0]
  }
  // Safari
  if ((agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0)) {
    return agent.match(regStr_saf)[0]
  }
  if (agent.indexOf('applewebkit') > 0 && agent.indexOf('chrome') < 0) {
    return agent.match(reStr_applewebkit)[0]
  }
}

/**
 *
 * 身份证号码验证
 * @export
 * @param {*} id 身份证号码
 * @returns
 */
export function IdCodeValid(id) {
  // 1 "验证通过!", 0 //校验不通过
  var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/
  // 号码规则校验
  if (!format.test(id)) {
    return { 'status': 0, 'msg': '身份证号码不合规' }
  }
  // 区位码校验
  // 出生年月日校验   前正则限制起始年份为1900
  var year = id.substr(6, 4) // 身份证年
  var month = id.substr(10, 2) // 身份证月
  var date = id.substr(12, 2) // 身份证日
  var time = Date.parse(month + '-' + date + '-' + year) // 身份证日期时间戳date
  var now_time = Date.parse(new Date()) // 当前时间戳
  var dates = (new Date(year, month, 0)).getDate() // 身份证当月天数
  if (time > now_time || date > dates) {
    return { 'status': 0, 'msg': '出生日期不合规' }
  }
  // 校验码判断
  var c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  // 系数
  var b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  // 校验码对照表
  var id_array = id.split('')
  var sum = 0
  for (var k = 0; k < 17; k++) {
    sum += parseInt(id_array[k]) * parseInt(c[k])
  }
  if (id_array[17].toUpperCase() !== b[sum % 11].toUpperCase()) {
    return { 'status': 0, 'msg': '身份证校验码不合规' }
  }
  return { 'status': 1, 'msg': '校验通过' }
}

/**
 *
 *动态加载一个js/css文件
 * @export
 * @param {*} filename 添加文件名
 * @param {*} filetype 添加的类型 js/css
 */
export function loadjscssfile(filename, filetype) {
  var fileref
  if (filetype === 'js') {
    fileref = document.createElement('script')
    fileref.setAttribute('type', 'text/javascript')
    fileref.setAttribute('src', filename)
    fileref.setAttribute('async', '')
  } else if (filetype === 'css') {
    fileref = document.createElement('link')
    fileref.setAttribute('rel', 'stylesheet')
    fileref.setAttribute('type', 'text/css')
    fileref.setAttribute('href', filename)
  }
  if (typeof fileref !== 'undefined') {
    document.getElementsByTagName('head')[0].appendChild(fileref)
  }
}

/**
 *
 *
 * @export
 * @param {*} filename // 移除文件名
 * @param {*} filetype // 移除的类型 js/css
 */
export function removejscssfile(filename, filetype) {
  var targetelement = (filetype === 'js') ? 'script' : (filetype === 'css') ? 'link' : 'none'
  var targetattr = (filetype === 'js') ? 'src' : (filetype === 'css') ? 'href' : 'none'
  var allsuspects = document.getElementsByTagName(targetelement)
  for (var i = allsuspects.length; i >= 0; i--) {
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) !== null && allsuspects[i].getAttribute(targetattr).indexOf(filename) !== -1) {
      allsuspects[i].parentNode.removeChild(allsuspects[i])
    }
  }
}

/**
 *
 *复制功能
 * @export
 * @param {*} val 需要复制的内容
 */
export function copy(val, msg) {
  var input = document.createElement('input')
  input.value = val
  document.getElementById('app').appendChild(input).setAttribute('readOnly', 'true')
  input.select()
  toast(msg, 2000)
  input.setSelectionRange(0, input.value.length)
  document.execCommand('Copy')
  document.getElementById('app').removeChild(input)
}

/**
 *
 *深拷贝
 * @export
 * @param {*} source // 拷贝的对象
 * @returns
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 *
 *判断某个js是否加载过
 * @export
 */
export function isJSFile(name) {
  var js = /$/i.test(name) // 正则表达式查找页面是否有js
  var es = document.getElementsByTagName(js ? 'script' : 'link') // 如果有js，页面查找script
  // eslint-disable-next-line
  for (let i = 0; i < es.length; i++)
    if (es[i][js ? 'src' : 'href'].indexOf(name) !== -1) {
      return true
    }
  return false
}

/**
 *
 * 获取一个时间戳
 * @export
 * @returns
 */
export function getTime() {
  return new Date().getTime()
}

/**
 *
 *订单签名封装方法
 * @export
 * @param {*} params
 * @returns
 */
export function signSplice(params, game_id) {
  const ARR = Object.keys(params).sort().reverse()
  let signs = ''
  ARR.forEach((item) => {
    if (typeof params[item] === 'number') params[item] = params[item].toString()
    if (params[item] !== '' && item !== 'extend_data' && (typeof params[item] === 'string')) {
      params[item] = params[item].replace(/\s*/g, '')
      signs += `${item}=${params[item]}&`
    }
  })
  return MD5(encodeURIComponent(`${signs}game_id=${game_id}`))
}

/**
 *
 *提取富文本中的文字
 * @export
 * @param {*} data
 */
export function extractText(data) {
  const reg = new RegExp(/&nbsp;/ig, '')
  const reg1 = new RegExp('<.+?>', 'g')
  const new_data = data.replace(reg, '')
  return new_data.replace(reg1, '')
}

/**
 *
 *提取富文本中的image
 * @export
 * @param {*} data
 */
export function extractImage(data) {
  const arr = []
  data.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
    if (!(capture.indexOf('tinymce') !== -1) && !(capture.indexOf('emoticons') !== -1)) { // 过滤富文本表情图片
      arr.push(capture)
    }
  })
  return arr
}

/**
 *
 *支付状态请求
 * @export
 * @param {boolean} status 是否开启倒计时
 * @param {string} uname 挂载方法名称
 * @param {function} suss 正在倒计时
 * @param {function} oksuss 倒计时结束
 * @returns
 */
export function payInterval(status, uname, suss, oksuss) {
  const name = 'timing' + uname
  if (status) {
    let count = 40
    window[name] = window.setInterval(function() {
      if (count > 0) {
        count--
        const msg = count
        suss && suss(msg)
      } else {
        oksuss && oksuss(true)
        window.clearInterval(window[name])
      }
    }, 3000)
  } else {
    if (window[name] === undefined || window[name] === 'undefined') {
      return false
    }
    window.clearInterval(window[name])
  }
}

/**
 *
 *日期处理
 * @export
 * @param {*} date
 * @returns
 */
export function beautify_time(date) {
  date = date.replace(/\-/g, '/')
  date = new Date(date).getTime() / 1000
  var mistiming = Math.round(new Date() / 1000) - date
  var postfix = mistiming > 0 ? '前' : '后'
  mistiming = Math.abs(mistiming)
  var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒']
  var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1]

  for (var i = 0; i < 7; i++) {
    var inm = Math.floor(mistiming / arrn[i])
    if (inm !== 0) {
      return inm + arrr[i] + postfix
    }
  }
}

/**
 *
 *简版日期处理
 * @export
 * @param {*} date 日期格式
 * @returns
 */
export function timeFormat(date) {
  date = date.replace(/\-/g, '/')
  date = new Date(date).getTime() / 1000
  var mistiming = Math.round(new Date() / 1000) - date
  var arrr = ['年前', '月前', '周前', '天前', '今天内']
  var arrn = [31536000, 2592000, 604800, 86400, 3600]
  for (var i = 0; i < arrn.length; i++) {
    var inm = Math.floor(mistiming / arrn[i])
    if (inm !== 0) {
      if (i === 4) return arrr[i]
      return inm + arrr[i]
    }
  }
}

// /**
//  *
//  * 截屏, 截取指定DOM下内容
//  * @export
//  * @param {*} el
//  * @param {*} imgName
//  */
// export function screenCapture(el, imgName) {
//   if (!imgName) imgName = '截屏'
//   return new Promise((res, rej) => {
//     html2canvas(el).then(canvas => {
//       const imgUrl = canvas.toDataURL()
//       imgDownload(imgUrl, imgName)
//       res(imgUrl)
//     })
//   })
// }

// /**
//  *
//  * 下载保存图片至本地
//  * @export
//  * @param {*} imgUrl
//  * @param {*} imgName
//  */
// export function imgDownload(imgUrl, imgName) {
//   var aEl = document.createElement('a')
//   aEl.style.display = 'none'
//   aEl.href = imgUrl
//   aEl.download = `${imgName}.jpg`
//   document.body.appendChild(aEl)
//   var e = document.createEvent('MouseEvents')
//   e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
//   aEl.dispatchEvent(e)
//   // aEl.click()
//   document.body.removeChild(aEl)
// }
