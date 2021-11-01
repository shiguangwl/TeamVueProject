<template>
  <div class="VItem">
    <div class="img">
      <router-link :to="{ path: '/coffee/movie/show-2' }">
        <img :src="dataItem.img" alt="">
      </router-link>
    </div>
    <div class="title">
      <router-link :to="{ path: '/coffee/movie/show-2' }">{{dataItem.title}}</router-link>
    </div>
    <span>{{dataItem.hint}}</span>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'VItem',
  props: {
    data: Object
  },
  setup (props, ctx) {
    const state = reactive({
      dataItem: props.data
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .VItem{
    width: 12rem;
    padding: 10px;
    .title{
      a{
        font-size: 1.1rem;
        color: #2c3e50;
        font-weight: 700;
      }
    }
    span{
      color: #BFBFBF;
    }
    img{
      width: 170px;
      height: 240px;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
    }
    border: 1px;
  }
</style>
