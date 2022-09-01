<template>
  <div class="ArticleView">
    <div class="left_content">
<!--      <div class="headBox" style="align-content: center;margin-left: 30px;">-->
<!--        <div class="title" style="margin-bottom: 5px"><h3>我是标题</h3></div>-->
<!--        <div class="time" style="color: #9b9b9b">发布时间:2021-10-18 10:49</div>-->
<!--      </div>-->
      <v-md-editor ref="preview" v-model="articleContent.content" height="100%"  mode="preview"></v-md-editor>
    </div>
    <el-affix :offset="70">
      <div class="right_box" style="height: 100%;overflow: scroll">
        <div>
          <div
            v-for="anchor in titles" :key="anchor.lineIndex"
            :style="{ padding: `10px 0 10px ${anchor.indent * 15}px`}"
            @click="handleAnchorClick(anchor)"
          >
            <a style="cursor: pointer">{{ anchor.title }}</a>
          </div>
        </div>
      </div>
    </el-affix>
  </div>
</template>

<script>
import { defineComponent, onActivated, onMounted, onRenderTracked, onUpdated, reactive, ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { Community } from '@/utils/api'

export default defineComponent({
  name: 'ArticleView',
  setup () {
    const state = reactive({
      articleContent: '',
      titles: []
    })
    const route = useRoute()
    const preview = ref(null)
    onActivated(async () => {
      // 加载数据
      const id = route.params.Id
      const { data: res } = await Community.GetContent(id)
      state.articleContent = res.hosAcentent
      console.log('加载数据完成')
    })
    onUpdated(async () => {
      console.log('开始渲染目录树')
      renderH()
    })
    // 渲染标题
    const renderH = () => {
      // 渲染目录
      const anchors = preview.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
      // console.log(anchors, 'anchors')
      const titles = Array.from(anchors).filter((title) => !!title.innerText.trim())
      if (!titles.length) {
        state.titles = []
        return
      }
      const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort()
      state.titles = titles.map((el) => ({
        title: el.innerText,
        lineIndex: el.getAttribute('data-v-md-line'),
        indent: hTags.indexOf(el.tagName)
      }))
    }
    // 滚动到指定标题
    const handleAnchorClick = (anchor) => {
      const { lineIndex } = anchor
      const heading = preview.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`)
      // console.log('跳转到', heading)
      if (heading) {
        // console.log(preview.value.$el)
        heading.scrollIntoView()
        // preview.value.$el.scrollToTarget({
        //   target: heading,
        //   scrollContainer: window,
        //   top: 60
        // })
      }
    }
    return {
      ...toRefs(state),
      handleAnchorClick,
      preview
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
