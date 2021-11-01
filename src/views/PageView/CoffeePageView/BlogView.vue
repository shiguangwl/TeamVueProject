<template>
  <div class="BlogView">
    <el-card class="box-card" style="width: 75%;overflow: scroll">
      <div class="item" v-for="item in listData.list" :key="item.pkArticleId">
        <router-link :to="{ path: '/coffee/blog/articleLong-1'+item.pkArticleId }">
          <div class="item_box">
            <div class="left">
              <img src="https://www.dmoe.cc/random.php" alt="图片">
            </div>
            <div class="right">
              <div class="title">{{item.articleTitle}}</div>
              <div class="mini_content">{{item.articleMiniCentent}}</div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="page_split">
        <el-pagination background layout="prev, pager, next"
                       v-model:currentPage="listData.currPage"
                       :total=listData.totalCount
                       :page-size=listData.pageSize
                       @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </el-card>
    <div class="right_box" style="margin-left: 15px">
      <el-card class="box-card">
        <div class="info_box">
          <div class="head_img" style="height: 100px;display: flex;justify-content: center;align-items: center;">
            <img src="http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640" alt="" style="height: 65px;width: 65px;margin:0 auto;">
          </div>
          <div class="name">
            <h3 style="text-align: center">TimeHo</h3>
          </div>
          <div class="desc">
            <span>记录流逝的时光,学习记录</span>
          </div>
          <div class="archives_info" style="display: flex;text-align: center;justify-content: space-around">
            <div class="articles" style=" height: 50px;width: 50px;">文章<br>86</div>
            <div class="tags" style=" height: 50px;width: 50px;">标签<br>62</div>
            <div class="category" style=" height: 50px;width: 50px;">分类<br>20</div>
          </div>
        </div>
      </el-card>

    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { Community } from '@/utils/api'

export default defineComponent({
  name: 'BlogView',
  setup () {
    const state = reactive({
      // "pkArticleId": 1,
      // "userId": 1,
      // "userName": "admin",
      // "articleTitle": "11111111",
      // "articleViews": 11,
      // "articleCommentCount": 1,
      // "articleDate": "2021-09-18 10:58:21",
      // "articleLikeCount": 22,
      // "articleMiniCentent": "dsfsd",
      // "articlePassword": "sdf",
      // "articleType": 1,
      // "createTime": "2021-09-18 10:58:34",
      // "updateTime": "2021-09-18 10:58:34"
      listData: ''
    })
    // 获取数据
    const GetBlogIndexArticle = async (params) => {
      const { data: res } = await Community.GetPost(params)
      state.listData = res.page
      // console.log(res)
    }
    // 页变更
    const handleCurrentChange = () => {
      const params = {
        page: state.listData.currPage,
        limit: 10
      }
      GetBlogIndexArticle(params)
    }
    GetBlogIndexArticle()
    return {
      ...toRefs(state),
      GetBlogIndexArticle,
      handleCurrentChange
    }
  }
})
</script>

<style lang="scss" scoped>
  .BlogView{
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
  }
  .item_box{
    height: 160px;
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    border-bottom: 1px #F0F0F0 solid;
    cursor: pointer;
  }
  .item_box .left{
    height: 100%;
    width: 30%;
    background-color: rebeccapurple;
    img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
      overflow: hidden;
    }
  }
  .item_box .right{
    height: 100%;
    width: 70%;
    padding: 10px;
    .title{
      font-family: 'Microsoft YaHei', 'Segoe UI Emoji';
      font-size: 1.5rem;
    }
    .mini_content{
      color: #9b9b9b;
    }
  }
  .page_split{
    margin: 20px auto;
  }
</style>
