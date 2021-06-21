<template>
  <div class="VItem">
    <div class="img">
      <router-link :to="{ path: '/coffee/movie/show-2' }">
        <img src="https://oss.wwdianying.net/dy/2368d999dfdf2cc1c1951d7a52742c46" alt="">
      </router-link>
    </div>
    <div class="title">
      <router-link :to="{ path: '/coffee/movie/show-2' }">斗罗大陆</router-link>
    </div>
    <span>更新到161话</span>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'VItem',
  setup () {
    return {}
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
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
    }
    border: 1px;
  }
</style>
