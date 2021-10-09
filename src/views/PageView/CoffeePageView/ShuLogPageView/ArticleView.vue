<template>
  <div class="ArticleView">
    <div class="Left">
      <div class="ArticleBox">
        <el-card shadow="hover">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <el-divider></el-divider>
          <div class="InfoBox">
            <div class="user">
              <div class="img">
                <img src="http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640" alt="">
              </div>
              <div class="title">TimeHo</div>
            </div>
            <div class="box">
              <a href="">时光小站</a>
              <span class="date">2020-12-02</span>
              <span class="view">8596阅读 26点赞</span>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="ArticleContentBox">
            <p style="font-family: HYTiaoTiao;">她喜欢的人会是什么样子</p>
          </div>
          <div class="like">
            <div class="tag">
              <el-check-tag checked style="margin-right: 8px;">日常分享</el-check-tag>
            </div>
            <div class="btns">
              <div class="btn">
                <i class="iconfont icon-wenjian"></i>
                123
              </div>
              <div class="btn">
                <i class="iconfont icon-wenjian"></i>
                123
              </div>
              <div class="btn">
                <i class="iconfont icon-wenjian"></i>
                123
              </div>
              <div class="btn">
                <i class="iconfont icon-wenjian"></i>
                9天前
              </div>
            </div>
          </div>
          <el-card shadow="never">
            <div class="component">
              <span>评论区</span>
              <el-divider></el-divider>
            </div>
          </el-card>
        </el-card>
      </div>
      <div class="foot" style="text-align: center">
        by @TimeHo 2021
      </div>
    </div>
    <div class="Right">
      <HotTag></HotTag>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import DiaryNew from '@/components/CoffeeComponent/community/DiaryNew'
import PostItem from '@/components/CoffeeComponent/community/PostItem'
import HotTag from '@/components/CoffeeComponent/community/HotTag'

export default defineComponent({
  name: 'ArticleView',
  components: {
    HotTag
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .like{
    margin-top: 30px;
    margin-bottom: 20px;
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
  .ArticleView{
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
      .ArticleBox{
        padding: 10px;
        .InfoBox{
          .user{
            display: flex;
            align-items: center;
            .img{
              height: 30px;
              width: 30px;
              img{
                width: 100%;
                height: 100%;
              }
            }
            .title{
              font-size: 18px;
            }
          }
          .box{
            font-size: 13px;
            color: #9b9b9b;
            a{
              color: #9b9b9b;
              margin: 0 5px;
            }
            span{
              margin: 0 5px;
            }
          }
        }
        .ArticleContentBox{
          padding: 0 20px;
        }
      }
    }
    .Right{
      width: 40%;
      display: flex;
      flex-direction: column;
      padding: 15px;
    }
  }
  .component{
    padding: 10px;
  }
</style>
