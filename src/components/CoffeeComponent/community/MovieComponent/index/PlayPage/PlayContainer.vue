<!--播放容器-->
<template>
  <div class="PlayContainer">
    <iframe id="playbox"
            :src="playUrl"
            allowfullscreen="true"
            frameborder="0" width="100%"
            height="100%" scrolling="No"
            leftmargin="0" topmargin="0">
    </iframe>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'PlayContainer',
  props: {
    playUrl: String
  },
  setup (props) {
    return {
      ...toRefs(props)
    }
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
