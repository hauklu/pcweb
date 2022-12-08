// const deploy = require(`@/utils/deploy/js/${process.env.PLATFORM}`)
// mobile
export default [
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      keepAlive: false
    },
    component: () => import('@/components/_404')
  }
]
