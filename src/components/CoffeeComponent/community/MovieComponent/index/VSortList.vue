<!--排行榜组件-->
<template>
  <div class="VSortList">
    <span>{{title}}</span>
    <div class="content">
      <ul>
        <li v-for="(item,index) in data" :key="item.ent_id">
<!--          <router-link :to="{ path: '/coffee/movie/show-1'+'&'+dataItem.ent_id }">-->
            <div class="box">
              <span>{{index}}.</span><a href="#">{{item.title}}</a>
            </div>
<!--          </router-link>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'VSortList',
  props: {
    data: Array,
    title: String
  },
  setup (props) {
    return {
      ...toRefs(props)
    }
  }
})
</script>

<style lang="scss" scoped>
  .VSortList{
    span{
      font-size: 1.4rem;
      font-weight: 700;
      padding: 15px 10px ;
    }
    .content{
      li{
        span{
          font-style: italic;
          font-weight: 700;
          font-size: 1.6rem;
          color: #cd5b5b;
        }
        i{
          font-size: 0.3rem;
          color: #BFBFBF;
        }
        font-size: 1.3rem;
        line-height: 2.5rem;
        border-radius: 10px;
        background-color: #F3F5F7;
        margin: 5px 0;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
