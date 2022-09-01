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
      <div class="text">
        <div><span class="t1">{{ Kw }}</span></div>
        <div><span class="t2">搜索"{{Kw}}" ，找到 {{rows.length}}部影视作品</span></div>
      </div>
<!--      搜索结果      -->
      <StoPlayInfo v-for="item in rows" :key="item" :data="item"></StoPlayInfo>
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
import { defineComponent, onActivated, reactive, toRefs, watch } from 'vue'
import VSearch from '@/components/CoffeeComponent/community/MovieComponent/index/VSearch'
import StoPlayInfo from '@/components/CoffeeComponent/community/MovieComponent/index/MoveShowInfo/StoPlayInfo'
import { useRoute } from 'vue-router'
import { VideoData } from '@/utils/api'
export default defineComponent({
  name: 'MovieView',
  components: {
    VSearch,
    StoPlayInfo
  },
  setup () {
    const state = reactive({
      data: '',
      Kw: '',
      rows: []
    })
    // onActivated(() => {
    //   loadData()
    // })
    const route = useRoute()
    const loadData = async () => {
      state.Kw = route.params.id
      const { data: res } = await VideoData.GetSearchData(state.Kw)
      state.data = res.data
      state.rows = res.data.longData.rows
    }
    watch(() => route.path, () => {
      loadData()
    })
    loadData()
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
    .bottom{
      width: 90%;
      margin: 50px auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .text{
        text-align: center;
        width: 100%;
        .t1{
          font-size: 2rem;
          font-weight: 700;
        }
        .t2{
          font-size: 0.3rem;
        }
      }
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
