import axios from 'axios'
class State {
	text = ''
	curText = ''
	char: string = null
	applyText(s: string) {
		this.text += this.curText
		this.curText = s
	}
}
const opsType: { [key: string]: number } = {}
const ops: { [key: string]: (engine: Engine, argv: string[]) => Promise<boolean> } = {}
ops['\\char'] = async (engine, argv): Promise<boolean> => {
	if (argv.length > 1) engine.state.char = argv[1]
	else engine.state.char = null
	return false
}
ops['\\newline'] = async (engine, argv): Promise<boolean> => {
	engine.state.curText += '<br/>'
	return false
}
ops['\\clear'] = async (engine, argv): Promise<boolean> => {
	engine.state.text = engine.state.curText = ''
	return Boolean(argv[1])
}
ops['\\goto'] = async (engine, argv): Promise<boolean> => {
	await engine.load(argv[1])
	return false
}
opsType['\\script'] = 1
ops['\\script'] = async (engine, argv): Promise<boolean> => {
	(new Function(argv[1])).call(engine)
	return false
}
export default class Engine {
	gameName: string
	cnt = 0
	cnt1 = 0
	lst: string[] = []
	lst1: string[] = []
	state: State
	async load(sectionName: string) {
		this.lst = (await axios.post('/api/read', {
			gameName: this.gameName,
			sectionName
		})).data.split('\n')
		this.lst1 = []
		this.cnt = this.cnt1 = 0
	}
	addLine(s: string) {
		this.lst1.push(s)
	}
	nextLine(): string {
		if (this.cnt1 < this.lst1.length) return this.lst1[this.cnt1++]
		if (this.cnt < this.lst.length) return this.lst[this.cnt++]
		throw 'No more lines.'
	}
	async next() {
		let flag = false
		while (!flag) {
			const line = this.nextLine()
			if (!line.startsWith('\\')) {
				if (line === '') flag = await ops['\\newline'](this, [])
				else {
					this.state.applyText(line)
					break
				}
			}
			else {
				let lst = line.split(' ')
				if (lst[0] in ops) {
					if (lst[0] in opsType) {
						const cnt = opsType[lst[0]]
						lst = [...lst.slice(0, cnt), lst.slice(cnt).join(' ')]
					}
					flag = await ops[lst[0]](this, lst.filter(Boolean))
				}
				else throw `Unexpected token ${lst[0]}`
			}
		}
	}
	constructor(gameName: string) {
		this.gameName = gameName
		this.state = new State()
	}
}