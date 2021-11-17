<template>
  <div class="DiaryNew">
    <div class="Header">
      <span>圈友日记</span>
      <span><a href="#">更多</a></span>
    </div>
    <div class="Content">
      <div class="ImageList">
        <ul>
          <li v-for="item in Diarydata.list" :key="item.pkId">
            <router-link :to="{ path: '/coffee/shulog/article-diary' + item.pkId }">
              <img src="https://i.loli.net/2020/12/06/fHo7K5XUrBb6DGy.png" alt="图片">
              <div class="info">
                <img src="https://i.loli.net/2020/11/25/WXB6eCpMZkwh7PD.png" alt="">
                <span style="white-space: nowrap;/*一行显示*/
overflow: hidden;/*超出部分隐藏*/
text-overflow: ellipsis;/*用...代替超出部分*/">{{ item.content }}</span>
              </div>
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

import { Community } from '@/utils/api'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'DiaryNew',
  setup () {
    const state = reactive({
      Diarydata: ''
    })
    // 获取首页日记
    const GetindexDiaryList = async () => {
      // 取最新修改
      const params = {
        page: 1,
        limit: 8
      }
      const { data: res } = await Community.Indexdiary(params)
      if (res.code === 0) {
        // ElMessage({ message: res.msg, type: 'success' })
        // 成功
        state.Diarydata = res.page
      } else {
        ElMessage(res.msg)
      }
    }
    // 初始化
    GetindexDiaryList()
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  li:hover img{
    transition: all .3s;
    transform: scale(1.1);
  }
  .DiaryNew{
    width: 100%;
    cursor: pointer;
    .Header{
      padding: 0px 20px;
      margin: 10px 15px;
      display: flex;
      justify-content: space-between;
      height: 2rem;
      border-bottom:solid 1px #cac6c6;
    }
    .ImageList{
      ul{
        display: flex;
        flex-wrap: wrap;
      }
      li{
        width: 23%;
        margin: 1%;
        position: relative;
        border-radius: 10px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 15px;
        }
        .info{
          position: absolute;
          bottom: 10px;
          left: 17px;
          font-size: 1.1rem;
          color: white;
          img{
            width: 20px;
            height: 20px;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
