<template>
  <div class="DiaryCentent">
    <section class="border-2">
      <article style="font-family:'HYTiaoTiao';">我爸说再敢网恋就打断我的腿，幸好不是胳膊，这样我还能继续<mark style="font-family:'HYTiaoTiao';">和你打字聊天</mark>，就算连胳膊也打断了，我的心里也会有你位置。</article>
      <address style="font-family: -apple-system,'Helvetica Neue','Helvetica','Tahoma','Arial','PingFang SC',STHeiTi,'Microsoft Yahei';"><time>2021-6-16</time><span>Shinjuku-ku·Cloudy·23℃</span></address>
    </section>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'DiaryCentent',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .DiaryCentent{
    padding: 15px;
    border: solid #DCDFE6 1px;
    border-radius: 30px;
  }

  mark {
    background-color: transparent;
    background-image: -webkit-linear-gradient(#ffe21d, #ffe21d);
    background-image: -o-linear-gradient(#ffe21d, #ffe21d);
    background-image: linear-gradient(#ffe21d, #ffe21d);
    background-position: 0 85%;
    background-size: 100% 20%;
    background-repeat: no-repeat;
  }
  section {
    margin: auto .4rem;
    border-width: 2px 5px 4px 3px;
    border-style: solid;
    border-color: #03081a;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
  }
  article img {display: none;}
  article {
    font-size: 1.45rem;
    margin: 0;
    padding: .4rem;
    letter-spacing: 2px;
    text-align: justify;
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
  }
  section::-webkit-scrollbar,
  article::-webkit-scrollbar {display: none;}
  address {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: .8rem;
    margin: 0 .4rem;
    font-style: normal;
    color: #8c8c8c;
    font-size: 1rem;
  }
  address time {margin-right: auto;}
  section {
    margin: auto;
    max-width: 80%;
    border: 0 none;
    background-color: transparent;
    border-radius: 0;
  }
  article {
    padding:0 .4rem;
  }
  address {justify-content: flex-end;}
  address time {margin-right: .15rem;}
</style>
