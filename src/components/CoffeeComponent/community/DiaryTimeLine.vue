<template>
  <div class="DiaryTimeLine">
    <div class="TimeLine">
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <DiaryCentent></DiaryCentent>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <DiaryCentent></DiaryCentent>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <DiaryCentent></DiaryCentent>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <DiaryCentent></DiaryCentent>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <DiaryCentent></DiaryCentent>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <DiaryCentent></DiaryCentent>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <DiaryCentent></DiaryCentent>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <DiaryCentent></DiaryCentent>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <DiaryCentent></DiaryCentent>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import DiaryCentent from '@/components/CoffeeComponent/community/DiaryCentent'
export default defineComponent({
  name: 'DiaryTimeLine',
  components: {
    DiaryCentent
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .DiaryTimeLine{
  }
</style>
