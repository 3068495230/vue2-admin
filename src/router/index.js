// 引入 Vue
import Vue from 'vue'
// 引入 vue-router
import VueRouter from "vue-router";

// 注册 router
Vue.use(VueRouter)

// 创建 router 对象
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: {
        name: "home",
      },
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../view/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../view/About.vue"),
    },
  ],
});

export default router;
