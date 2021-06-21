<!--
首页分类显示
-->
<template>
  <div class="VShowBox">
    <span>正在热播</span>
    <div class="ContentList">
      <VItem></VItem>
      <VItem></VItem>
      <VItem></VItem>
      <VItem></VItem>
      <VItem></VItem>
      <VItem></VItem>
      <VItem></VItem>
      <VItem></VItem>
      <VItem></VItem>
      <VItem></VItem>
      <VItem></VItem>
      <VItem></VItem>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import VItem from '@/components/CoffeeComponent/community/MovieComponent/index/VshowBox/VItem'

export default defineComponent({
  name: 'VShowBox',
  components: {
    VItem
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .VShowBox{
    span{
      font-size: 1.3rem;
      font-weight: 700;
      display: block;
      margin: 15px;
    }
    .ContentList{
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
