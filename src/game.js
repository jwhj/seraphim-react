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
    var _d = __read(react_1.useState(), 2), char = _d[0], setChar = _d[1];
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
        type.current = undefined;
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
                        engine.state.qry = undefined;
                        // setTimeout(next)
                        next();
                    }
                    else if (engine.state.opts) {
                        setShowOptions(true);
                        // engine.state.opts = undefined
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
                    engine.state.opts = undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBMEQ7QUFDMUQsb0RBQTZCO0FBQzdCLHNEQUE0QjtBQUUzQixJQUFBLDBCQUFNLEVBQ04sc0JBQUksRUFDSixzQkFBSSxFQUNKLDRCQUFPLEVBQ1Asd0JBQUssRUFDTCw4QkFBUSxFQUNSLHNCQUFJLEVBQ0osc0JBQUksRUFBRSw4QkFBUSxDQUNEO0FBQ2QsbUJBQWU7SUFDUixJQUFBLHVDQUErQixFQUE5QixXQUFHLEVBQUUsY0FBeUIsQ0FBQTtJQUMvQixJQUFBLG9DQUF3QyxFQUF2QyxpQkFBUyxFQUFFLG9CQUE0QixDQUFBO0lBQ3hDLElBQUEsc0NBQWtELEVBQWpELHFCQUFhLEVBQUUsd0JBQWtDLENBQUE7SUFDbEQsSUFBQSxrQ0FBb0MsRUFBbkMsWUFBSSxFQUFFLGVBQTZCLENBQUE7SUFDcEMsSUFBQSxvQ0FBOEIsRUFBN0IsWUFBSSxFQUFFLGVBQXVCLENBQUE7SUFDOUIsSUFBQSx1Q0FBK0MsRUFBOUMsbUJBQVcsRUFBRSxzQkFBaUMsQ0FBQTtJQUNyRCxJQUFNLE1BQU0sR0FBRyxjQUFNLEVBQVUsQ0FBQTtJQUMvQixJQUFNLElBQUksR0FBRyxjQUFNLEVBQVMsQ0FBQTtJQUM1QixJQUFNLFdBQVcsR0FBRztRQUNuQixZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM3RSxDQUFDLENBQUE7SUFDRCxJQUFNLFNBQVMsR0FBRztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87WUFBRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQkFBTSxD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QzdDLDhCQUFDLE9BQU8sT0FBRyxDQUNOLENBQ047Z0JBQ0QsdUNBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtvQkFDaEMsd0NBQU0sdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQVM7b0JBQ3hELHdDQUFNLEVBQUUsRUFBQyxNQUFNLEdBQVEsQ0FDbEIsQ0FDQSxDQUNGLENBQ0osQ0FDSCxDQUFBO0FBQ0YsQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lJ1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sXHJcblx0SWNvbixcclxuXHRDYXJkLFxyXG5cdERpdmlkZXIsXHJcblx0TW9kYWwsXHJcblx0QmFja2Ryb3AsXHJcblx0RmFkZSxcclxuXHRMaXN0LCBMaXN0SXRlbVxyXG59ID0gTWF0ZXJpYWxVSVxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgW3RtcCwgc2V0VG1wXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtzcmNIZWlnaHQsIHNldFNyY0hlaWdodF0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbZW5naW5lTG9hZGluZywgc2V0RW5naW5lTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cdGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxyXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxyXG5cdGNvbnN0IFtzaG93T3B0aW9ucywgc2V0U2hvd09wdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgZW5naW5lID0gdXNlUmVmPEVuZ2luZT4oKVxyXG5cdGNvbnN0IHR5cGUgPSB1c2VSZWY8VHlwZWQ+KClcclxuXHRjb25zdCBhZGp1c3RTaXplcyA9ICgpID0+IHtcclxuXHRcdHNldFNyY0hlaWdodCgvQW5kcm9pZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJzguNWVtJyA6ICcxMmVtJylcclxuXHR9XHJcblx0Y29uc3QgZ2V0RW5naW5lID0gKCk6IEVuZ2luZSA9PiB7XHJcblx0XHRpZiAoIWVuZ2luZS5jdXJyZW50KSByZXR1cm4gZW5naW5lLmN1cnJlbnQgPSBuZXcgRW5naW5lKCd0ZXN0JylcclxuXHRcdGVsc2UgcmV0dXJuIGVuZ2luZS5jdXJyZW50XHJcblx0fVxyXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Ly8gXHRjb25zdCBlbmdpbmUgPSBnZXRFbmdpbmUoKVxyXG5cdC8vIFx0c2V0VGV4dChlbmdpbmUuc3RhdGUudGV4dCArIGVuZ2luZS5zdGF0ZS5jdXJUZXh0KVxyXG5cdC8vIH0sIFtnZXRFbmdpbmUoKS5zdGF0ZV0pXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcclxuXHRcdFx0Y29uc3QgZW5naW5lID0gZ2V0RW5naW5lKClcclxuXHRcdFx0YXdhaXQgZW5naW5lLnNlbGVjdFNlY3Rpb24oJ3N0YXJ0JylcclxuXHRcdFx0Ly8gYXdhaXQgbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCAxMDAwKSlcclxuXHRcdFx0c2V0RW5naW5lTG9hZGluZyhmYWxzZSlcclxuXHRcdFx0YWRqdXN0U2l6ZXMoKVxyXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhZGp1c3RTaXplcylcclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0fSwgeyBwYXNzaXZlOiBmYWxzZSB9KVxyXG5cdFx0fSkoKVxyXG5cdH0sIFtdKVxyXG5cdGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcclxuXHRcdHR5cGUuY3VycmVudC5kZXN0cm95KClcclxuXHRcdHR5cGUuY3VycmVudCA9IHVuZGVmaW5lZFxyXG5cdFx0Y29uc3QgZW5naW5lID0gZ2V0RW5naW5lKClcclxuXHRcdHNldFRleHQoZW5naW5lLnN0YXRlLnRleHQgKyBlbmdpbmUuc3RhdGUuY3VyVGV4dClcclxuXHR9XHJcblx0Y29uc3QgbmV4dCA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IGVuZ2luZSA9IGdldEVuZ2luZSgpXHJcblx0XHRpZiAodHlwZS5jdXJyZW50KSB7XHJcblx0XHRcdGZpbmlzaCgpXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0YXdhaXQgZW5naW5lLm5leHQoKVxyXG5cdFx0XHRpZiAoZW5naW5lLnN0YXRlLnFyeSkge1xyXG5cdFx0XHRcdGNvbnN0IGFucyA9IHByb21wdChlbmdpbmUuc3RhdGUucXJ5KVxyXG5cdFx0XHRcdGVuZ2luZS5hbnNbZW5naW5lLnN0YXRlLnFpZF0gPSBhbnNcclxuXHRcdFx0XHRlbmdpbmUuc3RhdGUucXJ5ID0gdW5kZWZpbmVkXHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dChuZXh0KVxyXG5cdFx0XHRcdG5leHQoKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGVuZ2luZS5zdGF0ZS5vcHRzKSB7XHJcblx0XHRcdFx0c2V0U2hvd09wdGlvbnModHJ1ZSlcclxuXHRcdFx0XHQvLyBlbmdpbmUuc3RhdGUub3B0cyA9IHVuZGVmaW5lZFxyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQobmV4dClcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZXRDaGFyKGVuZ2luZS5zdGF0ZS5jaGFyKVxyXG5cdFx0XHRcdHNldFRleHQoZW5naW5lLnN0YXRlLnRleHQpXHJcblx0XHRcdFx0dHlwZS5jdXJyZW50ID0gbmV3IFR5cGVkKCcjdHlwZScsIHtcclxuXHRcdFx0XHRcdHN0cmluZ3M6IFtlbmdpbmUuc3RhdGUuY3VyVGV4dF0sXHJcblx0XHRcdFx0XHR0eXBlU3BlZWQ6IDM1LFxyXG5cdFx0XHRcdFx0b25Db21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0ZmluaXNoKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbmdpbmUuc3RhdGUuYmFja2dyb3VuZEltYWdlQ2hhbmdlZCkge1xyXG5cdFx0XHRcdGVuZ2luZS5zdGF0ZS5iYWNrZ3JvdW5kSW1hZ2VDaGFuZ2VkID0gZmFsc2VcclxuXHRcdFx0XHRzZXRUbXAoZmFsc2UpXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRUbXAodHJ1ZSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IGNob29zZSA9IGFzeW5jIChpOiBudW1iZXIsIHM6IHN0cmluZykgPT4ge1xyXG5cdFx0Y29uc3QgZW5naW5lID0gZ2V0RW5naW5lKClcclxuXHRcdGVuZ2luZS5hbnNbZW5naW5lLnN0YXRlLnFpZF0gPSBbaSwgc11cclxuXHRcdGVuZ2luZS5zdGF0ZS5vcHRzID0gdW5kZWZpbmVkXHJcblx0XHRzZXRTaG93T3B0aW9ucyhmYWxzZSlcclxuXHRcdGF3YWl0IG5leHQoKVxyXG5cdH1cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEZhZGUgaW49e3RtcH0gdGltZW91dD17MTUwMH0+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e1xyXG5cdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRcdGhlaWdodDogJzEwMCUnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKFwiL3Jlcy90ZXN0JHtnZXRFbmdpbmUoKS5zdGF0ZS5iYWNrZ3JvdW5kSW1hZ2V9XCIpYFxyXG5cdFx0XHRcdH19PjwvZGl2PlxyXG5cdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdHsvKiB7ZW5naW5lTG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6IChcclxuXHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e25leHR9Pm5leHQ8SWNvbj5hcnJvd19mb3J3YXJkPC9JY29uPjwvQnV0dG9uPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8YnIgLz4gKi99XHJcblx0XHRcdDxNb2RhbCBvcGVuPXtzaG93T3B0aW9uc30gQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfSBCYWNrZHJvcFByb3BzPXt7IHRyYW5zaXRpb25EdXJhdGlvbjogeyBlbnRlcjogMTUwMCwgZXhpdDogNTAwIH0gfX0+XHJcblx0XHRcdFx0PEZhZGUgaW49e3Nob3dPcHRpb25zfSB0aW1lb3V0PXt7IGVudGVyOiAxNTAwLCBleGl0OiA1MDAgfX0+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICc1JSAxMCUnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTAwJSdcclxuXHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdD5cclxuXHRcdFx0XHRcdFx0XHR7c2hvd09wdGlvbnMgJiYgZ2V0RW5naW5lKCkuc3RhdGUub3B0cy5tYXAoKHgsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbSBrZXk9e2l9IGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaG9vc2UoaSwgeCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7eH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvTGlzdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvRmFkZT5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0PGRpdiBzdHlsZT17e1xyXG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdFx0aGVpZ2h0OiBzcmNIZWlnaHQsXHJcblx0XHRcdFx0cGFkZGluZzogMTAsXHJcblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRib3R0b206IDBcclxuXHRcdFx0fX0+XHJcblx0XHRcdFx0PENhcmQgZWxldmF0aW9uPXs0fSBzdHlsZT17e1xyXG5cdFx0XHRcdFx0d2lkdGg6ICc4MCUnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBjaGFyID8gJyNFRUUnIDogJyNBQUEnLFxyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMXMgZWFzZScsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0XHRcdG9wYWNpdHk6IDAuOFxyXG5cdFx0XHRcdH19IG9uQ2xpY2s9e25leHR9PlxyXG5cdFx0XHRcdFx0e2NoYXIgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMzAlJyB9fT5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM4ODgnIH19PntjaGFyfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDEwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX0+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBpZD1cInR5cGVcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KVxyXG59Il19