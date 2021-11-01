<template>
  <div class="DiaryView">
    <el-row>
      <el-col :span="14">
        <div class="DiaryCententBox">
          <el-card style="border-radius: 30px" shadow="hover">
            <DiaryCommitContent></DiaryCommitContent>
          </el-card>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="TimeLineBox">
          <DiaryTimeLine></DiaryTimeLine>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import DiaryCommitContent from '@/components/CoffeeComponent/community/DiaryCommitContent'
import DiaryTimeLine from '@/components/CoffeeComponent/community/DiaryTimeLine'

export default defineComponent({
  name: 'DiaryView',
  components: {
    DiaryCommitContent,
    DiaryTimeLine
  },
  setup () {
    return {}
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
    .TimeLineBox{
      padding-right: 30px;
      height: calc( 100vh - 3.4rem);
      overflow: auto;
    }
  }
</style>
