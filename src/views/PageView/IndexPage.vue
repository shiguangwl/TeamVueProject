<template>
  <div class="IndexPage">
    <div class="topcard">
      <el-row :gutter="20">
        <el-col :span="20">
          <el-card shadow="always">
            这是顶部Card  待修改   <!--// TODO 待修改-->
<!--            <h1>{{userInfo.userId}}</h1>-->
<!--            <h1>{{userInfo.username}}</h1>-->
            <input type="button" @click="logout()" value="登出">
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
    <div class="cards">
      <div class="card1">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>待办卡片</span>
              <el-button class="button" type="text">TO</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div class="card2">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>待办卡片</span>
              <el-button class="button" type="text">TO</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div class="card3">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>待办卡片</span>
              <el-button class="button" type="text">TO</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { UserApi } from '@/utils/api'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const router = useRouter()
    const logout = () => {
      window.sessionStorage.removeItem('token')
      router.push('/')
    }
    const state = reactive({
      userInfo: {}
    })
    const getUserInfo = async () => {
      // TODO 前后端接口待完善
      const { data: res } = await UserApi.UserInfo()
      console.log(res.user)
      state.userInfo = res.user
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
  .topcard{
    margin-bottom: 20px;
  }
  .IndexPage{
    padding: 10px;
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
    margin-bottom: 18px;
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
