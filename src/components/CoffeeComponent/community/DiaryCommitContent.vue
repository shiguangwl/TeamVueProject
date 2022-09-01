<template>
  <div class="DiaryCommitContent">
    <SubmitItem v-model="data.content" @subAction="saveDiary">
      <el-form
          label-position="left"
          label-width="100px"
          :model="dataItem"
      >
        <el-form-item label="天气">
          <el-input v-model="data.weather"></el-input>
        </el-form-item>
        <el-form-item label="心情">
          <el-input v-model="data.mood"></el-input>
        </el-form-item>
         <el-form-item label="日期时间">
           <el-date-picker
               v-model="data.fdate"
               type="datetime"
               placeholder="Select date and time"
           >
           </el-date-picker>
        </el-form-item>
        <el-form-item label="公开">
          <el-checkbox v-model="data.type" label="同步到动态"></el-checkbox>
        </el-form-item>
      </el-form>
    </SubmitItem>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import SubmitItem from '@/components/TodoComponent/SubmitItem'
import { Community } from '@/utils/api'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'CommitComment',
  components: {
    SubmitItem
  },
  setup () {
    const state = reactive({
      data: {
        content: '',
        weather: '无',
        mood: '无',
        type: '0',
        fdate: new Date()
      }
    })
    // TODO 添加后自动刷新日记列表
    // 添加日记
    const saveDiary = async () => {
      if (state.data.type === true) {
        state.data.type = 1
      } else {
        state.data.type = 0
      }
      state.data.fdate = state.data.fdate.getTime()
      const { data: res } = await Community.Savediary(state.data)
      if (res.code === 0) {
        ElMessage({ message: res.msg, type: 'success' })
      } else {
        ElMessage(res.msg)
      }
    }
    return {
      ...toRefs(state),
      saveDiary
    }
  }
})
</script>

<style scoped>

</style>
