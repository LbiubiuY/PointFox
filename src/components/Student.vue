<template>
  <div id="message">
    <el-container>
      <el-aside width="250px">
        <el-row class="tac">
          <el-col :span="15">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu index="1">
                <template slot="title">
                  <span><router-link to="/inform">个人信息</router-link></span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1"><router-link to="/chaxun">查询学生</router-link></el-menu-item>
                  <el-menu-item index="1-2">查询</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2">
                <span slot="title"
                  ><router-link to="/class">个人班级</router-link></span
                >
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title"><router-link to="/grade">个人成绩</router-link></span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">。。。。。</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Book",
  components: {},
};
</script>

<style>
#message {
  font-weight: bolder;
  font-family: cursive;
}
</style>