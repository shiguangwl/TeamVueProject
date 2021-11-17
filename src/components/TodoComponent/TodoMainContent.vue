<template>
  <div class="TodoMainContent">
    <div class="TopTitle">
      <span>全部-16</span>
      <div class="right">
        <el-dropdown>
        <span class="el-dropdown-link">
          排序方式<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>文件名</el-dropdown-item>
              <el-dropdown-item>创建时间</el-dropdown-item>
              <el-dropdown-item>优先级</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <!--   提交组件   -->
    <div class="SubmitItem">
      <SubmitItem v-model="dataItem.todoCentent" @subAction="submitClick">
        <slot>
          <el-form
            label-position="left"
            label-width="100px"
            :model="dataItem"
          >
            <el-form-item label="所属分组">
              <el-input v-model="dataItem.todoGoupId"></el-input>
            </el-form-item>
            <el-form-item label="待办描述">
              <el-input v-model="dataItem.todoDesc"></el-input>
            </el-form-item>
            <el-form-item label="是否星标">
              <el-checkbox v-model="dataItem.todoStar" label="星标TDDO项"></el-checkbox>
            </el-form-item>
            <el-form-item label="待办类型">
              <el-input v-model="dataItem.todoType"></el-input>
            </el-form-item>
            <el-form-item label="完成状态">
              <el-input v-model="dataItem.todoComplete"></el-input>
            </el-form-item>
            <el-form-item label="待办周期">
              <el-input v-model="dataItem.todoTimer"></el-input>
            </el-form-item>
            <el-form-item label="结束时间">
              <el-input v-model="dataItem.todoFdate"></el-input>
            </el-form-item>
          </el-form>
        </slot>
      </SubmitItem>
    </div>
    <div class="Todos">
      <ul>

        <template v-for="item in dataList.slice().reverse()" :key="item.pkId">
          <li v-if="item.todoComplete == 0">
            <div class="left"><input type="checkbox" @click="ChangeTodoStatus(item.pkId, item.todoComplete===1?0:1)" class="tui-checkbox"></div>
            <div class="middle">
              <span class="todo_title">{{ item.todoCentent }}</span>
              <span class="todo_des">
          <i class="el-icon-arrow-down el-icon--right"></i>
          <span>日期时间...</span>
        </span>
            </div>
            <div class="right">
              <a class="#" title="移动到"><i class="el-icon-document-copy"></i></a>
              <a class="#" title="设置日期"><i class="el-icon-date"></i></a>
              <a class="#" title="星标"><i class="el-icon-star-off"></i></a>
              <a class="#" title="删除" @click="delTodoItem(item.pkId)"><i class="el-icon-delete"></i></a>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <div class="compTodo">
      <div><span>已完成</span></div>
      <div class="comTodoList">
        <ul>
          <template v-for="item in dataList" :key="item.pkId">
            <li v-if="item.todoComplete == 1">
              <input  :checked="true" type="checkbox" class="tui-checkbox" @click="ChangeTodoStatus(item.pkId,item.todoComplete===1?0:1)" />
              <a href="#">{{item.todoCentent}}</a>
              <span class="todo_title">{{item.updateTime}}</span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from 'vue'
import SubmitItem from '@/components/TodoComponent/SubmitItem'
import { todoPro } from '@/utils/api'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'TodoMianContent',
  components: {
    SubmitItem
  },
  props: {
    // 父组件传递数据
    dataList: Array
  },
  setup (props, ctx) {
    const state = reactive({
      dataT: '测试',
      dataItem: {
        todoGoupId: 0, // 所属分组
        todoCentent: '', // 待办内容
        todoDesc: '', // 待办描述
        todoStar: 0, // 是否星标
        todoType: 0, // 待办类型
        todoComplete: 0, // 是否完成
        todoTimer: '2-2 0/1 * * * ? ', // 待办周期
        todoFdate: '2029-10-09 15:19:36' // 结束时间
      }
    })
    // 提交事件
    const submitClick = async () => {
      state.dataItem.todoStar = state.dataItem.todoStar ? 1 : 0
      const { data: res } = await todoPro.addTodoItem(state.dataItem)
      if (res.code === 0) {
        // 添加刷新列表
        ctx.emit('loadData')
        // 重置字段
        state.dataItem = {
          todoGoupId: 0, // 所属分组
          todoCentent: '', // 待办内容
          todoDesc: '', // 待办描述
          todoStar: 0, // 是否星标
          todoType: 0, // 待办类型
          todoComplete: 0, // 是否完成
          todoTimer: '2-2 0/1 * * * ? ', // 待办周期
          todoFdate: '2029-10-09 15:19:36' // 结束时间
        }
      }
    }
    // 更新Todo状态
    const ChangeTodoStatus = (pkId, status) => {
      props.dataList.map(async item => {
        if (item.pkId === pkId) {
          const { data: res } = await todoPro.changeStatus(pkId, status)
          if (res.code === 0) {
            item.todoComplete = !item.todoComplete
          }
          ElMessage({ message: res.msg, type: 'success' })
        }
        return item
      })
    }
    // 删除项
    const delTodoItem = async (pkId) => {
      // console.log(pkId)
      const { data: res } = await todoPro.delTodoItem(pkId)
      if (res.code === 0) {
        for (var i = 0; i < props.dataList.length; i++) {
          if (props.dataList[i].pkId === pkId) {
            // eslint-disable-next-line vue/no-mutating-props
            props.dataList.splice(i, 1)
          }
        }
      }
    }
    return {
      ...toRefs(state),
      ...toRefs(props),
      ChangeTodoStatus,
      delTodoItem,
      submitClick
    }
  }
})
</script>

<style lang="scss" scoped>
  .tui-checkbox:checked {
    background:#1673ff
  }
  .tui-checkbox {
    cursor: pointer !important;
    width:1.3rem;
    height:1.3rem;
    background-color:#ffffff;
    border:solid 1px #dddddd;
    -webkit-border-radius:50%;
    border-radius:50%;
    font-size:0.8rem;
    margin:0;
    padding:0;
    position:relative;
    display:inline-block;
    vertical-align:top;
    cursor:default;
    -webkit-appearance:none;
    -webkit-user-select:none;
    user-select:none;
    -webkit-transition:background-color ease 0.1s;
    transition:background-color ease 0.1s;
  }
  .tui-checkbox:checked::after {
    content:'';
    top:5px;
    left:5px;
    position:absolute;
    background:transparent;
    border:#fff solid 2px;
    border-top:none;
    border-right:none;
    height:6px;
    width:10px;
    -moz-transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    -webkit-transform:rotate(-45deg);
    transform:rotate(-45deg);
  }
  .TodoMainContent{
    width: 80%;
  }
  .SubmitItem{
    width: 100%;
  }
  .TopTitle{
    display: flex;
    margin: 20px 0px;
    justify-content: space-between;
  }

  .Todos{
    ul li{
      cursor: pointer;
      margin: 10px 0px;
      height: 45px;
      display: flex;
      border-radius: 10px;
      .todo_title{
        font-size: 1.1rem;
      }
      .todo_des{
        color: #cac6c6;
      }
      .middle{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      .right{
        cursor: pointer;
        margin: auto;
        font-size: 1.3rem;
      }
      .left{
        padding-top: 0.1rem;
        padding-right: 10px;
      }
    }
    ul li:hover{
      background-color: #F7F7F7;
    }
  }
  .compTodo{
    .comTodoList{
      display: flex;
      a{
        margin-left: 10px;
      }
      ul li{
        display: flex;
        margin: 10px 0;
      }
    }
  }
</style>
