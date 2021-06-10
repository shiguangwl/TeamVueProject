<template>
  <div class="NotePageView">
    <div class="LeftList">
      <MultilevelDirectory></MultilevelDirectory>
    </div>
    <div class="RightMain">
      RightMain
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import MultilevelDirectory from '@/components/MultilevelDirectory'
export default defineComponent({
  name: 'NotePageView',
  components: {
    MultilevelDirectory
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .NotePageView{
    display: flex;
  }
  .LeftList{
    span{
      padding-left: 10px;
    }
    padding: 10px;
    width: 250px;
    box-shadow: 1px 0 0 0 hsl(0deg 0% 55% / 16%);
    height: 100vh;
  }
  .RightMain{
    flex-grow: 1;
  }
</style>
