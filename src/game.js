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
    var engine = react_1.useRef();
    var type = react_1.useRef();
    var adjustSizes = function () {
        setSrcHeight(/Android|iPhone/i.test(navigator.userAgent) ? '8.5em' : '12em');
    };
    var getEngine = function () {
        if (!engine.current)
            return engine.current = new engine_1.default(gameName);
        else
            return engine.current;
    };
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
                        next();
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
        prevBackgroundImage && react_1.default.createElement(BackgroundImage, { src: "/res/" + gameName + prevBackgroundImage }),
        react_1.default.createElement(Fade, { in: tmp, timeout: { enter: backgroundSwitchTimeout, exit: 0 } },
            react_1.default.createElement(BackgroundImage, { src: "/res/" + gameName + getEngine().state.backgroundImage })),
        react_1.default.createElement(Fade, { in: showOptions, timeout: showOptionsTimeout },
            react_1.default.createElement(Backdrop, { open: showOptions, style: { zIndex: 5 } },
                react_1.default.createElement("div", { style: {
                        padding: '5% 10%',
                        color: 'white',
                        width: '100%',
                        height: '100%'
                    } },
                    react_1.default.createElement(List, null, showOptions && getEngine().state.opts.map(function (x, i) { return (react_1.default.createElement(ListItem, { key: i, button: true, onClick: function () { return choose(i, x); } }, x)); }))))),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTBEO0FBQzFELG9EQUE2QjtBQUM3QixzREFBNEI7QUFFM0IsSUFBQSwwQkFBTSxFQUFFLG9CQUFHLEVBQ1gsc0JBQUksRUFDSixzQkFBSSxFQUNKLDRCQUFPLEVBQ1AsOEJBQVEsRUFDUixzQkFBSSxFQUNKLHNCQUFJLEVBQUUsOEJBQVEsQ0FDRDtBQUNkLElBQU0sZUFBZSxHQUFHLFVBQUMsRUFBd0Q7SUFBdEQsSUFBQSxZQUFHLEVBQUUsZ0JBQUssRUFBRSxtQ0FBTztJQUM3QyxtQ0FBbUM7SUFDbkMsT0FBTyxDQUNOLGdEQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2Qsa0JBQWtCLEVBQUUsUUFBUTtZQUM1QixjQUFjLEVBQUUsT0FBTztZQUN2QixlQUFlLEVBQUUsV0FBUSxHQUFHLFFBQUk7U0FDaEMsRUFBRSxLQUFLLENBQUMsSUFBSyxJQUFJLEVBQVEsQ0FDMUIsQ0FBQTtBQUNGLENBQUMsQ0FBQTtBQUNELElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFBO0FBQ3BDLElBQU0sa0JBQWtCLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQTtBQUNyRCxtQkFBZSxVQUFDLEtBQWtEO0lBQ2pFLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtJQUN0QyxJQUFBLHVD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LENBQUM7YUFDVDtZQUNBLDhCQUFDLElBQUksSUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRTtvQkFDMUIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO29CQUN2QyxVQUFVLEVBQUUsMEJBQTBCO29CQUN0QyxPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsR0FBRztpQkFDWixFQUFFLE9BQU8sRUFBRSxJQUFJO2dCQUNkLElBQUksSUFBSSxDQUNSLHVDQUFLLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQzNCLHdDQUFNLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBRyxJQUFJLENBQVE7b0JBQzdDLDhCQUFDLE9BQU8sT0FBRyxDQUNOLENBQ047Z0JBQ0QsdUNBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtvQkFDaEMsd0NBQU0sdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQVM7b0JBQ3hELHdDQUFNLEVBQUUsRUFBQyxNQUFNLEdBQVEsQ0FDbEIsQ0FDQSxDQUNGLENBQ0osQ0FDSCxDQUFBO0FBQ0YsQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lJ1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sIEZhYixcclxuXHRJY29uLFxyXG5cdENhcmQsXHJcblx0RGl2aWRlcixcclxuXHRCYWNrZHJvcCxcclxuXHRGYWRlLFxyXG5cdExpc3QsIExpc3RJdGVtXHJcbn0gPSBNYXRlcmlhbFVJXHJcbmNvbnN0IEJhY2tncm91bmRJbWFnZSA9ICh7IHNyYywgc3R5bGUsIC4uLnJlc3QgfTogeyBzcmM6IHN0cmluZywgc3R5bGU/OiBvYmplY3QgfSkgPT4ge1xyXG5cdC8vIGNvbnN0IHsgc3R5bGUsIC4uLnJlc3QxIH0gPSByZXN0XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgc3R5bGU9e09iamVjdC5hc3NpZ24oe1xyXG5cdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRoZWlnaHQ6ICcxMDAlJyxcclxuXHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0YmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7c3JjfVwiKWBcclxuXHRcdH0sIHN0eWxlKX17Li4ucmVzdH0+PC9kaXY+XHJcblx0KVxyXG59XHJcbmNvbnN0IGJhY2tncm91bmRTd2l0Y2hUaW1lb3V0ID0gMTAwMFxyXG5jb25zdCBzaG93T3B0aW9uc1RpbWVvdXQgPSB7IGVudGVyOiAxNTAwLCBleGl0OiA1MDAgfVxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IHsgbWF0Y2g6IHsgcGFyYW1zOiB7IGdhbWVOYW1lOiBzdHJpbmcgfSB9IH0pID0+IHtcclxuXHRjb25zdCBnYW1lTmFtZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5nYW1lTmFtZVxyXG5cdGNvbnN0IFt0bXAsIHNldFRtcF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbcHJldkJhY2tncm91bmRJbWFnZSwgc2V0UHJldkJhY2tncm91bmRJbWFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KClcclxuXHRjb25zdCBbc3JjSGVpZ2h0LCBzZXRTcmNIZWlnaHRdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3QgW2VuZ2luZUxvYWRpbmcsIHNldEVuZ2luZUxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHRjb25zdCBbY2hhciwgc2V0Q2hhcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KClcclxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbc2hvd09wdGlvbnMsIHNldFNob3dPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IGVuZ2luZSA9IHVzZVJlZjxFbmdpbmU+KClcclxuXHRjb25zdCB0eXBlID0gdXNlUmVmPFR5cGVkPigpXHJcblx0Y29uc3QgYWRqdXN0U2l6ZXMgPSAoKSA9PiB7XHJcblx0XHRzZXRTcmNIZWlnaHQoL0FuZHJvaWR8aVBob25lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/ICc4LjVlbScgOiAnMTJlbScpXHJcblx0fVxyXG5cdGNvbnN0IGdldEVuZ2luZSA9ICgpOiBFbmdpbmUgPT4ge1xyXG5cdFx0aWYgKCFlbmdpbmUuY3VycmVudCkgcmV0dXJuIGVuZ2luZS5jdXJyZW50ID0gbmV3IEVuZ2luZShnYW1lTmFtZSlcclxuXHRcdGVsc2UgcmV0dXJuIGVuZ2luZS5jdXJyZW50XHJcblx0fVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGVuZ2luZSA9IGdldEVuZ2luZSgpXHJcblx0XHRcdGF3YWl0IGVuZ2luZS5zZWxlY3RTZWN0aW9uKCdzdGFydCcpXHJcblx0XHRcdC8vIGF3YWl0IG5ldyBQcm9taXNlKHJlcyA9PiBzZXRUaW1lb3V0KHJlcywgMTAwMCkpXHJcblx0XHRcdHNldEVuZ2luZUxvYWRpbmcoZmFsc2UpXHJcblx0XHRcdGFkanVzdFNpemVzKClcclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYWRqdXN0U2l6ZXMpXHJcblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlOiBUb3VjaEV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdH0sIHsgcGFzc2l2ZTogZmFsc2UgfSlcclxuXHRcdFx0bmV4dCgpXHJcblx0XHR9KSgpXHJcblx0fSwgW10pXHJcblx0Y29uc3QgZmluaXNoID0gKCkgPT4ge1xyXG5cdFx0dHlwZS5jdXJyZW50LmRlc3Ryb3koKVxyXG5cdFx0dHlwZS5jdXJyZW50ID0gdW5kZWZpbmVkXHJcblx0XHRjb25zdCBlbmdpbmUgPSBnZXRFbmdpbmUoKVxyXG5cdFx0c2V0VGV4dChlbmdpbmUuc3RhdGUudGV4dCArIGVuZ2luZS5zdGF0ZS5jdXJUZXh0KVxyXG5cdH1cclxuXHRjb25zdCBuZXh0ID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdFx0Y29uc3QgZW5naW5lID0gZ2V0RW5naW5lKClcclxuXHRcdGlmICh0eXBlLmN1cnJlbnQpIHtcclxuXHRcdFx0ZmluaXNoKClcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRhd2FpdCBlbmdpbmUubmV4dCgpXHJcblx0XHRcdGlmIChlbmdpbmUuc3RhdGUucXJ5KSB7XHJcblx0XHRcdFx0Y29uc3QgYW5zID0gcHJvbXB0KGVuZ2luZS5zdGF0ZS5xcnkpXHJcblx0XHRcdFx0ZW5naW5lLmFuc1tlbmdpbmUuc3RhdGUucWlkXSA9IGFuc1xyXG5cdFx0XHRcdGVuZ2luZS5zdGF0ZS5xcnkgPSB1bmRlZmluZWRcclxuXHRcdFx0XHRzZXRUaW1lb3V0KG5leHQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZW5naW5lLnN0YXRlLm9wdHMpIHtcclxuXHRcdFx0XHRzZXRTaG93T3B0aW9ucyh0cnVlKVxyXG5cdFx0XHRcdC8vIGVuZ2luZS5zdGF0ZS5vcHRzID0gdW5kZWZpbmVkXHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dChuZXh0KVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNldENoYXIoZW5naW5lLnN0YXRlLmNoYXIpXHJcblx0XHRcdFx0c2V0VGV4dChlbmdpbmUuc3RhdGUudGV4dClcclxuXHRcdFx0XHR0eXBlLmN1cnJlbnQgPSBuZXcgVHlwZWQoJyN0eXBlJywge1xyXG5cdFx0XHRcdFx0c3RyaW5nczogW2VuZ2luZS5zdGF0ZS5jdXJUZXh0XSxcclxuXHRcdFx0XHRcdHR5cGVTcGVlZDogMjcsXHJcblx0XHRcdFx0XHRvbkNvbXBsZXRlKCkge1xyXG5cdFx0XHRcdFx0XHRmaW5pc2goKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVuZ2luZS5zdGF0ZS5iYWNrZ3JvdW5kSW1hZ2VDaGFuZ2VkKSB7XHJcblx0XHRcdFx0ZW5naW5lLnN0YXRlLmJhY2tncm91bmRJbWFnZUNoYW5nZWQgPSBmYWxzZVxyXG5cdFx0XHRcdHNldFRtcChmYWxzZSlcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHNldFRtcCh0cnVlKVxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiBzZXRQcmV2QmFja2dyb3VuZEltYWdlKGVuZ2luZS5zdGF0ZS5iYWNrZ3JvdW5kSW1hZ2UpLCBiYWNrZ3JvdW5kU3dpdGNoVGltZW91dClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZVxyXG5cdH1cclxuXHRjb25zdCBmYXN0Rm9yd2FyZCA9IGFzeW5jIChtYXhTdGVwPzogbnVtYmVyKSA9PiB7XHJcblx0XHRtYXhTdGVwID0gbWF4U3RlcCB8fCBJbmZpbml0eVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtYXhTdGVwICYmIGF3YWl0IG5leHQoKTsgaSsrKTtcclxuXHR9XHJcblx0Y29uc3QgY2hvb3NlID0gYXN5bmMgKGk6IG51bWJlciwgczogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBlbmdpbmUgPSBnZXRFbmdpbmUoKVxyXG5cdFx0ZW5naW5lLmFuc1tlbmdpbmUuc3RhdGUucWlkXSA9IFtpLCBzXVxyXG5cdFx0ZW5naW5lLnN0YXRlLm9wdHMgPSB1bmRlZmluZWRcclxuXHRcdHNldFNob3dPcHRpb25zKGZhbHNlKVxyXG5cdFx0YXdhaXQgbmV4dCgpXHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7cHJldkJhY2tncm91bmRJbWFnZSAmJiA8QmFja2dyb3VuZEltYWdlIHNyYz17YC9yZXMvJHtnYW1lTmFtZX0ke3ByZXZCYWNrZ3JvdW5kSW1hZ2V9YH0gLz59XHJcblx0XHRcdHsvKiA8RmFkZSBpbj17IXRtcH0gdGltZW91dD17eyBlbnRlcjogMCwgZXhpdDogMTUwMCB9fT5cclxuXHRcdFx0XHQ8QmFja2dyb3VuZEltYWdlIHNyYz17YC9yZXMvZjcke3ByZXZCYWNrZ3JvdW5kSW1hZ2V9YH0gLz5cclxuXHRcdFx0PC9GYWRlPiAqL31cclxuXHRcdFx0PEZhZGUgaW49e3RtcH0gdGltZW91dD17eyBlbnRlcjogYmFja2dyb3VuZFN3aXRjaFRpbWVvdXQsIGV4aXQ6IDAgfX0+XHJcblx0XHRcdFx0PEJhY2tncm91bmRJbWFnZSBzcmM9e2AvcmVzLyR7Z2FtZU5hbWV9JHtnZXRFbmdpbmUoKS5zdGF0ZS5iYWNrZ3JvdW5kSW1hZ2V9YH0gLz5cclxuXHRcdFx0PC9GYWRlPlxyXG5cdFx0XHR7Lyoge2VuZ2luZUxvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAoXHJcblx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtuZXh0fT5uZXh0PEljb24+YXJyb3dfZm9yd2FyZDwvSWNvbj48L0J1dHRvbj5cclxuXHRcdFx0KX1cclxuXHRcdFx0PGJyIC8+ICovfVxyXG5cdFx0XHQ8RmFkZSBpbj17c2hvd09wdGlvbnN9IHRpbWVvdXQ9e3Nob3dPcHRpb25zVGltZW91dH0+XHJcblx0XHRcdFx0PEJhY2tkcm9wIG9wZW49e3Nob3dPcHRpb25zfSBzdHlsZT17eyB6SW5kZXg6IDUgfX0+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICc1JSAxMCUnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTAwJSdcclxuXHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdD5cclxuXHRcdFx0XHRcdFx0XHR7c2hvd09wdGlvbnMgJiYgZ2V0RW5naW5lKCkuc3RhdGUub3B0cy5tYXAoKHgsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbSBrZXk9e2l9IGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaG9vc2UoaSwgeCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7eH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvTGlzdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvQmFja2Ryb3A+XHJcblx0XHRcdDwvRmFkZT5cclxuXHRcdFx0PGRpdiBzdHlsZT17e1xyXG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdHJpZ2h0OiAwLFxyXG5cdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRtYXJnaW46IDEwXHJcblx0XHRcdH19PlxyXG5cdFx0XHRcdDxGYWIgb25DbGljaz17KCkgPT4gZmFzdEZvcndhcmQoKX0gc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19PjxJY29uPmRpcmVjdGlvbnNfcnVuPC9JY29uPjwvRmFiPlxyXG5cdFx0XHRcdDxGYWIgb25DbGljaz17KCkgPT4gZmFzdEZvcndhcmQoMTUpfSBzaXplPVwic21hbGxcIj48SWNvbj5kaXJlY3Rpb25zX3dhbGs8L0ljb24+PC9GYWI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7XHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRoZWlnaHQ6IHNyY0hlaWdodCxcclxuXHRcdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0Ym90dG9tOiAwXHJcblx0XHRcdH19PlxyXG5cdFx0XHRcdDxDYXJkIGVsZXZhdGlvbj17NH0gc3R5bGU9e3tcclxuXHRcdFx0XHRcdHdpZHRoOiAnODAlJyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogY2hhciA/ICcjRUVFJyA6ICcjQUFBJyxcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UnLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMTAsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjhcclxuXHRcdFx0XHR9fSBvbkNsaWNrPXtuZXh0fT5cclxuXHRcdFx0XHRcdHtjaGFyICYmIChcclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogJzMwJScgfX0+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjODg4JyB9fT57Y2hhcn08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMCAxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19Pjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gaWQ9XCJ0eXBlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdClcclxufSJdfQ==