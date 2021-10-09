<template>
  <div class="MoveShowInfo">
    <div class="title">
      <span>斗罗大陆</span>
    </div>
    <div class="subtitle">
      <span>DUO LUO BIG ROAD</span>
    </div>
    <div class="tags">
      <el-tag type="info">标签1</el-tag>
      <el-tag type="info">标签2</el-tag>
      <el-tag type="info">标签2</el-tag>
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
          朱一龙 / 童瑶 / 王志文 / 王阳 / 朱珠 / 李强 / 张子贤 / 姚安濂 / 袁文康 / 代旭
        </div>
      </div>
      <div class="box">
        <span>主演：</span>
        <div class="t">
          朱一龙 / 童瑶 / 王志文 / 王阳 / 朱珠 / 李强 / 张子贤/姚安濂/袁文康/代旭
        </div>
      </div>
      <div class="box">
        <span>上映：</span>
        <div class="t">
          2021-06-07(中国大陆)
        </div>
      </div>
      <div class="box">
        <span>集数：</span>
        <div class="t">
          43集 - 更新至第34集
        </div>
      </div>
      <div class="box">
        <span style="width: 300px;">简介：</span>
        <div class="t text-flow-ellipsis-multiple" style="padding-right: 230px">
          1936年，年轻的复兴社干部训练班学员林楠笙，被复兴社特务处上海区区长陈默群带往上海，参加抓捕潜伏在复兴社的地下党任务。在执行任务的过程中，正直单纯的林楠笙不断被顾慎言、纪中原、朱怡贞、左秋明等共产党人为国为民的使命感和大无畏的牺牲精神感召，对国民党内部的乱象和当时中国人民的苦难有了更深的思考，也对共产党人的信仰和追求有了更深的了解。林楠笙在对日伪的斗争中勇敢果毅，屡立战功。在民族大义面前，多次和共产党人站到一起，尤其是在一些关键时刻，他利用自己在军统的特殊身份，为上海地下党组织提供了极大的帮助。经过艰苦斗争和生死考验后，林楠笙成长为一名真正的共产党员。并在解放战争的关键时刻，为党和国家做出了突出贡献。
        </div>
      </div>
    </div>
    <div class="img">
      <img src="https://oss.wwdianying.net/dy/f0ad74caeb6882076ed826a41813d140" alt="">
    </div>
    <div class="bottom">
      <router-link :to="{ path: '/coffee/movie/play-2'}">
        <el-button style="float: right;width: 200px" type="success" icon="el-icon-share" round>立即播放</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'MoveShowInfo',
  setup () {
    return {}
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
