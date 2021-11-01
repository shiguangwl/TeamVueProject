<!--
搜索组件
-->
<template>
  <div class="SearchComponent">
    <div class="Menu">
      <i class="el-icon-menu"></i>
    </div>
    <div class="Search">
      <el-input prefix-icon="el-icon-search" v-model="str" placeholder="请输入搜索内容"></el-input>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'SearchComponent',
  setup () {
    const state = reactive({
      str: ''
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .SearchComponent{
    display: flex;
  }
  .Menu{
    i{
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 40px;
      font-size: 1.8rem;
      border: solid #BFBFBF 1px;
      background-color: #F7F7F7;
      color: #BFBFBF;
      border-radius: 20px;
      cursor: pointer;
    }
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
  .Search{
  }
</style>
