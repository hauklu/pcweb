// import * as types from './q' // 命名

export default {
  LOGIN_VIEW(state, data) { // 账号登录组件状态
    state.loginView = data
  },
  LOGIN_TEL_VIEW(state, data) { // 手机登录组件状态
    state.loginTelView = data
  },
  AGREEMENT_DATA(state, data) { // 用户(隐私)协议组件数据
    state.agreement_data = data
  },
  CHANNEL_DATA(state, data) { // 渠道参数
    state.channel_data = data
  },
  USER_INFO(state, data) { // 用户信息
    state.userInfo = data
  },
  UN_O_HEADERS_IO(state, data) { // 请求headers头信息
    state._un_o_headers_io_ = data
  },
  CLIENT_HEIGHT(state, data) { // 窗口高度
    state.client_height = data
  },
  CLIENT_WIDTH(state, data) { // 窗口宽度
    state.client_width = data
  }
}
