// 引入 Vue
import Vue from "vue";
// 引入 vue-router
import VueRouter from "vue-router";

// 注册 router
Vue.use(VueRouter);

// 创建 router 对象
const router = new VueRouter({
  routes: [
    {
      // 根路径，也就是默认显示页面
      path: "/",
      // 重定向
      redirect: "/helloWorld",
      // 显示组件
      component: () => import("../component/HelloWorld.vue"),
    },
    {
      path: "/helloWorld",
      name: "helloWorld",
      component: () => import("../component/HelloWorld.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../component/About.vue"),
    },
  ],
});

export default router;
