module.exports = {
	template: '#menuTpl',
	methods: {
		newGame() {
			const name = prompt('已经在做了')
			this.$root.rpc('/game/new', {
				name
			}).then(res => {
				this.$root.name = res.data.name
				this.$router.push(`/game/${res.data.eid}`)
			})
		}
	}
}