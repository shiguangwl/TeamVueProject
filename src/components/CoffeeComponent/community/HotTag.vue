<!--词云-->
<template>
  <div class="HotTag">
    <div class="Header">
      <span>热门词条</span>
      <span><a href="#"></a></span>
    </div>
    <div class="Content">
      <span>兴趣的</span>
      <span>内容同</span>
      <span>时再推</span>
      <span>送一部</span>
      <span>分随机</span>
      <span>内容比</span>
      <span>至于智</span>
      <span>能推送</span>
      <span>和随机</span>
      <span>推送的</span>
      <span>占比是</span>
      <span>开发人</span>
      <span>员可以</span>
      <span>进行数</span>
      <span>据查</span>
      <span>一个用</span>
      <span>户普遍</span>
      <span>能接受</span>
      <span>的一个</span>
      <span>比例</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, getCurrentInstance, onMounted } from 'vue'

export default defineComponent({
  name: 'HotTag',
  setup () {
    const initEcharts = (data) => {
      const echartsWordcloud = getCurrentInstance().$echarts.init(document.getElementById('echartsWordcloud'))
      const option = {
        title: {
          text: '',
          x: 'center'
        },
        series: [
          {
            type: 'wordCloud',
            // 用来调整词之间的距离
            gridSize: 10,
            // 用来调整字的大小范围
            sizeRange: [14, 26],
            rotationRange: [0, 0],
            // 随机生成字体颜色
            textStyle: {
              normal: {
                color: function () {
                  return (
                    'rgb(' +
                    Math.round(Math.random() * 255) +
                    ', ' +
                    Math.round(Math.random() * 255) +
                    ', ' +
                    Math.round(Math.random() * 255) +
                    ')'
                  )
                }
              }
            },
            // 位置相关设置
            left: 'center',
            top: 'center',
            right: null,
            bottom: null,
            width: '300%',
            height: '300%',
            // 数据
            data: data
          }
        ]
      }
      echartsWordcloud.setOption(option)
      // 点击事件
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      echartsWordcloud.on('click', function (e) {})
    }
    onMounted(() => {
      // initEcharts()
      console.log(getCurrentInstance().$echarts)
    })
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.HotTag{
  transition: all .3s;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  .Header{
    padding: 0px 20px;
    margin: 10px 15px;
    display: flex;
    justify-content: space-between;
    height: 2rem;
    border-bottom:solid 1px #cac6c6;
  }
  .Content{
    span{
      padding: 5px 15px;
      font-weight: 700;
      font-size: 20px;
      float: left;
    }
  }
}
.HotTag:hover{
  box-shadow:  0 3px 8px 6px rgba(13,14,15,0.1);
}
</style>
