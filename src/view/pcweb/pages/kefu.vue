<template>
  <div class="kefu">
    <contact />
  </div>
</template>

<script>
import contact from '../components/kefu/contact.vue'
import { toastLoading } from '@/utils/toast'

export default {
  components: {
    contact
  },
  data() {
    return {
      // 导航列表
      list: [this.$static.home.banner_game_01],
      cIdx: 0
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

.kefu {
  // width: 100%;
  width: @mini_width;
  margin: auto;
  padding-top: @topNavHeight + 20px;
}
</style>
