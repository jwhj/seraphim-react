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
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var engine_1 = __importDefault(require("./engine"));
var typed_js_1 = __importDefault(require("typed.js"));
var Button = MaterialUI.Button, Icon = MaterialUI.Icon;
exports["default"] = (function () {
    var _a = __read(react_1.useState(true), 2), engineLoading = _a[0], setEngineLoading = _a[1];
    var _b = __read(react_1.useState(''), 2), text = _b[0], setText = _b[1];
    var engine = react_1.useRef();
    var type = react_1.useRef();
    var getEngine = function () {
        if (!engine.current)
            return engine.current = new engine_1["default"]('test');
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
                        return [4 /*yield*/, engine.load('start')
                            // await new Promise(res => setTimeout(res, 1000))
                        ];
                    case 1:
                        _a.sent();
                        // await new Promise(res => setTimeout(res, 1000))
                        setEngineLoading(false);
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
        var engine;
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
                    setText(engine.state.text);
                    type.current = new typed_js_1["default"]('#type', {
                        strings: [engine.state.curText],
                        typeSpeed: 20,
                        onComplete: function () {
                            finish();
                        }
                    });
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", null,
        engineLoading ? 'Loading...' : (react_1["default"].createElement(Button, { variant: "outlined", onClick: next },
            "next",
            react_1["default"].createElement(Icon, null, "arrow_forward"))),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("span", { dangerouslySetInnerHTML: { __html: text } }),
        react_1["default"].createElement("span", { id: "type" })));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBMEQ7QUFDMUQsb0RBQTZCO0FBQzdCLHNEQUE0QjtBQUUzQixJQUFBLDBCQUFNLEVBQ04sc0JBQUksQ0FDUztBQUNkLHNCQUFlO0lBQ1IsSUFBQSxzQ0FBa0QsRUFBakQscUJBQWEsRUFBRSx3QkFBa0MsQ0FBQTtJQUNsRCxJQUFBLG9DQUE4QixFQUE3QixZQUFJLEVBQUUsZUFBdUIsQ0FBQTtJQUNwQyxJQUFNLE1BQU0sR0FBRyxjQUFNLEVBQVUsQ0FBQTtJQUMvQixJQUFNLElBQUksR0FBRyxjQUFNLEVBQVMsQ0FBQTtJQUM1QixJQUFNLFNBQVMsR0FBRztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87WUFBRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBOztZQUMxRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDM0IsQ0FBQyxDQUFBO0lBQ0Qsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixxREFBcUQ7SUFDckQsMEJBQTBCO0lBQzFCLGlCQUFTLENBQUM7UUFDVCxLQUFLLENBQUM7Ozs7O3dCQUNDLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQTt3QkFDMUIscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQzFCLGtEQUFrRDswQkFEeEI7O3dCQUExQixTQUEwQixDQUFBO3dCQUMxQixrREFBa0Q7d0JBQ2xELGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFBOzs7O2FBQ3ZCLENBQUMsRUFBRSxDQUFBO0lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ04sSUFBTSxNQUFNLEdBQUc7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ25CLElBQU0sTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFBO1FBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2xELENBQUMsQ0FBQTtJQUNELElBQU0sSUFBSSxHQUFHOzs7OztvQkFDTixNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUE7eUJBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQVosd0JBQVk7b0JBQ2YsTUFBTSxFQUFFLENBQUE7O3dCQUdSLHFCQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBQW5CLFNBQW1CLENBQUE7b0JBQ25CLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQUssQ0FBQyxPQUFPLEVBQUU7d0JBQ2pDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUMvQixTQUFTLEVBQUUsRUFBRTt3QkFDYixVQUFVOzRCQUNULE1BQU0sRUFBRSxDQUFBO3dCQUNULENBQUM7cUJBQ0QsQ0FBQyxDQUFBOzs7OztTQUVILENBQUE7SUFDRCxPQUFPLENBQ047UUFDRSxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FDL0IsaUNBQUMsTUFBTSxJQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLElBQUk7O1lBQU0saUNBQUMsSUFBSSx3QkFBcUIsQ0FBUyxDQUNqRjtRQUNELDRDQUFNO1FBQ04sMkNBQU0sdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQVM7UUFDeEQsMkNBQU0sRUFBRSxFQUFDLE1BQU0sR0FBUSxDQUNsQixDQUNOLENBQUE7QUFDRixDQUFDLEVBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUnXHJcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcydcclxuY29uc3Qge1xyXG5cdEJ1dHRvbixcclxuXHRJY29uXHJcbn0gPSBNYXRlcmlhbFVJXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBbZW5naW5lTG9hZGluZywgc2V0RW5naW5lTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxyXG5cdGNvbnN0IGVuZ2luZSA9IHVzZVJlZjxFbmdpbmU+KClcclxuXHRjb25zdCB0eXBlID0gdXNlUmVmPFR5cGVkPigpXHJcblx0Y29uc3QgZ2V0RW5naW5lID0gKCk6IEVuZ2luZSA9PiB7XHJcblx0XHRpZiAoIWVuZ2luZS5jdXJyZW50KSByZXR1cm4gZW5naW5lLmN1cnJlbnQgPSBuZXcgRW5naW5lKCd0ZXN0JylcclxuXHRcdGVsc2UgcmV0dXJuIGVuZ2luZS5jdXJyZW50XHJcblx0fVxyXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Ly8gXHRjb25zdCBlbmdpbmUgPSBnZXRFbmdpbmUoKVxyXG5cdC8vIFx0c2V0VGV4dChlbmdpbmUuc3RhdGUudGV4dCArIGVuZ2luZS5zdGF0ZS5jdXJUZXh0KVxyXG5cdC8vIH0sIFtnZXRFbmdpbmUoKS5zdGF0ZV0pXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcclxuXHRcdFx0Y29uc3QgZW5naW5lID0gZ2V0RW5naW5lKClcclxuXHRcdFx0YXdhaXQgZW5naW5lLmxvYWQoJ3N0YXJ0JylcclxuXHRcdFx0Ly8gYXdhaXQgbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCAxMDAwKSlcclxuXHRcdFx0c2V0RW5naW5lTG9hZGluZyhmYWxzZSlcclxuXHRcdH0pKClcclxuXHR9LCBbXSlcclxuXHRjb25zdCBmaW5pc2ggPSAoKSA9PiB7XHJcblx0XHR0eXBlLmN1cnJlbnQuZGVzdHJveSgpXHJcblx0XHR0eXBlLmN1cnJlbnQgPSBudWxsXHJcblx0XHRjb25zdCBlbmdpbmUgPSBnZXRFbmdpbmUoKVxyXG5cdFx0c2V0VGV4dChlbmdpbmUuc3RhdGUudGV4dCArIGVuZ2luZS5zdGF0ZS5jdXJUZXh0KVxyXG5cdH1cclxuXHRjb25zdCBuZXh0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgZW5naW5lID0gZ2V0RW5naW5lKClcclxuXHRcdGlmICh0eXBlLmN1cnJlbnQpIHtcclxuXHRcdFx0ZmluaXNoKClcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRhd2FpdCBlbmdpbmUubmV4dCgpXHJcblx0XHRcdHNldFRleHQoZW5naW5lLnN0YXRlLnRleHQpXHJcblx0XHRcdHR5cGUuY3VycmVudCA9IG5ldyBUeXBlZCgnI3R5cGUnLCB7XHJcblx0XHRcdFx0c3RyaW5nczogW2VuZ2luZS5zdGF0ZS5jdXJUZXh0XSxcclxuXHRcdFx0XHR0eXBlU3BlZWQ6IDIwLFxyXG5cdFx0XHRcdG9uQ29tcGxldGUoKSB7XHJcblx0XHRcdFx0XHRmaW5pc2goKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHtlbmdpbmVMb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogKFxyXG5cdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17bmV4dH0+bmV4dDxJY29uPmFycm93X2ZvcndhcmQ8L0ljb24+PC9CdXR0b24+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRleHQgfX0+PC9zcGFuPlxyXG5cdFx0XHQ8c3BhbiBpZD1cInR5cGVcIj48L3NwYW4+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0iXX0=