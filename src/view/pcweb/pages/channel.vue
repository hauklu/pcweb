<template>
  <div class="solution">
    <banner />
    <advantage />
    <channel />
    <contact />
  </div>
</template>

<script>
import banner from '../components/channel/banner'
import advantage from '../components/channel/advantage'
import channel from '../components/channel/channel'
import contact from '../components/channel/contact'
import { toast, toastLoading } from '@/utils/toast'
export default {
  components: {
    banner,
    advantage,
    channel,
    contact
  },
  data() {
    return {
      // 组件状态
      visi: {},
      // 子组件数据
      moduleData: undefined
    }
  },
  created() {
    // this.init()
  },
  mounted() {
  },
  methods: {
    toastLoading,
    toast
  }
}
</script>

<style lang="less" scoped>
@import url(../../public/assets/css/mixins.less);
@import url(../assets/css/variable.less);

.solution {
  width: 100%;
}
</style>
