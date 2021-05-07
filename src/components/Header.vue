<template>
  <el-container>
    <el-header id="aa">
      <span id="font"> 江西软件大学—图书管理系统</span>
      <el-row id="button">
        <el-button
          id="link1"
          round
          style="font-family: cursive; color: mediumorchid"
          ><router-link
            to="/main"
            style="
              font-family: cursive;
              font-weight: bolder;
              color: mediumorchid;
            "
            >系统登入</router-link
          ></el-button
        >
        <el-button round
          ><router-link
            to="/work"
            style="
              font-family: cursive;
              font-weight: bolder;
              color: mediumorchid;
            "
            >工作中心</router-link
          ></el-button
        >
        <el-button
          round
          style="font-family: cursive; font-weight: bolder; color: mediumorchid"
          ><router-link
            to="/student"
            style="
              font-family: cursive;
              font-weight: bolder;
              color: mediumorchid;
            "
            >学生信息查询</router-link
          ></el-button
        >
        <el-button round
          ><router-link
            to="/book"
            style="
              font-family: cursive;
              font-weight: bolder;
              color: mediumorchid;
            "
            >图书信息查询</router-link
          ></el-button
        >
        <el-button round
          ><router-link
            to="/cnnode"
            style="
              font-family: cursive;
              font-weight: bolder;
              color: mediumorchid;
            "
            >cnnode论坛</router-link
          ></el-button
        >
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style>
.el-header {
  background-color: pink;
  color: snow;
  text-align: center;
  line-height: 60px;
}

#font {
  float: left;
  font-size: 24px;
  font-weight: bolder;
  font-family: cursive;
}
#button {
  float: right;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>