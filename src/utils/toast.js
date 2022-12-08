import {
  Toast
} from 'vant'
Toast.allowMultiple() // 支持同时存在多个toast

/**
 *
 *
 * @export
 * @param {string} text //提示内容 '成功'
 * @param {number} time //时长 默认1000
 */
export function toast(text, time) {
  Toast({
    message: text,
    duration: time || 1000
  })
}
/**
 *
 *
 * @export
 * @param {boolean} status 是否开启 true/false
 * @param {string} typename //变量名 'loading'
 * @param {string} text // 提示内容 '登陆中'
 * @param {number} time // 时间 毫秒
 */
export function toastLoading(status, typename, text, time) {
  var name = 'load' + typename
  if (status) { // 添加loding
    window[name] = Toast.loading({
      overlay: true,
      message: text,
      duration: time === 0 || time !== null ? time : 1000
    })
  } else { // 移除loading
    window[name].clear()
  }
}

/**
 *
 *
 * @export
 * @param {string} site //位置 top/bottom
 * @param {string} text //提示内容 '成功'
 * @param {number} time //时长 默认1000
 */
export function siteToast(site, text, time) {
  Toast({
    message: text,
    position: site,
    duration: time || 1000
  })
}
