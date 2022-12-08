<template>
  <div>
    <div class="input">
      <div class="left">
        <van-icon
          name="bag-o"
          class="icon"
        />
        <input
          :value="value"
          :type="iconEyeStatus ? 'text':'password'"
          placeholder="请输入密码"
          @input="$emit('input', $event.target.value)"
        >
      </div>
      <div class="right">
        <van-icon
          :name="iconEyeStatus ? 'eye-o':'closed-eye'"
          class="icon icon-eye"
          @click="switchPass"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // 显示密码图标状态
      iconEyeStatus: false
    }
  },
  methods: {
    switchPass() {
      this.iconEyeStatus = !this.iconEyeStatus
    }
  }
}
</script>

<style lang="less" scoped>
@import url("./loginBoxInput.less");
</style>
