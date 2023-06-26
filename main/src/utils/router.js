//引入VueRouter
import VueRouter from "vue-router";
import Main from "../components/main.vue";
import Dev from "../components/dev.vue";

import Vue from "vue";

Vue.use(VueRouter);
//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/main",
      component: Main,
    },
    {
      path: "/dev",
      component: Dev,
    },
    ,
    {
      path: "/release",
      component: Dev,
    },
    {
      path: "/dev/*",
      component: Dev,
    },
  ],
});

//暴露router
export default router;
