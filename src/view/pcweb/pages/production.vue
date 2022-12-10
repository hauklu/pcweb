<template>
  <div class="solution">
    <router-view />
    <!-- <banner />
    <production />
    <scheme />
    <advantage />
    <scene /> -->
    <!-- <partner /> -->
  </div>
</template>

<script>
import banner from '../components/production/banner'
import production from '../components/home/production'
import scheme from '../components/home/scheme.vue'
import advantage from '../components/home/advantage'
import scene from '../components/home/scene'
import partner from '../components/home/partner'
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
@import url(../../public/assets/css/mixins.less);
@import url(../assets/css/variable.less);

.solution {
  width: 100%;
}
</style>
