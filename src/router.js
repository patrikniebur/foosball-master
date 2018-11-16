import Vue from 'vue'
import Router from 'vue-router'
import Matchmaker from './views/Matchmaker.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Matchmaker',
      component: Matchmaker
    }
  ]
})
