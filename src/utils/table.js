import Vue from 'vue'
import 'vxe-table/lib/style.css'
import {
  VXETable,
  Table,
  Input,
  Select,
  List,
  Pulldown
} from 'vxe-table'

// 先安装依赖模块
// Vue.use(Icon)
Vue.use(Input)
Vue.use(Select)
Vue.use(List)
Vue.use(Pulldown)

// 再安装核心库
Vue.use(Table)

// 给 vue 实例挂载全局窗口对象，属性名称随意定义，例如：$XModal
Vue.prototype.$modal = VXETable.modal
