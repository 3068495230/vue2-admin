<!--
 * @Author: achens
 * @Date: 2022-01-23 16:26:43
 * @LastEditTime: 2022-02-14 17:32:34
 * @LastEditors: 
 * @Description: 
-->
<template>
  <div class="app">
    <Home></Home>
  </div>
</template>

<script>
// 导入首页组件
import Home from "./view/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
