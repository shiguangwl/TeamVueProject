<template>
  <div class="StoPlayInfo">
    <div class="img">
      <img src="https://oss.wwdianying.net/dy/01e5de131d17f0e90034425bfec79ad5" alt="">
    </div>
    <div class="contetn">
      <div class="title">
        <span>斗罗大陆</span>
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
            朱一龙 / 童瑶 / 王志文 /
          </div>
        </div>
        <div class="box">
          <span>主演：</span>
          <div class="t">
            朱一龙 / 童瑶 / 王志文 / 王阳
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
          <span style="width: 62px;">简介：</span>
          <div class="t text-flow-ellipsis-multiple" >
            1936年，年轻的复兴社干部训练班学员社干部训练班学员...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'StoPlayInfo',
  setup () {
    return {}
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
