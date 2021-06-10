<template>
  <div class="HeaderBar">
    <ProjectHeaderBar></ProjectHeaderBar>
  </div>
  <div class="MainView">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import ProjectHeaderBar from '@/views/PageView/ProjectIntoView/ProjectHeaderBar'
export default defineComponent({
  name: 'ProjectView',
  components: {
    ProjectHeaderBar
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
