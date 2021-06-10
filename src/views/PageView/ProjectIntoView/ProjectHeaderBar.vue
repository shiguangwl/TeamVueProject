<template>
  <div class="ProjectHeaderBar">
    <el-button size="mini" round icon="el-icon-s-home">首页</el-button>
    <el-button size="mini" round icon="el-icon-s-home">
      <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-button>
    <el-popover
      placement="bottom"
      title="收藏"
      :width="200"
      trigger="hover"
      content=""
    >
      <template #reference>
        <el-button size="mini" round icon="el-icon-star-on" style="font-size: 20px;padding: 4px;"></el-button>
      </template>
    </el-popover>
    <el-popover
      placement="bottom"
      title="项目信息"
      :width="200"
      trigger="hover"
      content=""
    >
      <template #reference>
        <el-button size="mini" round icon="el-icon-info" style="font-size: 20px;padding: 4px;"></el-button>
      </template>
    </el-popover>
    <el-divider direction="vertical"></el-divider>
<!--    Lis-->
    <div class="Btn_list">
      <ul>
        <li><router-link :to="{ path: 'arrange'}">我的安排</router-link></li>
        <li><router-link :to="{ path: 'note'}">我的笔记</router-link></li>
        <li><router-link :to="{ path: 'file'}">我的文件</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'ProjectHeaderBar',
  setup () {
    const state = reactive({
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .ProjectHeaderBar{
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
  }
  .Btn_list{
    ul li{
      float: left;
      height: 50px;
      line-height: 50px;
      padding: 0 10px;
      cursor: pointer;
      transition: border .1s;
      color: #8C8C8CFF;
    }
    ul li:hover{
      border-bottom: solid #1B9AEE 3px;
    }
  }
</style>
