<template>
  <div class="solution">
    <banner />
    scrm
    <production />
    <scheme />
    <advantage />
    <scene />
    <partner />
  </div>
</template>

<script>
import banner from './banner'
import production from '../home/production'
import scheme from '../home/scheme.vue'
import advantage from '../home/advantage'
import scene from '../home/scene'
import partner from '../home/partner'
import { toast, toastLoading } from '@/utils/toast'
export default {
  components: {
    banner,
    production,
    scheme,
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
@import url(../../../public/assets/css/mixins.less);
@import url(../../assets/css/variable.less);

.solution {
  width: 100%;
}
</style>
