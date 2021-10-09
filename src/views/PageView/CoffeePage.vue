<!--
用户信息提示
每日问候
功能模块路由
-->
<template>
  <div class="CoffeePage">
    <div class="HeaderBox">
      <div class="HeaderLeftBox">
        <span>一米阳光，一杯咖啡，一份心情，一种生活。</span>
      </div>
      <div class="Avatar_info">
        <div class="Avatar">
          <img src="http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640" alt="假冒伪劣小小Ho">
        </div>
        <span style="font-weight: 700;font-size: 20px">假冒伪劣小小Ho</span>
        <el-badge :value="3" class="item">
          <el-tooltip class="item" effect="dark" content="我是提示" placement="bottom">
            <i class="el-icon-s-comment"></i>
          </el-tooltip>
        </el-badge>
      </div>
    </div>
    <div class="MainBox">
      <div class="LeftMenu">
          <div class="MenuList">
            <ul>
              <router-link to="/coffee/shulog">
                <li>
                <span class="icon">
                   <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-COFFEESHOP"></use>
                   </svg>
                </span>
                  <span class="Title">动态</span>
                </li>
              </router-link>
              <router-link to="/coffee/blog">
                <li>
                <span class="icon">
                   <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-daiban"></use>
                   </svg>
                </span>
                  <span class="Title">博客</span>
                </li>
              </router-link>
              <router-link to="/coffee/diary">
                <li>
                <span class="icon">
                   <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-rili"></use>
                   </svg>
                </span>
                  <span class="Title">
                  日记
                </span>
                </li>
              </router-link>
              <router-link to="/coffee/movie">
                <li>
                <span class="icon">
                   <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-rili"></use>
                   </svg>
                </span>
                  <span class="Title">
                  影院
                </span>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      <div class="RightMain">
          <!--        <transition name="el-fade-in">-->
          <!--          <keep-alive>-->
          <!--            <router-view ></router-view>-->
          <!--          </keep-alive>-->
          <!--        </transition>-->
          <router-view v-slot="{ Component }">
            <transition name="el-fade-in">
              <keep-alive>
                <component :is="Component"/>
              </keep-alive>
            </transition>
          </router-view>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export default defineComponent({
  name: 'CoffeePage',
  components: {
  },
  setup () {
    const state = reactive({
      show: false
    })
    onMounted(() => {
      setTimeout(() => {
        state.show = true
      }, 300)
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .CoffeePage{
    .HeaderBox{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 3.4rem;
      padding: 0 3rem;
      box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
      .HeaderLeftBox{
        font-size: 1.3rem;
        font-weight: 500;
      }
      .Avatar_info{
        display: flex;
        align-items: center;
        .Avatar{
          img{
            width: 100%;
            height: 100%;
          }
          width: 45px;
          height: 45px;
        }
        i{
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
    .MainBox{
      //padding: 15px;
      height: calc(100vh - 3.4rem);
      display: flex;
      .LeftMenu{
        border-right: 1px solid #F0F0F0;
        width: 10%;
        height:  calc(100vh - 4.3rem);
        ul li{
          .icon{
            margin-right: 8px;
          }
          transition: color .3s;
          cursor: pointer;
          text-align: center;
          font-size: 1.2rem;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2rem;
          border-radius: 20px;
          padding: 5px;
          margin: 5px 10px;
        }
        ul li:hover{
          background-color: #1da1f21a;
          color: #1da1f2;
        }
      }
      .RightMain{
        height: calc(100vh - 3.4rem);
        overflow: auto;
        width: 90%;
      }
    }
  }
</style>
