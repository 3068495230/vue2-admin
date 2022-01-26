/**
 * 入口文件
 */

// 引入 Vue
import Vue from "vue";
// 引入 根组件
import App from "./App.vue";
// 引入 router
import router from "./router/index";
// 引入 vuex
import store from "./store/index";
// 引入 element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

// 创建 Vue 实例
new Vue({
  // 绑定根元素
  el: "#app",
  router,
  store,
  // 渲染 Vue 实例
  render: (h) => h(App),
});
