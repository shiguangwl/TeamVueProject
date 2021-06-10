import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from '../views/Index.vue'
import IndexPage from '../views/PageView/IndexPage.vue'
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
        component: () => import('@/views/PageView/CoffeePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
