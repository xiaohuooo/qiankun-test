import store from "./store";
// 引入路由
import $microAppRouter from "./microAppRouter";
// 微应用配置
const microAppSetting = {};
export default microAppSetting;
/**
 * @description: 配置子应用
 * @param {*}
 * @return {*}
 */
microAppSetting.microApps = () => {
  let apps = [];
  $microAppRouter.map((item) => {
    if (!item.hidden) {
      apps.push({
        name: item.name, //应用名(不可重复)
        entry: item.url, //默认加载应用路径(ip与端口)
        container: `#${item.name}`, //容器id
        activeRule: `/${item.menuName}`, //激活该应用的路径（子应用路由基地址）
        props: {
          ...item.props,
          getGlobalState: store.getGlobalState, // 下发getGlobalState方法
        },
      });
    }
  });
  return apps;
};
