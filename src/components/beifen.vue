<template>
  <div>
    <el-form label-width="100px" style="height:300px">
      <el-form-item label="学生姓名：">
        <el-input
          id="aa"
          placeholder="请输入学生姓名"
          v-model="searchName"
          clearable
          style="width: 500px; float: left; position: relative"
        ></el-input>
      </el-form-item>
    </el-form>
    <ul>
      <li v-for="(person, index) in fileterPersons" :key="personsKeys[index]">
        {{ person.date }}-------{{ person.name }}-------{{ person.address }}  
      </li>
    </ul>
  </div>
</template>
<script>
//import shortid from 'shortid'
export default {
  name: "list",
  data() {
    return {
      searchName: "",
      persons: [
        {
          date: "2016-05-02",
          name: "张三",
          address: "上海市普陀区金沙江路 1518 ",
        },
        {
          date: "2016-05-04",
          name: "张三",
          address: "上海市普陀区金沙江路 1517 ",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 ",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 ",
        },
        {
          date: "2016-05-03",
          name: "李四",
          address: "上海市普陀区金沙江路 1516 ",
        },
        {
          date: "2016-05-03",
          name: "李四",
          address: "上海市普陀区金沙江路 1516 ",
        },
        {
          date: "2016-05-03",
          name: "王五",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      personsKeys: [],
    };
  },

  computed: {
    
    fileterPersons() {
     
      let { searchName, persons } = this;
     
      let arr = [...persons];
      
      if (searchName.trim()) {
        arr = persons.filter((p) => p.name.indexOf(searchName) !== -1);
      }
      return arr;
    },
  },
};
</script>
<style scoped>
ul li {
  position: relative;
  top:-250px;
  height: 50px;
  left: -200px;
  line-height:50px;
}
</style>