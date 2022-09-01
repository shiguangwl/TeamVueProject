<template>
  <div class="PlayChoesSource">
    <el-row>
      <el-col :span="18">
        <div class="Left">
          <el-button @click="changevideo(value.url)" v-for="value in sourceData[Object.keys(sourceData)[sourceIndex]]" :key="value.id" type="warning" round>{{value.playlink_num}}</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="Right">
          <el-button type="info"  size="small" v-for="key in Object.keys(sourceData)" :key="key">{{key}}</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { computed, defineComponent, onActivated, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'PlaySource',
  props: {
    sourceData: Object
  },
  setup (props, ctx) {
    const state = reactive({
      // sourceData: props.sourceData,
      sourceIndex: 0
    })
    onActivated(() => {
      changevideo(props.sourceData[Object.keys(props.sourceData)[0]])
      // state.keys = state.sourceData.keys()
      // state.curentList = state.sourceData[state.keys[0]]
    })
    // const keys = computed(() => {
    //   console.log(props.sourceData.keys())
    //   return props.sourceData.keys()
    // })
    // const curentList = computed(() => {
    //   // 返回的是ref对象
    //   console.log(props.sourceData[state.keys[state.sourceIndex]])
    //   return props.sourceData[keys[state.sourceIndex]]
    // })
    const changevideo = (url) => {
      ctx.emit('changePlay', url)
    }
    return {
      ...toRefs(state),
      ...toRefs(props),
      changevideo
    }
  }
})
</script>

<style lang="scss" scoped>
  .PlayChoesSource{
    .Left{
      height: calc( 100vh - 3.4rem);
      overflow: auto;
      button{
        margin: 5px 6px;
      }
    }
    .Right{
      border-left: solid #2c3e50 1px ;
      button{
        width: 100%;
        margin:3px 0px;
      }
    }
  }
</style>
