<!--首页-->
<template>
  <div class="MovieView">
    <div class="top">
      <div class="logo">
        <img v-lazy="'https://cdn.jsdelivr.net/gh/imdianying/im@2021032601/statics/images/index-logo.png'" alt="">
      </div>
      <div class="SearchBox">
        <VSearch></VSearch>
      </div>
    </div>
    <div class="bottom">
      <div class="CategoryShowListBox">
        <el-row>
          <el-col :span="20">
            <VShowBox></VShowBox>
          </el-col>
          <el-col :span="4">
<!--            排行榜组件           -->
            <VSortList :data="HotData.data" :title="'电影•热榜'"></VSortList>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="foot">
      <div class="more">
        <a href="#">跟多></a>
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import VSearch from '@/components/CoffeeComponent/community/MovieComponent/index/VSearch'
import VShowBox from '@/components/CoffeeComponent/community/MovieComponent/index/VshowBox/VShowBox'
import VSortList from '@/components/CoffeeComponent/community/MovieComponent/index/VSortList'
import { VideoData } from '@/utils/api'

export default defineComponent({
  name: 'MovieView',
  components: {
    VSearch,
    VShowBox,
    VSortList
  },
  setup () {
    const state = reactive({
      HotData: []
    })
    const loadHotData = async () => {
      const { data: res } = await VideoData.GetRankData(2)
      state.HotData = res
    }
    loadHotData()
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .MovieView{
    .top{
      margin-bottom: 40px;
      width: 100%;
      height: 170px;
      background-color: rgb(234, 237, 241);
      display: flex;
      flex-direction: column;
      position: relative;
      .logo{
        width: 200px;
        height: 70px;
        img{
          width: 100%;
          height: 100%;
        }
        margin: 30px auto;
      }
      .SearchBox{
        z-index: 9999;
        position: absolute;
        top: 140px;
        left: 50%;
        transform: translateX(-50%);
        //background-color: white;
      }
    }
    .CategoryShowListBox{
      width: 90%;
      margin: 0 auto;
    }
  }
  .more{
    text-align: center;
    a{
      display: inline-block;
      margin: 5px;
      padding: 0 40px;
      font-weight: 700;
      height: 2rem;
      line-height: 2rem;
      border-radius: 10px;
      background-color: rgb(243, 245, 247);
    }
  }
</style>
