<!--影视播放页面-->
<template>
  <div class="PlayView">
    <div class="top">
      <el-row>
        <el-col :span="18">
          <div class="Left">
            <div class="PlayBox">
              <div class="PlayContainer">
                <iframe id="playbox"
                        :src="jiexi+playUrl"
                        allowfullscreen="true"
                        frameborder="0" width="100%"
                        height="100%" scrolling="No"
                        leftmargin="0" topmargin="0">
                </iframe>
              </div>
            </div>
            <div class="info">
              <div class="titlediv">
                <span>{{data.title}}</span>
              </div>
              <div class="tagdiv">
                <el-tag type="info" v-for="i in data.moviecategory" :key="i">{{i}}</el-tag>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="Right">
            <PlaySource :sourceData="allepidetail" @changePlay="changePlay"></PlaySource>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <VShowBox></VShowBox>
    </div>
  </div>
</template>

<script>
import { defineComponent, onActivated, reactive, toRefs } from 'vue'
import VShowBox from '@/components/CoffeeComponent/community/MovieComponent/index/VshowBox/VShowBox'
import PlayContainer from '@/components/CoffeeComponent/community/MovieComponent/index/PlayPage/PlayContainer'
import PlaySource from '@/components/CoffeeComponent/community/MovieComponent/index/PlayPage/PlaySource'
import { useRoute } from 'vue-router'
import { VideoData } from '@/utils/api'
export default defineComponent({
  name: 'PlayView',
  components: {
    VShowBox,
    PlaySource
  },
  setup () {
    const state = reactive({
      data: '',
      VCid: '',
      Vid: '',
      playUrl: '',
      jiexi: 'https://jx.parwix.com:4433/player/?url=',
      allepidetail: {}
    })
    const route = useRoute()
    onActivated(async () => {
      const param = route.params.id.split('&')
      state.VCid = param[0]
      state.Vid = param[1]
      const params = {
        cat: state.VCid,
        id: state.Vid
      }
      const { data: res } = await VideoData.GetDetailInfo(params)
      state.data = res.data
      state.allepidetail = state.data.allepidetail
      state.playUrl = state.allepidetail[Object.keys(state.allepidetail)[0]][0].url
    })
    const changePlay = (url) => {
      state.playUrl = url
    }
    return {
      ...toRefs(state),
      changePlay
    }
  }
})
</script>

<style lang="scss" scoped>
  .PlayView{
    width: 90%;
    padding-top: 20px;
    margin: 0 auto;
    height: calc( 100vh - 3.4rem);
    .top{
      .Left{
        .PlayBox{
        }
        .info{
          .titlediv{
            font-weight: 700;
            font-size: 2.3rem;
          }
          .tagdiv{
            span{
              border-radius: 25px;
              margin: 4px 5px;
            }
          }
        }
      }
      .Right{
        height: 100%;
      }
    }
  }
  .PlayContainer{
    background-color: #1B9AEE;
    width: 100%;
    height: 560px;
  }
</style>
