import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '../src/MainLayout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: MainLayout
    }
  ]
})
