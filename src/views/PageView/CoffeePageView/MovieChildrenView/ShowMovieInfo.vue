<template>
  <div class="ShowMovieInfo">
    <div class="top">
      <div class="MoveShowInfoBox">
        <MoveShowInfo></MoveShowInfo>
      </div>
    </div>
    <div class="bottom">
      <div class="VShowBoxDiv">
        <VShowBox></VShowBox>
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import MoveShowInfo from '@/components/CoffeeComponent/community/MovieComponent/index/MoveShowInfo/MoveShowInfo.vue'
import VShowBox from '@/components/CoffeeComponent/community/MovieComponent/index/VshowBox/VShowBox'

export default defineComponent({
  name: 'ShowMovieInfo',
  components: {
    MoveShowInfo,
    VShowBox
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .ShowMovieInfo{
    .top{
      margin-bottom: 40px;
      width: 100%;
      height: 270px;
      background-color: rgb(234, 237, 241);
      display: flex;
      flex-direction: column;
      position: relative;
      margin: 0 0 190px 0;
      .MoveShowInfoBox{
        width: 90%;
        //height: 300px;
        background-color: white;
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        top: 20%;
        box-shadow: 0 7px 21px rgb(149 157 165 / 22%);
        border-radius: 10px;
        padding: 15px;
      }
    }
    .bottom{
      .VShowBoxDiv{
        width: 90%;
        margin: 10px auto;
      }
    }
  }
</style>
