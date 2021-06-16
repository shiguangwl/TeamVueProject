<template>
  <div class="DiaryNew">
    <div class="Header">
      <span>圈友日记</span>
      <span><a href="#">更多</a></span>
    </div>
    <div class="Content">
      <div class="ImageList">
        <ul>
          <li>
              <img src="https://i.loli.net/2020/12/06/fHo7K5XUrBb6DGy.png" alt="图片">
              <div class="info">
                <img src="https://i.loli.net/2020/11/25/WXB6eCpMZkwh7PD.png" alt="">
                <span>日记1</span>
              </div>
          </li>
          <li>
            <img src="https://i.loli.net/2020/12/06/fHo7K5XUrBb6DGy.png" alt="图片">
            <div class="info">
              <img src="https://i.loli.net/2020/11/25/WXB6eCpMZkwh7PD.png" alt="">
              <span>日记2</span>
            </div>
          </li>
          <li>
            <img src="https://i.loli.net/2020/12/06/fHo7K5XUrBb6DGy.png" alt="图片">
            <div class="info">
              <img src="https://i.loli.net/2020/11/25/WXB6eCpMZkwh7PD.png" alt="">
              <span>日记3</span>
            </div>
          </li>
          <li>
            <img src="https://i.loli.net/2020/12/06/fHo7K5XUrBb6DGy.png" alt="图片">
            <div class="info">
              <img src="https://i.loli.net/2020/11/25/WXB6eCpMZkwh7PD.png" alt="">
              <span>日记3</span>
            </div>
          </li>
          <li>
            <img src="https://i.loli.net/2020/12/06/fHo7K5XUrBb6DGy.png" alt="图片">
            <div class="info">
              <img src="https://i.loli.net/2020/11/25/WXB6eCpMZkwh7PD.png" alt="">
              <span>日记4</span>
            </div>
          </li>
          <li>
            <img src="https://i.loli.net/2020/12/06/fHo7K5XUrBb6DGy.png" alt="图片">
            <div class="info">
              <img src="https://i.loli.net/2020/11/25/WXB6eCpMZkwh7PD.png" alt="">
              <span>标题</span>
            </div>
          </li>
          <li>
            <img src="https://i.loli.net/2020/12/06/fHo7K5XUrBb6DGy.png" alt="图片">
            <div class="info">
              <img src="https://i.loli.net/2020/11/25/WXB6eCpMZkwh7PD.png" alt="">
              <span>标题</span>
            </div>
          </li>
          <li>
            <img src="https://i.loli.net/2020/12/06/fHo7K5XUrBb6DGy.png" alt="图片">
            <div class="info">
              <img src="https://i.loli.net/2020/11/25/WXB6eCpMZkwh7PD.png" alt="">
              <span>标题</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'DiaryNew',
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  li:hover img{
    transition: all .3s;
    transform: scale(1.1);
  }
  .DiaryNew{
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
    .ImageList{
      ul{
        display: flex;
        flex-wrap: wrap;
      }
      li{
        width: 23%;
        margin: 1%;
        position: relative;
        border-radius: 10px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 15px;
        }
        .info{
          position: absolute;
          bottom: 10px;
          left: 17px;
          font-size: 1.1rem;
          color: white;
          img{
            width: 20px;
            height: 20px;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
