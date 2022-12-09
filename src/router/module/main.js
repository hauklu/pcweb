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
        path: 'production',
        meta: {
          title: '产品介绍',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/production')
      }, {
        path: 'solution',
        meta: {
          title: '解决方案',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/solution')
      }
    ]
  }
]
