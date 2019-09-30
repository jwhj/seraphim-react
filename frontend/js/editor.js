const axios = require('axios')
const uuid = require('uuid')
module.exports = {
	template: '#editorTpl',
	data() {
		return {
			name: null,
			id: null,
			ctx: '',
			lst: []
		}
	},
	methods: {
		load() {
			axios.post(`${this.$root.serverURL}/edit/list`, {
				name: this.name
			}).then(res => {
				this.lst = res.data
			})
		},
		newSection(id) {
			if (!this.name) return
			this.id = (typeof id === 'string') ? id : uuid()
			this.ctx = ''
			this.submit()
			this.load()
		},
		open(s) {
			this.id = s
			this.$root.rpc('/edit/get', {
				name: this.name,
				id: this.id
			}).then(res => this.ctx = res.data)
		},
		submit() {
			if (!this.id) return
			this.$root.rpc('/edit/set', {
				name: this.name,
				id: this.id,
				ctx: this.ctx
			})
		}
	}
}