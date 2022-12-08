const manageFiles = require.context('.', false, /\.js$/)
// console.log(manageFiles.keys()) // ['./xxx.js'] 返回一个数组，包含全部文件名
let configRouters = []
manageFiles.keys().forEach(key => {
  if (key === './index.js') return // 如果是当前文件，跳过当前文件
  configRouters = configRouters.concat(manageFiles(key).default) // 读取出文件中的default模块
})
// console.log(configRouters)
export default configRouters // 抛出一个 Vue-router 期待的结构的数组
