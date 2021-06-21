<template>
  <div class="SubmitItem">
    <i class="el-icon-plus icon-add" :class="{ iconisshow: isexshow }"></i>
    <textarea class="subtext"  @focus="isexshowfun()" @blur="isexshowfun()" :class="{ isexshow: isexshow }" placeholder="请输入内容..."></textarea>
    <div class="toolbarDiv" v-show="toolbarisshow">
      <div class="btn_left">
        <button class="button_settime"><i class="el-icon-plus"></i><span>设置时间规则</span></button>
      </div>
      <div class="btn_middle">
        <slot></slot>
      </div>
      <div class="btn_right">
        <el-button round size="small" type="primary" icon="el-icon-edit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'SubmitItem',
  setup () {
    const state = reactive({
      toolbarisshow: false,
      isexshow: false
    })
    const isexshowfun = () => {
      state.isexshow = !state.isexshow
      state.toolbarisshow = !state.toolbarisshow
    }
    return {
      ...toRefs(state),
      isexshowfun
    }
  }
})
</script>

<style lang="scss" scoped>
  .SubmitItem{
    position: relative;
    .icon-add{
      transition:all .3s;
      position: absolute;
      left: 10px;
      top: 10px;
      font-weight: 700;
    }
    textarea{
      transition:all .3s;
      border: none;
      background-color: rgb(247, 247, 247);
      width: 100%;
      height: 45px;
      //height: 100px;
      border-radius: 8px;
      font-size: 14px;
      outline-color: #1B9AEE;
      padding: 10px 30px;
      resize: none;
    }
    textarea:hover{
      border: solid #1B9AEE 1px;
    }
    .toolbarDiv{
      display: flex;
      justify-content: space-between;
      height: 30px;
      position: absolute;
      bottom: 5px;
      left: 25px;
      margin-bottom: 10px;
      width: 95%;
    }
    .button_settime{
      cursor: pointer;
      border: solid red 1px;
      padding: 0 10px;
      height: 100%;
      line-height: 100%;
      background: transparent;
      outline: none;
      border: 1px solid rgba(140,140,140,0.24);
      border-radius: 28px;
      color: #BFBFBF;
      font-size: 14px;

    }

  }
  .isexshow{
    height: 100px !important;
  }
  .iconisshow{
    width: 0px;
  }
</style>
