<template>
  <div class="IndexPage">
    <div class="HeaderBox">
      <div class="HeaderLeftBox">
        <span>一米阳光，一杯咖啡，一份心情，一种生活。</span>
      </div>
      <div class="Avatar_info">
<!--        <router-link :to="{ path: '/coffee/writing'}">-->
<!--        开始写作-->
<!--        </router-link>-->
        <div class="Avatar">
          <img v-lazy="'http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640'" alt="假冒伪劣小小Ho">
        </div>
        <span style="font-weight: 700;font-size: 20px">假冒伪劣小小Ho</span>
        <el-badge :value="3" class="item">
          <el-tooltip class="item" effect="dark" content="我是提示" placement="bottom">
            <i class="el-icon-s-comment"></i>
          </el-tooltip>
        </el-badge>
      </div>
    </div>
    <div class="topcard">
      <el-row :gutter="20">
        <el-col :span="20">
          <el-card shadow="always">
            <h1>欢迎回来: {{userInfo.username}}</h1>
<!--            <h1>{{userInfo.userId}}</h1>-->
            <el-button type="primary" plain @click="logout()">登出</el-button>
          </el-card>
        </el-col>
      </el-row>
      <router-link :to="{ path: '/settings' }">
        <el-button type="success">个人中心</el-button>
      </router-link>
      &nbsp;
      <router-link :to="{ path: '/whisper' }">
        <el-button type="success">消息中心</el-button>
      </router-link>
    </div>
<!--    <div class="cards">-->
<!--      <div class="card1">-->
<!--        <el-card class="box-card">-->
<!--          <template #header>-->
<!--            <div class="card-header">-->
<!--              <span>待办卡片</span>-->
<!--              <el-button class="button" type="text">TO</el-button>-->
<!--            </div>-->
<!--          </template>-->
<!--          <div v-for="o in 4" :key="o" class="text item">-->
<!--            {{'列表内容 ' + o }}-->
<!--          </div>-->
<!--        </el-card>-->
<!--      </div>-->
<!--      <div class="card2">-->
<!--        <el-card class="box-card">-->
<!--          <template #header>-->
<!--            <div class="card-header">-->
<!--              <span>待办卡片</span>-->
<!--              <el-button class="button" type="text">TO</el-button>-->
<!--            </div>-->
<!--          </template>-->
<!--          <div v-for="o in 4" :key="o" class="text item">-->
<!--            {{'列表内容 ' + o }}-->
<!--          </div>-->
<!--        </el-card>-->
<!--      </div>-->
<!--      <div class="card3">-->
<!--        <el-card class="box-card">-->
<!--          <template #header>-->
<!--            <div class="card-header">-->
<!--              <span>待办卡片</span>-->
<!--              <el-button class="button" type="text">TO</el-button>-->
<!--            </div>-->
<!--          </template>-->
<!--          <div v-for="o in 4" :key="o" class="text item">-->
<!--            {{'列表内容 ' + o }}-->
<!--          </div>-->
<!--        </el-card>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { UserApi } from '@/utils/api'
import store from '@/store/index'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const router = useRouter()
    const logout = () => {
      window.sessionStorage.removeItem('token')
      router.push('/')
    }
    const state = reactive({
      userInfo: {
        username: 'TimeHo'
      }
    })
    const getUserInfo = async () => {
      // TODO 前后端接口待完善
      // const { data: res } = await UserApi.UserInfo()
      // state.userInfo = res.user
      // store.state.userInfo = state.userInfo
    }
    getUserInfo()
    return {
      logout,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
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
  .topcard{
    margin-bottom: 20px;
  }
  .IndexPage{
    //padding: 10px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    //margin-bottom: 18px;
  }

  .box-card {
    width: 100%;
  }
  .cards{
    >div{
      width: 45%;
      margin: 5px;
    }
    display: flex;
    flex-wrap: wrap;
    padding: 2%;
    width: 100%;
  }
</style>
