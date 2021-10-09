<!--用户基本框架-->
<template>
  <div class="main">
    <div class="navbar_box">
      <!--   侧边栏菜单   -->
      <Navbar></Navbar>
    </div>
    <!--  主显示区域  -->
    <div class="rootmian_box">
      <!--   路由动画   -->
      <router-view v-slot="{ Component }">
        <transition name="el-zoom-in-center">
          <keep-alive>
            <component :is="Component"/>
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar'
export default defineComponent({
  name: 'Index',
  components: {
    Navbar
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
  .main{
    display: flex;
    width: 100%;
    height: 100vh;
  }
  .navbar_box{
    width: 5%;
    height: 100%;
  }
  .rootmian_box{
    width: 95%;
    height: 100vh;
    overflow: hidden;
  }
</style>
