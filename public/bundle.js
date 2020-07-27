(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('axios'), require('typed.js')) :
	typeof define === 'function' && define.amd ? define(['react', 'axios', 'typed.js'], factory) :
	(global = global || self, factory(global.React, global.axios, global.Typed));
}(this, (function (React, axios, Typed) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;
	axios = axios && Object.prototype.hasOwnProperty.call(axios, 'default') ? axios['default'] : axios;
	Typed = Typed && Object.prototype.hasOwnProperty.call(Typed, 'default') ? Typed['default'] : Typed;

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var rngBrowser = createCommonjsModule(function (module) {
	// Unique ID creation requires a high quality random # generator.  In the
	// browser this is a little complicated due to unknown quality of Math.random()
	// and inconsistent support for the `crypto` API.  We do the best we can via
	// feature-detection

	// getRandomValues needs to be invoked in a context where "this" is a Crypto
	// implementation. Also, find the complete implementation of crypto on IE11.
	var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
	                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

	if (getRandomValues) {
	  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
	  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

	  module.exports = function whatwgRNG() {
	    getRandomValues(rnds8);
	    return rnds8;
	  };
	} else {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var rnds = new Array(16);

	  module.exports = function mathRNG() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return rnds;
	  };
	}
	});

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */
	var byteToHex = [];
	for (var i = 0; i < 256; ++i) {
	  byteToHex[i] = (i + 0x100).toString(16).substr(1);
	}

	function bytesToUuid(buf, offset) {
	  var i = offset || 0;
	  var bth = byteToHex;
	  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
	  return ([bth[buf[i++]], bth[buf[i++]], 
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]], '-',
		bth[buf[i++]], bth[buf[i++]],
		bth[buf[i++]], bth[buf[i++]],
		bth[buf[i++]], bth[buf[i++]]]).join('');
	}

	var bytesToUuid_1 = bytesToUuid;

	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html

	var _nodeId;
	var _clockseq;

	// Previous uuid creation time
	var _lastMSecs = 0;
	var _lastNSecs = 0;

	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];

	  options = options || {};
	  var node = options.node || _nodeId;
	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

	  // node and clockseq need to be initialized to random values if they're not
	  // specified.  We do this lazily to minimize issues related to insufficient
	  // system entropy.  See #189
	  if (node == null || clockseq == null) {
	    var seedBytes = rngBrowser();
	    if (node == null) {
	      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	      node = _nodeId = [
	        seedBytes[0] | 0x01,
	        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
	      ];
	    }
	    if (clockseq == null) {
	      // Per 4.2.2, randomize (14 bit) clockseq
	      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
	    }
	  }

	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }

	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }

	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }

	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;

	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;

	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;

	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;

	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;

	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;

	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;

	  // `node`
	  for (var n = 0; n < 6; ++n) {
	    b[i + n] = node[n];
	  }

	  return buf ? buf : bytesToUuid_1(b);
	}

	var v1_1 = v1;

	const { Button, IconButton, Icon, Grid, List, ListItem, ListItemSecondaryAction, ListSubheader, TextField, } = MaterialUI;
	var Editor = () => {
	    const [sectionList, setSectionList] = React.useState([]);
	    const curSectionName = React.useRef();
	    const sectionContent = React.useRef();
	    const gameName = React.useRef();
	    const load = async () => {
	        const res = await axios.post("/api/lst", { gameName: gameName.current.value });
	        setSectionList(res.data);
	    };
	    const handleAddSection = async () => {
	        const s = prompt("Section name:") || v1_1();
	        await axios.post("/api/write", {
	            gameName: gameName.current.value,
	            sectionName: s,
	            content: "",
	        });
	        await load();
	        await openSection(s);
	    };
	    const openSection = async (sectionName) => {
	        sectionContent.current.value =
	            (await axios.post("/api/read", { gameName: gameName.current.value, sectionName })).data;
	        curSectionName.current.value = sectionName;
	        sectionContent.current.focus();
	    };
	    const deleteSection = async (sectionName) => {
	        await axios.post("/api/del", { gameName: gameName.current.value, sectionName });
	        await load();
	    };
	    return (React__default.createElement("div", null,
	        React__default.createElement(Grid, { container: true, spacing: 3, style: { width: "100%" } },
	            React__default.createElement(Grid, { item: true, xs: 3 },
	                React__default.createElement(List, null,
	                    React__default.createElement(ListSubheader, null,
	                        "Sections",
	                        React__default.createElement(ListItemSecondaryAction, null,
	                            React__default.createElement(Button, { variant: "contained", disableElevation: true, onClick: handleAddSection }, "Add"))),
	                    sectionList.map((x) => (React__default.createElement(ListItem, { button: true, key: x, onClick: () => openSection(x) },
	                        x,
	                        React__default.createElement(ListItemSecondaryAction, null,
	                            React__default.createElement(IconButton, { onClick: () => deleteSection(x) },
	                                React__default.createElement(Icon, null, "delete")))))))),
	            React__default.createElement(Grid, { item: true, xs: 9 },
	                React__default.createElement("div", { style: { width: "100%", padding: 10 } },
	                    React__default.createElement(TextField, { label: "Game name", InputLabelProps: { shrink: true }, inputRef: gameName, style: {
	                            marginRight: 5,
	                        }, onKeyDown: (evt) => {
	                            evt.key === "Enter" && load();
	                        } }),
	                    React__default.createElement(TextField, { label: "Section name", InputLabelProps: { shrink: true }, inputRef: curSectionName, onKeyDown: (evt) => {
	                            evt.key === "Enter" &&
	                                openSection(curSectionName.current.value);
	                        } })),
	                React__default.createElement(TextField, { multiline: true, variant: "filled", rows: "30", label: "Content", InputLabelProps: { shrink: true }, inputRef: sectionContent, style: { width: "100%" }, inputProps: { style: { fontFamily: "monospace" } }, onBlur: () => {
	                        axios.post("/api/write", {
	                            gameName: gameName.current.value,
	                            sectionName: curSectionName.current.value,
	                            content: sectionContent.current.value,
	                        });
	                    } })))));
	};

	const { IconButton: IconButton$1, Icon: Icon$1, List: List$1, ListItem: ListItem$1, ListItemSecondaryAction: ListItemSecondaryAction$1, Paper, } = MaterialUI;
	const saves = localforage.createInstance({ name: "saves" });
	var Saves = (props) => {
	    const [lst, setLst] = React.useState([]);
	    const load = async () => {
	        const lst = [];
	        for (const s of await saves.keys()) {
	            lst.push(s);
	        }
	        setLst(lst);
	    };
	    React.useEffect(() => {
	        load();
	    }, []);
	    return (React__default.createElement("div", { style: { margin: 10 }, onTouchMove: (e) => e.nativeEvent.stopPropagation() },
	        React__default.createElement("h1", null, "UI\u5148\u968F\u4FBF\u51D1\u5408\u4E00\u4E0B"),
	        React__default.createElement(IconButton$1, { onClick: async () => {
	                await saves.setItem(prompt() || v1_1(), undefined);
	                load();
	            } },
	            React__default.createElement(Icon$1, null, "add")),
	        React__default.createElement(List$1, null, lst.map((x) => (React__default.createElement(ListItem$1, { component: Paper, elevation: 4, onClick: () => props.onSelect(x), button: true, key: x, style: {
	                marginBottom: 10,
	                height: "10em",
	            } },
	            x,
	            React__default.createElement(ListItemSecondaryAction$1, null,
	                React__default.createElement(IconButton$1, { onClick: async () => {
	                        await saves.removeItem(x);
	                        load();
	                    } },
	                    React__default.createElement(Icon$1, null, "delete")))))))));
	};

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
	class Engine {
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

	const defineStyle = (s) => s;

	const { Button: Button$1, Fab, Icon: Icon$2, Card, Divider, Backdrop, Dialog, Fade, List: List$2, ListItem: ListItem$2, Drawer, } = MaterialUI;
	const BackgroundImage = ({ src, style, ...rest }) => {
	    // const { style, ...rest1 } = rest
	    return (React__default.createElement("div", Object.assign({ style: Object.assign({
	            position: "fixed",
	            top: 0,
	            left: 0,
	            width: "100%",
	            height: "100%",
	            backgroundPosition: "center",
	            backgroundSize: "cover",
	            backgroundImage: `url("${src}")`,
	        }, style) }, rest)));
	};
	const backgroundSwitchTimeout = 1000;
	const showOptionsTimeout = { enter: 1500, exit: 500 };
	const saves$1 = localforage.createInstance({ name: "saves" });
	var Game = (props) => {
	    const gameName = props.match.params.gameName;
	    const [tmp, setTmp] = React.useState(false);
	    const [prevBackgroundImage, setPrevBackgroundImage] = React.useState();
	    const [srcHeight, setSrcHeight] = React.useState("");
	    const [engineLoading, setEngineLoading] = React.useState(true);
	    const [char, setChar] = React.useState();
	    const [text, setText] = React.useState("");
	    const [showOptions, setShowOptions] = React.useState(false);
	    const [showMenu, setShowMenu] = React.useState(false);
	    const [showSaves, setShowSaves] = React.useState(false);
	    const engineRef = React.useRef();
	    if (!engineRef.current)
	        engineRef.current = new Engine(gameName);
	    const engine = engineRef.current;
	    const type = React.useRef();
	    const selectType = React.useRef();
	    const adjustSizes = () => {
	        setSrcHeight(/Android|iPhone/i.test(navigator.userAgent) ? "8.5em" : "12em");
	    };
	    // const getEngine = (): Engine => {
	    // 	if (!engine.current) return engine.current = new Engine(gameName)
	    // 	else return engine.current
	    // }
	    React.useEffect(() => {
	        void (async () => {
	            await engine.selectSection("start");
	            // await new Promise(res => setTimeout(res, 1000))
	            setEngineLoading(false);
	            adjustSizes();
	            addEventListener("resize", adjustSizes);
	            addEventListener("touchmove", (e) => {
	                e.preventDefault();
	            }, { passive: false });
	            addEventListener("keydown", handleKeyDown);
	            next();
	        })();
	    }, []);
	    const handleKeyDown = (evt) => {
	        switch (evt.key) {
	            case "Escape":
	                setShowMenu(true);
	                break;
	            case " ":
	                next();
	                break;
	        }
	    };
	    const finish = () => {
	        type.current.destroy();
	        type.current = undefined;
	        setText(engine.state.text + engine.state.curText);
	    };
	    const updateFromEngine = (restoreFromSave) => {
	        const engine = engineRef.current;
	        if (restoreFromSave) {
	            setChar(engine.state.char);
	            setText(engine.state.text + engine.state.curText);
	            setShowOptions(false);
	        }
	        if (engine.state.backgroundImageChanged || restoreFromSave) {
	            engine.state.backgroundImageChanged = false;
	            setTmp(false);
	            setTimeout(() => {
	                setTmp(true);
	                setTimeout(() => setPrevBackgroundImage(engine.state.backgroundImage), backgroundSwitchTimeout);
	            });
	        }
	        if (engine.state.qry) {
	            const ans = prompt(engine.state.qry);
	            engine.ans[engine.state.qid] = ans;
	            engine.state.qry = undefined;
	            setTimeout(next);
	            return false;
	        }
	        else if (engine.state.opts) {
	            setShowOptions(true);
	            // engine.state.opts = undefined
	            // setTimeout(next)
	            return false;
	        }
	        else if (!restoreFromSave) {
	            setChar(engine.state.char);
	            setText(engine.state.text);
	            type.current = new Typed("#type", {
	                strings: [engine.state.curText],
	                typeSpeed: 27,
	                onComplete() {
	                    finish();
	                },
	            });
	        }
	        return true;
	    };
	    const next = async (flag) => {
	        const engine = engineRef.current;
	        if (type.current) {
	            finish();
	        }
	        else {
	            if (!flag)
	                await engine.next();
	            if (!updateFromEngine())
	                return false;
	        }
	        return true;
	    };
	    const fastForward = async (maxStep) => {
	        maxStep = maxStep || Infinity;
	        for (let i = 0; i < maxStep && await next(); i++)
	            ;
	    };
	    const choose = async (i, s) => {
	        engine.ans[engine.state.qid] = [i, s];
	        engine.state.opts = undefined;
	        setShowOptions(false);
	        await next();
	    };
	    const onSelect = async (saveName) => {
	        if (selectType.current === "load") {
	            engineRef.current = Engine.from(await saves$1.getItem(saveName));
	            updateFromEngine(true);
	            setShowSaves(false);
	            setShowMenu(false);
	        }
	        else if (selectType.current === "save") {
	            saves$1.setItem(saveName, engine);
	        }
	    };
	    return (React__default.createElement(React__default.Fragment, null,
	        prevBackgroundImage &&
	            React__default.createElement(BackgroundImage, { src: `/res/${gameName}${prevBackgroundImage}` }),
	        React__default.createElement(Fade, { in: tmp, timeout: { enter: backgroundSwitchTimeout, exit: 0 } },
	            React__default.createElement(BackgroundImage, { src: `/res/${gameName}${engine.state.backgroundImage}` })),
	        React__default.createElement(Fade, { in: showOptions, timeout: showOptionsTimeout },
	            React__default.createElement(Backdrop, { open: showOptions, style: { zIndex: 5 } },
	                React__default.createElement("div", { style: {
	                        padding: "5% 10%",
	                        color: "white",
	                        width: "100%",
	                        height: "100%",
	                    } },
	                    React__default.createElement(List$2, null, engine.state.opts && engine.state.opts.map((x, i) => (React__default.createElement(ListItem$2, { key: i, button: true, onClick: () => choose(i, x) }, x))))))),
	        React__default.createElement("div", { style: {
	                position: "fixed",
	                right: 0,
	                top: 0,
	                margin: 10,
	            } },
	            React__default.createElement(Fab, { onClick: () => fastForward(), size: "small", style: { marginRight: 10 } },
	                React__default.createElement(Icon$2, null, "directions_run")),
	            React__default.createElement(Fab, { onClick: () => fastForward(15), size: "small" },
	                React__default.createElement(Icon$2, null, "directions_walk"))),
	        React__default.createElement(Fab, { size: "small", color: "primary", onClick: () => setShowMenu(true), style: {
	                position: "fixed",
	                left: 0,
	                top: 0,
	                margin: 10,
	                zIndex: 6,
	            } },
	            React__default.createElement(Icon$2, null, "dehaze")),
	        React__default.createElement(Drawer, { open: showMenu, onClose: () => setShowMenu(false) },
	            React__default.createElement("div", { style: {
	                    width: document.documentElement.clientWidth * 0.35,
	                    padding: 10,
	                } },
	                React__default.createElement(List$2, null,
	                    React__default.createElement(ListItem$2, { button: true, onClick: () => {
	                            setShowSaves(true);
	                            selectType.current = "load";
	                        } }, "Load"),
	                    React__default.createElement(ListItem$2, { button: true, onClick: () => {
	                            setShowSaves(true);
	                            selectType.current = "save";
	                        } }, "Save")))),
	        React__default.createElement(Dialog, { open: showSaves, onClose: () => setShowSaves(false), maxWidth: "md", fullWidth: true },
	            React__default.createElement(Saves, { onSelect: onSelect })),
	        React__default.createElement("div", { style: defineStyle({
	                width: "100%",
	                height: srcHeight,
	                padding: 10,
	                display: "flex",
	                justifyContent: "center",
	                position: "fixed",
	                left: 0,
	                bottom: 0,
	                userSelect: 'none'
	            }) },
	            React__default.createElement(Card, { elevation: 4, style: {
	                    width: "80%",
	                    backgroundColor: char ? "#EEE" : "#AAA",
	                    transition: "background-color 1s ease",
	                    padding: 10,
	                    opacity: 0.8,
	                }, onClick: () => next() },
	                char && (React__default.createElement("div", { style: { width: "30%" } },
	                    React__default.createElement("span", { style: { color: "#888" } }, char),
	                    React__default.createElement(Divider, null))),
	                React__default.createElement("div", { style: { padding: "0 10px" } },
	                    React__default.createElement("span", { dangerouslySetInnerHTML: { __html: text } }),
	                    React__default.createElement("span", { id: "type" }))))));
	};

	const { HashRouter: Router, Switch, Route, Link, useHistory } = ReactRouterDOM;
	const { Button: Button$2 } = MaterialUI;
	const Index = () => {
	    const barStyle = defineStyle({
	        width: '30%',
	        marginBottom: 10
	    });
	    const history = useHistory();
	    const start = () => {
	        const gameName = prompt('Game name:');
	        if (gameName) {
	            history.push(`/game/${gameName}`);
	        }
	    };
	    return (React__default.createElement(React__default.Fragment, null,
	        React__default.createElement("h1", null, "UI\u968F\u4FBF\u5427\uFF0C\u53CD\u6B63\u4E5F\u6CA1\u6709\u4EBA\u4F1A\u7528"),
	        React__default.createElement("div", { style: {
	                width: '100%',
	                display: 'flex',
	                flexDirection: 'column',
	                alignItems: 'center'
	            } },
	            React__default.createElement(Button$2, { style: barStyle, variant: "contained", onClick: start }, "Start"),
	            React__default.createElement(Link, { style: barStyle, variant: "contained", to: "/editor", component: Button$2 }, "Editor"))));
	};
	ReactDOM.render(React__default.createElement(Router, null,
	    React__default.createElement(Switch, null,
	        React__default.createElement(Route, { exact: true, path: "/", component: Index }),
	        React__default.createElement(Route, { path: "/game/:gameName", component: Game }),
	        React__default.createElement(Route, { path: "/editor", component: Editor }))), document.querySelector("#app"));

})));
//# sourceMappingURL=bundle.js.map
