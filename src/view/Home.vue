<template>
  <div class="home">
    <!-- logo 图标 -->
    <img alt="Vue logo" src="../assets/img/t01b3bc142b70ef7e0e.jpg" />
    <!-- 按钮组 -->
    <div class="button">
      <router-link to="/helloWorld">进入 HelloWorld</router-link>
      <router-link to="/about">进入 About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  margin: 0px auto;
}
div.button {
  width: 100%;
  height: 20px;
  margin: 0px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: block;
    margin-left: 10px;
    background-color: orange;
    width: 140px;
    height: 25px;
    line-height: 25px;
    border-radius: 2px;
    color: white;
    transition: all 0.2s;
  }
  a:hover {
    width: 145px;
    height: 30px;
    line-height: 30px;
  }
}
</style>
