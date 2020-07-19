import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/Home'
	},
	{
		path: '/Home',
		name: 'Home',
		component: ()=>import("../views/Home.vue")
	},
	{
		path: '/Found',
		name: 'Found',
		component: ()=>import("../components/Found.vue")
	},
]

const router = new VueRouter({
	routes
})

export default router
