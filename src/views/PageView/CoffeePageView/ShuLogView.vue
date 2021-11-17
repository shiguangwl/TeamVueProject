<template>
  <div class="ShuLog">
    <div class="Left">
      <div class="DiaryNewBox">
        <DiaryNew></DiaryNew>
      </div>
      <div class="post-article">
        <PostItem :data="item" v-for="item in Articledata.list" :key="item.pkArticleId"></PostItem>
      </div>
      <el-pagination background layout="prev, pager, next"
                     v-model:currentPage="Articledata.currPage"
                     :total=Articledata.totalCount
                     :page-size=Articledata.pageSize
                     @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
    <div class="Right">
      <HotTag></HotTag>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import DiaryNew from '@/components/CoffeeComponent/community/DiaryNew'
import PostItem from '@/components/CoffeeComponent/community/PostItem'
import HotTag from '@/components/CoffeeComponent/community/HotTag'
import { Community } from '@/utils/api'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'ShuLog',
  components: {
    DiaryNew,
    PostItem,
    HotTag
  },
  setup () {
    const state = reactive({
      Articledata: ''
    })
    // 获取首页文章
    const GetindexArticleList = async (params) => {
      const { data: res } = await Community.IndexArticle(params)
      if (res.code === 0) {
        // ElMessage({ message: res.msg, type: 'success' })
        // 成功
        state.Articledata = res.page
      } else {
        ElMessage(res.msg)
      }
    }
    // 页变更
    const handleCurrentChange = () => {
      const params = {
        page: state.Articledata.currPage,
        limit: 10
      }
      GetindexArticleList(params)
    }
    // 初始化加载
    GetindexArticleList()
    return {
      ...toRefs(state),
      handleCurrentChange
    }
  }
})
</script>

<style lang="scss" scoped>
  .ShuLog{
    width: 100%;
    height: 100%;
    height: calc(100vh - 3.4rem);
    overflow: auto;
    display: flex;
    flex-grow: 1;
    .Left{
      width: 60%;
      display: flex;
      flex-direction: column;
      .DiaryNewBox{
        padding: 15px;
      }
      .post-article{
        padding: 15px;
      }
    }
    .Right{
      width: 40%;
      display: flex;
      flex-direction: column;
      padding: 15px;
    }
  }
</style>
