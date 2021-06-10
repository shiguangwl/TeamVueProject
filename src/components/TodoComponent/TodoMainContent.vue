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
    <div class="SubmitItem">
      <SubmitItem></SubmitItem>
    </div>
    <div class="Todos">
      <ul>
        <li>
          <div class="left"><input type="checkbox"></div>
          <div class="middle">
            <span class="todo_title">我是TODO标题送到附近大理烦得很</span>
            <span class="todo_des">
          <i class="el-icon-arrow-down el-icon--right"></i>
          <span>日期时间...</span>
        </span>
          </div>
          <div class="right">
            <a class="#" title="移动到"><i class="el-icon-document-copy"></i></a>
            <a class="#" title="设置日期"><i class="el-icon-date"></i></a>
            <a class="#" title="星标"><i class="el-icon-star-off"></i></a>
          </div>
        </li>
        <li>
          <div class="left"><input type="checkbox"></div>
          <div class="middle">
            <span class="todo_title">我是TODO标题送到附近大理烦得很</span>
            <span class="todo_des">
          <i class="el-icon-arrow-down el-icon--right"></i>
          <span>日期时间...</span>
        </span>
          </div>
          <div class="right">
            <a class="#" title="移动到"><i class="el-icon-document-copy"></i></a>
            <a class="#" title="设置日期"><i class="el-icon-date"></i></a>
            <a class="#" title="星标"><i class="el-icon-star-off"></i></a>
          </div>
        </li>
        <li>
          <div class="left"><input type="checkbox"></div>
          <div class="middle">
            <span class="todo_title">我是TODO标题送到附近大理烦得很</span>
            <span class="todo_des">
          <i class="el-icon-arrow-down el-icon--right"></i>
          <span>日期时间...</span>
        </span>
          </div>
          <div class="right">
            <a class="#" title="移动到"><i class="el-icon-document-copy"></i></a>
            <a class="#" title="设置日期"><i class="el-icon-date"></i></a>
            <a class="#" title="星标"><i class="el-icon-star-off"></i></a>
          </div>
        </li>
        <li>
          <div class="left"><input type="checkbox"></div>
          <div class="middle">
            <span class="todo_title">我是TODO标题送到附近大理烦得很</span>
            <span class="todo_des">
          <i class="el-icon-arrow-down el-icon--right"></i>
          <span>日期时间...</span>
        </span>
          </div>
          <div class="right">
            <a class="#" title="移动到"><i class="el-icon-document-copy"></i></a>
            <a class="#" title="设置日期"><i class="el-icon-date"></i></a>
            <a class="#" title="星标"><i class="el-icon-star-off"></i></a>
          </div>
        </li>
        <li>
          <div class="left"><input type="checkbox"></div>
          <div class="middle">
            <span class="todo_title">我是TODO标题送到附近大理烦得很</span>
            <span class="todo_des">
          <i class="el-icon-arrow-down el-icon--right"></i>
          <span>日期时间...</span>
        </span>
          </div>
          <div class="right">
            <a class="#" title="移动到"><i class="el-icon-document-copy"></i></a>
            <a class="#" title="设置日期"><i class="el-icon-date"></i></a>
            <a class="#" title="星标"><i class="el-icon-star-off"></i></a>
          </div>
        </li>
      </ul>
    </div>
    <div class="compTodo">
      <div><span>已完成</span></div>
      <div class="comTodoList">
        <ul>
          <li>
            <input type="checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
          <li>
            <input type="checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
          <li>
            <input type="checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
          <li>
            <input type="checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
          <li>
            <input type="checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
          <li>
            <input type="checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import SubmitItem from '@/components/TodoComponent/SubmitItem'

export default defineComponent({
  name: 'TodoMianContent',
  components: {
    SubmitItem
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
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
      .middle{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      .right{
        cursor: pointer;
        font-size: 16px;
      }
    }
    ul li:hover{
      background-color: #F7F7F7;
    }
    .compTodo{
      display: flex;
      ul li{
        display: flex;
      }
    }
  }
</style>
