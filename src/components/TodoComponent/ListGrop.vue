<template>
  <div class="ListGrop">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="清单" name="1">
        <div class="ListGorpItems">
          <ul>
            <li>
              <span class="Span_CircleColer"></span>
              <span class="span_title">日常任务</span>
              <span class="span_num">6</span>
            </li>
            <li>
              <span class="Span_CircleColer"></span>
              <span class="span_title">学习任务</span>
              <span class="span_num">4</span>
            </li>
            <li>
              <span class="Span_CircleColer"></span>
              <span class="span_title">清单1</span>
              <span class="span_num">4</span>
            </li>
            <li>
              <span class="Span_CircleColer"></span>
              <span class="span_title">清单2</span>
              <span class="span_num">4</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'ListGrop',
  setup () {
    const state = reactive({
      activeNames: ['1']
    })
    return {
      ...toRefs(state)
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
