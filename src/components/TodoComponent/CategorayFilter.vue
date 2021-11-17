<template>
  <div class="CategorayFilter">
    <ul>
      <li @click="load()">
        <i class="el-icon-circle-check"></i>
        <span class="span_title">全部</span>
        <span class="span_num">6</span>
      </li>
      <li @click="load(1)">
        <i class="el-icon-star-off"></i>
        <span class="span_title">星标</span>
        <span class="span_num">4</span>
      </li>
      <li @click="load(2)">
        <i class="el-icon-date"></i>
        <span class="span_title">今天</span>
        <span class="span_num">5</span>
      </li>
      <li>
        <i class="el-icon-folder-checked"></i>
        <span class="span_title">项目任务</span>
        <span class="span_num">44</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'CategorayFilter',
  setup (props, ctx) {
    const state = reactive({
      dataList: ''
    })
    const load = (type) => {
      const params = {
        page: 1,
        limit: 1000,
        type: type
      }
      ctx.emit('loadData', params)
    }
    return {
      ...toRefs(state),
      load
    }
  }
})
</script>

<style lang="scss" scoped>
  .CategorayFilter{
    width: 100%;
    ul li{
      cursor: pointer;
      padding: 0px 10px;
      border-radius: 6px;
      display: block;
      height: 35px;
      line-height: 35px;
      font-size: 17px;
      span.span_title{
        margin-left: 15px;
      }
      span.span_num{
        float: right;
        color: #BFBFBF;
      }
    }
    ul li:hover{
      background-color: #F7F7F7;
    }
  }
</style>
