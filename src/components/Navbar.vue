<template>
  <div class="navbar">
<!--    navbar功能列表显示-->
    <div class="navbar_header">
      <router-link :to="{path: '/index'}">
        <img v-lazy="'http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640'" class="avatar">
      </router-link>
      <ul class="fun_list">
        <li v-for="(item, index) in funList" :key="index">
          <router-link :to="item.routeTo">
<!--            <img :src="item.icon">-->
<!--            <i class="iconfont icon-rili"></i>-->
            <div class="icon_svg">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
            </div>
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
<!--    navbar下方工具列表-->
    <div class="navbar_tool">
      <ul class="fun_list">
        <li>
          <a href="#"><img v-lazy="'http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640'"></a>
          <span>首页1</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'Navbar',
  setup () {
    const state = reactive({
      funList: [
        {
          icon: '#icon-daiban',
          title: '待办',
          routeTo: { path: '/todo' }
        },
        // {
        //   icon: '#icon-xiangmu',
        //   title: '项目',
        //   routeTo: { path: '/project' }
        // },
        {
          icon: '#icon-rili',
          title: '日历',
          routeTo: { path: '/calendar' }
        },
        // {
        //   icon: '#icon-010-file',
        //   title: '网盘',
        //   routeTo: { path: '/files' }
        // },
        {
          icon: '#icon-COFFEESHOP',
          title: '咖啡厅',
          routeTo: { path: '/coffee' }
        },
        {
          icon: '#icon-COFFEESHOP',
          title: '小工具',
          routeTo: { path: '/utool' }
        }
      ]
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
    .navbar{
      box-shadow: 0 1px 5px 0 rgb(57 66 60 / 20%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: 10px;
      .avatar{
        width: 100%;
      }
      .fun_list{
        width: 100%;
        height: 100%;
        li{
          transition: all 0.15s;
          border-radius: 5px;
          width: 100%;
          //height: 50px;
          display: flex;
          flex-direction: column;
          text-align: center;
          margin-bottom: 10px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        li:hover{
          background-color: #BFBFBF;
        }
        .icon_svg{
          width: 100%;
          height: 35px;
        }
        .icon{
          font-size: 2.3rem;
        }
      }
    }
</style>
