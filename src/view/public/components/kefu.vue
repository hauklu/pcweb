<template>
  <div
    :id="kefu.id"
    class="kefu"
  >
    <slot />
  </div>
</template>

<script>
import { loadjscssfile, removejscssfile } from '@/utils/index'

export default {
  data() {
    return {
      kefu: {
        id: 'kefu1',
        qq: '800868861',
        url: this.$deploy.kefu_url
      }
    }
  },
  computed: {
    filter_data() {
      return this.data.filter(item => item.state)
    }
  },
  beforeDestroy() {
    this.removeFile()
  },
  mounted() {
    // console.log(this.$deploy.kefu_url)
    this.loadFile()
  },
  methods: {
    // 加载JS
    loadFile() {
      loadjscssfile(this.kefu.url, 'js')
    },
    // 销毁JS
    removeFile() {
      removejscssfile(this.kefu.url, 'js')
      if (!(window.LBF)) return false
      window.LBF.define('wpa.util.log', function() {
        return false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.kefu {
}
</style>
