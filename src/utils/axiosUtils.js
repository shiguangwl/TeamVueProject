// 引入axios
import axios from 'axios'
import { ElMessage, ElLoading } from 'element-plus'

let loading
// 内存中正在请求的数量
let loadingNum = 0
function startLoading () {
  if (loadingNum === 0) {
    loading = ElLoading.service({
      lock: true,
      text: '拼命加载中...',
      background: 'rgba(255,255,255,0.5)'
    })
  }
  // 请求数量加1
  loadingNum++
}
function endLoading () {
  // 请求数量减1
  loadingNum--
  if (loadingNum <= 0) {
    loading.close()
  }
}

// 创建axios实例
const httpService = axios.create({
  // url前缀-'http:xxx.xxx'
  // baseURL: process.env.BASE_API, // 需自定义
  // 请求超时时间
  timeout: 3000 // 需自定义
})

// request拦截器
httpService.interceptors.request.use(
  config => {
    const token = window.sessionStorage.getItem('token')
    if (token) { // 需自定义
      // 让每个请求携带token
      config.headers.token = token
    }
    startLoading()
    return config
  },
  error => {
    // 请求错误处理
    Promise.reject(error)
  }
)

// respone拦截器

httpService.interceptors.response.use(
  response => {
    endLoading()
    if (response.data.code === 401) {
      location.href = './login'
    }
    return response
  },
  error => {
    // 请求错误处理
    ElMessage.error('响应异常.')
    Promise.reject(error)
  }
)
// httpService.interceptors.response.use(
//   response => {
//     // 统一处理状态
//     const res = response.data
//     // eslint-disable-next-line eqeqeq
//     if (res.statuscode != 1) { // 需自定义
//       // 返回异常
//       // eslint-disable-next-line prefer-promise-reject-errors
//       return Promise.reject({
//         status: res.statuscode,
//         message: res.message
//       })
//     } else {
//       return response.data
//     }
//   },
//   // 处理处理
//   error => {
//     if (error && error.response) {
//       switch (error.response.status) {
//         case 400:
//           error.message = '错误请求'
//           break
//         case 401:
//           error.message = '未授权，请重新登录'
//           break
//         case 403:
//           error.message = '拒绝访问'
//           break
//         case 404:
//           error.message = '请求错误,未找到该资源'
//           break
//         case 405:
//           error.message = '请求方法未允许'
//           break
//         case 408:
//           error.message = '请求超时'
//           break
//         case 500:
//           error.message = '服务器端出错'
//           break
//         case 501:
//           error.message = '网络未实现'
//           break
//         case 502:
//           error.message = '网络错误'
//           break
//         case 503:
//           error.message = '服务不可用'
//           break
//         case 504:
//           error.message = '网络超时'
//           break
//         case 505:
//           error.message = 'http版本不支持该请求'
//           break
//         default:
//           error.message = `未知错误${error.response.status}`
//       }
//     } else {
//       error.message = '连接到服务器失败'
//     }
//     return Promise.reject(error)
//   }
// )

/* 网络请求部分 */

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'get',
      params: params
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'post',
      data: params,
      header: {
        'Content-Type': 'application/json' // 如果写成contentType会报错,如果不写这条也报错
        // Content type 'application/x-www-form-urlencoded;charset=UTF-8'...
      }
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function fileUpload (url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'post',
      data: params,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

export default {
  get,
  post,
  fileUpload
}
