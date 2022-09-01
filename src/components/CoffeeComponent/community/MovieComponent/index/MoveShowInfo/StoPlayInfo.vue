<!--影视搜索结果Item-->
<template>
  <div class="StoPlayInfo">
    <div class="img">
      <img v-lazy="data.cover" alt="">
    </div>
    <div class="contetn">
      <div class="title">
        <router-link :to="{ path: '/coffee/movie/play-'+data.cat_id+'&'+data.en_id}">
          <span>{{data.titleTxt}}</span>
        </router-link>
      </div>
      <div class="tags">
        <el-tag v-for="tag in data.tag" :key="tag" type="info">{{tag}}</el-tag>
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
<!--            朱一龙 / 童瑶 / 王志文 /-->
          </div>
        </div>
        <div class="box">
          <span>主演：</span>
          <div class="t" style="display: flex;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" >
            <span v-for="actor in actList" :key="actor">{{actor}}/</span>
          </div>
        </div>
        <div class="box">
          <span>上映：</span>
          <div class="t">
            {{data.year}}({{data.area}})
          </div>
        </div>
        <div class="box">
          <span>集数：</span>
          <div class="t">
            {{data.coverInfo.txt}}
          </div>
        </div>
        <div class="box">
          <span style="width: 62px;">简介：</span>
          <div class="t text-flow-ellipsis-multiple" >
            {{data.description.substring(0,20)+'...'}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'StoPlayInfo',
  props: {
    data: Object
  },
  setup (props) {
    const state = reactive({
      actList: props.data.actList.slice(5)
    })
    return {
      ...toRefs(props)
    }
  }
})
</script>

<style lang="scss" scoped>
  .StoPlayInfo{
    display: flex;
    width: 48%;
    background: #f7f8f9;
    margin: 5px;
    border-radius: 10px;
    padding-top: 10px;
    .img{
      width: 100px;
      height: 150px;
      width: 200px;
      height: 250px;
      border-radius: 10px;
      overflow: hidden;
      margin: 0 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .title{
      span{
        font-weight: 700;
        font-size: 2rem;
      }
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
            display: inline-block;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow:ellipsis;
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
  }
</style>
