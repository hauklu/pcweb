<template>
  <transition>
    <slot />
  </transition>
</template>

<script>
export default {
  mounted() { }
}
</script>

<style lang="less" scoped>
.v-leave-active,
.v-enter-active {
  transition-property: opacity, transform;
  transition-duration: 0.3s;
}

.v-leave-to,
.v-enter {
  opacity: 0;
  transform: translateY(-1rem);
}
</style>
