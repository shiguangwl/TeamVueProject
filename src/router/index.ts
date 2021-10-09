import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from '../views/Index.vue'
import IndexPage from '../views/PageView/IndexPage.vue'
// 项目模块路由
const projectChildren = [
  {
    path: 'arrange',
    name: 'Arrange',
    component: () => import('@/views/PageView/ProjectIntoView/ArrangePageView.vue')
  },
  {
    path: 'note',
    name: 'Note',
    component: () => import('@/views/PageView/ProjectIntoView/NotePageView.vue')
  },
  {
    path: 'file',
    name: 'File',
    component: () => import('@/views/PageView/ProjectIntoView/FilePageView.vue')
  }
]

// 社区模块路由
const coffeecommunityChildren = [
  {
    path: 'shulog',
    name: 'shulog',
    component: () => import('@/views/PageView/CoffeePageView/ShuLogView.vue')
  },
  {
    path: 'blog',
    name: 'blog',
    component: () => import('@/views/PageView/CoffeePageView/BlogView.vue')
  },
  {
    path: 'diary',
    name: 'diary',
    component: () => import('@/views/PageView/CoffeePageView/DiaryView.vue')
  },
  {
    path: 'movie',
    name: 'movie',
    component: () => import('@/views/PageView/CoffeePageView/MovieView.vue')
  },
  // 社区 影视 子路由
  {
    path: 'movie/show-:id',
    name: 'ShowMovieInfo',
    component: () => import('@/views/PageView/CoffeePageView/MovieChildrenView/ShowMovieInfo.vue')
  },
  {
    path: 'movie/play-:id',
    name: 'PlayView',
    component: () => import('@/views/PageView/CoffeePageView/MovieChildrenView/PlayView.vue')
  },
  {
    path: 'movie/search-:id',
    name: 'SearchView',
    component: () => import('@/views/PageView/CoffeePageView/MovieChildrenView/SearchView.vue')
  },
  {
    path: 'movie/condition-:id',
    name: 'ConditionView',
    component: () => import('@/views/PageView/CoffeePageView/MovieChildrenView/ConditionView.vue')
  },
  // ShuLog 社区路由
  {
    path: 'shulog/article-:id',
    name: 'article',
    component: () => import('@/views/PageView/CoffeePageView/ShuLogPageView/ArticleView.vue')
  }
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/IndexWelcome.vue'),
    name: 'IndexWelcome'
  },
  {
    path: '/login',
    component: () => import('@/views/LogIn.vue'),
    name: 'Login'
  },
  {
    path: '/main',
    component: Index,
    redirect: 'index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: IndexPage
      },
      {
        path: '/todo',
        name: 'Todo',
        component: () => require('@/views/PageView/TodoPage.vue')
      },
      {
        path: '/project',
        name: 'Project',
        component: () => require('@/views/PageView/ProjectPage.vue')
      },
      {
        path: '/project/:id',
        name: 'projectView',
        component: () => require('@/views/PageView/ProjectIntoView/ProjectView.vue'),
        children: projectChildren
      },
      {
        path: '/calendar',
        name: 'Calendar',
        component: () => require('@/views/PageView/CalendarPage.vue')
      },
      {
        path: '/files',
        name: 'FilesPage',
        component: () => require('@/views/PageView/FilesPage.vue')
      },
      {
        path: '/coffee',
        name: 'Coffee',
        redirect: '/coffee/shulog',
        component: () => import('@/views/PageView/CoffeePage.vue'),
        children: coffeecommunityChildren
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => require('@/views/PageView/SettingsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login') { return next() }
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) { return next('/') }
  next()
})
export default router
