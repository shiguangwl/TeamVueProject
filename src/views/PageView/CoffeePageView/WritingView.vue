<template>
  <div class="WritingView">
    <div class="toolBar" style="height: 6%;display: flex;align-items: center">
      <!--      <el-tag>标题:</el-tag>-->
      <div class="title" style="width: 30%">
        <el-input v-model="title" placeholder="在这里输入你的文字标题">
          <template #prepend>标题:</template>
        </el-input>
      </div>
      <el-tag style="height: 100%;line-height: 36px">分类:</el-tag>
      <div class="selectCategory">
        <el-cascader
          :options="options"
          :props="{ checkStrictly: true }"
          v-model="categoryId"
          clearable
        />
      </div>
      <div class="tags">
        <el-input v-model="tags" placeholder="输入多个标签已逗号分隔">
          <template #prepend>标签:</template>
        </el-input>
      </div>
      <div class="show">
        <el-tag type="info" style="height: 100%;line-height: 36px">同步日志:</el-tag>
        <el-radio-group v-model="syncLog">
          <el-radio-button label="Y"></el-radio-button>
          <el-radio-button label="N"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="submit" style="margin-left: 20px">
        <el-button type="success" round @click="submitData">发布</el-button>
      </div>
    </div>
    <v-md-editor  v-model="text" height="94%"></v-md-editor>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { Community } from '@/utils/api'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'WritingView',
  setup: function () {
    const state = reactive({
      title: '', // 标题
      tags: '', // 标签
      categoryId: [], // 选择的分类
      syncLog: 'N', // 是否同步到日志
      text: '# 在这里输入你的内容', // 文章内容
      options: [] // 可选分类
    })
    // 提交数据
    const submitData = async () => {
      const reqData = {
        hosArticle: {
          articleTitle: state.title,
          // articleViews: '0',
          // articleCommentCount: '0',
          // articleDate: new Date().getTime(),
          // articleLikeCount: '0',
          articleMiniCentent: state.text.substr(0, 150),
          articleType: '0',
          articlePassword: ''
        },
        hosAcententEntity: {
          content: state.text
        },
        // 分类
        sortId: state.categoryId[state.categoryId.length - 1],
        // 标签
        lables: state.tags.split(',')

      }
      if (state.syncLog === 'Y') {
        reqData.hosArticle.articleType = 1
      }
      const { data: res } = await Community.SaveArticle(reqData)
      if (res.code === 0) {
        ElMessage({ message: '操作成功', type: 'success' })
        state.isregister = false
      } else {
        ElMessage(res.msg)
      }
    }
    // 树化数据
    const listToTree = (list) => {
      return list.filter(e => {
        const pid = e.pid // 父ID
        const newArr = list.filter(ele => {
          if (ele.value === pid) { // 遍历到元素
            if (!ele.children) {
              ele.children = []
            }
            ele.children.push(e)
            return true
          }
        })
        return newArr.length === 0
      })
    }
    // 数据初始化
    const init = async () => {
      const { data: res } = await Community.Getcategory()
      let categoryList = res.page.list
      categoryList = categoryList.map(item => {
        const r = {
          value: item.sortId,
          label: item.sortName,
          pid: item.sortParentId
        }
        return r
      })
      state.options = listToTree(categoryList)
    }
    init()
    return {
      submitData,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.WritingView{
  height: 100%;
}
</style>
