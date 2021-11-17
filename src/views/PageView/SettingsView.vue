<template>
  <div class="SettingsView">
    <div class="userinfo">
      <img src="http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640" alt="">
      <div class="box">
        <p>
          <a href="#">{{ userinfo.username }}</a>
        </p>
        <p>Your personal account</p>
      </div>
    </div>
    <el-tabs tab-position="left" style="height: 100%;">
      <el-tab-pane label="用户管理">
        <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
          <el-row>
            <el-col :span="17">
              <el-row>
                <el-col :span="17">
                  <el-form-item label="邮箱">
                    <el-input v-model="userinfo.email" placeholder="请输入邮箱" clearable :style="{width: '100%'}">
                    </el-input>
                  </el-form-item>
                </el-col>
<!--                <el-col :span="17">-->
<!--                  <el-form-item label="描述" prop="field114">-->
<!--                    <el-input v-model="formData.field114" type="textarea" placeholder="请输入描述"-->
<!--                              :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}"></el-input>-->
<!--                  </el-form-item>-->
<!--                </el-col>-->
              </el-row>
            </el-col>
            <el-col :span="7">
              <el-row>
                <el-image
                  style="width: 100px; height: 100px"
                  src="http://q1.qlogo.cn/g?b=qq&nk=2513356652&s=640"
                  fit="fill"></el-image>
              </el-row>
            </el-col>
          </el-row>
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="第三方绑定">第三方绑定</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

import { UserApi } from '@/utils/api'

export default defineComponent({
  name: 'SettingsView',
  setup () {
    const state = reactive({
      userinfo: '1232'
    })
    const submitForm = () => {
      this.$refs.elForm.validate(valid => {
        if (!valid) {
        }
        // TODO 提交表单
      })
    }
    const resetForm = () => {
      this.$refs.elForm.resetFields()
    }
    const getUserInfo = async () => {
      // TODO 前后端接口待完善
      const { data: res } = await UserApi.UserInfo()
      state.userinfo = res.user
    }
    getUserInfo()
    return {
      ...toRefs(state),
      submitForm,
      resetForm
    }
  }
})
</script>

<style lang="scss" scoped>
  .SettingsView{
    padding: 15px;
    height: 100%;
    .userinfo{
      display: flex;
      padding-left: 30px;
      padding-bottom: 20px;
      img{
        height: 40px;
        width: 40px;
      }
      .box{
        a{
          font-size: 1.2rem;
          font-weight: 700;
        }
      }
    }
  }
</style>
