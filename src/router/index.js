import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/Works.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },

    {
      path:'/works/:id',
      name:'works-detail',
      component: () => import('../views/WorksDetail.vue'),
      props:true
    },
    {
      // 一時的なもの
      path:'/loading',
      name:'loading',
      component: () => import('../components/Loading.vue'),
    },
    {
      path: '*',
      redirect: '/'
    }
  ],

  scrollBehavior () {
    return { x: 0, y: 0 }
  }

})