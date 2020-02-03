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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var State = /** @class */ (function () {
    function State() {
        this.text = '';
        this.curText = '';
        this.backgroundImageChanged = false;
    }
    Object.defineProperty(State.prototype, "backgroundImage", {
        get: function () {
            return this._backgroundImage || '/transparent.png';
        },
        set: function (s) {
            this._backgroundImage = s;
            this.backgroundImageChanged = true;
        },
        enumerable: true,
        configurable: true
    });
    State.prototype.applyText = function (s) {
        this.text += this.curText;
        this.curText = s;
    };
    return State;
}());
var opsType = {};
var ops = {};
ops['\\char'] = function (engine, argv) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (argv.length > 1)
                    engine.state.char = argv[1];
                else
                    engine.state.char = undefined;
                return [4 /*yield*/, ops['\\clear'](engine, [])];
            case 1:
                _a.sent();
                return [2 /*return*/, false];
        }
    });
}); };
ops['\\background-image'] = function (engine, argv) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        engine.state.backgroundImage = argv[1];
        return [2 /*return*/, false];
    });
}); };
ops['\\newline'] = function (engine, argv) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        engine.state.curText += '<br/>';
        return [2 /*return*/, false];
    });
}); };
ops['\\clear'] = function (engine, argv) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        engine.state.text = engine.state.curText = '';
        return [2 /*return*/, Boolean(argv[1])];
    });
}); };
ops['\\goto'] = function (engine, argv) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, engine.selectSection(argv[1])];
            case 1:
                _a.sent();
                return [2 /*return*/, false];
        }
    });
}); };
ops['\\query'] = function (engine, argv) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                engine.state.qid = argv[1];
                _a = engine.state;
                return [4 /*yield*/, engine.loadSection(argv[1])];
            case 1:
                _a.qry = _b.sent();
                return [2 /*return*/, true];
        }
    });
}); };
ops['\\options'] = function (engine, argv) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                engine.state.qid = argv[1];
                _a = engine.state;
                return [4 /*yield*/, engine.loadSection(argv[1])];
            case 1:
                _a.opts = (_b.sent()).split('\n');
                return [2 /*return*/, true];
        }
    });
}); };
opsType['\\script'] = 1;
ops['\\script'] = function (engine, argv) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        void (new Function(argv[1])).call(engine);
        return [2 /*return*/, false];
    });
}); };
ops['\\beginscript'] = function (engine, argv) { return __awaiter(void 0, void 0, void 0, function () {
    var code, line;
    return __generator(this, function (_a) {
        code = [];
        while ((line = engine.nextLine()) !== '\\endscript')
            code.push(line);
        void (new Function(code.join('\n'))).call(engine);
        return [2 /*return*/, false];
    });
}); };
var Engine = /** @class */ (function () {
    function Engine(gameName) {
        this.cnt = 0;
        this.cnt1 = 0;
        this.lst = [];
        this.lst1 = [];
        this.ans = {};
        this.data = {};
        this.gameName = gameName;
        this.state = new State();
    }
    Engine.prototype.loadSection = function (sectionName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post('/api/read', {
                            gameName: this.gameName,
                            sectionName: sectionName
                        })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Engine.prototype.selectSection = function (sectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadSection(sectionName)];
                    case 1:
                        _a.lst = (_b.sent()).split('\n');
                        this.lst1 = [];
                        this.cnt = this.cnt1 = 0;
                        return [2 /*return*/];
                }
            });
        });
    };
    Engine.prototype.addLine = function (s) {
        this.lst1.push(s);
    };
    Engine.prototype.nextLine = function () {
        if (this.cnt1 < this.lst1.length)
            return this.lst1[this.cnt1++];
        if (this.cnt < this.lst.length)
            return this.lst[this.cnt++];
        throw 'No more lines.';
    };
    Engine.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var flag, line, lst, cnt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        flag = false;
                        _a.label = 1;
                    case 1:
                        if (!!flag) return [3 /*break*/, 9];
                        line = this.nextLine();
                        if (!!line.startsWith('\\')) return [3 /*break*/, 5];
                        if (!(line === '')) return [3 /*break*/, 3];
                        return [4 /*yield*/, ops['\\newline'](this, [])];
                    case 2:
                        flag = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.state.applyText(line);
                        return [3 /*break*/, 9];
                    case 4: return [3 /*break*/, 8];
                    case 5:
                        lst = line.split(' ');
                        if (!(lst[0] in ops)) return [3 /*break*/, 7];
                        if (lst[0] in opsType) {
                            cnt = opsType[lst[0]];
                            lst = __spread(lst.slice(0, cnt), [lst.slice(cnt).join(' ')]);
                        }
                        return [4 /*yield*/, ops[lst[0]](this, lst.filter(Boolean))];
                    case 6:
                        flag = _a.sent();
                        return [3 /*break*/, 8];
                    case 7: throw "Unexpected token " + lst[0];
                    case 8: return [3 /*break*/, 1];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return Engine;
}());
exports.default = Engine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXlCO0FBQ3pCO0lBQUE7UUFDQyxTQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ1QsWUFBTyxHQUFHLEVBQUUsQ0FBQTtRQU1aLDJCQUFzQixHQUFHLEtBQUssQ0FBQTtJQVkvQixDQUFDO0lBWEEsc0JBQUksa0NBQWU7YUFBbkI7WUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxrQkFBa0IsQ0FBQTtRQUNuRCxDQUFDO2FBQ0QsVUFBb0IsQ0FBUztZQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFBO1lBQ3pCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUE7UUFDbkMsQ0FBQzs7O09BSkE7SUFLRCx5QkFBUyxHQUFULFVBQVUsQ0FBUztRQUNsQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUNGLFlBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBQ0QsSUFBTSxPQUFPLEdBQThCLEVBQUUsQ0FBQTtBQUM3QyxJQUFNLEdBQUcsR0FBNEUsRUFBRSxDQUFBO0FBQ3ZGLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFPLE1BQU0sRUFBRSxJQUFJOzs7O2dCQUNsQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7O29CQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUE7Z0JBQ2xDLHFCQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMs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QUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQTt5QkFDdEQ7d0JBQ00scUJBQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUE7O3dCQUFuRCxJQUFJLEdBQUcsU0FBNEMsQ0FBQTs7NEJBRS9DLE1BQU0sc0JBQW9CLEdBQUcsQ0FBQyxDQUFDLENBQUcsQ0FBQTs7Ozs7O0tBR3pDO0lBS0YsYUFBQztBQUFELENBQUMsQUF4REQsSUF3REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmNsYXNzIFN0YXRlIHtcclxuXHR0ZXh0ID0gJydcclxuXHRjdXJUZXh0ID0gJydcclxuXHRjaGFyOiBzdHJpbmdcclxuXHRxaWQ6IHN0cmluZ1xyXG5cdHFyeTogc3RyaW5nXHJcblx0b3B0czogc3RyaW5nW11cclxuXHRfYmFja2dyb3VuZEltYWdlOiBzdHJpbmdcclxuXHRiYWNrZ3JvdW5kSW1hZ2VDaGFuZ2VkID0gZmFsc2VcclxuXHRnZXQgYmFja2dyb3VuZEltYWdlKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmFja2dyb3VuZEltYWdlIHx8ICcvdHJhbnNwYXJlbnQucG5nJ1xyXG5cdH1cclxuXHRzZXQgYmFja2dyb3VuZEltYWdlKHM6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fYmFja2dyb3VuZEltYWdlID0gc1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2VDaGFuZ2VkID0gdHJ1ZVxyXG5cdH1cclxuXHRhcHBseVRleHQoczogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRleHQgKz0gdGhpcy5jdXJUZXh0XHJcblx0XHR0aGlzLmN1clRleHQgPSBzXHJcblx0fVxyXG59XHJcbmNvbnN0IG9wc1R5cGU6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fVxyXG5jb25zdCBvcHM6IHsgW2tleTogc3RyaW5nXTogKGVuZ2luZTogRW5naW5lLCBhcmd2OiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxib29sZWFuPiB9ID0ge31cclxub3BzWydcXFxcY2hhciddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGlmIChhcmd2Lmxlbmd0aCA+IDEpIGVuZ2luZS5zdGF0ZS5jaGFyID0gYXJndlsxXVxyXG5cdGVsc2UgZW5naW5lLnN0YXRlLmNoYXIgPSB1bmRlZmluZWRcclxuXHRhd2FpdCBvcHNbJ1xcXFxjbGVhciddKGVuZ2luZSwgW10pXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxub3BzWydcXFxcYmFja2dyb3VuZC1pbWFnZSddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGVuZ2luZS5zdGF0ZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhcmd2WzFdXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxub3BzWydcXFxcbmV3bGluZSddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGVuZ2luZS5zdGF0ZS5jdXJUZXh0ICs9ICc8YnIvPidcclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG5vcHNbJ1xcXFxjbGVhciddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGVuZ2luZS5zdGF0ZS50ZXh0ID0gZW5naW5lLnN0YXRlLmN1clRleHQgPSAnJ1xyXG5cdHJldHVybiBCb29sZWFuKGFyZ3ZbMV0pXHJcbn1cclxub3BzWydcXFxcZ290byddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGF3YWl0IGVuZ2luZS5zZWxlY3RTZWN0aW9uKGFyZ3ZbMV0pXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxub3BzWydcXFxccXVlcnknXSA9IGFzeW5jIChlbmdpbmUsIGFyZ3YpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuXHRlbmdpbmUuc3RhdGUucWlkID0gYXJndlsxXVxyXG5cdGVuZ2luZS5zdGF0ZS5xcnkgPSBhd2FpdCBlbmdpbmUubG9hZFNlY3Rpb24oYXJndlsxXSlcclxuXHRyZXR1cm4gdHJ1ZVxyXG59XHJcbm9wc1snXFxcXG9wdGlvbnMnXSA9IGFzeW5jIChlbmdpbmUsIGFyZ3YpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuXHRlbmdpbmUuc3RhdGUucWlkID0gYXJndlsxXVxyXG5cdGVuZ2luZS5zdGF0ZS5vcHRzID0gKGF3YWl0IGVuZ2luZS5sb2FkU2VjdGlvbihhcmd2WzFdKSkuc3BsaXQoJ1xcbicpXHJcblx0cmV0dXJuIHRydWVcclxufVxyXG5vcHNUeXBlWydcXFxcc2NyaXB0J10gPSAxXHJcbm9wc1snXFxcXHNjcmlwdCddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdHZvaWQgKG5ldyBGdW5jdGlvbihhcmd2WzFdKSkuY2FsbChlbmdpbmUpXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxub3BzWydcXFxcYmVnaW5zY3JpcHQnXSA9IGFzeW5jIChlbmdpbmUsIGFyZ3YpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuXHRjb25zdCBjb2RlID0gW11cclxuXHRsZXQgbGluZTogc3RyaW5nXHJcblx0d2hpbGUgKChsaW5lID0gZW5naW5lLm5leHRMaW5lKCkpICE9PSAnXFxcXGVuZHNjcmlwdCcpIGNvZGUucHVzaChsaW5lKVxyXG5cdHZvaWQgKG5ldyBGdW5jdGlvbihjb2RlLmpvaW4oJ1xcbicpKSkuY2FsbChlbmdpbmUpXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5naW5lIHtcclxuXHRnYW1lTmFtZTogc3RyaW5nXHJcblx0Y250ID0gMFxyXG5cdGNudDEgPSAwXHJcblx0bHN0OiBzdHJpbmdbXSA9IFtdXHJcblx0bHN0MTogc3RyaW5nW10gPSBbXVxyXG5cdGFuczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9XHJcblx0ZGF0YSA9IHt9XHJcblx0c3RhdGU6IFN0YXRlXHJcblx0YXN5bmMgbG9hZFNlY3Rpb24oc2VjdGlvbk5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcblx0XHRyZXR1cm4gKGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcmVhZCcsIHtcclxuXHRcdFx0Z2FtZU5hbWU6IHRoaXMuZ2FtZU5hbWUsXHJcblx0XHRcdHNlY3Rpb25OYW1lXHJcblx0XHR9KSkuZGF0YVxyXG5cdH1cclxuXHRhc3luYyBzZWxlY3RTZWN0aW9uKHNlY3Rpb25OYW1lOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMubHN0ID0gKGF3YWl0IHRoaXMubG9hZFNlY3Rpb24oc2VjdGlvbk5hbWUpKS5zcGxpdCgnXFxuJylcclxuXHRcdHRoaXMubHN0MSA9IFtdXHJcblx0XHR0aGlzLmNudCA9IHRoaXMuY250MSA9IDBcclxuXHR9XHJcblx0YWRkTGluZShzOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMubHN0MS5wdXNoKHMpXHJcblx0fVxyXG5cdG5leHRMaW5lKCk6IHN0cmluZyB7XHJcblx0XHRpZiAodGhpcy5jbnQxIDwgdGhpcy5sc3QxLmxlbmd0aCkgcmV0dXJuIHRoaXMubHN0MVt0aGlzLmNudDErK11cclxuXHRcdGlmICh0aGlzLmNudCA8IHRoaXMubHN0Lmxlbmd0aCkgcmV0dXJuIHRoaXMubHN0W3RoaXMuY250KytdXHJcblx0XHR0aHJvdyAnTm8gbW9yZSBsaW5lcy4nXHJcblx0fVxyXG5cdGFzeW5jIG5leHQoKSB7XHJcblx0XHRsZXQgZmxhZyA9IGZhbHNlXHJcblx0XHR3aGlsZSAoIWZsYWcpIHtcclxuXHRcdFx0Y29uc3QgbGluZSA9IHRoaXMubmV4dExpbmUoKVxyXG5cdFx0XHRpZiAoIWxpbmUuc3RhcnRzV2l0aCgnXFxcXCcpKSB7XHJcblx0XHRcdFx0aWYgKGxpbmUgPT09ICcnKSBmbGFnID0gYXdhaXQgb3BzWydcXFxcbmV3bGluZSddKHRoaXMsIFtdKVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5hcHBseVRleHQobGluZSlcclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGxldCBsc3QgPSBsaW5lLnNwbGl0KCcgJylcclxuXHRcdFx0XHRpZiAobHN0WzBdIGluIG9wcykge1xyXG5cdFx0XHRcdFx0aWYgKGxzdFswXSBpbiBvcHNUeXBlKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGNudCA9IG9wc1R5cGVbbHN0WzBdXVxyXG5cdFx0XHRcdFx0XHRsc3QgPSBbLi4ubHN0LnNsaWNlKDAsIGNudCksIGxzdC5zbGljZShjbnQpLmpvaW4oJyAnKV1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGZsYWcgPSBhd2FpdCBvcHNbbHN0WzBdXSh0aGlzLCBsc3QuZmlsdGVyKEJvb2xlYW4pKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHRocm93IGBVbmV4cGVjdGVkIHRva2VuICR7bHN0WzBdfWBcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjb25zdHJ1Y3RvcihnYW1lTmFtZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmdhbWVOYW1lID0gZ2FtZU5hbWVcclxuXHRcdHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUoKVxyXG5cdH1cclxufSJdfQ==