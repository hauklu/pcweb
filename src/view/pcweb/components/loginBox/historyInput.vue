<template>
  <div class="history-box__wrap">
    <div
      ref="historyBox"
      :class="visible ? 'history-box': ''"
      class="history-box_"
    >
      <div v-if="type === 'account' || type === 'tel'">
        <div v-if="arr.length > 0">
          <div
            v-for="(i,idx) of arr"
            :key="idx"
            class="text btn-click single-line-show"
            @click="selectHisItem(i)"
          >{{ i }}</div>
        </div>
        <div
          v-else
          class="no-data"
        >无记录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLoginUser } from '@/utils/index'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'account'
    },
    // input输入框传来的value值
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // 搜索结果的数组
      arr: []
    }
  },
  watch: {
    value(newVal) {
      this.searchArr(newVal, this.type)
    }
  },
  mounted() {
    this.searchArr('', this.type)
  },
  methods: {
    // 输入时搜索筛选出新的数组结果, val-需匹配的值, type-类型
    searchArr(val, type) {
      this.arr = []
      const arr_origin = getLoginUser() || []
      for (let i = 0; i < arr_origin.length; i++) {
        const item = arr_origin[i][type]
        if (item.indexOf(val) !== -1 && item !== '') {
          this.arr.push(item)
        }
      }
    },
    // 选中单个记录文本
    selectHisItem(text) {
      this.$emit('change', text)
      this.close()
    },
    // 关闭组件
    close() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("./loginBoxVariable.less");

.history-box__wrap {
  .history-box_ {
    overflow: hidden;
    position: relative;
    z-index: 99;
    width: 99.9%;
    max-height: 0;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid @pulldown_border_color;
    border-top: none;
    border-bottom: none;
    border-radius: 0 0 @pulldown_border_radius @pulldown_border_radius;
    opacity: 0.9;
    background-color: @pulldown_bg_color;
    text-align: left;
    font-size: 0;
  }

  .history-box {
    min-height: @pulldown_item_height;
    max-height: @pulldown_item_height * @pulldown_item_number;
    border: 1px solid border_color;
    border-top: none;
    transition: all 0.25s linear;
    overflow-y: scroll;

    .text {
      position: relative;
      height: @pulldown_item_height;
      line-height: @pulldown_item_height;
      padding: 0 @pulldown_item_padding;
      box-sizing: border-box;
      border-bottom: 1px solid @pulldown_item_bottom_color;
      font-size: @pulldown_item_fontsize;
      color: @pulldown_item_color;

      &:last-child {
        border-bottom: none;
      }
    }

    .no-data {
      line-height: @pulldown_item_height;
      padding: 0 @pulldown_item_padding;
      font-size: @pulldown_item_fontsize;
    }
  }
}
</style>
