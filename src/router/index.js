import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Repair from '@/components/Repair'
import Myrepair from '@/components/Myrepair'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/repair',
      name: 'repair',
      component: Repair
    },
    {
      path: '/myrepair',
      name: 'myrepair',
      component: Myrepair
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
