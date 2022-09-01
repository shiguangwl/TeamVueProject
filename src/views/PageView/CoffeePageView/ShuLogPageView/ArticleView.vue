<template>
  <div class="ArticleView">
    <div class="Left">
      <div class="ArticleBox">
        <el-card shadow="hover">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/coffee/shulog' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>查看页面</el-breadcrumb-item>
          </el-breadcrumb>
          <el-divider></el-divider>
          <div class="InfoBox">
            <div class="user">
              <div class="img">
                <img v-lazy="'http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640'" alt="">
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
            <v-md-editor ref="preview" v-model="articleContent.content" height="100%"  mode="preview"></v-md-editor>
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
    <el-affix :offset="70">
      <div class="right_box" style="height: 100%;overflow: scroll">
        <div>
          <div
            v-for="anchor in titles" :key="anchor.lineIndex"
            :style="{ padding: `10px 0 10px ${anchor.indent * 15}px`}"
            @click="handleAnchorClick(anchor)"
          >
            <a style="cursor: pointer">{{ anchor.title }}</a>
          </div>
        </div>
      </div>
    </el-affix>
  </div>
</template>

<script>
import { defineComponent, onActivated, onDeactivated, onMounted, onUpdated, reactive, ref, toRefs } from 'vue'
import DiaryNew from '@/components/CoffeeComponent/community/DiaryNew'
import PostItem from '@/components/CoffeeComponent/community/PostItem'
import HotTag from '@/components/CoffeeComponent/community/HotTag'
import { useRoute } from 'vue-router'
import { Community } from '@/utils/api'

export default defineComponent({
  name: 'ArticleView',
  components: {
  },
  setup () {
    const preview = ref(null)
    const state = reactive({
      articleContent: '',
      titles: []
    })
    const route = useRoute()
    // 渲染标题
    const renderH = () => {
      // 渲染目录
      const anchors = preview.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
      // console.log(anchors, 'anchors')
      const titles = Array.from(anchors).filter((title) => !!title.innerText.trim())
      if (!titles.length) {
        state.titles = []
        return
      }
      const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort()
      state.titles = titles.map((el) => ({
        title: el.innerText,
        lineIndex: el.getAttribute('data-v-md-line'),
        indent: hTags.indexOf(el.tagName)
      }))
    }
    // onMounted(async () => {
    //   loadData()
    // })
    onUpdated(async () => {
      console.log('开始渲染目录树')
      renderH()
    })
    onDeactivated(() => {
      state.articleContent = ''
    })
    onActivated(() => {
      loadData()
    })
    const loadData = async () => {
      // const id = route.params.id
      // const { data: res } = await Community.GetContent(id)
      // state.articleContent = res.hosAcentent
    }
    return {
      ...toRefs(state)
    }
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
      width: 77%;
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
