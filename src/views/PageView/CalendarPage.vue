<template>
  <div class="DataViewPage">
    <el-calendar>
      <template>

        '✔'
        <p>
          <span v-if="item.todoFdate.substring(0,10) === data.day">
            {{item.todoCentent}}
          </span>
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { todoPro } from '@/utils/api'

export default defineComponent({
  name: 'DataViewPage',
  setup () {
    const state = reactive({
      dataList: ''
    })
    const getData = async () => {
      const params = {
        page: 1,
        limit: 1000,
        type: 1
      }
      // const { data: res } = await todoPro.todoList(params)
      // state.dataList = res.page.list
    }
    getData()
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>

</style>
