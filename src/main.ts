import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Echarts
import echarts from 'echarts'
// 引入NProgress

// import NProgress from 'nprogress'
// import './nprogress/nprogress.css'

// TODO ElementPlus当前为全量引入
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
require('echarts-wordcloud')
// 路由跳转前钩子函数中 - 执行进度条开始加载
// router.beforeEach((to, from, next) => {
//   NProgress.start()
// })
// // 路由跳转后钩子函数中 - 执行进度条加载结束
// router.afterEach(() => {
//   NProgress.done()
// })
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.config.globalProperties.$echarts = echarts

// 进度条配置项
// NProgress.configure({
//   showSpinner: false
// })
