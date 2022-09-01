<template>
  <div class="DiaryView">
    <el-row>
      <el-col :span="13">
        <div class="DiaryCententBox">
          <el-card style="border-radius: 30px" shadow="hover">
            <DiaryCommitContent></DiaryCommitContent>
          </el-card>
        </div>
        <div class="infoBox">
<!--          <el-carousel :interval="5000" arrow="always" style="background: radial-gradient(black, #fffdfd00);">-->
<!--            <el-carousel-item v-for="item in 4" :key="item">-->
<!--              <h3 class="small">日记统计:{{ item }}</h3>-->
<!--            </el-carousel-item>-->
<!--          </el-carousel>-->
        </div>
        <div class="info">
          <div style="margin-left: 15px;font-family: HYTiaoTiao;font-size: 1.6rem;">当前城市: {{data1.location}},{{data1.text}}</div>
          <div style="margin-left: 15px;font-family: HYTiaoTiao;font-size: 1.6rem;">当前温度:{{data1.temperature}}</div>
          <div style="margin-left: 15px;font-family: HYTiaoTiao;font-size: 1.1rem;">温馨提示:{{data1.suggestion}}</div>
        </div>
      </el-col>
      <el-col :span="11">
        <div class="TimeLineBox">
          <DiaryTimeLine></DiaryTimeLine>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import DiaryCommitContent from '@/components/CoffeeComponent/community/DiaryCommitContent'
import DiaryTimeLine from '@/components/CoffeeComponent/community/DiaryTimeLine'
import { Community } from '@/utils/api'
export default defineComponent({
  name: 'DiaryView',
  components: {
    DiaryCommitContent,
    DiaryTimeLine
  },
  setup () {
    const state = reactive({
      data1: ''
    })
    const getWeather = async () => {
      const { data: res } = await Community.GetLocalWeather()
      console.log(res.results[0].data[0])
      state.data1 = res.results[0].data[0]
    }
    getWeather()
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .DiaryView{
    width: 100%;
    height: 100%;
    background-color: #f4f5fd;
    .DiaryCententBox{
      padding: 20px;
    }
    .infoBox{
      padding: 20px;

    }
    .TimeLineBox{
      padding-right: 30px;
      height: calc( 100vh - 3.4rem);
      overflow: auto;
    }
  }
</style>
