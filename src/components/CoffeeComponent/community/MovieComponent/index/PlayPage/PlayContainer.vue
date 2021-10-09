<template>
  <div class="PlayContainer">
    <iframe id="playbox"
            src="https://jx.sujx.top/jiexi.php/?url=https://v.youku.com/v_show/id_XNTEwMzgzMDU0OA==.html"
            allowfullscreen="true"
            frameborder="0" width="100%"
            height="100%" scrolling="No"
            leftmargin="0" topmargin="0">
    </iframe>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'PlayContainer',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .PlayContainer{
    background-color: #1B9AEE;
    width: 100%;
    height: 560px;
  }
</style>
