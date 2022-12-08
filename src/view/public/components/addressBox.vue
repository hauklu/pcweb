<template>
  <div
    v-show="status"
    class="address-box-wrap"
  >
    <div
      v-if="areaList"
      class="address-box"
    >
      <van-area
        :area-list="areaList"
        title="请选择区域"
        value="110000"
        @confirm="submit"
        @cancel="close"
        @change="areaChange"
      />
    </div>
  </div>
</template>

<script>
import area from '@/view/public/assets/js/area'
import { Field, Area } from 'vant'

export default {
  components: {
    vanField: Field,
    vanArea: Area
  },
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 省市区窗口显示状态
      areaStatus: false,
      addressData: '',
      // 省市区地址测试数据
      areaList: {}
    }
  },
  created() {
    this.areaList = area
  },
  mounted() {
    this.addressData = '北京市北京市东城区'
    // this.addressData = this.areaList.province_list['110000'] + this.areaList.city_list['110100'] + this.areaList.county_list['110101']
    // console.log(this.areaList)
  },
  methods: {
    // 省市区地址数据变化时触发
    areaChange(picker, values) {
      this.addressData = values[0].name + values[1].name + values[2].name
    },
    // 处理省市区地址窗口
    submit() {
      this.$emit('change', this.addressData)
    },
    // 关闭当前窗口
    close() {
      this.$emit('change')
    }
  }
}
</script>

<style lang="less" scoped>
.address-box-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;

  .address-box {
    @width: 8.48rem;
    @height: 9rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    width: @width;
    height: @height;
    box-sizing: border-box;
    border-radius: 10px;

    & /deep/ .van-picker {
      background: #fccfaf;
      width: @width;
      height: @height;

      .van-picker__toolbar {
      }

      .van-picker__columns {
        .van-picker__mask {
          width: 0;
          height: 0;
        }
      }
    }
  }
}
</style>
