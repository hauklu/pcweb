<template>
  <div class="float-right">
    <ul class="list">
      <li
        v-for="(item, idx) of list"
        :key="idx"
        class="list-item hover"
        @click="clickListItem(item, idx)"
      >
        <img
          :src="item.icon"
          class="icon"
        >
        <span class="title">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { toast } from '@/utils/toast'
export default {
  components: {
  },
  data() {
    return {
      list: [{
        icon: require('@img/call/Vector.png'),
        title: '免费试用'
      }, {
        icon: require('@img/call/Vector-1.png'),
        title: '电话咨询'
      }, {
        icon: require('@img/call/Vector-2.png'),
        title: '在线咨询'
      }, {
        icon: require('@img/call/Vector-3.png'),
        title: '微信咨询'
      }, {
        icon: require('@img/call/Vector-4.png'),
        title: '企微好友'
      }, {
        icon: require('@img/call/Vector-5.png'),
        title: '返回顶部'
      }]
    }
  },
  mounted() {
  },
  methods: {
    clickListItem(item, idx) {
      if (item.title === '返回顶部') {
        this.clickFloatTop()
      }
    },
    clickFloatTop() {
      window.scrollTo({
        top: 0
      })
      toast('回到顶部', 300)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/view/public/assets/css/mixins.less';
@import '~@/view/pcweb/assets/css/variable.less';

.float-right {
  position: absolute;
  right: 0;
  top: 80px;

  .list {
    .list-item {
      width: 56px;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #58a4ff;
      border-bottom: 1px solid #fff;
      .icon {
        width: 17px;
        height: 17px;
      }

      .title {
        margin-top: 5px;
        font-size: 10px;
        font-weight: 500;
        color: #ffffff;
        line-height: 12px;
      }
    }
  }
}
</style>
