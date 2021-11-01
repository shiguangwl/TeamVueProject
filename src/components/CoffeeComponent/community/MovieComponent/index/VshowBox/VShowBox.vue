<!--
首页分类显示
-->
<template>
  <div class="VShowBox">
    <span>正在热播</span>
    <div class="ContentList">
      <VItem :data="item" v-for="item in dataItme" :key="item.url"></VItem>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import VItem from '@/components/CoffeeComponent/community/MovieComponent/index/VshowBox/VItem'
import { VideoData } from '@/utils/api'

export default defineComponent({
  name: 'VShowBox',
  components: {
    VItem
  },
  setup () {
    const state = reactive({
      dataItme: []
    })

    const getData = async () => {
      const { data: res } = await VideoData.GetIndexData()
      state.dataItme = res
    }
    // 初始化数据
    getData()
    return {
      ...toRefs(state)
    }
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
