import { delCookie } from '@/utils'
// import { get_server_list, get_role_bind } from '@/view/pcweb/assets/js/api'
// import { toastLoading } from '@/utils/toast'

export default {
  // 清除用户登录信息
  async fedLogout({ commit }) {
    await delCookie('_un_o_tk_')
  }
}
