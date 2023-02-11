//引入VueRouter
import VueRouter from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Vue from 'vue'

Vue.use(VueRouter)
//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    mode: "history",
    base:'/dev',
	routes:[
        {
			path:'/hello',
			component:Hello
		}
	]
})

//暴露router
export default router