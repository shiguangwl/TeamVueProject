<template>
  <div class="FilesPage">
    <div class="LeftMange">
      <CategorayFilter></CategorayFilter>
      <el-progress :percentage="35">
        <el-button type="text">8.4 MB / 2.0 TB</el-button>
      </el-progress>
    </div>
    <div class="RightMain">
      <div class="Header">
        <SearchComponent></SearchComponent>
      </div>
      <div class="MainCentent">
        <div class="box1">
          <span>全部文件</span>
          <div class="btn_opt">
            <el-button small icon="el-icon-plus">文件夹</el-button>
            <el-button small icon="el-icon-plus">上传</el-button>
          </div>
        </div>
        <div class="box2">
          <el-checkbox v-model="checked">共3项</el-checkbox>
          <div class="btn_sort">
            <i class="el-icon-menu"></i>
            <i class="el-icon-s-grid"></i>
            <i class="el-icon-s-data"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import CategorayFilter from '@/components/TodoComponent/CategorayFilter'
import SearchComponent from '@/components/SearchComponent'
export default defineComponent({
  name: 'FilesPage',
  components: {
    CategorayFilter,
    SearchComponent
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .FilesPage{
    display: flex;
  }
  .LeftMange{
    height: 100vh;
    padding: 20px;
    width: 240px;
    border-right: 1px solid #F0F0F0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .RightMain{
    flex-grow: 1;
    padding: 15px 100px 15px 15px;
    .Header{
      margin: 5px 0px;
    }
    .MainCentent{
      .box1{
        margin-top: 30px;
        span{
          font-size: 16px;
          font-weight: 700;
        }
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .box2{
        display: flex;
        justify-content: space-between;
        border-bottom: solid #F7F7F7 1px;
        padding-bottom: 20px;
        padding-top: 8px;
      }
    }
  }
</style>
