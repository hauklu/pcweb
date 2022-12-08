<template>
  <div>
    <div class="input">
      <div class="left">
        <van-icon
          name="bag-o"
          class="icon"
        />
        <input
          v-model="code"
          type="text"
          placeholder="请输入验证码"
          class="input-code"
        >
      </div>
      <div class="right">
        <div
          ref="telCode"
          class="code-btn"
          @click="getCodeStatus && getCode()"
        >获取验证码</div>
      </div>
    </div>
  </div>
</template>

<script>
import { _countdown } from '@/utils/index'
import { toast, toastLoading } from '@/utils/toast'

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // 用户信息
      code: this.value,
      // 获取验证码状态
      getCodeStatus: true
    }
  },
  watch: {
    value(newVal) {
      this.code = newVal
    },
    code(newVal) {
      this.$emit('input', newVal)
    }
  },
  methods: {
    // 获取验证码
    getCode() {
      toastLoading(true, 'getCodeLoading', '请稍后···')
      this.getCodeStatus = false
      const elTelCode = this.$refs.telCode
      toast('发送成功', 1500)
      _countdown(true, 'telLogin', (resp) => { // 倒计时中
        toastLoading(false, 'getCodeLoading')
        elTelCode.innerText = `${resp}秒后获取`
        elTelCode.classList.add('code-btn_')
      }, () => { // 倒计时完成
        elTelCode.innerText = '重新获取'
        this.getCodeStatus = true
        elTelCode.classList.remove('code-btn_')
      }, 60)
      toastLoading(false, 'getCodeLoading')
      // requestTelCode(this.user.tel).then(() => {
      //   toastLoading(true, 'getCodeLoading', '请稍后···')
      //   this.getCodeStatus = false
      //   let elTelCode = this.$refs.telCode
      //   toast('发送成功', 1500)
      //   _countdown(true, 'telLogin', (resp) => { // 倒计时中
      //     toastLoading(false, 'getCodeLoading')
      //     elTelCode.innerText = `${resp}秒后获取`
      //     elTelCode.classList.add('code-btn_')
      //   }, () => { // 倒计时完成
      //     elTelCode.innerText = '重新获取'
      //     this.getCodeStatus = true
      //     elTelCode.classList.remove('code-btn_')
      //   }, 60)
      //   toastLoading(false, 'getCodeLoading')
      // }).catch(() => {
      //   this.getCodeStatus = true
      //   console.log('getCode error')
      //   toastLoading(false, 'getCodeLoading')
      // })
    },
    toast,
    toastLoading
  }
}
</script>

<style lang="less" scoped>
@import url("./loginBoxInput.less");
</style>
