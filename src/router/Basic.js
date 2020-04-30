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
    path: '/Basic',
    meta: { title: '基础组件', icon: 'el-icon-s-grid' },
    redirect: '/',
    component: RouteView,
    children: [
      {
        path: '/Basic/Button',
        meta: { title: 'Button 按钮' },
        component: RouteView,
        children: [
          {
            path: '/Basic/Button/AjaxButton',
            meta: { title: 'AjaxButton' },
            component: AsyncComponent('Basic/Button/AjaxButton/AjaxButton')
          }
        ]
      },
      {
        path: '/Basic/BaseDialog',
        meta: { title: 'BaseDialog 对话框' },
        component: AsyncComponent('Basic/BaseDialog/BaseDialog')
      }
    ]
  }
]
export default menuRoutes
