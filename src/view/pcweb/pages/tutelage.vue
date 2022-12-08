<template>
  <div class="tutelage">
    <tabbar />
  </div>
</template>

<script>
import tabbar from '../components/tutelage/tabbar.vue'
import { toastLoading } from '@/utils/toast'

export default {
  components: {
    tabbar
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    toastLoading
  }
}
</script>

<style lang="less" scoped>
@import url(../../public/assets/css/mixins.less);
@import url(../assets/css/variable.less);

.tutelage {
  width: @mini_width;
  margin: auto;
  padding-top: @topNavHeight;
}
</style>
