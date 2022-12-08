// web
export default [
  {
    path: '/',
    component: () => import('@/view/pcweb/index'),
    children: [
      {
        path: 'home',
        meta: {
          title: '九玩网络-首页',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/home')
      },
      {
        path: 'kefu',
        meta: {
          title: '九玩官网-客服',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/kefu')
      }, {
        path: 'tutelage',
        meta: {
          title: '九玩官网-家长监护',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/tutelage')
      }
    ]
  }
]
