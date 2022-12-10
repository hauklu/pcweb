<template>
  <div class="pcweb-index">
    <top-nav />
    <router-view />
    <foot />
  </div>
</template>

<script>
import foot from './components/common/footer.vue'
import topNav from './components/common/topNav.vue'

// 公共组件
import Vue from 'vue'
import { pbOverlay, pbDialog, pbTransition } from '@/utils/publicComponents.js'
Vue.use(pbOverlay).use(pbDialog).use(pbTransition)
Vue.prototype.$static = require('./assets/js/img.js')

export default {
  components: {
    topNav,
    foot
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less">
@import url('./assets/css/variable.less');
.pcweb-index {
  position: relative;
  width: 100%;
  // max-width: @max_width;
  min-width: @mini_width;
  // margin: auto;
  background: #fff;
}
</style>
