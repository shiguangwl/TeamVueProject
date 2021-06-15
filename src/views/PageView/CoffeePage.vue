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
<!--      <div class="LeftPlan">
        <div class="ToolsBox">
          <el-card shadow="hover">
            <div class="ToolList">
              <ul>
                <li>
                  <a href="#">
                    <img src="http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640" alt="">
                    <span>影视</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640" alt="">
                    <span>影视</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640" alt="">
                    <span>影视</span>
                  </a>
                </li>
              </ul>
            </div>
          </el-card>
        </div>
      </div>
      <div class="RightPlan">
        <div class="IndexPlayBox">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'每日提示 ' + o }}
            </div>
          </el-card>
        </div>
      </div>-->
      <div class="LeftMenu">
        <div class="MenuList">
          <ul>
            <li>
              <span class="icon">
                 <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-COFFEESHOP"></use>
                 </svg>
              </span>
              <span class="Title">动态</span>
            </li>
            <li>
              <span class="icon">
                 <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-daiban"></use>
                 </svg>
              </span>
              <span class="Title">博客</span>
            </li>
            <li>
              <span class="icon">
                 <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-rili"></use>
                 </svg>
              </span>
              <span class="Title">日记</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="RightMain">
        <div class="Left">
          <div class="DiaryNewBox">
            <DiaryNew></DiaryNew>
          </div>
          <div class="post-article">
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
          </div>
          <el-pagination style="text-align: center"
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div class="Right">
          ```````333
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import DiaryNew from '@/components/CoffeeComponent/community/DiaryNew'
import PostItem from '@/components/CoffeeComponent/community/PostItem'

export default defineComponent({
  name: 'CoffeePage',
  components: {
    DiaryNew,
    PostItem
  },
  setup () {
    return {}
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
      padding: 15px;
      display: flex;
/*      .LeftPlan{
        .ToolsBox{
          .ToolList{
            ul{
              display: flex;
              width: 100%;
              li{
                text-align: center;
                img {
                  width: 100%;
                  height: 70%;
                }
                display: flex;
                flex-direction: column;
                height:130px;
                width: 100px;
                border: solid #cac6c6 1px;
                span{
                  font-size: 20px;
                  font-weight: 700;
                }
              }
            }
          }
        }
        display: flex;
        flex-direction: column;
        width: 100vh;
        padding: 10px;
        .ToolsBox{
          flex-grow: 1;
        }
      }
      .RightMain{
        flex-grow: 1;
        width: 100vh;
        padding: 10px;
      }*/
      .LeftMenu{
        border-right: 1px solid #F0F0F0;
        width: 14%;
        height:  calc(100vh - 1.3rem);
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
        display: flex;
        flex-grow: 1;
        .Left{
          width: 60%;
          display: flex;
          flex-direction: column;
          .DiaryNewBox{
            padding: 15px;
          }
          .post-article{
            padding: 15px;
          }
        }
        .Right{
          flex-grow: 1;
        }
      }
    }
  }
</style>
