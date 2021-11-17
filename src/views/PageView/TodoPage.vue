<template>
  <div class="TodoPage">
<!--    左侧筛选 div   filter 和 ListGraop-->
    <div class="LeftMange">
      <CategorayFilter  @loadData="getTodoProList"></CategorayFilter>
      <ListGrop :dataList="GroupDataList"  @loadData="getTodoProList"></ListGrop>
    </div>
<!--    主要内容显示区域-->
    <div class="RightContent">
      <div class="TodoHeader">
        <!--    头部搜索框    -->
        <TodoMainHeader></TodoMainHeader>
      </div>
      <div class="TodoContent">
        <TodoMainContent :dataList="dataList" @loadData="getTodoProList"></TodoMainContent>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import CategorayFilter from '@/components/TodoComponent/CategorayFilter'
import ListGrop from '@/components/TodoComponent/ListGrop'
import TodoMainHeader from '@/components/TodoComponent/TodoMainHeader'
import TodoMainContent from '@/components/TodoComponent/TodoMainContent'
import { todoPro } from '@/utils/api'

export default defineComponent({
  name: 'TodoPage',
  components: {
    CategorayFilter,
    ListGrop,
    TodoMainHeader,
    TodoMainContent
  },
  setup () {
    const state = reactive({
      dataList: [],
      GroupDataList: []
    })
    // 请求获取待办
    const getTodoProList = async (params) => {
      // const params = {
      //   page: 1,
      //   limit: 1000
      // }
      const { data: res } = await todoPro.todoList(params)
      state.dataList = res.page.list
    }
    // 请求分组列表
    const getTodoGroupList = async () => {
      const { data: res } = await todoPro.todoGroupList()
      state.GroupDataList = res.page.list
    }
    // 初始化
    getTodoProList()
    getTodoGroupList()
    return {
      ...toRefs(state),
      getTodoProList
    }
  }
})
</script>

<style lang="scss" scoped>
  .TodoPage{
    display: flex;
  }
  .LeftMange{
    height: 100vh;
    padding: 20px;
    width: 240px;
    border-right: 1px solid #F0F0F0;
    display: flex;
    flex-direction: column;
  }
  .RightContent{
    flex-grow: 1;
    //background-color: red;
    padding: 10px;
    height: 100vh;
    overflow: scroll;
  }
</style>
