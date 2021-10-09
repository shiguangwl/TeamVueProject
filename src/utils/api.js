import axios from '@/utils/axiosUtils'

export const UserApi = {
  // 登录接口
  Login: (params) => {
    return axios.post('/api/sys/login', params)
  },
  // 登出接口
  Logout: async () => {
    return await axios.get('/api/login')
  }
}

// export default {
//   UserApi
// }
