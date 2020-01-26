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
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var State = /** @class */ (function () {
    function State() {
        this.text = '';
        this.curText = '';
        this.char = null;
    }
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
        if (argv.length > 1)
            engine.state.char = argv[1];
        else
            engine.state.char = null;
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
            case 0: return [4 /*yield*/, engine.load(argv[1])];
            case 1:
                _a.sent();
                return [2 /*return*/, false];
        }
    });
}); };
opsType['\\script'] = 1;
ops['\\script'] = function (engine, argv) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (new Function(argv[1])).call(engine);
        return [2 /*return*/, false];
    });
}); };
var Engine = /** @class */ (function () {
    function Engine(gameName) {
        this.cnt = 0;
        this.cnt1 = 0;
        this.lst = [];
        this.lst1 = [];
        this.gameName = gameName;
        this.state = new State();
    }
    Engine.prototype.load = function (sectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, axios_1["default"].post('/api/read', {
                                gameName: this.gameName,
                                sectionName: sectionName
                            })];
                    case 1:
                        _a.lst = (_b.sent()).data.split('\n');
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
exports["default"] = Engine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXlCO0FBQ3pCO0lBQUE7UUFDQyxTQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ1QsWUFBTyxHQUFHLEVBQUUsQ0FBQTtRQUNaLFNBQUksR0FBVyxJQUFJLENBQUE7SUFLcEIsQ0FBQztJQUpBLHlCQUFTLEdBQVQsVUFBVSxDQUFTO1FBQ2xCLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtJQUNqQixDQUFDO0lBQ0YsWUFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBQ0QsSUFBTSxPQUFPLEdBQThCLEVBQUUsQ0FBQTtBQUM3QyxJQUFNLEdBQUcsR0FBNEUsRUFBRSxDQUFBO0FBQ3ZGLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFPLE1BQU0sRUFBRSxJQUFJOztRQUNsQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTs7WUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQzdCLHNCQUFPLEtBQUssRUFBQTs7S0FDWixDQUFBO0FBQ0QsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLFVBQU8sTUFBTSxFQUFFLElBQUk7O1FBQ3JDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQTtRQUMvQixzQkFBTyxLQUFLLEVBQUE7O0tBQ1osQ0FBQTtBQUNELEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFPLE1BQU0sRUFBRSxJQUFJOztRQUNuQyxNQUFNLENBQUMs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d0JBSUYsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7NkJBQ3JCLENBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQSxFQUFiLHdCQUFhO3dCQUNoQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUU7NEJBQ2hCLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7NEJBQzNCLEdBQUcsWUFBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFBO3lCQUN0RDt3QkFDTSxxQkFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQTs7d0JBQW5ELElBQUksR0FBRyxTQUE0QyxDQUFBOzs0QkFFL0MsTUFBTSxzQkFBb0IsR0FBRyxDQUFDLENBQUMsQ0FBRyxDQUFBOzs7Ozs7S0FHekM7SUFLRixhQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuY2xhc3MgU3RhdGUge1xyXG5cdHRleHQgPSAnJ1xyXG5cdGN1clRleHQgPSAnJ1xyXG5cdGNoYXI6IHN0cmluZyA9IG51bGxcclxuXHRhcHBseVRleHQoczogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRleHQgKz0gdGhpcy5jdXJUZXh0XHJcblx0XHR0aGlzLmN1clRleHQgPSBzXHJcblx0fVxyXG59XHJcbmNvbnN0IG9wc1R5cGU6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fVxyXG5jb25zdCBvcHM6IHsgW2tleTogc3RyaW5nXTogKGVuZ2luZTogRW5naW5lLCBhcmd2OiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxib29sZWFuPiB9ID0ge31cclxub3BzWydcXFxcY2hhciddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGlmIChhcmd2Lmxlbmd0aCA+IDEpIGVuZ2luZS5zdGF0ZS5jaGFyID0gYXJndlsxXVxyXG5cdGVsc2UgZW5naW5lLnN0YXRlLmNoYXIgPSBudWxsXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxub3BzWydcXFxcbmV3bGluZSddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGVuZ2luZS5zdGF0ZS5jdXJUZXh0ICs9ICc8YnIvPidcclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG5vcHNbJ1xcXFxjbGVhciddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGVuZ2luZS5zdGF0ZS50ZXh0ID0gZW5naW5lLnN0YXRlLmN1clRleHQgPSAnJ1xyXG5cdHJldHVybiBCb29sZWFuKGFyZ3ZbMV0pXHJcbn1cclxub3BzWydcXFxcZ290byddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGF3YWl0IGVuZ2luZS5sb2FkKGFyZ3ZbMV0pXHJcblx0cmV0dXJuIGZhbHNlXHJcbn1cclxub3BzVHlwZVsnXFxcXHNjcmlwdCddID0gMVxyXG5vcHNbJ1xcXFxzY3JpcHQnXSA9IGFzeW5jIChlbmdpbmUsIGFyZ3YpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuXHQobmV3IEZ1bmN0aW9uKGFyZ3ZbMV0pKS5jYWxsKGVuZ2luZSlcclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmdpbmUge1xyXG5cdGdhbWVOYW1lOiBzdHJpbmdcclxuXHRjbnQgPSAwXHJcblx0Y250MSA9IDBcclxuXHRsc3Q6IHN0cmluZ1tdID0gW11cclxuXHRsc3QxOiBzdHJpbmdbXSA9IFtdXHJcblx0c3RhdGU6IFN0YXRlXHJcblx0YXN5bmMgbG9hZChzZWN0aW9uTmFtZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmxzdCA9IChhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3JlYWQnLCB7XHJcblx0XHRcdGdhbWVOYW1lOiB0aGlzLmdhbWVOYW1lLFxyXG5cdFx0XHRzZWN0aW9uTmFtZVxyXG5cdFx0fSkpLmRhdGEuc3BsaXQoJ1xcbicpXHJcblx0XHR0aGlzLmxzdDEgPSBbXVxyXG5cdFx0dGhpcy5jbnQgPSB0aGlzLmNudDEgPSAwXHJcblx0fVxyXG5cdGFkZExpbmUoczogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmxzdDEucHVzaChzKVxyXG5cdH1cclxuXHRuZXh0TGluZSgpOiBzdHJpbmcge1xyXG5cdFx0aWYgKHRoaXMuY250MSA8IHRoaXMubHN0MS5sZW5ndGgpIHJldHVybiB0aGlzLmxzdDFbdGhpcy5jbnQxKytdXHJcblx0XHRpZiAodGhpcy5jbnQgPCB0aGlzLmxzdC5sZW5ndGgpIHJldHVybiB0aGlzLmxzdFt0aGlzLmNudCsrXVxyXG5cdFx0dGhyb3cgJ05vIG1vcmUgbGluZXMuJ1xyXG5cdH1cclxuXHRhc3luYyBuZXh0KCkge1xyXG5cdFx0bGV0IGZsYWcgPSBmYWxzZVxyXG5cdFx0d2hpbGUgKCFmbGFnKSB7XHJcblx0XHRcdGNvbnN0IGxpbmUgPSB0aGlzLm5leHRMaW5lKClcclxuXHRcdFx0aWYgKCFsaW5lLnN0YXJ0c1dpdGgoJ1xcXFwnKSkge1xyXG5cdFx0XHRcdGlmIChsaW5lID09PSAnJykgZmxhZyA9IGF3YWl0IG9wc1snXFxcXG5ld2xpbmUnXSh0aGlzLCBbXSlcclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc3RhdGUuYXBwbHlUZXh0KGxpbmUpXHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRsZXQgbHN0ID0gbGluZS5zcGxpdCgnICcpXHJcblx0XHRcdFx0aWYgKGxzdFswXSBpbiBvcHMpIHtcclxuXHRcdFx0XHRcdGlmIChsc3RbMF0gaW4gb3BzVHlwZSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBjbnQgPSBvcHNUeXBlW2xzdFswXV1cclxuXHRcdFx0XHRcdFx0bHN0ID0gWy4uLmxzdC5zbGljZSgwLCBjbnQpLCBsc3Quc2xpY2UoY250KS5qb2luKCcgJyldXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmbGFnID0gYXdhaXQgb3BzW2xzdFswXV0odGhpcywgbHN0LmZpbHRlcihCb29sZWFuKSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB0aHJvdyBgVW5leHBlY3RlZCB0b2tlbiAke2xzdFswXX1gXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y29uc3RydWN0b3IoZ2FtZU5hbWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy5nYW1lTmFtZSA9IGdhbWVOYW1lXHJcblx0XHR0aGlzLnN0YXRlID0gbmV3IFN0YXRlKClcclxuXHR9XHJcbn0iXX0=