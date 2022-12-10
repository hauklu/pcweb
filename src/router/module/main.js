// web
export default [
  {
    path: '/',
    component: () => import('@/view/pcweb/index'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/home')
      },
      {
        path: 'production/',
        meta: {
          title: '产品介绍',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/production'),
        children: [{
          path: 'call_card',
          name: 'production_call_card',
          meta: {
            title: '产品介绍-电销卡',
            keepAlive: false
          },
          component: () => import('@/view/pcweb/components/production/callCard')
        }, {
          path: 'private_call',
          name: 'production_private_call',
          meta: {
            title: '产品介绍-隐私号通话',
            keepAlive: false
          },
          component: () => import('@/view/pcweb/components/production/privateCall')
        }, {
          path: 'scrm',
          name: 'production_scrm',
          meta: {
            title: '产品介绍-持脉scrm',
            keepAlive: false
          },
          component: () => import('@/view/pcweb/components/production/scrm')
        }, {
          path: 'work_mobile',
          name: 'production_work_mobile',
          meta: {
            title: '产品介绍-工作手机',
            keepAlive: false
          },
          component: () => import('@/view/pcweb/components/production/workMobile')
        }]
      }, {
        path: 'solution',
        name: 'solution',
        meta: {
          title: '解决方案',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/solution')
      }, {
        path: 'channel',
        name: 'channel',
        meta: {
          title: '渠道合作',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/channel')
      }, {
        path: 'try',
        name: 'try',
        meta: {
          title: '免费试用',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/try')
      }, {
        path: 'about',
        name: 'about',
        meta: {
          title: '关于我们',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/about')
      }, {
        path: 'call',
        name: 'call',
        meta: {
          title: '联系我们',
          keepAlive: false
        },
        component: () => import('@/view/pcweb/pages/call')
      }
    ]
  }
]
