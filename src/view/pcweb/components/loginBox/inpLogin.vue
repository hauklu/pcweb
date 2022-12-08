<template>
  <div>
    <div v-if="type === 'account'">
      <inp-account v-model="inpVal" />
    </div>
    <div v-if="type === 'password'">
      <inp-password v-model="inpVal" />
    </div>
    <div v-if="type === 'tel'">
      <inp-tel v-model="inpVal" />
    </div>
    <div v-if="type === 'code'">
      <inp-code v-model="inpVal" />
    </div>
  </div>
</template>

<script>
import inpCode from './inpCode'
import inpTel from './inpTel'
import inpPassword from './inpPassword'
import inpAccount from './inpAccount'

export default {
  components: {
    inpAccount,
    inpPassword,
    inpTel,
    inpCode
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'account'
    }
  },
  data() {
    return {
      // 用户信息
      user: {
        account: '',
        password: '',
        tel: '',
        code: ''
      },
      inpVal: ''
    }
  },
  watch: {
    // v-model="inpVal" 绑定组件相当于在组件上添加:
    // 1.:value="inpVal";
    // 2.@input="(newval) => {this.inVal = newval}"
    // 监测父组件改变 -> inpVal -> 子组件
    value(newVal) {
      this.inpVal = newVal
    },
    // 监测子组件改变 -> inpVal -> 父组件
    inpVal(newVal) {
      this.$emit('input', newVal)
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import url("./loginBoxInput.less");
</style>
