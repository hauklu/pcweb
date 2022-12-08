/*
 * @Description: 设备信息获取
 * @Author: 9w
 * @Date: 2019-08-09 10:22:39
 * @LastEditTime: 2019-08-12 18:13:10
 * @LastEditors: Please set LastEditors
 */

var root = typeof self !== 'undefined' ? self : this
var _window = root || {}
// 变量库
var VariableLibrary = {
  // eslint-disable-next-line
  navigator: typeof root.navigator != 'undefined' ? root.navigator : {},
  // 信息map
  infoMap: {
    engine: ['WebKit', 'Trident', 'Gecko', 'Presto'],
    browser: ['Safari', 'Chrome', 'Edge', 'IE', 'Firefox', 'Firefox Focus', 'Chromium', 'Opera', 'Vivaldi', 'Yandex', 'Arora', 'Lunascape', 'QupZilla', 'Coc Coc', 'Kindle', 'Iceweasel', 'Konqueror', 'Iceape', 'SeaMonkey', 'Epiphany', '360', '360SE', '360EE', 'UC', 'QQBrowser', 'QQ', 'Baidu', 'Maxthon', 'Sogou', 'LBBROWSER', '2345Explorer', 'TheWorld', 'XiaoMi', 'Quark', 'Qiyu', 'Wechat', 'WechatWork', 'Taobao', 'Alipay', 'Weibo', 'Douban', 'Suning', 'iQiYi'],
    os: ['Windows', 'Linux', 'Mac OS', 'Android', 'Ubuntu', 'FreeBSD', 'Debian', 'iOS', 'Windows Phone', 'BlackBerry', 'MeeGo', 'Symbian', 'Chrome OS', 'WebOS'],
    device: ['Mobile', 'Tablet', 'iPad']
  }
}
// 方法库
var MethodLibrary = (function() {
  return {
    // 生成UUID通用唯一标识码
    createUUID: function() {
      var result = []
      var hexDigits = '0123456789abcdef'
      for (var i = 0; i < 36; i++) {
        result[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
      }
      // bits 12-15 of the time_hi_and_version field to 0010
      result[14] = '4'
      // bits 6-7 of the clock_seq_hi_and_reserved to 01
      result[19] = hexDigits.substr((result[19] & 0x3) | 0x8, 1)
      result[8] = result[13] = result[18] = result[23] = '-'
      return result.join('')
    },
    // 获取匹配库
    getMatchMap: function(u) {
      return {
        // 内核
        'Trident': u.indexOf('Trident') > -1 || u.indexOf('NET CLR') > -1,
        'Presto': u.indexOf('Presto') > -1,
        'WebKit': u.indexOf('AppleWebKit') > -1,
        'Gecko': u.indexOf('Gecko/') > -1,
        // 浏览器
        'Safari': u.indexOf('Safari') > -1,
        'Chrome': u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
        'IE': u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
        'Edge': u.indexOf('Edge') > -1,
        'Firefox': u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
        'Firefox Focus': u.indexOf('Focus') > -1,
        'Chromium': u.indexOf('Chromium') > -1,
        'Opera': u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1,
        'Vivaldi': u.indexOf('Vivaldi') > -1,
        'Yandex': u.indexOf('YaBrowser') > -1,
        'Arora': u.indexOf('Arora') > -1,
        'Lunascape': u.indexOf('Lunascape') > -1,
        'QupZilla': u.indexOf('QupZilla') > -1,
        'Coc Coc': u.indexOf('coc_coc_browser') > -1,
        'Kindle': u.indexOf('Kindle') > -1 || u.indexOf('Silk/') > -1,
        'Iceweasel': u.indexOf('Iceweasel') > -1,
        'Konqueror': u.indexOf('Konqueror') > -1,
        'Iceape': u.indexOf('Iceape') > -1,
        'SeaMonkey': u.indexOf('SeaMonkey') > -1,
        'Epiphany': u.indexOf('Epiphany') > -1,
        '360': u.indexOf('QihooBrowser') > -1 || u.indexOf('QHBrowser') > -1,
        '360EE': u.indexOf('360EE') > -1,
        '360SE': u.indexOf('360SE') > -1,
        'UC': u.indexOf('UC') > -1 || u.indexOf(' UBrowser') > -1,
        'QQBrowser': u.indexOf('QQBrowser') > -1,
        'QQ': u.indexOf('QQ/') > -1,
        'Baidu': u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1,
        'Maxthon': u.indexOf('Maxthon') > -1,
        'Sogou': u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1,
        'LBBROWSER': u.indexOf('LBBROWSER') > -1,
        '2345Explorer': u.indexOf('2345Explorer') > -1,
        'TheWorld': u.indexOf('TheWorld') > -1,
        'XiaoMi': u.indexOf('MiuiBrowser') > -1,
        'Quark': u.indexOf('Quark') > -1,
        'Qiyu': u.indexOf('Qiyu') > -1,
        'Wechat': u.indexOf('MicroMessenger') > -1,
        'WechatWork': u.indexOf('wxwork/') > -1,
        'Taobao': u.indexOf('AliApp(TB') > -1,
        'Alipay': u.indexOf('AliApp(AP') > -1,
        'Weibo': u.indexOf('Weibo') > -1,
        'Douban': u.indexOf('com.douban.frodo') > -1,
        'Suning': u.indexOf('SNEBUY-APP') > -1,
        'iQiYi': u.indexOf('IqiyiApp') > -1,
        // 系统或平台
        'Windows': u.indexOf('Windows') > -1,
        'Linux': u.indexOf('Linux') > -1 || u.indexOf('X11') > -1,
        'Mac OS': u.indexOf('Macintosh') > -1,
        'Android': u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
        'Ubuntu': u.indexOf('Ubuntu') > -1,
        'FreeBSD': u.indexOf('FreeBSD') > -1,
        'Debian': u.indexOf('Debian') > -1,
        'Windows Phone': u.indexOf('IEMobile') > -1 || u.indexOf('Windows Phone') > -1,
        'BlackBerry': u.indexOf('BlackBerry') > -1 || u.indexOf('RIM') > -1,
        'MeeGo': u.indexOf('MeeGo') > -1,
        'Symbian': u.indexOf('Symbian') > -1,
        'iOS': u.indexOf('like Mac OS X') > -1,
        'Chrome OS': u.indexOf('CrOS') > -1,
        'WebOS': u.indexOf('hpwOS') > -1,
        // 设备
        'Mobile': u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1,
        'Tablet': u.indexOf('Tablet') > -1 || u.indexOf('Nexus 7') > -1,
        'iPad': u.indexOf('iPad') > -1
      }
    },
    // 在信息map和匹配库中进行匹配
    matchInfoMap: function(_this) {
      var u = VariableLibrary.navigator.userAgent || {}
      var match = MethodLibrary.getMatchMap(u)
      for (var s in VariableLibrary.infoMap) {
        for (var i = 0; i < VariableLibrary.infoMap[s].length; i++) {
          var value = VariableLibrary.infoMap[s][i]
          if (match[value]) {
            _this[s] = value
          }
        }
      }
    },
    // 获取当前操作系统
    getOS: function() {
      var _this = this
      MethodLibrary.matchInfoMap(_this)
      return _this.os
    },
    // 获取操作系统版本
    getOSVersion: function() {
      var _this = this
      var u = VariableLibrary.navigator.userAgent || {}
      _this.osVersion = ''
      // 系统版本信息
      var osVersion = {
        'Windows': function() {
          var v = u.replace(/^.*Windows NT ([\d.]+);.*$/, '$1')
          var oldWindowsVersionMap = {
            '6.4': '10',
            '6.3': '8.1',
            '6.2': '8',
            '6.1': '7',
            '6.0': 'Vista',
            '5.2': 'XP',
            '5.1': 'XP',
            '5.0': '2000'
          }
          return oldWindowsVersionMap[v] || v
        },
        'Android': function() {
          return u.replace(/^.*Android ([\d.]+);.*$/, '$1')
        },
        'iOS': function() {
          return u.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.')
        },
        'Debian': function() {
          return u.replace(/^.*Debian\/([\d.]+).*$/, '$1')
        },
        'Windows Phone': function() {
          return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2')
        },
        'Mac OS': function() {
          return u.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.')
        },
        'WebOS': function() {
          return u.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1')
        }
      }
      if (osVersion[_this.os]) {
        _this.osVersion = osVersion[_this.os]()
        // eslint-disable-next-line
        if (_this.osVersion == u) {
          _this.osVersion = ''
        }
      }
      return _this.osVersion
    },
    // 获取横竖屏状态
    getOrientationStatu: function() {
      var orientationStatus = ''
      if (window && window.matchMedia) {
        var orientation = window.matchMedia('(orientation: portrait)')
        if (orientation.matches) {
          orientationStatus = 'S'
        } else {
          orientationStatus = 'H'
        }
      }
      return orientationStatus
    },
    // 获取设备类型
    getDeviceType: function() {
      var _this = this
      _this.device = 'PC'
      MethodLibrary.matchInfoMap(_this)
      return _this.device
    },
    // 获取网络状态
    getNetwork: function() {
      var netWork = navigator && navigator.connection && navigator.connection.effectiveType
      return netWork
    },
    // 获取当前语言
    getLanguage: function() {
      var _this = this
      _this.language = (function() {
        var language = (VariableLibrary.navigator.browserLanguage || VariableLibrary.navigator.language)
        var arr = language.split('-')
        if (arr[1]) {
          arr[1] = arr[1].toUpperCase()
        }
        return arr.join('_')
      })()
      return _this.language
    }
  }
})()

module.exports = {
  deviceType: MethodLibrary.getDeviceType(), // 设备类型
  OS: MethodLibrary.getOS(), // 操作系统
  OSVersion: MethodLibrary.getOSVersion(), // 操作系统版本
  screenHeight: _window.screen.height, // 屏幕高
  screenWidth: _window.screen.width, // 屏幕宽
  language: MethodLibrary.getLanguage(), // 当前使用的语言-国家
  netWork: MethodLibrary.getNetwork(), // 联网类型
  orientation: MethodLibrary.getOrientationStatu(), // 横竖屏
  userAgent: VariableLibrary.navigator.userAgent, // 包含 appCodeName,appName,
  UUID: MethodLibrary.createUUID() // 生成通用唯一标识
}
