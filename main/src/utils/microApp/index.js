// 引入 qiankun  应用注册函数   开启函数
import { registerMicroApps, start } from "qiankun";
// 引入 微应用配置文件
import microAppSetting from "./microAppSetting";
//注册子应用
registerMicroApps(microAppSetting.microApps());
//开启
start();