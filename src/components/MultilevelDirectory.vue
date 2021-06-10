<template>
  <div class="MultilevelDirectory">
    <div class="title">
      <i class="el-icon-s-data"></i>
      <span>目录</span>
    </div>
    <div class="List">
      <ul>
        <li>
          <div class="isDir">
            <i class="el-icon-caret-right"></i>
          </div>
          <i class="iconfont icon-wenjian1"></i>
          <span>文件但是1</span>
        </li>
        <li>
          <div class="isDir">
            <i class=""></i>
          </div>
          <i class="iconfont icon-wenjian"></i>
          <span>文件但是1</span>
        </li>
        <li>
          <div class="isDir">
            <i class=""></i>
          </div>
          <i class="iconfont icon-wenjian"></i>
          <span>文件但是1</span>
        </li>
        <li>
          <div class="isDir">
            <i class="el-icon-caret-right"></i>
          </div>
          <i class="iconfont icon-wenjian1"></i>
          <span>文件但是1</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'MultilevelDirectory',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .MultilevelDirectory{
  }
  .title{
    height: 30px;
  }
  .List{
    .isDir{
      display: inline-block;
      width: 20px;
    }
    ul li{
      height: 30px;
      cursor: pointer;
      line-height: 30px;
      padding-left: 20px;
    }
    ul li:hover{
      background: rgba(27,154,238,.1);
    }
  }
</style>
