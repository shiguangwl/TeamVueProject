import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Echarts
import echarts from 'echarts'
// 引入NProgress

// 图片懒加载
import lazyPlugin from 'vue3-lazy'
// import NProgress from 'nprogress'
// import './nprogress/nprogress.css'

// TODO ElementPlus当前为全量引入
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// VUE-md
import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
// highlightjs
import hljs from 'highlight.js'
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index'
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
require('echarts-wordcloud')
VMdEditor.use(githubTheme, {
  Hljs: hljs
})
VMdEditor.use(createEmojiPlugin())
VMdEditor.use(createTodoListPlugin())
/* // 路由跳转前钩子函数中 - 执行进度条开始加载
// router.beforeEach((to, from, next) => {
//   NProgress.start()
// })
// // 路由跳转后钩子函数中 - 执行进度条加载结束
// router.afterEach(() => {
//   NProgress.done()
// }) */
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VMdEditor)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.use(lazyPlugin, {
  loading: require('@/assets/images/loading.gif'), // 图片加载时默认图片
  error: require('@/assets/images/loading.gif')// 图片加载失败时默认图片
})
app.mount('#app')
app.config.globalProperties.$echarts = echarts
app.use(ElementPlus, {
  locale: zhCn
})
// 进度条配置项
// NProgress.configure({
//   showSpinner: false
// })
