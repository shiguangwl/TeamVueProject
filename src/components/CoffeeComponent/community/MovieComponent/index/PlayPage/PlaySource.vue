<template>
  <div class="PlayChoesSource">
    <el-row>
      <el-col :span="18">
        <div class="Left">
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
          <el-button type="warning" round>第9集</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="Right">
          <el-button type="info"  size="small">官方资源</el-button>
          <el-button type="info"  size="small">资源1</el-button>
          <el-button type="info"  size="small">资源2</el-button>
          <el-button type="info"  size="small">资源3</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'PlaySource',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .PlayChoesSource{
    .Left{
      height: calc( 100vh - 3.4rem);
      overflow: auto;
      button{
        margin: 5px 8px;
      }
    }
    .Right{
      border-left: solid #2c3e50 1px ;
      button{
        width: 100%;
        margin:3px 0px;
      }
    }
  }
</style>
