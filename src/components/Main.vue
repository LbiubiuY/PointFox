<template>
  <el-container>
    <el-main>
      <el-form label-width="100px">
        <el-card class="box-card" id="card">
          <span id="loginfont">登入系统</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >找回密码
          </el-button>
          <el-divider></el-divider>
          <el-form-item label="用户名：" id="input1">
            <el-input placeholder="请输入用户名" v-model="user.name"></el-input>
          </el-form-item>

          <el-form-item label="密码：" id="input2">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="user.passwd"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              round
              style="font-family: cursive"
              id="int"
              @click="loginSystem"
              >登录</el-button
            >
          </el-form-item>
        </el-card>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import Axios from "axios";

export default {
  name: "Main",
  data() {
    return {
      user: {
        name: "",
        passwd: "",
      },
    };
  },
  components: {},
  methods: {
    loginSystem() {
      Axios.get("http://localhost:3000/login", {
        params: this.user,
      }).then(function (response) {
        alert(response.data.name);
        alert(response.data.passwd);
      });
    },
  },
};
</script>

<style>
.el-main {
  background-color: snow;
  color: #333;
  text-align: center;
  line-height: 160px;
}
#card {
  width: 400px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
}

#loginfont {
  height: 25px;
  line-height: 100%;
  font-size: 20px;
  color: mediumorchid;
  float: left;
  font-weight: bolder;
  font-family: cursive;
}
#int {
  width: 150px;
  right: 50px;
  bottom: -18px;
  position: relative;
  color: mediumorchid;
}
#input1 {
  left: -8px;
  bottom: -10px;
  position: relative;
}
#input2 {
  left: -8px;
  bottom: -10px;
  position: relative;
}
</style>