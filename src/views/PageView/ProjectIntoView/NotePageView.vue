<template>
  <div class="NotePageView">
    <div class="LeftList">
      <MultilevelDirectory></MultilevelDirectory>
    </div>
    <div class="RightMain" style="padding: 20px">
      <v-md-editor ref="preview" v-model="text" height="100%"  mode="preview"></v-md-editor>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRef, toRefs } from 'vue'
import MultilevelDirectory from '@/components/MultilevelDirectory'
export default defineComponent({
  name: 'NotePageView',
  components: {
    MultilevelDirectory
  },
  setup () {
    const state = reactive({
      text: '# 当前页面待开发~~~:fist_raised:' +
        '\n' +
        '项目笔记整理,实现分类归纳整理,可同步到博客:fist_raised::airplane::anchor::black_nib:'
    })
    return {
      ...toRefs(state)
    }
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
