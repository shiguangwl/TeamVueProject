<template>
  <div class="ProjectPage">
    <div class="LeftMange">
      <CategorayFilter></CategorayFilter>
    </div>
    <div class="RightMain">
      <div class="Header">
        <SearchComponenth></SearchComponenth>
      </div>
      <div class="MainBox">
        <h3>星标项目</h3>
        <div class="starProject">
          <div class="mycard">
            <router-link :to="{ path: '/project/0000/arrange' }">
              <img src="https://tcs-ga.teambition.net/thumbnail/111w845f039e35d0793c36f4b019be54a3af/w/600/h/300" alt="">
              <span>个人安排</span>
            </router-link>
          </div>
        </div>
        <h3>所有项目</h3>
        <div class="allProject">
          <div class="mycard">
            <img src="https://tcs-ga.teambition.net/thumbnail/111w845f039e35d0793c36f4b019be54a3af/w/600/h/300" alt="">
            <span>个人安排</span>
          </div>
          <div class="mycard" style="text-align: center;background-color: #BFBFBF">
            <div class="ep" style="height: 70%;background-color: transparent">
              <i class="el-icon-s-opportunity" style="font-size: 3rem"></i>
            </div>
            <span>添加项目</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { defineComponent, reactive } from 'vue'
import SearchComponenth from '@/components/SearchComponent'
import CategorayFilter from '@/components/TodoComponent/CategorayFilter'
export default defineComponent({
  name: 'ProjectPage',
  components: {
    SearchComponenth,
    CategorayFilter
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .ProjectPage{
    display: flex;
  }
  .Header{
    height: 45px;
  }
  .LeftMange{
    height: 100vh;
    padding: 20px;
    width: 240px;
    border-right: 1px solid #F0F0F0;
    display: flex;
    flex-direction: column;
  }
  .RightMain{
    display: flex;
    flex-direction: column;
    padding: 15px;
    flex-grow: 1;
    .MainBox{
      .mycard:hover{
        transform: translateY(-10px);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
      }
      .mycard{
        transition: all 0.3s;
        cursor: pointer;
        margin: 10px;
        box-shadow: 0 1px 5px rgb(38 38 38 / 10%);
        border-radius: 12px;
        width: 220px;
        height: 135px;
        overflow: hidden;
        img{
          height: 75%;
          width: 100%;
        }
        span{
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
    .starProject{
      display: flex;
    }
    .allProject{
      display: flex;
    }
  }
</style>
