<template>
  <div class="IndexPage">
    <div class="topcard">
      <el-row :gutter="20">
        <el-col :span="20">
          <el-card shadow="always">
            这是顶部Card  待修改   <!--// TODO 待修改-->
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="cards">
      <div class="card1">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>待办卡片</span>
              <el-button class="button" type="text">TO</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div class="card2">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>待办卡片</span>
              <el-button class="button" type="text">TO</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div class="card3">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>待办卡片</span>
              <el-button class="button" type="text">TO</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .topcard{
    margin-bottom: 20px;
  }
  .IndexPage{
    padding: 10px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 100%;
  }
  .cards{
    >div{
      width: 45%;
      margin: 5px;
    }
    display: flex;
    flex-wrap: wrap;
    padding: 2%;
    width: 100%;
  }
</style>
