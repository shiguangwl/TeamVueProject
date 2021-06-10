<template>
  <div class="CoffeePage">
    <div class="LeftPlan">
      <div class="MyDayInfo">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'每日提示 ' + o }}
          </div>
        </el-card>
      </div>
      <div class="MainToolBox">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'每日提示 ' + o }}
          </div>
        </el-card>
      </div>
    </div>
    <div class="RightPlan">
      <div class="IndexPlayBox">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'每日提示 ' + o }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'CoffeePage',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .CoffeePage{
    padding: 15px;
    display: flex;
    .MyDayInfo{
      width: 30%;
    }
    .LeftPlan{
      width: 100vh;
      padding: 10px;
      .MainToolBox{
        width: 100%;
      }
    }
    .RightMain{
      flex-grow: 1;
      width: 100vh;
      padding: 10px;
    }
  }
</style>
