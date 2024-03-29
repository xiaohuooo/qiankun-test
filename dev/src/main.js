import Vue from "vue";
import App from "./App.vue";
import router from "@/utils/router";
import "./common.css";
import "./public-path";
Vue.config.productionTip = false;

let instance = null;
function render(props = {}) {
  console.log(props, "----------------");
  const { container } = props;
  // Vue.use(router)
  instance = new Vue({
    render: (h) => h(App, { props: { propsName: props.propsName } }),
    router,
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
