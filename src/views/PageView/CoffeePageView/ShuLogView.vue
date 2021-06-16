<template>
  <div class="ShuLog">
    <div class="Left">
      <div class="DiaryNewBox">
        <DiaryNew></DiaryNew>
      </div>
      <div class="post-article">
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
      </div>
      <el-pagination style="text-align: center"
                     background
                     layout="prev, pager, next"
                     :total="1000">
      </el-pagination>
    </div>
    <div class="Right">
      <HotTag></HotTag>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import DiaryNew from '@/components/CoffeeComponent/community/DiaryNew'
import PostItem from '@/components/CoffeeComponent/community/PostItem'
import HotTag from '@/components/CoffeeComponent/community/HotTag'

export default defineComponent({
  name: 'ShuLog',
  components: {
    DiaryNew,
    PostItem,
    HotTag
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .ShuLog{
    width: 100%;
    height: 100%;
    height: calc(100vh - 3.4rem);
    overflow: auto;
    display: flex;
    flex-grow: 1;
    .Left{
      width: 60%;
      display: flex;
      flex-direction: column;
      .DiaryNewBox{
        padding: 15px;
      }
      .post-article{
        padding: 15px;
      }
    }
    .Right{
      width: 40%;
      display: flex;
      flex-direction: column;
      padding: 15px;
    }
  }
</style>
