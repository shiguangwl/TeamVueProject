<template>
  <div class="ArticleView">
    <div class="left_content">
      <div class="headBox" style="display: flex;align-content: center">
        <h3>我是标题</h3>
        <span>2021-10-18 10:49</span>
      </div>
      <v-md-editor v-model="text" height="100%"  mode="preview"></v-md-editor>
    </div>
    <el-affix :offset="70">
      <div class="right_box">2</div>
    </el-affix>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Community } from '@/utils/api'

export default defineComponent({
  name: 'ArticleView',
  setup () {
    const state = reactive({
      articleContent: '',
      text: '# 我是标题'
    })
    const route = useRoute()
    onMounted(async () => {
      const id = route.params.Id
      const { data: res } = await Community.GetContent(id)
      state.articleContent = res.hosAcentent
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .ArticleView{
    height: 92vh;
    //padding: 15px;
    display: flex;
    .left_content{
      width: 75%;
      box-shadow: 0 4px 8px 6px rgb(7 17 27 / 6%);
    }
    .right_box{
      width: 300px;
    }
  }
</style>
