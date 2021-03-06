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
  // 社区影视子路由
  {
    path: 'movie/show-:id',
    name: 'ShowMovieInfo',
    component: () => import('@/views/PageView/CoffeePageView/MovieChildrenView/ShowMovieInfo.vue')
  }
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/LogIn.vue'),
    name: 'Login'
  },
  {
    path: '/',
    component: Index,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: IndexPage
      },
      {
        path: '/todo',
        name: 'Todo',
        component: () => import('@/views/PageView/TodoPage.vue')
      },
      {
        path: '/project',
        name: 'Project',
        component: () => import('@/views/PageView/ProjectPage.vue')
      },
      {
        path: '/project/:id',
        name: 'projectView',
        component: () => import('@/views/PageView/ProjectIntoView/ProjectView.vue'),
        children: projectChildren
      },
      {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('@/views/PageView/CalendarPage.vue')
      },
      {
        path: '/files',
        name: 'FilesPage',
        component: () => import('@/views/PageView/FilesPage.vue')
      },
      {
        path: 'coffee',
        name: 'Coffee',
        redirect: '/coffee/shulog',
        component: () => import('@/views/PageView/CoffeePage.vue'),
        children: coffeecommunityChildren
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
