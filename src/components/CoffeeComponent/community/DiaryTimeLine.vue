<template>
  <div class="DiaryTimeLine">
    <div class="TimeLine">
      <div class="block">
        <el-timeline>
          <el-timeline-item v-for="item in pageData.list" :key="item.pkId"
                            :timestamp="item.fdate" placement="top">
            <DiaryCentent :data="item"></DiaryCentent>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue'
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
      const { data: res } = await Community.GetDiaryList()
      if (res.code === 0) {
        state.pageData = res.page
        state.pageData.list.reverse()
      } else {
        ElMessage(res.msg)
      }
    }
    // 初始化数据
    GetDiaryList()
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
