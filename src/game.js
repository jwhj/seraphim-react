"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var engine_1 = __importDefault(require("./engine"));
var typed_js_1 = __importDefault(require("typed.js"));
var Button = MaterialUI.Button, Icon = MaterialUI.Icon, Card = MaterialUI.Card, Divider = MaterialUI.Divider, Modal = MaterialUI.Modal, Backdrop = MaterialUI.Backdrop, Fade = MaterialUI.Fade, List = MaterialUI.List, ListItem = MaterialUI.ListItem;
exports.default = (function () {
    var _a = __read(react_1.useState(false), 2), tmp = _a[0], setTmp = _a[1];
    var _b = __read(react_1.useState(''), 2), srcHeight = _b[0], setSrcHeight = _b[1];
    var _c = __read(react_1.useState(true), 2), engineLoading = _c[0], setEngineLoading = _c[1];
    var _d = __read(react_1.useState(null), 2), char = _d[0], setChar = _d[1];
    var _e = __read(react_1.useState(''), 2), text = _e[0], setText = _e[1];
    var _f = __read(react_1.useState(false), 2), showOptions = _f[0], setShowOptions = _f[1];
    var engine = react_1.useRef();
    var type = react_1.useRef();
    var adjustSizes = function () {
        setSrcHeight(/Android|iPhone/i.test(navigator.userAgent) ? '8.5em' : '12em');
    };
    var getEngine = function () {
        if (!engine.current)
            return engine.current = new engine_1.default('test');
        else
            return engine.current;
    };
    // useEffect(() => {
    // 	const engine = getEngine()
    // 	setText(engine.state.text + engine.state.curText)
    // }, [getEngine().state])
    react_1.useEffect(function () {
        void (function () { return __awaiter(void 0, void 0, void 0, function () {
            var engine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        engine = getEngine();
                        return [4 /*yield*/, engine.selectSection('start')
                            // await new Promise(res => setTimeout(res, 1000))
                        ];
                    case 1:
                        _a.sent();
                        // await new Promise(res => setTimeout(res, 1000))
                        setEngineLoading(false);
                        adjustSizes();
                        addEventListener('resize', adjustSizes);
                        addEventListener('touchmove', function (e) {
                            e.preventDefault();
                        }, { passive: false });
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var finish = function () {
        type.current.destroy();
        type.current = null;
        var engine = getEngine();
        setText(engine.state.text + engine.state.curText);
    };
    var next = function () { return __awaiter(void 0, void 0, void 0, function () {
        var engine, ans;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = getEngine();
                    if (!type.current) return [3 /*break*/, 1];
                    finish();
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, engine.next()];
                case 2:
                    _a.sent();
                    if (engine.state.qry) {
                        ans = prompt(engine.state.qry);
                        engine.ans[engine.state.qid] = ans;
                        engine.state.qry = null;
                        // setTimeout(next)
                        next();
                    }
                    else if (engine.state.opts) {
                        setShowOptions(true);
                        // engine.state.opts = null
                        // setTimeout(next)
                    }
                    else {
                        setChar(engine.state.char);
                        setText(engine.state.text);
                        type.current = new typed_js_1.default('#type', {
                            strings: [engine.state.curText],
                            typeSpeed: 35,
                            onComplete: function () {
                                finish();
                            }
                        });
                    }
                    if (engine.state.backgroundImageChanged) {
                        engine.state.backgroundImageChanged = false;
                        setTmp(false);
                        setTimeout(function () {
                            setTmp(true);
                        });
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var choose = function (i, s) { return __awaiter(void 0, void 0, void 0, function () {
        var engine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    engine = getEngine();
                    engine.ans[engine.state.qid] = [i, s];
                    engine.state.opts = null;
                    setShowOptions(false);
                    return [4 /*yield*/, next()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Fade, { in: tmp, timeout: 1500 },
            react_1.default.createElement("div", { style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage: "url(\"/res/test" + getEngine().state.backgroundImage + "\")"
                } })),
        react_1.default.createElement(Modal, { open: showOptions, BackdropComponent: Backdrop, BackdropProps: { transitionDuration: { enter: 1500, exit: 500 } } },
            react_1.default.createElement(Fade, { in: showOptions, timeout: { enter: 1500, exit: 500 } },
                react_1.default.createElement("div", { style: {
                        padding: '5% 10%',
                        color: 'white',
                        height: '100%'
                    } },
                    react_1.default.createElement(List, null, showOptions && getEngine().state.opts.map(function (x, i) { return (react_1.default.createElement(ListItem, { key: i, button: true, onClick: function () { return choose(i, x); } }, x)); }))))),
        react_1.default.createElement("div", { style: {
                width: '100%',
                height: srcHeight,
                padding: 10,
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                bottom: 0
            } },
            react_1.default.createElement(Card, { elevation: 4, style: {
                    width: '80%',
                    backgroundColor: char ? '#EEE' : '#AAA',
                    transition: 'background-color 1s ease',
                    padding: 10,
                    opacity: 0.8
                }, onClick: next },
                char && (react_1.default.createElement("div", { style: { width: '30%' } },
                    react_1.default.createElement("span", { style: { color: '#888' } }, char),
                    react_1.default.createElement(Divider, null))),
                react_1.default.createElement("div", { style: { padding: '0 10px' } },
                    react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: text } }),
                    react_1.default.createElement("span", { id: "type" }))))));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBMEQ7QUFDMUQsb0RBQTZCO0FBQzdCLHNEQUE0QjtBQUUzQixJQUFBLDBCQUFNLEVBQ04sc0JBQUksRUFDSixzQkFBSSxFQUNKLDRCQUFPLEVBQ1Asd0JBQUssRUFDTCw4QkFBUSxFQUNSLHNCQUFJLEVBQ0osc0JBQUksRUFBRSw4QkFBUSxDQUNEO0FBQ2QsbUJBQWU7SUFDUixJQUFBLHVDQUErQixFQUE5QixXQUFHLEVBQUUsY0FBeUIsQ0FBQTtJQUMvQixJQUFBLG9DQUF3QyxFQUF2QyxpQkFBUyxFQUFFLG9CQUE0QixDQUFBO0lBQ3hDLElBQUEsc0NBQWtELEVBQWpELHFCQUFhLEVBQUUsd0JBQWtDLENBQUE7SUFDbEQsSUFBQSxzQ0FBd0MsRUFBdkMsWUFBSSxFQUFFLGVBQWlDLENBQUE7SUFDeEMsSUFBQSxvQ0FBOEIsRUFBN0IsWUFBSSxFQUFFLGVBQXVCLENBQUE7SUFDOUIsSUFBQSx1Q0FBK0MsRUFBOUMsbUJBQVcsRUFBRSxzQkFBaUMsQ0FBQTtJQUNyRCxJQUFNLE1BQU0sR0FBRyxjQUFNLEVBQVUsQ0FBQTtJQUMvQixJQUFNLElBQUksR0FBRyxjQUFNLEVBQVMsQ0FBQTtJQUM1QixJQUFNLFdBQVcsR0FBRztRQUNuQixZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM3RSxDQUFDLENBQUE7SUFDRCxJQUFNLFNBQVMsR0FBRztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87WUFBRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQkFBTSxD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QzdDLDhCQUFDLE9BQU8sT0FBRyxDQUNOLENBQ047Z0JBQ0QsdUNBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtvQkFDaEMsd0NBQU0sdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQVM7b0JBQ3hELHdDQUFNLEVBQUUsRUFBQyxNQUFNLEdBQVEsQ0FDbEIsQ0FDQSxDQUNGLENBQ0osQ0FDSCxDQUFBO0FBQ0YsQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lJ1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sXHJcblx0SWNvbixcclxuXHRDYXJkLFxyXG5cdERpdmlkZXIsXHJcblx0TW9kYWwsXHJcblx0QmFja2Ryb3AsXHJcblx0RmFkZSxcclxuXHRMaXN0LCBMaXN0SXRlbVxyXG59ID0gTWF0ZXJpYWxVSVxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgW3RtcCwgc2V0VG1wXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtzcmNIZWlnaHQsIHNldFNyY0hlaWdodF0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbZW5naW5lTG9hZGluZywgc2V0RW5naW5lTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cdGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlPHN0cmluZz4obnVsbClcclxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbc2hvd09wdGlvbnMsIHNldFNob3dPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IGVuZ2luZSA9IHVzZVJlZjxFbmdpbmU+KClcclxuXHRjb25zdCB0eXBlID0gdXNlUmVmPFR5cGVkPigpXHJcblx0Y29uc3QgYWRqdXN0U2l6ZXMgPSAoKSA9PiB7XHJcblx0XHRzZXRTcmNIZWlnaHQoL0FuZHJvaWR8aVBob25lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/ICc4LjVlbScgOiAnMTJlbScpXHJcblx0fVxyXG5cdGNvbnN0IGdldEVuZ2luZSA9ICgpOiBFbmdpbmUgPT4ge1xyXG5cdFx0aWYgKCFlbmdpbmUuY3VycmVudCkgcmV0dXJuIGVuZ2luZS5jdXJyZW50ID0gbmV3IEVuZ2luZSgndGVzdCcpXHJcblx0XHRlbHNlIHJldHVybiBlbmdpbmUuY3VycmVudFxyXG5cdH1cclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0Y29uc3QgZW5naW5lID0gZ2V0RW5naW5lKClcclxuXHQvLyBcdHNldFRleHQoZW5naW5lLnN0YXRlLnRleHQgKyBlbmdpbmUuc3RhdGUuY3VyVGV4dClcclxuXHQvLyB9LCBbZ2V0RW5naW5lKCkuc3RhdGVdKVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGVuZ2luZSA9IGdldEVuZ2luZSgpXHJcblx0XHRcdGF3YWl0IGVuZ2luZS5zZWxlY3RTZWN0aW9uKCdzdGFydCcpXHJcblx0XHRcdC8vIGF3YWl0IG5ldyBQcm9taXNlKHJlcyA9PiBzZXRUaW1lb3V0KHJlcywgMTAwMCkpXHJcblx0XHRcdHNldEVuZ2luZUxvYWRpbmcoZmFsc2UpXHJcblx0XHRcdGFkanVzdFNpemVzKClcclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYWRqdXN0U2l6ZXMpXHJcblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlOiBUb3VjaEV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdH0sIHsgcGFzc2l2ZTogZmFsc2UgfSlcclxuXHRcdH0pKClcclxuXHR9LCBbXSlcclxuXHRjb25zdCBmaW5pc2ggPSAoKSA9PiB7XHJcblx0XHR0eXBlLmN1cnJlbnQuZGVzdHJveSgpXHJcblx0XHR0eXBlLmN1cnJlbnQgPSBudWxsXHJcblx0XHRjb25zdCBlbmdpbmUgPSBnZXRFbmdpbmUoKVxyXG5cdFx0c2V0VGV4dChlbmdpbmUuc3RhdGUudGV4dCArIGVuZ2luZS5zdGF0ZS5jdXJUZXh0KVxyXG5cdH1cclxuXHRjb25zdCBuZXh0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgZW5naW5lID0gZ2V0RW5naW5lKClcclxuXHRcdGlmICh0eXBlLmN1cnJlbnQpIHtcclxuXHRcdFx0ZmluaXNoKClcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRhd2FpdCBlbmdpbmUubmV4dCgpXHJcblx0XHRcdGlmIChlbmdpbmUuc3RhdGUucXJ5KSB7XHJcblx0XHRcdFx0Y29uc3QgYW5zID0gcHJvbXB0KGVuZ2luZS5zdGF0ZS5xcnkpXHJcblx0XHRcdFx0ZW5naW5lLmFuc1tlbmdpbmUuc3RhdGUucWlkXSA9IGFuc1xyXG5cdFx0XHRcdGVuZ2luZS5zdGF0ZS5xcnkgPSBudWxsXHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dChuZXh0KVxyXG5cdFx0XHRcdG5leHQoKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGVuZ2luZS5zdGF0ZS5vcHRzKSB7XHJcblx0XHRcdFx0c2V0U2hvd09wdGlvbnModHJ1ZSlcclxuXHRcdFx0XHQvLyBlbmdpbmUuc3RhdGUub3B0cyA9IG51bGxcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KG5leHQpXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2V0Q2hhcihlbmdpbmUuc3RhdGUuY2hhcilcclxuXHRcdFx0XHRzZXRUZXh0KGVuZ2luZS5zdGF0ZS50ZXh0KVxyXG5cdFx0XHRcdHR5cGUuY3VycmVudCA9IG5ldyBUeXBlZCgnI3R5cGUnLCB7XHJcblx0XHRcdFx0XHRzdHJpbmdzOiBbZW5naW5lLnN0YXRlLmN1clRleHRdLFxyXG5cdFx0XHRcdFx0dHlwZVNwZWVkOiAzNSxcclxuXHRcdFx0XHRcdG9uQ29tcGxldGUoKSB7XHJcblx0XHRcdFx0XHRcdGZpbmlzaCgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZW5naW5lLnN0YXRlLmJhY2tncm91bmRJbWFnZUNoYW5nZWQpIHtcclxuXHRcdFx0XHRlbmdpbmUuc3RhdGUuYmFja2dyb3VuZEltYWdlQ2hhbmdlZCA9IGZhbHNlXHJcblx0XHRcdFx0c2V0VG1wKGZhbHNlKVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0VG1wKHRydWUpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjb25zdCBjaG9vc2UgPSBhc3luYyAoaTogbnVtYmVyLCBzOiBzdHJpbmcpID0+IHtcclxuXHRcdGNvbnN0IGVuZ2luZSA9IGdldEVuZ2luZSgpXHJcblx0XHRlbmdpbmUuYW5zW2VuZ2luZS5zdGF0ZS5xaWRdID0gW2ksIHNdXHJcblx0XHRlbmdpbmUuc3RhdGUub3B0cyA9IG51bGxcclxuXHRcdHNldFNob3dPcHRpb25zKGZhbHNlKVxyXG5cdFx0YXdhaXQgbmV4dCgpXHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8RmFkZSBpbj17dG1wfSB0aW1lb3V0PXsxNTAwfT5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiAnMTAwJScsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIvcmVzL3Rlc3Qke2dldEVuZ2luZSgpLnN0YXRlLmJhY2tncm91bmRJbWFnZX1cIilgXHJcblx0XHRcdFx0fX0+PC9kaXY+XHJcblx0XHRcdDwvRmFkZT5cclxuXHRcdFx0ey8qIHtlbmdpbmVMb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogKFxyXG5cdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17bmV4dH0+bmV4dDxJY29uPmFycm93X2ZvcndhcmQ8L0ljb24+PC9CdXR0b24+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxiciAvPiAqL31cclxuXHRcdFx0PE1vZGFsIG9wZW49e3Nob3dPcHRpb25zfSBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9IEJhY2tkcm9wUHJvcHM9e3sgdHJhbnNpdGlvbkR1cmF0aW9uOiB7IGVudGVyOiAxNTAwLCBleGl0OiA1MDAgfSB9fT5cclxuXHRcdFx0XHQ8RmFkZSBpbj17c2hvd09wdGlvbnN9IHRpbWVvdXQ9e3sgZW50ZXI6IDE1MDAsIGV4aXQ6IDUwMCB9fT5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogJzUlIDEwJScsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcxMDAlJ1xyXG5cdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdDxMaXN0PlxyXG5cdFx0XHRcdFx0XHRcdHtzaG93T3B0aW9ucyAmJiBnZXRFbmdpbmUoKS5zdGF0ZS5vcHRzLm1hcCgoeCwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtIGtleT17aX0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IGNob29zZShpLCB4KX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt4fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9MaXN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9GYWRlPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7XHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRoZWlnaHQ6IHNyY0hlaWdodCxcclxuXHRcdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdGJvdHRvbTogMFxyXG5cdFx0XHR9fT5cclxuXHRcdFx0XHQ8Q2FyZCBlbGV2YXRpb249ezR9IHN0eWxlPXt7XHJcblx0XHRcdFx0XHR3aWR0aDogJzgwJScsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNoYXIgPyAnI0VFRScgOiAnI0FBQScsXHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlJyxcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDEwLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogMC44XHJcblx0XHRcdFx0fX0gb25DbGljaz17bmV4dH0+XHJcblx0XHRcdFx0XHR7Y2hhciAmJiAoXHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6ICczMCUnIH19PlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzg4OCcgfX0+e2NoYXJ9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxEaXZpZGVyIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzAgMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGV4dCB9fT48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGlkPVwidHlwZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn0iXX0=