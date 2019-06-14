import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Repair from '../components/Repair'
import Login from '../components/Auth/Login'
import Registration from '../components/Auth/Registration'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: Home
    },
    {
      path: '/repair',
      name: 'repair',
      components: Repair
    },
    {
      path: '/login',
      name: 'login',
      components: Login
    },
    {
      path: '/registration',
      name: 'registration',
      components: Registration
    }
  ]
})
