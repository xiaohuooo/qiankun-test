<template>
  <div id="fapp">
    <!-- 主应用路由出口 -->
    <router-link to="/main">主应用</router-link> &nbsp;
    <router-link
      v-for="(item, index) in microAppDom_Router"
      :key="index"
      :to="`/${item.name}?${item.props?.propsName}`"
      >{{ item.menuName }}
    </router-link>
    <p>{{ state }}</p>
    <button @click="changeUsername">改变全局的用户名称</button>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入子应用路由
import microAppRouter from "@/utils/microApp/microAppRouter";
import store from "@/utils/microApp/store";
export default {
  name: "App",
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
  computed: {
    state() {
      // 如果只需要取某个命名空间下的state，比如 user ，可以加上参数
      // return store.getGlobalState('user')

      // 返回所有的state则不需添加参数
      return store.getGlobalState("user");
    },
  },
  methods: {
    changeUsername() {
      // 也可通过 store.commit('global/setGlobalState', { user: '李四' }) 进行操作
      store.setGlobalState({
        user: { name: "李四" + Math.round(Math.random() * 100) },
      });
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
