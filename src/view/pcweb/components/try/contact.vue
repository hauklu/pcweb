<template>
  <div class="home-introduction">
    <contact />
  </div>
</template>

<script>
import contact from '../../components/channel/contact'
export default {
  components: {
    contact
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import '~@/view/public/assets/css/mixins.less';
@import '~@/view/pcweb/assets/css/variable.less';

.home-introduction {
}
</style>
