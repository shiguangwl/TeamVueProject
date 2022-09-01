<template>
  <div class="DiaryTimeLine">
    <div class="TimeLine">
      <div class="block">
        <el-timeline>
          <el-timeline-item v-for="item in pageData.list" :key="item.pkId"
                            :timestamp="item.fdate" placement="top">
            <DiaryCentent :data="item"></DiaryCentent>
          </el-timeline-item>
          <DiaryCentent></DiaryCentent>
          <DiaryCentent></DiaryCentent>
          <DiaryCentent></DiaryCentent>
          <DiaryCentent></DiaryCentent>
          <DiaryCentent></DiaryCentent>
          <DiaryCentent></DiaryCentent>
<!--              TODO 分页待完善      -->
<!--          <el-pagination background layout="prev, pager, next"-->
<!--                         :total="'100'"-->
<!--                         :page-size="'10'"-->
<!--          ></el-pagination>-->
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onActivated, onMounted, provide, reactive, toRefs } from 'vue'
import DiaryCentent from '@/components/CoffeeComponent/community/DiaryCentent'
import { Community } from '@/utils/api'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'DiaryTimeLine',
  components: {
    DiaryCentent
  },
  setup () {
    const state = reactive({
      pageData: ''
    })
    // 查询日记列表
    const GetDiaryList = async () => {
      const params = {
        page: 1,
        limit: 1000
      }
      const { data: res } = await Community.GetDiaryList(params)
      if (res.code === 0) {
        state.pageData = res.page
        state.pageData.list.reverse()
      } else {
        ElMessage(res.msg)
      }
    }
    onActivated(() => {
      GetDiaryList()
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .DiaryTimeLine{
  }
</style>
