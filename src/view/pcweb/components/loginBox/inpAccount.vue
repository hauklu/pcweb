<template>
  <div>
    <div
      id="input"
      ref="input"
      class="input"
      @touchstart="stopPropagation"
    >
      <div class="left">
        <van-icon
          name="contact"
          class="icon"
        />
        <input
          ref="input"
          v-model="account"
          type="text"
          placeholder="请输入账号"
          @focus="closeHistInpAccount"
        >
      </div>
      <div class="right">
        <van-icon
          :class="historyVisible ? 'icon-arrow_':''"
          name="play"
          class="icon icon-arrow"
          @click="switchHisInpAccount"
        />
      </div>
      <div class="history-input">
        <history-input
          :type="'account'"
          :visible.sync="historyVisible"
          :value="account"
          @change="hisInpChangeAccount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import historyInput from './historyInput'

export default {
  components: {
    historyInput
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // input输入值-账号
      account: this.value,
      // 历史记录组件显示状态
      historyVisible: false
    }
  },
  watch: {
    // 监听父组件传递的inp的value值
    value(newVal) {
      this.account = newVal
    },
    // 监听当前组件inp的输入值
    account(newVal) {
      this.$emit('input', newVal)
    }
  },
  mounted() {
    document.addEventListener('touchstart', this.hlTouchstart)
  },
  beforeDestory() {
    document.removeEventListener('touchstart', this.hlTouchstart)
  },
  methods: {
    // historyInput组件失焦时触发-关闭组件
    hlTouchstart(e) {
      this.historyVisible = false
    },
    // 阻止冒泡
    stopPropagation(e) {
      if (e && e.stopPropagation) {
        e.stopPropagation()
      } else {
        window.event.cancelBubble = false
      }
    },
    // 点击icon箭头-切换历史组件-聚焦inp
    switchHisInpAccount() {
      this.historyVisible = !this.historyVisible
      if (this.historyVisible) this.$refs['input'].focus()
    },
    // 聚焦inp-打开历史组件
    closeHistInpAccount() {
      this.historyVisible = true
    },
    // 接收历史组件单行item-给当前inp赋值
    hisInpChangeAccount(text) {
      this.account = text
    }
  }
}
</script>

<style lang="less" scoped>
@import url("./loginBoxInput.less");
</style>
