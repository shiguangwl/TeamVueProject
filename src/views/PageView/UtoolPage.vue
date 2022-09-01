<template>
  <div class="UtoolPage" style="height: 100%">
    <iframe id="playbox"
            :src="'./utool.html'"
            frameborder="0" width="100%"
            height="100%" scrolling="Yes"
            leftmargin="0" topmargin="0">
    </iframe>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'UtoolPage',
  setup () {
    return {}
  }
})
</script>

<style scoped>
</style>
