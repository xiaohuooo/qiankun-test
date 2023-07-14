// 微应用路由
const microAppRouter = [
  {
    name: "dev", //用于应用名   容器id   应用路由基地址
    url: "//localhost:8090", //应用路径（ip与端口）
    props: { propsName: "8090" }, //初始化时需要传递给微应用的数据
    // hidden: false,//是否启用该应用，默认false
    menuName: "dev", //自定义属性 根据需要自己配置（用在了菜单导航的名称）
  },
  {
    name: "release",
    url: "//localhost:8089",
    props: { propsName: "8089" },
    // hidden: false,
    menuName: "release",
  },
];
export default microAppRouter;
