import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import SearchView from '@/components/SearchView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchView
    }
  ]
})
