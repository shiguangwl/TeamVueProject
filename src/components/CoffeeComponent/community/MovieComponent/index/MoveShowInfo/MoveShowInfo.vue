<template>
  <div class="MoveShowInfo" id="MoveShowInfoID">
    <div class="title">
      <span>{{ data.title }}</span>
    </div>
    <div class="subtitle">
      <span>{{data.comment}}</span>
    </div>
    <div class="tags">
      <el-tag type="info" v-for="i in data.moviecategory" :key="i">{{i}}</el-tag>
    </div>
    <div class="info">
      <div class="box">
        <span>导演:</span>
        <div class="t">
          周游
        </div>
      </div>
      <div class="box">
        <span>编剧：</span>
        <div class="t">
          <span v-for="i in data.director" :key="i">{{i}}/</span>
        </div>
      </div>
      <div class="box">
        <span>主演：</span>
        <div class="t" style="width: 390px;">
          <span v-for="i in data.actor" :key="i">{{i}}/</span>
        </div>
      </div>
      <div class="box">
        <span>上映：</span>
        <div class="t">
          {{data.pubdate}}
        </div>
      </div>
      <div class="box">
        <span>集数：</span>
        <div class="t">
          {{data.upinfo}}
        </div>
      </div>
      <div class="box">
        <span style="width: 300px;">简介：</span>
        <div class="t text-flow-ellipsis-multiple" style="padding-right: 230px">
          {{data.description}}
        </div>
      </div>
    </div>
    <div class="img">
      <img v-lazy="data.cdncover" alt="">
    </div>
    <div class="bottom">
      <router-link :to="{ path: '/coffee/movie/play-'+VCid+'&'+Vid}">
        <el-button style="float: right;width: 200px" type="success" icon="el-icon-share" round>立即播放</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, onActivated, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
import { VideoData } from '@/utils/api'

export default defineComponent({
  name: 'MoveShowInfo',
  setup () {
    const state = reactive({
      data: '',
      VCid: '',
      Vid: ''
    })
    const route = useRoute()
    onActivated(() => {
      loadData()
    })
    const loadData = async () => {
      const param = route.params.id.split('&')
      state.VCid = param[0]
      state.Vid = param[1]
      const params = {
        cat: state.VCid,
        id: state.Vid
      }
      const { data: res } = await VideoData.GetDetailInfo(params)
      state.data = res.data
      document.querySelector('#ShowMovieInfoTop > div.top').scrollIntoView()
    }
    watch(() => route.path, () => {
      loadData()
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .MoveShowInfo{
    position: relative;
    .title{
      span{
        font-weight: 700;
        font-size: 2rem;
      }
    }
    .subtitle{
      padding: 5px;
      font-size: 1rem;
      font-weight: 700;
    }
    .info{
      .box{
        display: flex;
        margin: 5px;
        span{
          font-size: 1rem;
          font-weight: 700;
          margin-right: 5px;
          color: rgba(0,0,0,.51);
        }
        .t{
          span{
            font-weight: 400;
            font-size: 10px;
          }
        }
      }
    }
    .tags{
      span{
        border-radius: 25px;
        padding: 0 10px;
        margin: 5px 5px;
        cursor: pointer;
      }
    }
    .img{
      width: 200px;
      height: 280px;
      position: absolute;
      right: 10px;
      top: 10px;
      border-radius: 10px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .bottom{
      //margin: 20px 40px;
    }
  }
  .text-flow-ellipsis-multiple {
    /* 多余内容省略号处理-多行 */
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
