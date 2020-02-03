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
var Button = MaterialUI.Button, Icon = MaterialUI.Icon, Card = MaterialUI.Card, Divider = MaterialUI.Divider, Modal = MaterialUI.Modal, Backdrop = MaterialUI.Backdrop, Fade = MaterialUI.Fade, List = MaterialUI.List, ListItem = MaterialUI.ListItem;
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
                            setTimeout(function () { return setPrevBackgroundImage(engine.state.backgroundImage); }, backgroundSwitchTimeout);
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
        prevBackgroundImage && react_1.default.createElement(BackgroundImage, { src: "/res/" + gameName + prevBackgroundImage }),
        react_1.default.createElement(Fade, { in: tmp, timeout: { enter: backgroundSwitchTimeout, exit: 0 } },
            react_1.default.createElement(BackgroundImage, { src: "/res/" + gameName + getEngine().state.backgroundImage })),
        react_1.default.createElement(Modal, { open: showOptions, BackdropComponent: Backdrop, BackdropProps: { transitionDuration: showOptionsTimeout } },
            react_1.default.createElement(Fade, { in: showOptions, timeout: showOptionsTimeout },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTBEO0FBQzFELG9EQUE2QjtBQUM3QixzREFBNEI7QUFFM0IsSUFBQSwwQkFBTSxFQUNOLHNCQUFJLEVBQ0osc0JBQUksRUFDSiw0QkFBTyxFQUNQLHdCQUFLLEVBQ0wsOEJBQVEsRUFDUixzQkFBSSxFQUNKLHNCQUFJLEVBQUUsOEJBQVEsQ0FDRDtBQUNkLElBQU0sZUFBZSxHQUFHLFVBQUMsRUFBd0Q7SUFBdEQsSUFBQSxZQUFHLEVBQUUsZ0JBQUssRUFBRSxtQ0FBTztJQUM3QyxtQ0FBbUM7SUFDbkMsT0FBTyxDQUNOLGdEQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2Qsa0JBQWtCLEVBQUUsUUFBUTtZQUM1QixjQUFjLEVBQUUsT0FBTztZQUN2QixlQUFlLEVBQUUsV0FBUSxHQUFHLFFBQUk7U0FDaEMsRUFBRSxLQUFLLENBQUMsSUFBSyxJQUFJLEVBQVEsQ0FDMUIsQ0FBQTtBQUNGLENBQUMsQ0FBQTtBQUNELElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFBO0FBQ3BDLElBQU0sa0JBQWtCLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQTtBQUNyRCxtQkFBZSxVQUFDLEtBQWtEO0lBQ2pFLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtJQUN0QyxJQUFBLHVD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QUNJLENBQ0YsQ0FDQSxDQUNBO1FBQ1IsdUNBQUssS0FBSyxFQUFFO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsTUFBTTtnQkFDZixjQUFjLEVBQUUsUUFBUTtnQkFDeEIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxDQUFDO2FBQ1Q7WUFDQSw4QkFBQyxJQUFJLElBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7b0JBQzFCLEtBQUssRUFBRSxLQUFLO29CQUNaLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTtvQkFDdkMsVUFBVSxFQUFFLDBCQUEwQjtvQkFDdEMsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLEdBQUc7aUJBQ1osRUFBRSxPQUFPLEVBQUUsSUFBSTtnQkFDZCxJQUFJLElBQUksQ0FDUix1Q0FBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO29CQUMzQix3Q0FBTSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUcsSUFBSSxDQUFRO29CQUM3Qyw4QkFBQyxPQUFPLE9BQUcsQ0FDTixDQUNOO2dCQUNELHVDQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7b0JBQ2hDLHdDQUFNLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFTO29CQUN4RCx3Q0FBTSxFQUFFLEVBQUMsTUFBTSxHQUFRLENBQ2xCLENBQ0EsQ0FDRixDQUNKLENBQ0gsQ0FBQTtBQUNGLENBQUMsRUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEVuZ2luZSBmcm9tICcuL2VuZ2luZSdcclxuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJ1xyXG5jb25zdCB7XHJcblx0QnV0dG9uLFxyXG5cdEljb24sXHJcblx0Q2FyZCxcclxuXHREaXZpZGVyLFxyXG5cdE1vZGFsLFxyXG5cdEJhY2tkcm9wLFxyXG5cdEZhZGUsXHJcblx0TGlzdCwgTGlzdEl0ZW1cclxufSA9IE1hdGVyaWFsVUlcclxuY29uc3QgQmFja2dyb3VuZEltYWdlID0gKHsgc3JjLCBzdHlsZSwgLi4ucmVzdCB9OiB7IHNyYzogc3RyaW5nLCBzdHlsZT86IG9iamVjdCB9KSA9PiB7XHJcblx0Ly8gY29uc3QgeyBzdHlsZSwgLi4ucmVzdDEgfSA9IHJlc3RcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7XHJcblx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHR0b3A6IDAsXHJcblx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGhlaWdodDogJzEwMCUnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtzcmN9XCIpYFxyXG5cdFx0fSwgc3R5bGUpfXsuLi5yZXN0fT48L2Rpdj5cclxuXHQpXHJcbn1cclxuY29uc3QgYmFja2dyb3VuZFN3aXRjaFRpbWVvdXQgPSAxMDAwXHJcbmNvbnN0IHNob3dPcHRpb25zVGltZW91dCA9IHsgZW50ZXI6IDE1MDAsIGV4aXQ6IDUwMCB9XHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wczogeyBtYXRjaDogeyBwYXJhbXM6IHsgZ2FtZU5hbWU6IHN0cmluZyB9IH0gfSkgPT4ge1xyXG5cdGNvbnN0IGdhbWVOYW1lID0gcHJvcHMubWF0Y2gucGFyYW1zLmdhbWVOYW1lXHJcblx0Y29uc3QgW3RtcCwgc2V0VG1wXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtwcmV2QmFja2dyb3VuZEltYWdlLCBzZXRQcmV2QmFja2dyb3VuZEltYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxyXG5cdGNvbnN0IFtzcmNIZWlnaHQsIHNldFNyY0hlaWdodF0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbZW5naW5lTG9hZGluZywgc2V0RW5naW5lTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cdGNvbnN0IFtjaGFyLCBzZXRDaGFyXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxyXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxyXG5cdGNvbnN0IFtzaG93T3B0aW9ucywgc2V0U2hvd09wdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgZW5naW5lID0gdXNlUmVmPEVuZ2luZT4oKVxyXG5cdGNvbnN0IHR5cGUgPSB1c2VSZWY8VHlwZWQ+KClcclxuXHRjb25zdCBhZGp1c3RTaXplcyA9ICgpID0+IHtcclxuXHRcdHNldFNyY0hlaWdodCgvQW5kcm9pZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJzguNWVtJyA6ICcxMmVtJylcclxuXHR9XHJcblx0Y29uc3QgZ2V0RW5naW5lID0gKCk6IEVuZ2luZSA9PiB7XHJcblx0XHRpZiAoIWVuZ2luZS5jdXJyZW50KSByZXR1cm4gZW5naW5lLmN1cnJlbnQgPSBuZXcgRW5naW5lKGdhbWVOYW1lKVxyXG5cdFx0ZWxzZSByZXR1cm4gZW5naW5lLmN1cnJlbnRcclxuXHR9XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcclxuXHRcdFx0Y29uc3QgZW5naW5lID0gZ2V0RW5naW5lKClcclxuXHRcdFx0YXdhaXQgZW5naW5lLnNlbGVjdFNlY3Rpb24oJ3N0YXJ0JylcclxuXHRcdFx0Ly8gYXdhaXQgbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCAxMDAwKSlcclxuXHRcdFx0c2V0RW5naW5lTG9hZGluZyhmYWxzZSlcclxuXHRcdFx0YWRqdXN0U2l6ZXMoKVxyXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhZGp1c3RTaXplcylcclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0fSwgeyBwYXNzaXZlOiBmYWxzZSB9KVxyXG5cdFx0fSkoKVxyXG5cdH0sIFtdKVxyXG5cdGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcclxuXHRcdHR5cGUuY3VycmVudC5kZXN0cm95KClcclxuXHRcdHR5cGUuY3VycmVudCA9IHVuZGVmaW5lZFxyXG5cdFx0Y29uc3QgZW5naW5lID0gZ2V0RW5naW5lKClcclxuXHRcdHNldFRleHQoZW5naW5lLnN0YXRlLnRleHQgKyBlbmdpbmUuc3RhdGUuY3VyVGV4dClcclxuXHR9XHJcblx0Y29uc3QgbmV4dCA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IGVuZ2luZSA9IGdldEVuZ2luZSgpXHJcblx0XHRpZiAodHlwZS5jdXJyZW50KSB7XHJcblx0XHRcdGZpbmlzaCgpXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0YXdhaXQgZW5naW5lLm5leHQoKVxyXG5cdFx0XHRpZiAoZW5naW5lLnN0YXRlLnFyeSkge1xyXG5cdFx0XHRcdGNvbnN0IGFucyA9IHByb21wdChlbmdpbmUuc3RhdGUucXJ5KVxyXG5cdFx0XHRcdGVuZ2luZS5hbnNbZW5naW5lLnN0YXRlLnFpZF0gPSBhbnNcclxuXHRcdFx0XHRlbmdpbmUuc3RhdGUucXJ5ID0gdW5kZWZpbmVkXHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dChuZXh0KVxyXG5cdFx0XHRcdG5leHQoKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGVuZ2luZS5zdGF0ZS5vcHRzKSB7XHJcblx0XHRcdFx0c2V0U2hvd09wdGlvbnModHJ1ZSlcclxuXHRcdFx0XHQvLyBlbmdpbmUuc3RhdGUub3B0cyA9IHVuZGVmaW5lZFxyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQobmV4dClcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZXRDaGFyKGVuZ2luZS5zdGF0ZS5jaGFyKVxyXG5cdFx0XHRcdHNldFRleHQoZW5naW5lLnN0YXRlLnRleHQpXHJcblx0XHRcdFx0dHlwZS5jdXJyZW50ID0gbmV3IFR5cGVkKCcjdHlwZScsIHtcclxuXHRcdFx0XHRcdHN0cmluZ3M6IFtlbmdpbmUuc3RhdGUuY3VyVGV4dF0sXHJcblx0XHRcdFx0XHR0eXBlU3BlZWQ6IDM1LFxyXG5cdFx0XHRcdFx0b25Db21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0ZmluaXNoKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbmdpbmUuc3RhdGUuYmFja2dyb3VuZEltYWdlQ2hhbmdlZCkge1xyXG5cdFx0XHRcdGVuZ2luZS5zdGF0ZS5iYWNrZ3JvdW5kSW1hZ2VDaGFuZ2VkID0gZmFsc2VcclxuXHRcdFx0XHRzZXRUbXAoZmFsc2UpXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRUbXAodHJ1ZSlcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4gc2V0UHJldkJhY2tncm91bmRJbWFnZShlbmdpbmUuc3RhdGUuYmFja2dyb3VuZEltYWdlKSwgYmFja2dyb3VuZFN3aXRjaFRpbWVvdXQpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjb25zdCBjaG9vc2UgPSBhc3luYyAoaTogbnVtYmVyLCBzOiBzdHJpbmcpID0+IHtcclxuXHRcdGNvbnN0IGVuZ2luZSA9IGdldEVuZ2luZSgpXHJcblx0XHRlbmdpbmUuYW5zW2VuZ2luZS5zdGF0ZS5xaWRdID0gW2ksIHNdXHJcblx0XHRlbmdpbmUuc3RhdGUub3B0cyA9IHVuZGVmaW5lZFxyXG5cdFx0c2V0U2hvd09wdGlvbnMoZmFsc2UpXHJcblx0XHRhd2FpdCBuZXh0KClcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtwcmV2QmFja2dyb3VuZEltYWdlICYmIDxCYWNrZ3JvdW5kSW1hZ2Ugc3JjPXtgL3Jlcy8ke2dhbWVOYW1lfSR7cHJldkJhY2tncm91bmRJbWFnZX1gfSAvPn1cclxuXHRcdFx0ey8qIDxGYWRlIGluPXshdG1wfSB0aW1lb3V0PXt7IGVudGVyOiAwLCBleGl0OiAxNTAwIH19PlxyXG5cdFx0XHRcdDxCYWNrZ3JvdW5kSW1hZ2Ugc3JjPXtgL3Jlcy9mNyR7cHJldkJhY2tncm91bmRJbWFnZX1gfSAvPlxyXG5cdFx0XHQ8L0ZhZGU+ICovfVxyXG5cdFx0XHQ8RmFkZSBpbj17dG1wfSB0aW1lb3V0PXt7IGVudGVyOiBiYWNrZ3JvdW5kU3dpdGNoVGltZW91dCwgZXhpdDogMCB9fT5cclxuXHRcdFx0XHQ8QmFja2dyb3VuZEltYWdlIHNyYz17YC9yZXMvJHtnYW1lTmFtZX0ke2dldEVuZ2luZSgpLnN0YXRlLmJhY2tncm91bmRJbWFnZX1gfSAvPlxyXG5cdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdHsvKiB7ZW5naW5lTG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6IChcclxuXHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e25leHR9Pm5leHQ8SWNvbj5hcnJvd19mb3J3YXJkPC9JY29uPjwvQnV0dG9uPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8YnIgLz4gKi99XHJcblx0XHRcdDxNb2RhbCBvcGVuPXtzaG93T3B0aW9uc30gQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG5cdFx0XHRcdEJhY2tkcm9wUHJvcHM9e3sgdHJhbnNpdGlvbkR1cmF0aW9uOiBzaG93T3B0aW9uc1RpbWVvdXQgfX0+XHJcblx0XHRcdFx0PEZhZGUgaW49e3Nob3dPcHRpb25zfSB0aW1lb3V0PXtzaG93T3B0aW9uc1RpbWVvdXR9PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnNSUgMTAlJyxcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzEwMCUnXHJcblx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0PExpc3Q+XHJcblx0XHRcdFx0XHRcdFx0e3Nob3dPcHRpb25zICYmIGdldEVuZ2luZSgpLnN0YXRlLm9wdHMubWFwKCh4LCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0ga2V5PXtpfSBidXR0b24gb25DbGljaz17KCkgPT4gY2hvb3NlKGksIHgpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3h9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L0xpc3Q+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tcclxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRcdGhlaWdodDogc3JjSGVpZ2h0LFxyXG5cdFx0XHRcdHBhZGRpbmc6IDEwLFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRib3R0b206IDBcclxuXHRcdFx0fX0+XHJcblx0XHRcdFx0PENhcmQgZWxldmF0aW9uPXs0fSBzdHlsZT17e1xyXG5cdFx0XHRcdFx0d2lkdGg6ICc4MCUnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBjaGFyID8gJyNFRUUnIDogJyNBQUEnLFxyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMXMgZWFzZScsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0XHRcdG9wYWNpdHk6IDAuOFxyXG5cdFx0XHRcdH19IG9uQ2xpY2s9e25leHR9PlxyXG5cdFx0XHRcdFx0e2NoYXIgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMzAlJyB9fT5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM4ODgnIH19PntjaGFyfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDEwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX0+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBpZD1cInR5cGVcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KVxyXG59Il19