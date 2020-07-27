import axios from "axios";
class State {
    constructor() {
        this.text = "";
        this.curText = "";
        this.backgroundImageChanged = false;
    }
    get backgroundImage() {
        return this._backgroundImage || "/transparent.png";
    }
    set backgroundImage(s) {
        this._backgroundImage = s;
        this.backgroundImageChanged = true;
    }
    applyText(s) {
        this.text += this.curText;
        this.curText = s;
    }
}
const opsType = {};
const ops = {};
ops["\\char"] = async (engine, argv) => {
    if (argv.length > 1)
        engine.state.char = argv[1];
    else
        engine.state.char = undefined;
    await ops["\\clear"](engine, []);
    return false;
};
ops["\\background-image"] = async (engine, argv) => {
    engine.state.backgroundImage = argv[1];
    return false;
};
ops["\\newline"] = async (engine, argv) => {
    engine.state.curText += "<br/>";
    return false;
};
ops["\\clear"] = async (engine, argv) => {
    engine.state.text = engine.state.curText = "";
    return Boolean(argv[1]);
};
ops["\\goto"] = async (engine, argv) => {
    await engine.selectSection(argv[1]);
    return false;
};
ops["\\query"] = async (engine, argv) => {
    engine.state.qid = argv[1];
    engine.state.qry = await engine.loadSection(argv[1]);
    return true;
};
ops["\\options"] = async (engine, argv) => {
    engine.state.qid = argv[1];
    engine.state.opts = (await engine.loadSection(argv[1])).split("\n");
    return true;
};
opsType["\\script"] = 1;
ops["\\script"] = async (engine, argv) => {
    void (new Function(argv[1])).call(engine);
    return false;
};
ops["\\beginscript"] = async (engine, argv) => {
    const code = [];
    let line;
    while ((line = engine.nextLine()) !== "\\endscript")
        code.push(line);
    void (new Function(code.join("\n"))).call(engine);
    return false;
};
export default class Engine {
    constructor(gameName) {
        this.cnt = 0;
        this.cnt1 = 0;
        this.lst = [];
        this.lst1 = [];
        this.ans = {};
        this.data = {};
        this.gameName = gameName;
        this.state = new State();
    }
    static from(obj) {
        // -------------------------------- CAUTION --------------------------------
        // This implementation should be further considered.
        Object.setPrototypeOf(obj, Engine.prototype);
        if (!obj.hasOwnProperty("state"))
            obj["state"] = new State();
        else
            Object.setPrototypeOf(obj["state"], State.prototype);
        return obj;
    }
    async loadSection(sectionName) {
        return (await axios.post("/api/read", {
            gameName: this.gameName,
            sectionName,
        })).data;
    }
    async selectSection(sectionName) {
        this.lst = (await this.loadSection(sectionName)).split("\n");
        this.lst1 = [];
        this.cnt = this.cnt1 = 0;
    }
    addLine(s) {
        this.lst1.push(s);
    }
    nextLine() {
        if (this.cnt1 < this.lst1.length)
            return this.lst1[this.cnt1++];
        if (this.cnt < this.lst.length)
            return this.lst[this.cnt++];
        throw "No more lines.";
    }
    async next() {
        let flag = false;
        while (!flag) {
            const line = this.nextLine();
            if (!line.startsWith("\\")) {
                if (line === "")
                    flag = await ops["\\newline"](this, []);
                else {
                    this.state.applyText(line);
                    break;
                }
            }
            else {
                let lst = line.split(" ");
                if (lst[0] in ops) {
                    if (lst[0] in opsType) {
                        const cnt = opsType[lst[0]];
                        lst = [...lst.slice(0, cnt), lst.slice(cnt).join(" ")];
                    }
                    flag = await ops[lst[0]](this, lst.filter(Boolean));
                }
                else
                    throw `Unexpected token ${lst[0]}`;
            }
        }
    }
}
//# sourceMappingURL=index.js.map