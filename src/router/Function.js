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
    path: '/Function',
    meta: { title: '功能组件', icon: 'el-icon-s-tools' },
    redirect: '/',
    component: RouteView,
    children: [
      {
        path: '/Function/ExportFile',
        meta: { title: '导出文件' },
        component: AsyncComponent('Function/ExportFile')
      }
    ]
  }
]
export default menuRoutes
