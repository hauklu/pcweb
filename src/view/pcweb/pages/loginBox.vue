<template>
  <pb-overlay
    class="login"
    @close="close"
  >
    <pb-dialog
      :title="'账号登录'"
      class="login-box"
    >
      <div class="line-top" />
      <div class="login-box-input">
        <!-- 账号 -->
        <div
          v-if="visi.account"
          class="input-box-item"
        >
          <inp-account v-model="user.account" />
        </div>
        <!-- 密码 -->
        <div
          v-if="visi.password"
          class="input-box-item"
        >
          <inp-password v-model="user.password" />
        </div>
        <!-- 手机号 -->
        <div
          v-if="visi.tel"
          class="input-box-item"
        >
          <inp-tel v-model="user.tel" />
        </div>
        <!-- 验证码 -->
        <div
          v-if="visi.code"
          class="input-box-item"
        >
          <inp-code v-model="user.code" />
        </div>
      </div>
      <button
        class="login-box-btnsubmit btn-click"
        @click="submit"
      >登录</button>
      <div class="line-bottom" />
      <div class="login-box-agreementhint">
        <agreement-hint @switch="switchAgreement" />
      </div>
    </pb-dialog>
    <transition name="agreement">
      <agreement
        v-if="agreement.visi"
        :type="agreement.type"
        @switch="switchAgreement"
      />
    </transition>
  </pb-overlay>
</template>

<script>
import inpCode from '../components/loginBox/inpCode'
import inpTel from '../components/loginBox/inpTel'
import inpPassword from '../components/loginBox/inpPassword'
import inpAccount from '../components/loginBox/inpAccount'
import agreementHint from '../components/loginBox/agreementHint'
import agreement from '../components/loginBox/agreement'
import { setLoginUser } from '@/utils/index'
import { toast, toastLoading } from '@/utils/toast'
// import { login } from '../assets/js/api'

export default {
  components: {
    agreementHint,
    agreement,
    inpCode,
    inpTel,
    inpPassword,
    inpAccount
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // input组件状态
      visi: {
        account: true, // 账号组件
        password: true, // 密码组件
        tel: false, // 手机号组件
        code: false // 验证码组件
      },
      // 用户信息
      user: {
        account: '',
        password: '',
        tel: '',
        code: ''
      },
      // 用户/隐私协议组件数据
      agreement: {
        visi: false,
        type: undefined
      },
      // 记住密码功能
      remberPassStatus: false
    }
  },
  methods: {
    // 存储用户登录记录
    setUserLoginRecord() {
      this.remberPassStatus ? setLoginUser(this.user.tel, this.user.account, this.user.password) : setLoginUser(this.user.tel, this.user.account, '')
    },
    // // 登录按钮
    // async submit() {
    //   try {
    //     toastLoading(true, 'loginUserLoading', '登录中···')
    //     const res = await login({
    //       username: this.user.account,
    //       password: this.user.password
    //     })
    //     this.setUserLoginRecord()
    //     this.$emit('sucess', res)
    //     toastLoading(false, 'loginUserLoading')
    //   } catch (error) {
    //     toastLoading(false, 'loginUserLoading')
    //     console.log(error)
    //   }
    // },
    // 关闭组件
    close() {
      this.$cstore.commit('LOGIN_VIEW', false)
      // this.$emit('update:visible', false)
    },
    // 切换用户/隐私协议组件
    switchAgreement(status, type) {
      this.agreement.visi = status
      this.agreement.type = (status ? type : undefined)
    },
    toastLoading,
    toast
  }
}
</script>

<style lang="less" scoped>
@import url("../components/loginBox/loginBoxVariable.less");

.login {
  .login-box {
    width: @box_width;
    // height: @box_height;
    padding: 0 0 0.5rem;
    border-radius: @box_border_radius;
    // box-shadow: @box_shadow;
    .box_color_bg();

    & /deep/ .dialog-header {
      .icon-close {
        color: @icon_close_color;

        &:active {
          color: @icon_close_color__act;
        }
      }

      .title {
        height: @title_height;
        line-height: @title_height;
        color: @title_color;
        font-size: @title_fontsize;
      }
    }

    .line-bottom,
    .line-top {
      @title_bottom_color: #a09f9f; // 标题底部线背景色
      height: 1px;
      background-color: @title_bottom_color;
    }

    .line-bottom {
      margin-top: 0.5rem;
    }

    .login-box-input {
      margin-top: 0.7rem;

      .input-box-item {
        margin-bottom: @input_marginbottom;
      }

      &:first-child {
        margin-bottom: 0;
      }
    }

    .login-box-btnsubmit {
      position: relative;
      display: block;
      width: @input_width;
      height: @btn_height;
      color: @btn_color;
      font-size: @btn_fontsize;
      margin: @btn_margintop auto 0;
      border: none;
      border-radius: @btn_border_radius;
      // background-color: @btn_color_bg;
      .btn_color_bg();
    }

    .login-box-agreementhint {
      margin-top: @agreehint_margintop;
    }
  }

  .agreement-leave-active,
  .agreement-enter-active {
    transition-property: opacity, transform;
    transition-duration: 0.3s;
    transition-timing-function: linear;
  }

  .agreement-leave-to,
  .agreement-enter {
    opacity: 0;
    transform: translateX(-50%);
  }
}
</style>
