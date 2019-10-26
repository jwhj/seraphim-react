const Typed = require('typed.js')
module.exports = {
	template: '#gameTpl',
	data() {
		return {
			state: {}
		}
	},
	methods: {
		init() {
			this.$refs.gameFrm.focus()
			this.typed = null
			if (this.$route.params.eid) {
				this.$root.rpc('/game/getstate', {
					eid: this.$route.params.eid
				}).then(res => {
					this.state = res.data
					this.state.text += this.state.newText
					this.state.newText = ''
					// if (this.state.bimg) document.body.style.backgroundImage = `url(${this.$root.resURL}${this.state.bimg})`
				})
			}
		},
		finishTexting() {
			if (!this.typed) return
			this.typed.destroy()
			this.typed = null
			this.state.text += this.state.newText
			this.state.newText = ''
		},
		doNext() {
			if (this.state.qry || this.state.opt) return
			if (this.typed) this.finishTexting()
			else this.getNext()
		},
		async getNext() {
			// axios.post(`${this.$root.serverURL}/game/next`).then(res => {
			// 	this.state = res.data
			// 	if (this.state.bimg) document.body.style.backgroundImage = `url(${this.$root.resURL}${this.state.bimg})`
			// 	if (this.state.qry) {
			// 		const s = prompt(this.state.qry[1])
			// 		axios.post(`${this.$root.serverURL}/game/answer`, {
			// 			qid: this.state.qry[0],
			// 			ans: s
			// 		}).then(this.getNext)
			// 	}
			// })
			const res = await this.$root.rpc('/game/next', {
				eid: this.$route.params.eid
			})
			this.state = res.data
			// if (this.typed) {
			// 	this.typed.destroy()
			// }
			// if (this.state.bimg) document.body.style.backgroundImage = `url(${this.$root.resURL}${this.state.bimg})`
			if (this.state.qry) {
				const s = prompt(this.state.qry[1])
				await this.$root.rpc('/game/answer', {
					eid: this.$route.params.eid,
					qid: this.state.qry[0],
					ans: s
				})
				this.getNext()
				return
			}
			const f = function () {
				if (this.typed) this.typed.destroy()
				this.typed = new Typed('.typing', {
					strings: [this.state.newText],
					typeSpeed: this.$root.isMobile ? 20 : 40,
					onComplete(self) {
						self.f.finishTexting()
					}
				})
				this.typed.f = this
			}
			setTimeout(() => f.call(this), 50)
		},
		choose(i) {
			this.$root.rpc('/game/answer', {
				eid: this.$route.params.eid,
				qid: this.state.opt[0],
				ans: [i, this.state.opt[1][i]]
			}).then(this.getNext)
		},
		save() {
			this.$root.rpc('/game/save', {
				// eid: this.state.eid
				eid: this.$route.params.eid
			})
		},
		saveInLocalStorage() {
			this.$root.rpc('/game/getsave', {
				eid: this.$route.params.eid
			}).then(res => {
				const s = prompt('请输入存档名')
				localStorage['save_' + s] = JSON.stringify(res.data)
			})
		},
		async test() {
			for (let i = 0; i < 10; i++) await this.getNext()
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => vm.init())
	}
}