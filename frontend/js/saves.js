module.exports = {
	template: '#savesTpl',
	data() {
		return {
			lst: []
		}
	},
	methods: {
		init() {
			this.load()
		},
		load() {
			this.lst = []
			for (let i = 0; i < localStorage.length; i++) {
				const key = localStorage.key(i)
				if (key.startsWith('save_')) {
					const tmp = JSON.parse(localStorage[key])
					this.lst.push({
						name: key.substr(5),
						eid: tmp.eid,
						char: tmp.state.char,
						txt: tmp.state.newText
					})
				}
			}
		},
		start(save) {
			this.$root.rpc('/game/new', {
				save
			}).then(res => {
				this.$root.name = res.data.name
				this.$router.push(`/game/${res.data.eid}`)
			})
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => vm.init())
	}
}