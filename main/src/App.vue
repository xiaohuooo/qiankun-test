<template>
 <div id="fapp">

    <!-- 主应用路由出口 -->
    <router-link to="/main">主应用</router-link> &nbsp;
    <router-link
    v-for="(item,index) in microAppDom_Router"
    :key="index"
    :to="`/${item.name}?${item.props?.propsName}`"
    >{{ item.menuName }}</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
// 引入子应用路由
import microAppRouter from "@/utils/microApp/microAppRouter";
export default {
  name: 'App',
  data() {
    return {
      // 默认路由
      // 微应用容器及路由list
      microAppDom_Router: microAppRouter,
    };
  },
  created() {
    console.log(this.microAppDom_Router);
  },
  components: {
  }
}
</script>

<style>
a{
  text-decoration: none;
}
</style>
