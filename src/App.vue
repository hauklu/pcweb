<template>
  <div id="app">
    <keep-alive>
      <router-view
        v-if="$route.meta.keepAlive"
        datas="404"
      />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
// import './assets/js/flexible.js'
// smoothscroll start
import smoothscroll from '@/assets/js/smoothscroll.js'
smoothscroll.polyfill()
// smoothscroll end

export default {
  name: 'App'
}

</script>

<style lang="less">
@import url('./assets/css/flexible.less');
@import url('./view/pcweb/assets/css/publice.less');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}
</style>
