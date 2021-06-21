<template>
  <div class="main">
    <div class="navbar_box">
      <Navbar></Navbar>
    </div>
    <div class="rootmian_box">
      <transition name="el-zoom-in-center">
        <router-view/>
      </transition>
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
    height: 100%;
  }
</style>
