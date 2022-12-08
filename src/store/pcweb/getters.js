export default {
  loginView: state => state.loginView, // 账号登录组件
  loginTelView: state => state.loginTelView, // 手机登录组件
  agreement_data: state => state.agreement_data, // 用户(隐私)协议组件数据
  channel_data: state => state.channel_data, // 渠道参数
  userInfo: state => state.userInfo, // 用户信息
  _un_o_headers_io_: state => state._un_o_headers_io_, // 请求headers头信息
  client_height: state => state.client_height, // 窗口高度
  client_width: state => state.client_width // 窗口宽度
}
