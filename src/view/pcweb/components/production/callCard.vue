<template>
  <div class="solution">
    <banner />
    <question />
    <advantage />
    <solution />
    <partner />
  </div>
</template>

<script>
import banner from './callCard/banner.vue'
import question from './callCard/question'
import advantage from './callCard/advantage'
import solution from '@/view/pcweb/components/production/callCard/solution'
import partner from '@/view/pcweb/components/home/partner'
import { toast, toastLoading } from '@/utils/toast'
export default {
  components: {
    banner,
    question,
    advantage,
    solution,
    partner
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
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

.solution {
  width: 100%;
}
</style>
