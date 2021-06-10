<template>
  <div class="TodoPage">
<!--    左侧筛选 div   filter 和 ListGraop-->
    <div class="LeftMange">
      <CategorayFilter></CategorayFilter>
      <ListGrop></ListGrop>
    </div>
<!--    主要内容显示区域-->
    <div class="RightContent">
      <div class="TodoHeader">
        <TodoMainHeader></TodoMainHeader>
      </div>
      <div class="TodoContent">
        <TodoMainContent></TodoMainContent>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import CategorayFilter from '@/components/TodoComponent/CategorayFilter'
import ListGrop from '@/components/TodoComponent/ListGrop'
import TodoMainHeader from '@/components/TodoComponent/TodoMainHeader'
import TodoMainContent from '@/components/TodoComponent/TodoMainContent'
export default defineComponent({
  name: 'TodoPage',
  components: {
    CategorayFilter,
    ListGrop,
    TodoMainHeader,
    TodoMainContent
  },
  setup () {
    return {}
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
  }
</style>
