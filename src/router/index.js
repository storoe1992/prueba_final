import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Admin from '../views/Administration'
import Reloj from '../views/Reloj'
import Relojes from '../views/Relojes'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      login: true
    },
    children : [
      {
        path: '/all',
        name: 'Relojes',
        component: Relojes,
        meta: {
          login: true
        },
      },
      {
        path: '/reloj',
        component: Reloj,
        meta: {
          login: true
        },
      },
      {
        path: '/reloj/:relojid',
        props:true,
        component: Reloj,
        meta: {
          login: true
        },
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
