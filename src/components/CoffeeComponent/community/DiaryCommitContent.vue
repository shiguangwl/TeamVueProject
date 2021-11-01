<template>
  <div class="DiaryCommitContent">
    <SubmitItem v-model="data.content" @subAction="saveDiary">
      <h1>更多选项插槽</h1>
    </SubmitItem>
  </div>
</template>

<script>
import { defineComponent, inject, reactive, toRefs } from 'vue'
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
        fdate: new Date().getTime()
      }
    })
    // 添加统计
    const saveDiary = async () => {
      const { data: res } = await Community.Savediary(state.data)
      if (res.code === 0) {
        ElMessage({ message: res.msg, type: 'success' })
        state.dataList.push(state.data)
      } else {
        ElMessage(res.msg)
      }
    }
    console.log(state.dataList)
    return {
      ...toRefs(state),
      saveDiary
    }
  }
})
</script>

<style scoped>

</style>
