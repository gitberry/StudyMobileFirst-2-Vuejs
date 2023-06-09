import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/kristii/'), 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/stoplist',name: 'StopList',component: () => import('../components/StopList.vue')
    },    
    { path: "/:stopnumber", name:"TheStop", component: () => import('../views/TheStop.vue'), props:true },
    { path: "/stop:stopnumber", name:"TheStop2", component: () => import('../views/TheStop.vue'), props:true },
  ]
})

export default router
