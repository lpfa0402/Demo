import Vue from 'vue'
import Router from 'vue-router'
// 引入组件模块
import Home from './home'
import Function from './Function'
import Navigations from './Navigations'
import Basic from './Basic'
import Form from './Form'
Vue.use(Router)
const BasicLayout = () => import('@/layout/BasicLayout')
const Login = () => import('@/pages/Login/Login')
export const constantRouterMap = [
  {
    path: '/',
    meta: { title: '用户登录' }, // meta参数可以是一个对象，也可以是一个数组，配置每个路由的一些信息，类似于每个路由的标识符$route.meta可读取
    component: Login,
    hidden: false
  },
  {
    path: '/',
    meta: { title: '首页' },
    redirect: '/home',
    component: BasicLayout,
    children: [
      ...Home,
      ...Function,
      ...Navigations,
      ...Basic,
      ...Form
    ]
  }
]
export default new Router({
  mode: 'history', // 后端支持可开
  routes: constantRouterMap, // 路由路径
  scrollBehavior: () => ({ y: 0 }) // 在切换时定位路由滚动条的位置
})
