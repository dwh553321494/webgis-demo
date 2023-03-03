import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'


export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/json',
        children:[{
            path:'json',
            name: 'json',
            component: () => import('@/views/json/index')
        }]
    },
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  
  const router = createRouter()
  
  // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
  export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
  }
  
  export default router