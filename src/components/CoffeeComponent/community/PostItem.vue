<template>
  <div class="PostItem">
    <div class="info">
      <img v-lazy="'https://avatar.is.fail/avatar/92ceb0b9df8a2753af61cf94adcdd186?&s=100'" alt="">
      <span>TimeHo</span>
    </div>
    <router-link :to="{ path: '/coffee/shulog/article-'+data.pkArticleId }">
    <div class="content">
      {{ data.articleMiniCentent }}
    </div>
    </router-link>
    <div class="like">
      <div class="tag">
        <el-check-tag checked style="margin-right: 8px;">日常分享</el-check-tag>
      </div>
      <div class="btns">
        <div class="btn">
          <i class="iconfont icon-wenjian"></i>
        <!--    点赞      -->
          {{ data.articleLikeCount }}
        </div>
        <div class="btn">
          <i class="font icon-wenjian"></i>
<!--          评论数           -->
          {{ data.articleCommentCount }}
        </div>
        <div class="btn">
          <i class="iconfont icon-wenjian"></i>
<!--          浏览量         -->
          {{ data.articleLikeCount }}
        </div>
        <div class="btn">
          <i class="iconfont icon-wenjian"></i>
<!--          发布时间            -->
          9天前
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'PostItem',
  props: {
    data: Object
  },
  setup (props, ctx) {
    const state = reactive({
      data: props.data
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .PostItem{
    margin: 10px 20px;
    width: 100%;
    padding: 0.3rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-radius: 15px;
    transition: all .3s;
    .info{
      height: 40px;
      img{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        vertical-align: middle;
      }
      span{
        font-size: 16px;
        font-weight: 600;
      }
    }
    .content{
      padding: 10px 40px;
    }
    .like{
      .tag{
        padding: 5px 40px;
      }
      .btns{
        display: flex;
        justify-content: space-between;
        padding: 0 40px;
        font-size: 16px;
        font-weight: 700;
        .btn{
          color: #8590A6;
        }
      }
    }
  }
  .PostItem:hover{
    background-color: rgb(248,250,251,0.5);
    box-shadow: rgb(0 0 0 / 20%) 0 1px 3px, rgb(157 182 200 / 10%) 0 1px 20px;
  }
</style>
