<!--
 * @Author: achens
 * @Date: 2022-02-12 23:01:48
 * @LastEditTime: 2022-02-13 17:54:22
 * @LastEditors: Please set LastEditors
 * @Description: 关于组件
-->
<template>
  <div class="about">
    <h2>Webpack5 + Vue2 + Element-ui + Axios + Sass 后台开发环境</h2>
    <h3>你好！我是 Achens！</h3>
    <p>
      当前模板地址：<a href="https://github.com/3068495230/vue2-admin"
        >GitHub</a
      >
    </p>
    <p>
      当前模板开发记录：<a
        href="https://www.yuque.com/docs/share/76697967-3c68-4fc2-b4f3-385e4277d946?#"
        target="_blank"
        >语雀</a
      >
    </p>
    <p>
      作者：<a href="https://www.yuque.com/xiaochens" target="_blank">achens</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped lang="scss">
p {
  margin: 5px;
  a {
    color: #42b983;
  }
}
</style>
