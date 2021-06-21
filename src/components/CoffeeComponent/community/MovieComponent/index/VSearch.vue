<template>
  <div class="VSearch"  :class="{ isshowclass: isshow }">
    <div class="Search">
      <input type="text" placeholder="全网搜索你想看的~"   @focus="isshow=false" @blur="isshow=true"  >
      <div class="right">
        <div class="all_btn">
          <i class="el-icon-s-opportunity"></i>
          <span>搜全网</span>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="search_btn">
            <i class="el-icon-search"></i>
        </div>
      </div>
    </div>
    <el-divider style="margin: 5px"></el-divider>
    <div class="Hot">
      <span>大家都在搜这些</span>
      <div class="box">
        <a href="#">斗罗大陆</a>
        <a href="#">速度与机器9</a>
        <a href="#">御赐小仵作</a>
        <a href="#">困在时间里的父亲</a>
        <a href="#">速度与机器9</a>
        <a href="#">御赐小仵作</a>
        <a href="#">困在时间里的父亲</a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'VSearch',
  setup () {
    const state = reactive({
      isshow: true
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .isshowclass{
    height: 55px !important;
  }
  .VSearch{
    background-color: white;
    transition: all 0.3s;
    overflow: hidden;
    border-radius: 15px;
    margin: 0 auto;
    width: 600px;
    box-shadow: 0 7px 21px rgb(149 157 165 / 22%);
    .Search{
      padding: 0px 15px;
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      justify-content: space-between;
      input{
        width: 70%;
        border: none;
        height: 55px;
        font-size: 1.3rem;
        font-weight: 700;
      }
      input:focus-visible{
        outline: none;
      }
      .right{
        display: flex;
        align-items: center;
        color: #db542f;
      }
    }
    .Hot{
      padding: 10px;
      span{
        font-size: 1.1rem;
        font-weight: 500;
        color: #cac6c6;
      }
      .box{
        a{
          display: inline-block;
          height: 30px;
          line-height: 30px;
          padding: 0px 10px;
          margin: 5px;
          border-radius: 15px;
          //background-color: red;
          color: rgba(0,0,0,.83);
          background: rgba(0,26,58,.08);
        }
      }
    }
  }
</style>
