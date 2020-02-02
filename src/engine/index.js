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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXlCO0FBQ3pCO0lBQUE7UUFDQyxTQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ1QsWUFBTyxHQUFHLEVBQUUsQ0FBQTtRQU1aLDJCQUFzQixHQUFHLEtBQUssQ0FBQTtJQVkvQixDQUFDO0lBWEEsc0JBQUksa0NBQWU7YUFBbkI7WUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxrQkFBa0IsQ0FBQTtRQUNuRCxDQUFDO2FBQ0QsVUFBb0IsQ0FBUztZQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFBO1lBQ3pCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUE7UUFDbkMsQ0FBQzs7O09BSkE7SUFLRCx5QkFBUyxHQUFULFVBQVUsQ0FBUztRQUNsQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUNGLFlBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBQ0QsSUFBTSxPQUFPLEdBQThCLEVBQUUsQ0FBQTtBQUM3QyxJQUFNLEdBQUcsR0FBNEUsRUFBRSxDQUFBO0FBQ3ZGLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFPLE1BQU0sRUFBRSxJQUFJOzs7O2dCQUNsQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7O29CQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUE7Z0JBQ2xDLHFCQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUE7O2dCQUFoQyxTQUFnQyxDQUFBO2dCQUNoQyxzQkFBTyxLQUFLLEVBQUE7OztLQUNaLENBQUE7QUFDRCxHQUFHLENBQUMsb0JBQW9CLENBQUMsR0FBRyxVQUFPLE1BQU0sRUFBRSxJQUFJOztRQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEMsc0JBQU8sS0FBSyxFQUFBOztLQUNaLENBQUE7QUFDRCxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsVUFBTyxNQUFNLEVBQUUsSUFBSTs7UUFDckMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFBO1FBQy9CLHNCQUFPLEtBQUssRUFBQTs7S0FDWixDQUFBO0FBQ0QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQU8sTUFBTSxFQUFFLElBQUk7O1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQTtRQUM3QyxzQkFBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUE7O0tBQ3ZCLENBQUE7QUFDRCxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBTyxNQUFNLEVBQUUsSUFBSTs7O29CQUNsQyxxQkFBTSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBOztnQkFBbkMsU0FBbUMsQ0FBQTtnQkFDbkMsc0JBQU8sS0FBSyxFQUFBOzs7S0FDWixDQUFBO0FBQ0QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQU8sTUFBTSxFQUFFLElBQUk7Ozs7O2dCQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzFCLEtBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQTtnQkFBTyxxQkFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBOztnQkFBcEQsR0FBYSxHQUFHLEdBQUcsU0FBaUMsQ0FBQTtnQkFDcEQsc0JBQU8sSUFBSSxFQUFBOzs7S0FDWCxDQUFBO0FBQ0QsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLFVBQU8sTUFBTSxFQUFFLElBQUk7Ozs7O2dCQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzFCLEtBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQTtnQkFBUyxxQkFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBOztnQkFBdEQsR0FBYSxJQUFJLEdBQUcsQ0FBQyxTQUFpQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuRSxzQkFBTyxJQUFJLEVBQUE7OztLQUNYLENBQUE7QUFDRCxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3ZCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFPLE1BQU0sRUFBRSxJQUFJOztRQUNwQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDekMsc0JBQU8sS0FBSyxFQUFBOztLQUNaLENBQUE7QUFDRCxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsVUFBTyxNQUFNLEVBQUUsSUFBSTs7O1FBQ25DLElBQUksR0FBRyxFQUFFLENBQUE7UUFFZixPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLGFBQWE7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BFLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakQsc0JBQU8sS0FBSyxFQUFBOztLQUNaLENBQUE7QUFDRDtJQW1EQyxnQkFBWSxRQUFnQjtRQWpENUIsUUFBRyxHQUFHLENBQUMsQ0FBQTtRQUNQLFNBQUksR0FBRyxDQUFDLENBQUE7UUFDUixRQUFHLEdBQWEsRUFBRSxDQUFBO1FBQ2xCLFNBQUksR0FBYSxFQUFFLENBQUE7UUFDbkIsUUFBRyxHQUEyQixFQUFFLENBQUE7UUE4Qy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBOUNLLDRCQUFXLEdBQWpCLFVBQWtCLFdBQW1COzs7OzRCQUM1QixxQkFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTs0QkFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFROzRCQUN2QixXQUFXLGFBQUE7eUJBQ1gsQ0FBQyxFQUFBOzRCQUhGLHNCQUFPLENBQUMsU0FHTixDQUFDLENBQUMsSUFBSSxFQUFBOzs7O0tBQ1I7SUFDSyw4QkFBYSxHQUFuQixVQUFvQixXQUFtQjs7Ozs7O3dCQUN0QyxLQUFBLElBQUksQ0FBQTt3QkFBUSxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBL0MsR0FBSyxHQUFHLEdBQUcsQ0FBQyxTQUFtQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTt3QkFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBOzs7OztLQUN4QjtJQUNELHdCQUFPLEdBQVAsVUFBUSxDQUFTO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7SUFDRCx5QkFBUSxHQUFSO1FBQ0MsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUMvRCxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQzNELE1BQU0sZ0JBQWdCLENBQUE7SUFDdkIsQ0FBQztJQUNLLHFCQUFJLEdBQVY7Ozs7Ozt3QkFDSyxJQUFJLEdBQUcsS0FBSyxDQUFBOzs7NkJBQ1QsQ0FBQyxJQUFJO3dCQUNMLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7NkJBQ3hCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBdEIsd0JBQXNCOzZCQUNyQixDQUFBLElBQUksS0FBSyxFQUFFLENBQUEsRUFBWCx3QkFBVzt3QkFBUyxxQkFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFBOzt3QkFBdkMsSUFBSSxHQUFHLFNBQWdDLENBQUE7Ozt3QkFFdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQzFCLHdCQUFLOzs7d0JBSUYsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7NkJBQ3JCLENBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQSxFQUFiLHdCQUFhO3dCQUNoQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUU7NEJBQ2hCLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7NEJBQzNCLEdBQUcsWUFBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFBO3lCQUN0RDt3QkFDTSxxQkFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQTs7d0JBQW5ELElBQUksR0FBRyxTQUE0QyxDQUFBOzs0QkFFL0MsTUFBTSxzQkFBb0IsR0FBRyxDQUFDLENBQUMsQ0FBRyxDQUFBOzs7Ozs7S0FHekM7SUFLRixhQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuY2xhc3MgU3RhdGUge1xyXG5cdHRleHQgPSAnJ1xyXG5cdGN1clRleHQgPSAnJ1xyXG5cdGNoYXI6IHN0cmluZ1xyXG5cdHFpZDogc3RyaW5nXHJcblx0cXJ5OiBzdHJpbmdcclxuXHRvcHRzOiBzdHJpbmdbXVxyXG5cdF9iYWNrZ3JvdW5kSW1hZ2U6IHN0cmluZ1xyXG5cdGJhY2tncm91bmRJbWFnZUNoYW5nZWQgPSBmYWxzZVxyXG5cdGdldCBiYWNrZ3JvdW5kSW1hZ2UoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kSW1hZ2UgfHwgJy90cmFuc3BhcmVudC5wbmcnXHJcblx0fVxyXG5cdHNldCBiYWNrZ3JvdW5kSW1hZ2Uoczogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9iYWNrZ3JvdW5kSW1hZ2UgPSBzXHJcblx0XHR0aGlzLmJhY2tncm91bmRJbWFnZUNoYW5nZWQgPSB0cnVlXHJcblx0fVxyXG5cdGFwcGx5VGV4dChzOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMudGV4dCArPSB0aGlzLmN1clRleHRcclxuXHRcdHRoaXMuY3VyVGV4dCA9IHNcclxuXHR9XHJcbn1cclxuY29uc3Qgb3BzVHlwZTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9XHJcbmNvbnN0IG9wczogeyBba2V5OiBzdHJpbmddOiAoZW5naW5lOiBFbmdpbmUsIGFyZ3Y6IHN0cmluZ1tdKSA9PiBQcm9taXNlPGJvb2xlYW4+IH0gPSB7fVxyXG5vcHNbJ1xcXFxjaGFyJ10gPSBhc3luYyAoZW5naW5lLCBhcmd2KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcblx0aWYgKGFyZ3YubGVuZ3RoID4gMSkgZW5naW5lLnN0YXRlLmNoYXIgPSBhcmd2WzFdXHJcblx0ZWxzZSBlbmdpbmUuc3RhdGUuY2hhciA9IHVuZGVmaW5lZFxyXG5cdGF3YWl0IG9wc1snXFxcXGNsZWFyJ10oZW5naW5lLCBbXSlcclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG5vcHNbJ1xcXFxiYWNrZ3JvdW5kLWltYWdlJ10gPSBhc3luYyAoZW5naW5lLCBhcmd2KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcblx0ZW5naW5lLnN0YXRlLmJhY2tncm91bmRJbWFnZSA9IGFyZ3ZbMV1cclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG5vcHNbJ1xcXFxuZXdsaW5lJ10gPSBhc3luYyAoZW5naW5lLCBhcmd2KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcblx0ZW5naW5lLnN0YXRlLmN1clRleHQgKz0gJzxici8+J1xyXG5cdHJldHVybiBmYWxzZVxyXG59XHJcbm9wc1snXFxcXGNsZWFyJ10gPSBhc3luYyAoZW5naW5lLCBhcmd2KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcblx0ZW5naW5lLnN0YXRlLnRleHQgPSBlbmdpbmUuc3RhdGUuY3VyVGV4dCA9ICcnXHJcblx0cmV0dXJuIEJvb2xlYW4oYXJndlsxXSlcclxufVxyXG5vcHNbJ1xcXFxnb3RvJ10gPSBhc3luYyAoZW5naW5lLCBhcmd2KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcblx0YXdhaXQgZW5naW5lLnNlbGVjdFNlY3Rpb24oYXJndlsxXSlcclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG5vcHNbJ1xcXFxxdWVyeSddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGVuZ2luZS5zdGF0ZS5xaWQgPSBhcmd2WzFdXHJcblx0ZW5naW5lLnN0YXRlLnFyeSA9IGF3YWl0IGVuZ2luZS5sb2FkU2VjdGlvbihhcmd2WzFdKVxyXG5cdHJldHVybiB0cnVlXHJcbn1cclxub3BzWydcXFxcb3B0aW9ucyddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGVuZ2luZS5zdGF0ZS5xaWQgPSBhcmd2WzFdXHJcblx0ZW5naW5lLnN0YXRlLm9wdHMgPSAoYXdhaXQgZW5naW5lLmxvYWRTZWN0aW9uKGFyZ3ZbMV0pKS5zcGxpdCgnXFxuJylcclxuXHRyZXR1cm4gdHJ1ZVxyXG59XHJcbm9wc1R5cGVbJ1xcXFxzY3JpcHQnXSA9IDFcclxub3BzWydcXFxcc2NyaXB0J10gPSBhc3luYyAoZW5naW5lLCBhcmd2KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcblx0dm9pZCAobmV3IEZ1bmN0aW9uKGFyZ3ZbMV0pKS5jYWxsKGVuZ2luZSlcclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG5vcHNbJ1xcXFxiZWdpbnNjcmlwdCddID0gYXN5bmMgKGVuZ2luZSwgYXJndik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG5cdGNvbnN0IGNvZGUgPSBbXVxyXG5cdGxldCBsaW5lOiBzdHJpbmdcclxuXHR3aGlsZSAoKGxpbmUgPSBlbmdpbmUubmV4dExpbmUoKSkgIT09ICdcXFxcZW5kc2NyaXB0JykgY29kZS5wdXNoKGxpbmUpXHJcblx0dm9pZCAobmV3IEZ1bmN0aW9uKGNvZGUuam9pbignXFxuJykpKS5jYWxsKGVuZ2luZSlcclxuXHRyZXR1cm4gZmFsc2VcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmdpbmUge1xyXG5cdGdhbWVOYW1lOiBzdHJpbmdcclxuXHRjbnQgPSAwXHJcblx0Y250MSA9IDBcclxuXHRsc3Q6IHN0cmluZ1tdID0gW11cclxuXHRsc3QxOiBzdHJpbmdbXSA9IFtdXHJcblx0YW5zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge31cclxuXHRzdGF0ZTogU3RhdGVcclxuXHRhc3luYyBsb2FkU2VjdGlvbihzZWN0aW9uTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHRcdHJldHVybiAoYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9yZWFkJywge1xyXG5cdFx0XHRnYW1lTmFtZTogdGhpcy5nYW1lTmFtZSxcclxuXHRcdFx0c2VjdGlvbk5hbWVcclxuXHRcdH0pKS5kYXRhXHJcblx0fVxyXG5cdGFzeW5jIHNlbGVjdFNlY3Rpb24oc2VjdGlvbk5hbWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy5sc3QgPSAoYXdhaXQgdGhpcy5sb2FkU2VjdGlvbihzZWN0aW9uTmFtZSkpLnNwbGl0KCdcXG4nKVxyXG5cdFx0dGhpcy5sc3QxID0gW11cclxuXHRcdHRoaXMuY250ID0gdGhpcy5jbnQxID0gMFxyXG5cdH1cclxuXHRhZGRMaW5lKHM6IHN0cmluZykge1xyXG5cdFx0dGhpcy5sc3QxLnB1c2gocylcclxuXHR9XHJcblx0bmV4dExpbmUoKTogc3RyaW5nIHtcclxuXHRcdGlmICh0aGlzLmNudDEgPCB0aGlzLmxzdDEubGVuZ3RoKSByZXR1cm4gdGhpcy5sc3QxW3RoaXMuY250MSsrXVxyXG5cdFx0aWYgKHRoaXMuY250IDwgdGhpcy5sc3QubGVuZ3RoKSByZXR1cm4gdGhpcy5sc3RbdGhpcy5jbnQrK11cclxuXHRcdHRocm93ICdObyBtb3JlIGxpbmVzLidcclxuXHR9XHJcblx0YXN5bmMgbmV4dCgpIHtcclxuXHRcdGxldCBmbGFnID0gZmFsc2VcclxuXHRcdHdoaWxlICghZmxhZykge1xyXG5cdFx0XHRjb25zdCBsaW5lID0gdGhpcy5uZXh0TGluZSgpXHJcblx0XHRcdGlmICghbGluZS5zdGFydHNXaXRoKCdcXFxcJykpIHtcclxuXHRcdFx0XHRpZiAobGluZSA9PT0gJycpIGZsYWcgPSBhd2FpdCBvcHNbJ1xcXFxuZXdsaW5lJ10odGhpcywgW10pXHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmFwcGx5VGV4dChsaW5lKVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0bGV0IGxzdCA9IGxpbmUuc3BsaXQoJyAnKVxyXG5cdFx0XHRcdGlmIChsc3RbMF0gaW4gb3BzKSB7XHJcblx0XHRcdFx0XHRpZiAobHN0WzBdIGluIG9wc1R5cGUpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgY250ID0gb3BzVHlwZVtsc3RbMF1dXHJcblx0XHRcdFx0XHRcdGxzdCA9IFsuLi5sc3Quc2xpY2UoMCwgY250KSwgbHN0LnNsaWNlKGNudCkuam9pbignICcpXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZmxhZyA9IGF3YWl0IG9wc1tsc3RbMF1dKHRoaXMsIGxzdC5maWx0ZXIoQm9vbGVhbikpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgdGhyb3cgYFVuZXhwZWN0ZWQgdG9rZW4gJHtsc3RbMF19YFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKGdhbWVOYW1lOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuZ2FtZU5hbWUgPSBnYW1lTmFtZVxyXG5cdFx0dGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZSgpXHJcblx0fVxyXG59Il19