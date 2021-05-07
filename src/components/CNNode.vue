<template>
  <div id="cnnodeWrapper">
    <div>
      <span>cnnode论坛</span>
    </div>
    <div>
      <li v-for="(value, index2) in this.topicsArr" :key="index2">
        <span>
            <img :src="value.author.avatar_url" alt="" style="width:20px;height:20px">
        </span>
        <span>{{ value.title }}</span>
      </li>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      topicsArr: [],
    };
  },

  beforeCreate() {},
  created() {
    let that = this;
    Axios.get("https://cnodejs.org/api/v1/topics").then(function (response) {
      if (response.data.success) {
        that.topicsArr = response.data.data;
      }
    });
  },
};
</script>

<style>
</style>