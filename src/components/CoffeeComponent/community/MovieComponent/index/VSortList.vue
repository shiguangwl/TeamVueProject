<template>
  <div class="VSortList">
    <span>电影•月榜</span>
    <div class="content">
      <ul>
        <li><div class="box"><span>1.</span><a href="#">速度与激情9</a></div></li>
        <li><div class="box"><span>2.</span><a href="#">速度与激情9</a></div></li>
        <li><div class="box"><span>3.</span><a href="#">速度与激情9</a></div></li>
        <li><div class="box"><span>4.</span><a href="#">速度与激情9</a></div></li>
        <li><div class="box"><span>5.</span><a href="#">速度与激情9</a></div></li>
        <li><div class="box"><span>6.</span><a href="#">速度与激情9</a></div></li>
        <li><div class="box"><span>7.</span><a href="#">速度与激情9</a></div></li>
        <li><div class="box"><span>8.</span><a href="#">速度与激情9</a></div></li>
        <li><div class="box"><span>9.</span><a href="#">速度与激情9</a></div></li>
        <li><div class="box"><span>0.</span><a href="#">速度与激情9</a></div></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'VSortList',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .VSortList{
    span{
      font-size: 1.4rem;
      font-weight: 700;
      padding: 15px 10px ;
    }
    .content{
      li{
        span{
          font-style: italic;
          font-weight: 700;
          font-size: 1.6rem;
          color: #cd5b5b;
        }
        i{
          font-size: 0.3rem;
          color: #BFBFBF;
        }
        font-size: 1.3rem;
        line-height: 2.5rem;
        border-radius: 10px;
        background-color: #F3F5F7;
        margin: 5px 0;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
