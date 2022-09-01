import axios from '@/utils/axiosUtils'

// 用户接口
export const UserApi = {
  // 登录接口
  Login: (params) => {
    return axios.post('/api/sys/login', params)
  },
  // 登出接口
  Logout: async () => {
    return await axios.get('/api/login')
  },
  // 注册接口
  Register: async (params) => {
    return await axios.post('/api/user/register', params)
  },
  // 获取登录用户信息
  UserInfo: async (userId) => {
    const params = {
      userId
    }
    // TODO 待修改
    return await axios.get('/api/community/hosarticle/userinfo', params)
  }
}

// 待办接口
export const todoPro = {
  // 获取TODO列表
  todoList: (params) => {
    // ?t=1633763393350&page=1&limit=10
    // params = {
    //   page: 1,
    //   limit: 1000
    // }
    return axios.get('/api/todoPro/todocontent/list', params)
  },
  // 更新TODO状态
  changeStatus: (pkId, status) => {
    const params = {
      pkId,
      status
    }
    return axios.get('/api/todoPro/todocontent/updatestatus', params)
  },
  // 添加待办
  addTodoItem: (params) => {
    return axios.post('/api/todoPro/todocontent/save', params)
  },
  // 删除待办
  delTodoItem: (pkId) => {
    const params = {
      pkId
    }
    return axios.get('/api/todoPro/todocontent/delete', params)
  },
  // 获取待办分组
  todoGroupList: (params) => {
    // ?t=1633763393350&page=1&limit=10
    params = {
      page: 1,
      limit: 1000
    }
    return axios.get('/api/todoPro/todogroup/list', params)
  },
  // 添加分组
  addGroup: (params) => {
    // params = {
    //   todoGName: '测试分组1',
    //   todoGDesc: '测试分组1描述'
    // }
    return axios.post('/api/todoPro/todogroup/save', params)
  }
}

// 社区接口
export const Community = {
  // 获取首页文章
  IndexArticle: (params) => {
    // if (params) {
    //   params = {
    //     page: 1,
    //     limit: 10
    //   }
    // }

    return axios.get('/api/community/hosindex/article', params)
  },
  // 取首页日记
  Indexdiary: (params) => {
    // if (params) {
    //   params = {
    //     page: 1,
    //     limit: 10
    //   }
    // }

    return axios.get('/api/community/hosindex/diary', params)
  },
  /**
   * 获取文章列表
   * @param params
   * @returns {Promise | Promise<unknown>}
   * @constructor
   */
  GetPost: (params) => {
    // if (params) {
    //   params = {
    //     page: 1,
    //     limit: 10
    //   }
    // }

    return axios.get('/api/community/hosarticle/list', params)
  },
  // 获取文章内容
  GetContent: (articlId) => {
    // const params = {
    //   articlId
    // }
    return axios.get('/api/community/hosacentent/info/' + articlId)
  },
  /**
   * 板块分类列表
   * @returns {Promise | Promise<unknown>}
   * @constructor
   */
  Getcategory: () => {
    return axios.get('/api/community/hossort/list?page=1&limit=1000')
  },
  /**
   * 文章保存
   * @returns {Promise | Promise<unknown>}
   * @constructor
   */
  SaveArticle: (params) => {
    return axios.post('/api/community/hosarticle/save', params)
  },
  /**
   * 日记保存
   * @param params
   * @returns {Promise | Promise<unknown>}
   * @constructor
   */
  Savediary: (params) => {
    /*    // {
    //   "content": "测试内容",
    //   "weather": "无",
    //   "mood": "无",
    //   "type": "0",
    //   "fdate": "2021-10-21 16:36:47",
    // } */
    return axios.post('/api/community/hosdiary/save', params)
  },
  /**
   * 获取日记数据
   * @param params
   * @returns {Promise | Promise<unknown>}
   * @constructor
   */
  GetDiaryList: (params) => {
    return axios.get('/api/community/hosdiary/list', params)
  },
  // 获取本地天气 TODO 永州
  GetLocalWeather: () => {
    return axios.get('https://widget-v3.seniverse.com/api/weather/0fdd4509-5548-411d-90f7-70b8a8b09746?unit=c&language=auto&location=WM7B0X53DZW2&geolocation=true&detected=zh-cn')
  }
}

// 影视模块数据
export const VideoData = {
  /**
   * 获取首页数据
   */
  GetIndexData: () => {
    return axios.get('/api/video/data/rank?cat=1')
  },
  /**
   * 详情信息
   */
  GetDetailInfo: (params) => {
    return axios.get('/api/video/data/detail', params)
  },
  /**
   * 排行榜数据获取
   * @param type 7首页(十个一组),6儿童,5动漫,4综艺,3电视剧,2电影,1总榜
   */
  GetRankData: (type) => {
    return axios.get('/api/video/data/rank?cat=' + type)
  },
  /**
   * 搜索结果数据
   */
  GetSearchData: (Kw) => {
    return axios.get('/api/video/data/search?kw=' + Kw)
  }
}

// 通讯接口
export const Communication = {
  // 获取好友列表
  GetFriendlist: (params) => {
    params = {
      page: 1,
      limit: 1000
    }
    return axios.get('/api/communication/friendlist/list', params)
  }
}
// export default {
//   UserApi
// }
