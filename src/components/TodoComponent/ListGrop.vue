<template>
  <div class="ListGrop">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="清单" name="1">
        <el-input v-model="addGroupName" @keyup.enter="addGroup" placeholder='输入:"分组名,描述" -> 回车添加' />
        <div class="ListGorpItems">
          <ul>
            <li v-for="item in dataList" :key="item.todoGId" @click="loadGroupData(item.todoGId)">
              <span class="Span_CircleColer"></span>
              <span class="span_title">{{item.todoGName}}</span>
              <span class="span_num">:)</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { todoPro } from '@/utils/api'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'ListGrop',
  setup (props, ctx) {
    const state = reactive({
      activeNames: ['1'],
      addGroupName: '',
      dataList: []
    })
    // 请求分组列表
    const getTodoGroupList = async () => {
      // const { data: res } = await todoPro.todoGroupList()
      // state.dataList = res.page.list
    }
    // 添加分组
    const addGroup = async () => {
      const params = {
        todoGName: state.addGroupName.split(',')[0],
        todoGDesc: state.addGroupName.split(',')[1]
      }
      const { data: res } = await todoPro.addGroup(params)
      if (res.code === 0) {
        ElMessage({ message: '操作成功', type: 'success' })
        getTodoGroupList()
        state.addGroupName = ''
      } else {
        ElMessage(res.msg)
      }
    }
    // 加载分组
    const loadGroupData = (groupId) => {
      const params = {
        page: 1,
        limit: 1000,
        groupId: groupId
      }
      ctx.emit('loadData', params)
    }
    getTodoGroupList()
    return {
      ...toRefs(state),
      ...toRefs(props),
      loadGroupData,
      addGroup
    }
  }
})
</script>

<style lang="scss" scoped>
.ListGorpItems{
  ul li{
    cursor: pointer;
    padding: 0px 10px;
    border-radius: 6px;
    display: block;
    height: 35px;
    line-height: 35px;
    font-size: 17px;
    span.span_title{
      margin-left: 15px;
    }
    span.span_num{
      float: right;
      color: #BFBFBF;
    }
    span.Span_CircleColer{
      height: 10px;
      width: 10px;
      background-color: rgba(27, 198, 195, 0.62);
      display: inline-block;
      border-radius: 10px;
    }
  }
  ul li:hover{
    background-color: #F7F7F7;
  }
}
</style>
