<template>
  <div class="solution">
    <banner />
    <solution />
    <scene />
    <advantage />
    <partner />
  </div>
</template>

<script>
import banner from '../components/solution/banner'
import solution from '../components/solution/solution'
import advantage from '../components/solution/advantage'
import scene from '@/view/pcweb/components/home/scene'
import partner from '@/view/pcweb/components/home/partner'
import { toast, toastLoading } from '@/utils/toast'
export default {
  components: {
    banner,
    solution,
    advantage,
    scene,
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
@import url(../../public/assets/css/mixins.less);
@import url(../assets/css/variable.less);

.solution {
  width: 100%;
}
</style>
