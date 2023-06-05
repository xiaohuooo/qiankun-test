<template>
  <div id="app">
    我是字应用
    <router-link to="/hello">hello</router-link>
    <br>
    <img src='../public/111.jpg' alt="" style="width:200px">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: ['propsName'],
  mounted() {
    console.log(this.$props);
    console.log(this.propsName);
    //  fetch('/api1/api/list').then(function(data){
    //     // text()方法属于fetchAPI的一部分，它返回一个Promise实例对象，
    //     // 用于获取后台返回的数据 return data.text();
    //     return data.text();
    // }).then(function (data) {
    //     // 在这个then里面我们能拿到最终的数据
    //     console.log(data);
    // })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
