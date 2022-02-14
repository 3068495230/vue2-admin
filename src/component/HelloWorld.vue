<!--
 * @Author: achens
 * @Date: 2022-02-12 23:01:48
 * @LastEditTime: 2022-02-13 17:51:29
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <div class="helloWorld">
    <h2>Webpack5 + Vue2 + Element-ui + Axios + Sass 后台开发环境</h2>
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
    <button type="button" @click="count++">
      计数器：count is: {{ count }}
    </button>
  </div>
</template>

<script>
// 引入封装好的 axios
import service from "../utils/axios";

export default {
  name: "helloWorld",
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    // 发送请求测试
    service.get("list").then((res) => {
      console.log(res);
    });
  },
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
