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
    path: '/ceshi',
    meta: { title: '基础组件B', icon: 'el-icon-s-tools' },
    redirect: '/',
    component: RouteView,
    children: [
      {
        path: '/ceshi/ceshi',
        meta: { title: '组件san' },
        component: AsyncComponent('ceshi/ceshi')
      }
    ]
  }
]
export default menuRoutes
