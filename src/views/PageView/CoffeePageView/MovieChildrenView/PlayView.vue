<template>
  <div class="PlayView">
    <div class="top">
      <el-row>
        <el-col :span="18">
          <div class="Left">
            <div class="PlayBox">
              <PlayContainer></PlayContainer>
            </div>
            <div class="info">
              <div class="titlediv">
                <span>斗罗大陆 第01集</span>
              </div>
              <div class="tagdiv">
                <el-tag type="info">电视剧</el-tag>
                <el-tag type="info">奇幻</el-tag>
                <el-tag type="info">中国/大陆</el-tag>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="Right">
            <PlaySource></PlaySource>
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
import { defineComponent, reactive } from 'vue'
import VShowBox from '@/components/CoffeeComponent/community/MovieComponent/index/VshowBox/VShowBox'
import PlayContainer from '@/components/CoffeeComponent/community/MovieComponent/index/PlayPage/PlayContainer'
import PlaySource from '@/components/CoffeeComponent/community/MovieComponent/index/PlayPage/PlaySource'

export default defineComponent({
  name: 'PlayView',
  components: {
    VShowBox,
    PlayContainer,
    PlaySource
  },
  setup () {
    return {}
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
</style>
