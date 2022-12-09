// web
export default [
  {
    path: '/',
    component: () => import('@/view/pcweb/index'),
    children: [
      {
        path: 'home',
        meta: {
          title: '首页',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/home')
      },
      {
        path: 'kefu',
        meta: {
          title: '客服',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/kefu')
      }, {
        path: 'tutelage',
        meta: {
          title: '家长监护',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/tutelage')
      }
    ]
  }
]
