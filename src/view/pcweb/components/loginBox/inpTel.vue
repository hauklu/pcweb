<template>
  <div>
    <div
      class="input"
      @click="stopPropagation"
    >
      <div class="left">
        <van-icon
          name="phone-o"
          class="icon"
        />
        <input
          ref="input"
          v-model="tel"
          type="text"
          placeholder="请输入手机号"
          @focus="closeHistoryInputTel"
        >
      </div>
      <div class="right">
        <van-icon
          :class="{'icon-arrow_': historyVisible}"
          name="play"
          class="icon icon-arrow"
          @click="switchHistoryInputTel"
        />
      </div>
      <div class="history-input">
        <historyInput
          :type="'tel'"
          :visible.sync="historyVisible"
          :value="tel"
          @change="historyInputChangeTel"
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
      // 用户信息
      tel: this.value,
      // 历史记录组件显示状态
      historyVisible: false
    }
  },
  watch: {
    // 监听父组件传递的inp的value值
    value(newVal) {
      this.tel = newVal
    },
    // 监听当前组件inp的输入值
    tel(newVal) {
      this.$emit('input', newVal)
    }
  },
  mounted() {
    // 添加click监听
    document.addEventListener('click', this.hisinpCloseUnfocus)
  },
  beforeDestory() {
    // 移除click监听
    document.removeEventListener('click', this.hisinpCloseUnfocus)
  },
  methods: {
    // historyInput组件失焦时触发-关闭组件
    hisinpCloseUnfocus() {
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
    switchHistoryInputTel() {
      this.historyVisible = !this.historyVisible
      if (this.historyVisible) this.$refs['input'].focus()
    },
    // 聚焦inp-打开历史组件
    closeHistoryInputTel() {
      this.historyVisible = true
    },
    // 接收历史组件单行item-给当前inp赋值
    historyInputChangeTel(text) {
      this.tel = text
    }
  }
}
</script>

<style lang="less" scoped>
@import url("./loginBoxInput.less");
</style>
