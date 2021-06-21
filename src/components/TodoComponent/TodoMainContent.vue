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
          <div class="left"><input type="checkbox" class="tui-checkbox"></div>
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
          <div class="left"><input type="checkbox" class="tui-checkbox"></div>
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
          <div class="left"><input type="checkbox" class="tui-checkbox"></div>
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
          <div class="left"><input type="checkbox" class="tui-checkbox"></div>
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
          <div class="left"><input type="checkbox" class="tui-checkbox"></div>
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
            <input type="checkbox" class="tui-checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
          <li>
            <input type="checkbox" class="tui-checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
          <li>
            <input type="checkbox" class="tui-checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
          <li>
            <input type="checkbox" class="tui-checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
          <li>
            <input type="checkbox" class="tui-checkbox" />
            <a href="#">2021年6月3日10:06</a>
            <span class="todo_title">我是标题</span>
          </li>
          <li>
            <input type="checkbox" class="tui-checkbox" />
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
