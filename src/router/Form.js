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
    path: '/Form',
    meta: { title: '表单组件', icon: 'el-icon-tickets' },
    redirect: '/',
    component: RouteView,
    children: [
      {
        path: '/Form/UploadCropper',
        meta: { title: 'UploadCropper 图片上传' },
        component: AsyncComponent('Form/UploadCropper/UploadCropper')
      },
      {
        path: '/Form/UploadFile',
        meta: { title: 'UploadFile 文件上传' },
        component: AsyncComponent('Form/UploadFile/UploadFile')
      },
      {
        path: '/Form/BreakSpace',
        meta: { title: 'BreakSpace 分隔符' },
        component: AsyncComponent('Form/BreakSpace/BreakSpace')
      },
      {
        path: '/Form/Tinymce',
        meta: { title: 'Tinymce 富文本' },
        component: AsyncComponent('Form/Tinymce/Tinymce')
      },
      {
        path: '/Form/FormPanel',
        meta: { title: 'Form 表单' },
        component: AsyncComponent('Form/FormPanel/FormPanel')
      }
    ]
  }
]
export default menuRoutes
