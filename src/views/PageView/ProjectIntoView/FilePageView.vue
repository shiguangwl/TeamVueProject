<template>
  <div class="FilePageView">
    <div class="FileListMain">
      <h3>文件库</h3>
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="大小"
          prop="size">
        </el-table-column>
        <el-table-column
          label="更新时间"
          prop="changedTime">
        </el-table-column>
        <el-table-column
          align="right">
          <template #header>
            <div style="display: flex;">
              <el-button @click="testclick('我是提示消息')" size="mini">上传</el-button>
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </div>
          </template>
          <template #default="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, h } from 'vue'
// import Notice from '@/Utils/NoticeUtil.js'
export default defineComponent({
  name: 'FilePageView',
  setup () {
    const state = reactive({
      tableData: [{
        name: 'Vue-Echarts项目.pdf',
        size: '1.6M',
        changedTime: '2021-6-9 15:17'
      }, {
        name: 'Vue-Echarts项目.pdf',
        size: '1.6M',
        changedTime: '2021-6-9 15:17'
      }, {
        name: 'Vue-Echarts项目.pdf',
        size: '1.6M',
        changedTime: '2021-6-9 15:17'
      }, {
        name: 'Vue-Echarts项目.pdf',
        size: '1.6M',
        changedTime: '2021-6-9 15:17'
      }],
      search: ''
    })
    const deleteRow = (index, rows) => {
      rows.splice(index, 1)
    }
    function testclick (mesge) {
      this.$notify({
        title: '标题名称',
        message: h('i', { style: 'color: teal' }, mesge)
      })
    }
    return {
      ...toRefs(state),
      deleteRow,
      testclick
    }
  }
})
</script>

<style lang="scss" scoped>
  .FilePageView{
    width: 90%;
    margin: 0 auto;
  }
  .FileListMain{

  }
</style>
