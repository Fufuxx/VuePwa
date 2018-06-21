import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/home/HomeView.vue'
import SearchView from '@/components/search/SearchView.vue'
import TodoView from '@/components/todo/TodoView.vue'

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
    },
    {
      path: '/todo',
      name: 'Todo',
      component: TodoView
    }
  ]
})
