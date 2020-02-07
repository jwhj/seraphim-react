"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var Button = MaterialUI.Button, Fab = MaterialUI.Fab, Icon = MaterialUI.Icon, Card = MaterialUI.Card, Divider = MaterialUI.Divider, Backdrop = MaterialUI.Backdrop, Fade = MaterialUI.Fade, List = MaterialUI.List, ListItem = MaterialUI.ListItem;
var BackgroundImage = function (_a) {
    var src = _a.src, style = _a.style, rest = __rest(_a, ["src", "style"]);
    // const { style, ...rest1 } = rest
    return (react_1.default.createElement("div", __assign({ style: Object.assign({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: "url(\"" + src + "\")"
        }, style) }, rest)));
};
var backgroundSwitchTimeout = 1000;
var showOptionsTimeout = { enter: 1500, exit: 500 };
exports.default = (function (props) {
    var gameName = props.match.params.gameName;
    var _a = __read(react_1.useState(false), 2), tmp = _a[0], setTmp = _a[1];
    var _b = __read(react_1.useState(), 2), prevBackgroundImage = _b[0], setPrevBackgroundImage = _b[1];
    var _c = __read(react_1.useState(''), 2), srcHeight = _c[0], setSrcHeight = _c[1];
    var _d = __read(react_1.useState(true), 2), engineLoading = _d[0], setEngineLoading = _d[1];
    var _e = __read(react_1.useState(), 2), char = _e[0], setChar = _e[1];
    var _f = __read(react_1.useState(''), 2), text = _f[0], setText = _f[1];
    var _g = __read(react_1.useState(false), 2), showOptions = _g[0], setShowOptions = _g[1];
    var engineRef = react_1.useRef();
    if (!engineRef.current)
        engineRef.current = new engine_1.default(gameName);
    var engine = engineRef.current;
    var type = react_1.useRef();
    var adjustSizes = function () {
        setSrcHeight(/Android|iPhone/i.test(navigator.userAgent) ? '8.5em' : '12em');
    };
    // const getEngine = (): Engine => {
    // 	if (!engine.current) return engine.current = new Engine(gameName)
    // 	else return engine.current
    // }
    react_1.useEffect(function () {
        void (function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, engine.selectSection('start')
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
                        next();
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var finish = function () {
        type.current.destroy();
        type.current = undefined;
        setText(engine.state.text + engine.state.curText);
    };
    var next = function () { return __awaiter(void 0, void 0, void 0, function () {
        var ans;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
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
                        setTimeout(next);
                        return [2 /*return*/, false];
                    }
                    else if (engine.state.opts) {
                        setShowOptions(true);
                        // engine.state.opts = undefined
                        // setTimeout(next)
                        return [2 /*return*/, false];
                    }
                    else {
                        setChar(engine.state.char);
                        setText(engine.state.text);
                        type.current = new typed_js_1.default('#type', {
                            strings: [engine.state.curText],
                            typeSpeed: 27,
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
                            setTimeout(function () { return setPrevBackgroundImage(engine.state.backgroundImage); }, backgroundSwitchTimeout);
                        });
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/, true];
            }
        });
    }); };
    var fastForward = function (maxStep) { return __awaiter(void 0, void 0, void 0, function () {
        var i, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    maxStep = maxStep || Infinity;
                    i = 0;
                    _b.label = 1;
                case 1:
                    _a = i < maxStep;
                    if (!_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, next()];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3:
                    if (!_a) return [3 /*break*/, 5];
                    ;
                    _b.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var choose = function (i, s) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
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
        prevBackgroundImage && react_1.default.createElement(BackgroundImage, { src: "/res/" + gameName + prevBackgroundImage }),
        react_1.default.createElement(Fade, { in: tmp, timeout: { enter: backgroundSwitchTimeout, exit: 0 } },
            react_1.default.createElement(BackgroundImage, { src: "/res/" + gameName + engine.state.backgroundImage })),
        react_1.default.createElement(Fade, { in: showOptions, timeout: showOptionsTimeout },
            react_1.default.createElement(Backdrop, { open: showOptions, style: { zIndex: 5 } },
                react_1.default.createElement("div", { style: {
                        padding: '5% 10%',
                        color: 'white',
                        width: '100%',
                        height: '100%'
                    } },
                    react_1.default.createElement(List, null, showOptions && engine.state.opts.map(function (x, i) { return (react_1.default.createElement(ListItem, { key: i, button: true, onClick: function () { return choose(i, x); } }, x)); }))))),
        react_1.default.createElement("div", { style: {
                position: 'fixed',
                right: 0,
                top: 0,
                margin: 10
            } },
            react_1.default.createElement(Fab, { onClick: function () { return fastForward(); }, size: "small", style: { marginRight: 10 } },
                react_1.default.createElement(Icon, null, "directions_run")),
            react_1.default.createElement(Fab, { onClick: function () { return fastForward(15); }, size: "small" },
                react_1.default.createElement(Icon, null, "directions_walk"))),
        react_1.default.createElement("div", { style: {
                width: '100%',
                height: srcHeight,
                padding: 10,
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                left: 0,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTBEO0FBQzFELG9EQUE2QjtBQUM3QixzREFBNEI7QUFFM0IsSUFBQSwwQkFBTSxFQUFFLG9CQUFHLEVBQ1gsc0JBQUksRUFDSixzQkFBSSxFQUNKLDRCQUFPLEVBQ1AsOEJBQVEsRUFDUixzQkFBSSxFQUNKLHNCQUFJLEVBQUUsOEJBQVEsQ0FDRDtBQUNkLElBQU0sZUFBZSxHQUFHLFVBQUMsRUFBd0Q7SUFBdEQsSUFBQSxZQUFHLEVBQUUsZ0JBQUssRUFBRSxtQ0FBTztJQUM3QyxtQ0FBbUM7SUFDbkMsT0FBTyxDQUNOLGdEQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2Qsa0JBQWtCLEVBQUUsUUFBUTtZQUM1QixjQUFjLEVBQUUsT0FBTztZQUN2QixlQUFlLEVBQUUsV0FBUSxHQUFHLFFBQUk7U0FDaEMsRUFBRSxLQUFLLENBQUMsSUFBSyxJQUFJLEVBQVEsQ0FDMUIsQ0FBQTtBQUNGLENBQUMsQ0FBQTtBQUNELElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFBO0FBQ3BDLElBQU0sa0JBQWtCLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQTtBQUNyRCxtQkFBZSxVQUFDLEtBQWtEO0lBQ2pFLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtJQUN0QyxJQUFBLHVD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QyxDQUFDLENBQUMsTUFBTTtvQkFDdkMsVUFBVSxFQUFFLDBCQUEwQjtvQkFDdEMsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLEdBQUc7aUJBQ1osRUFBRSxPQUFPLEVBQUUsSUFBSTtnQkFDZCxJQUFJLElBQUksQ0FDUix1Q0FBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO29CQUMzQix3Q0FBTSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUcsSUFBSSxDQUFRO29CQUM3Qyw4QkFBQyxPQUFPLE9BQUcsQ0FDTixDQUNOO2dCQUNELHVDQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7b0JBQ2hDLHdDQUFNLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFTO29CQUN4RCx3Q0FBTSxFQUFFLEVBQUMsTUFBTSxHQUFRLENBQ2xCLENBQ0EsQ0FDRixDQUNKLENBQ0gsQ0FBQTtBQUNGLENBQUMsRUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEVuZ2luZSBmcm9tICcuL2VuZ2luZSdcclxuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJ1xyXG5jb25zdCB7XHJcblx0QnV0dG9uLCBGYWIsXHJcblx0SWNvbixcclxuXHRDYXJkLFxyXG5cdERpdmlkZXIsXHJcblx0QmFja2Ryb3AsXHJcblx0RmFkZSxcclxuXHRMaXN0LCBMaXN0SXRlbVxyXG59ID0gTWF0ZXJpYWxVSVxyXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2UgPSAoeyBzcmMsIHN0eWxlLCAuLi5yZXN0IH06IHsgc3JjOiBzdHJpbmcsIHN0eWxlPzogb2JqZWN0IH0pID0+IHtcclxuXHQvLyBjb25zdCB7IHN0eWxlLCAuLi5yZXN0MSB9ID0gcmVzdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHN0eWxlPXtPYmplY3QuYXNzaWduKHtcclxuXHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0aGVpZ2h0OiAnMTAwJScsXHJcblx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcblx0XHRcdGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke3NyY31cIilgXHJcblx0XHR9LCBzdHlsZSl9ey4uLnJlc3R9PjwvZGl2PlxyXG5cdClcclxufVxyXG5jb25zdCBiYWNrZ3JvdW5kU3dpdGNoVGltZW91dCA9IDEwMDBcclxuY29uc3Qgc2hvd09wdGlvbnNUaW1lb3V0ID0geyBlbnRlcjogMTUwMCwgZXhpdDogNTAwIH1cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiB7IG1hdGNoOiB7IHBhcmFtczogeyBnYW1lTmFtZTogc3RyaW5nIH0gfSB9KSA9PiB7XHJcblx0Y29uc3QgZ2FtZU5hbWUgPSBwcm9wcy5tYXRjaC5wYXJhbXMuZ2FtZU5hbWVcclxuXHRjb25zdCBbdG1wLCBzZXRUbXBdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgW3ByZXZCYWNrZ3JvdW5kSW1hZ2UsIHNldFByZXZCYWNrZ3JvdW5kSW1hZ2VdID0gdXNlU3RhdGU8c3RyaW5nPigpXHJcblx0Y29uc3QgW3NyY0hlaWdodCwgc2V0U3JjSGVpZ2h0XSA9IHVzZVN0YXRlKCcnKVxyXG5cdGNvbnN0IFtlbmdpbmVMb2FkaW5nLCBzZXRFbmdpbmVMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblx0Y29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGU8c3RyaW5nPigpXHJcblx0Y29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3QgW3Nob3dPcHRpb25zLCBzZXRTaG93T3B0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBlbmdpbmVSZWYgPSB1c2VSZWY8RW5naW5lPigpXHJcblx0aWYgKCFlbmdpbmVSZWYuY3VycmVudCkgZW5naW5lUmVmLmN1cnJlbnQgPSBuZXcgRW5naW5lKGdhbWVOYW1lKVxyXG5cdGNvbnN0IGVuZ2luZSA9IGVuZ2luZVJlZi5jdXJyZW50XHJcblx0Y29uc3QgdHlwZSA9IHVzZVJlZjxUeXBlZD4oKVxyXG5cdGNvbnN0IGFkanVzdFNpemVzID0gKCkgPT4ge1xyXG5cdFx0c2V0U3JjSGVpZ2h0KC9BbmRyb2lkfGlQaG9uZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAnOC41ZW0nIDogJzEyZW0nKVxyXG5cdH1cclxuXHQvLyBjb25zdCBnZXRFbmdpbmUgPSAoKTogRW5naW5lID0+IHtcclxuXHQvLyBcdGlmICghZW5naW5lLmN1cnJlbnQpIHJldHVybiBlbmdpbmUuY3VycmVudCA9IG5ldyBFbmdpbmUoZ2FtZU5hbWUpXHJcblx0Ly8gXHRlbHNlIHJldHVybiBlbmdpbmUuY3VycmVudFxyXG5cdC8vIH1cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRhd2FpdCBlbmdpbmUuc2VsZWN0U2VjdGlvbignc3RhcnQnKVxyXG5cdFx0XHQvLyBhd2FpdCBuZXcgUHJvbWlzZShyZXMgPT4gc2V0VGltZW91dChyZXMsIDEwMDApKVxyXG5cdFx0XHRzZXRFbmdpbmVMb2FkaW5nKGZhbHNlKVxyXG5cdFx0XHRhZGp1c3RTaXplcygpXHJcblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFkanVzdFNpemVzKVxyXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZTogVG91Y2hFdmVudCkgPT4ge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHR9LCB7IHBhc3NpdmU6IGZhbHNlIH0pXHJcblx0XHRcdG5leHQoKVxyXG5cdFx0fSkoKVxyXG5cdH0sIFtdKVxyXG5cdGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcclxuXHRcdHR5cGUuY3VycmVudC5kZXN0cm95KClcclxuXHRcdHR5cGUuY3VycmVudCA9IHVuZGVmaW5lZFxyXG5cdFx0c2V0VGV4dChlbmdpbmUuc3RhdGUudGV4dCArIGVuZ2luZS5zdGF0ZS5jdXJUZXh0KVxyXG5cdH1cclxuXHRjb25zdCBuZXh0ID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdFx0aWYgKHR5cGUuY3VycmVudCkge1xyXG5cdFx0XHRmaW5pc2goKVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGF3YWl0IGVuZ2luZS5uZXh0KClcclxuXHRcdFx0aWYgKGVuZ2luZS5zdGF0ZS5xcnkpIHtcclxuXHRcdFx0XHRjb25zdCBhbnMgPSBwcm9tcHQoZW5naW5lLnN0YXRlLnFyeSlcclxuXHRcdFx0XHRlbmdpbmUuYW5zW2VuZ2luZS5zdGF0ZS5xaWRdID0gYW5zXHJcblx0XHRcdFx0ZW5naW5lLnN0YXRlLnFyeSA9IHVuZGVmaW5lZFxyXG5cdFx0XHRcdHNldFRpbWVvdXQobmV4dClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChlbmdpbmUuc3RhdGUub3B0cykge1xyXG5cdFx0XHRcdHNldFNob3dPcHRpb25zKHRydWUpXHJcblx0XHRcdFx0Ly8gZW5naW5lLnN0YXRlLm9wdHMgPSB1bmRlZmluZWRcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KG5leHQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2V0Q2hhcihlbmdpbmUuc3RhdGUuY2hhcilcclxuXHRcdFx0XHRzZXRUZXh0KGVuZ2luZS5zdGF0ZS50ZXh0KVxyXG5cdFx0XHRcdHR5cGUuY3VycmVudCA9IG5ldyBUeXBlZCgnI3R5cGUnLCB7XHJcblx0XHRcdFx0XHRzdHJpbmdzOiBbZW5naW5lLnN0YXRlLmN1clRleHRdLFxyXG5cdFx0XHRcdFx0dHlwZVNwZWVkOiAyNyxcclxuXHRcdFx0XHRcdG9uQ29tcGxldGUoKSB7XHJcblx0XHRcdFx0XHRcdGZpbmlzaCgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZW5naW5lLnN0YXRlLmJhY2tncm91bmRJbWFnZUNoYW5nZWQpIHtcclxuXHRcdFx0XHRlbmdpbmUuc3RhdGUuYmFja2dyb3VuZEltYWdlQ2hhbmdlZCA9IGZhbHNlXHJcblx0XHRcdFx0c2V0VG1wKGZhbHNlKVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0VG1wKHRydWUpXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHNldFByZXZCYWNrZ3JvdW5kSW1hZ2UoZW5naW5lLnN0YXRlLmJhY2tncm91bmRJbWFnZSksIGJhY2tncm91bmRTd2l0Y2hUaW1lb3V0KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlXHJcblx0fVxyXG5cdGNvbnN0IGZhc3RGb3J3YXJkID0gYXN5bmMgKG1heFN0ZXA/OiBudW1iZXIpID0+IHtcclxuXHRcdG1heFN0ZXAgPSBtYXhTdGVwIHx8IEluZmluaXR5XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG1heFN0ZXAgJiYgYXdhaXQgbmV4dCgpOyBpKyspO1xyXG5cdH1cclxuXHRjb25zdCBjaG9vc2UgPSBhc3luYyAoaTogbnVtYmVyLCBzOiBzdHJpbmcpID0+IHtcclxuXHRcdGVuZ2luZS5hbnNbZW5naW5lLnN0YXRlLnFpZF0gPSBbaSwgc11cclxuXHRcdGVuZ2luZS5zdGF0ZS5vcHRzID0gdW5kZWZpbmVkXHJcblx0XHRzZXRTaG93T3B0aW9ucyhmYWxzZSlcclxuXHRcdGF3YWl0IG5leHQoKVxyXG5cdH1cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e3ByZXZCYWNrZ3JvdW5kSW1hZ2UgJiYgPEJhY2tncm91bmRJbWFnZSBzcmM9e2AvcmVzLyR7Z2FtZU5hbWV9JHtwcmV2QmFja2dyb3VuZEltYWdlfWB9IC8+fVxyXG5cdFx0XHR7LyogPEZhZGUgaW49eyF0bXB9IHRpbWVvdXQ9e3sgZW50ZXI6IDAsIGV4aXQ6IDE1MDAgfX0+XHJcblx0XHRcdFx0PEJhY2tncm91bmRJbWFnZSBzcmM9e2AvcmVzL2Y3JHtwcmV2QmFja2dyb3VuZEltYWdlfWB9IC8+XHJcblx0XHRcdDwvRmFkZT4gKi99XHJcblx0XHRcdDxGYWRlIGluPXt0bXB9IHRpbWVvdXQ9e3sgZW50ZXI6IGJhY2tncm91bmRTd2l0Y2hUaW1lb3V0LCBleGl0OiAwIH19PlxyXG5cdFx0XHRcdDxCYWNrZ3JvdW5kSW1hZ2Ugc3JjPXtgL3Jlcy8ke2dhbWVOYW1lfSR7ZW5naW5lLnN0YXRlLmJhY2tncm91bmRJbWFnZX1gfSAvPlxyXG5cdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdHsvKiB7ZW5naW5lTG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6IChcclxuXHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e25leHR9Pm5leHQ8SWNvbj5hcnJvd19mb3J3YXJkPC9JY29uPjwvQnV0dG9uPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8YnIgLz4gKi99XHJcblx0XHRcdDxGYWRlIGluPXtzaG93T3B0aW9uc30gdGltZW91dD17c2hvd09wdGlvbnNUaW1lb3V0fT5cclxuXHRcdFx0XHQ8QmFja2Ryb3Agb3Blbj17c2hvd09wdGlvbnN9IHN0eWxlPXt7IHpJbmRleDogNSB9fT5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogJzUlIDEwJScsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcxMDAlJ1xyXG5cdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdDxMaXN0PlxyXG5cdFx0XHRcdFx0XHRcdHtzaG93T3B0aW9ucyAmJiBlbmdpbmUuc3RhdGUub3B0cy5tYXAoKHgsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbSBrZXk9e2l9IGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaG9vc2UoaSwgeCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7eH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvTGlzdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvQmFja2Ryb3A+XHJcblx0XHRcdDwvRmFkZT5cclxuXHRcdFx0PGRpdiBzdHlsZT17e1xyXG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdHJpZ2h0OiAwLFxyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRtYXJnaW46IDEwXHJcblx0XHRcdH19PlxyXG5cdFx0XHRcdDxGYWIgb25DbGljaz17KCkgPT4gZmFzdEZvcndhcmQoKX0gc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19PjxJY29uPmRpcmVjdGlvbnNfcnVuPC9JY29uPjwvRmFiPlxyXG5cdFx0XHRcdDxGYWIgb25DbGljaz17KCkgPT4gZmFzdEZvcndhcmQoMTUpfSBzaXplPVwic21hbGxcIj48SWNvbj5kaXJlY3Rpb25zX3dhbGs8L0ljb24+PC9GYWI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7XHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRoZWlnaHQ6IHNyY0hlaWdodCxcclxuXHRcdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0Ym90dG9tOiAwXHJcblx0XHRcdH19PlxyXG5cdFx0XHRcdDxDYXJkIGVsZXZhdGlvbj17NH0gc3R5bGU9e3tcclxuXHRcdFx0XHRcdHdpZHRoOiAnODAlJyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogY2hhciA/ICcjRUVFJyA6ICcjQUFBJyxcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UnLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMTAsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjhcclxuXHRcdFx0XHR9fSBvbkNsaWNrPXtuZXh0fT5cclxuXHRcdFx0XHRcdHtjaGFyICYmIChcclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogJzMwJScgfX0+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjODg4JyB9fT57Y2hhcn08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMCAxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19Pjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gaWQ9XCJ0eXBlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdClcclxufSJdfQ==