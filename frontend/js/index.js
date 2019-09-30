const axios = require('axios')
const router = new VueRouter({
	routes: [
		{ path: '/', component: require('./menu') },
		{ path: '/editor', component: require('./editor') },
		{ path: '/game/:eid', component: require('./game') },
		{ path: '/game', component: require('./game') },
		{ path: '/saves', component: require('./saves') }
	]
})
new Vue({
	router,
	el: '#app',
	data: {
		// resURL: '/res',
		isMobile: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent),
		serverURL: 'http://localhost:8080',
		name: null
	},
	computed: {
		resURL() {
			return `${this.serverURL}/res/${this.name}`
		}
	},
	methods: {
		/*async */rpc(s, d) {
			return /*await */axios.post(this.serverURL + s, d)
		}
		// TODO: 可能可以把async和await去掉？
		// TODO: 测试去掉async和await之后有没有问题
	}
})