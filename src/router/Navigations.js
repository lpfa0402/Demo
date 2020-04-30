/**
 * 第一个模块的全部路由
 */
// 引入路由包裹器
const RouteView = () => import('@/layout/RouteView')

// 创建异步路由组件加载
const AsyncComponent = __name__ => () => import(`@/pages/${__name__}`)

// 菜单路由
const menuRoutes = [
  {
    path: '/Navigation',
    meta: { title: '导航组件', icon: 'el-icon-wind-power' },
    redirect: '/',
    component: RouteView,
    children: [
      {
        path: '/Navigations/Tabs',
        meta: { title: 'Tabs 标签页' },
        component: AsyncComponent('Navigations/Tabs/Tabs')
      },
      {
        path: '/Navigations/Breadcrumb',
        meta: { title: 'Breadcrumb 面包屑' },
        component: AsyncComponent('Navigations/Breadcrumb/Breadcrumb')
      },
      {
        path: '/Navigations/Anchor',
        meta: { title: 'Anchor 页内导航' },
        component: AsyncComponent('Navigations/Anchor/Anchor')
      }
    ]
  }
]
export default menuRoutes
