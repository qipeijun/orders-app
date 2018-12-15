import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/orders',
      children:[
        {
          path:'orders',
          component:()=>import('./views/orders')
        },
        {
          path:'user',
          component:()=>import('./views/user')
        }
      ]
    },
    {
      path:'/login',
      component:() => import('./views/login')
    },
    {
      path:'/register',
      component:() => import('./views/register')
    },
    {
      path:'/reset-pwd',
      component:() => import('./views/reset-pwd')
    },
    //认证 - 上传营业执照
    {
      path:"/business-license",
      component:() => import('./views/business-license.vue')
    },
    {
      path:"/auth",
      component:() => import('./views/auth.vue')
    },
    //绑定账号
    {
      path:"/bind-tb",
      component:() => import('./views/bind-tb.vue')
    },
    // 任务列表
    {
      path:"/task",
      component:() => import('./views/task.vue')
    },
    // 任务完成
    {
      path:"/task-done",
      component:() => import('./views/task-done.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
