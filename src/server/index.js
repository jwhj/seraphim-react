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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var koa_router_1 = __importDefault(require("koa-router"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var levelup_1 = __importDefault(require("levelup"));
var leveldown_1 = __importDefault(require("leveldown"));
var level = function (s) { return levelup_1["default"](leveldown_1["default"](s)); };
var db = {};
var app = new koa_router_1["default"]();
app.use(koa_bodyparser_1["default"]());
exports["default"] = app;
var getDb = function (s) {
    if (s in db)
        return db[s];
    return db[s] = level("./games/" + s + "/db");
};
app.post('/api/lst', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var s, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                s = getDb(ctx.request.body.gameName).createKeyStream();
                _a = ctx;
                return [4 /*yield*/, new Promise(function (res, rej) {
                        var lst = [];
                        s.on('data', function (d) { return lst.push(d.toString()); });
                        s.on('end', function () { return res(lst); });
                    })];
            case 1:
                _a.body = _b.sent();
                return [2 /*return*/];
        }
    });
}); });
app.post('/api/read', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx;
                return [4 /*yield*/, getDb(ctx.request.body.gameName).get(ctx.request.body.sectionName)];
            case 1:
                _a.body = _b.sent();
                return [2 /*return*/];
        }
    });
}); });
app.post('/api/write', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var db;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                db = getDb(ctx.request.body.gameName);
                return [4 /*yield*/, db.put(ctx.request.body.sectionName, ctx.request.body.content)
                    // }
                    // catch (e) {
                    // 	ctx.throw(401)
                    // }
                ];
            case 1:
                _a.sent();
                // }
                // catch (e) {
                // 	ctx.throw(401)
                // }
                ctx.body = 'ok';
                return [2 /*return*/];
        }
    });
}); });
app.post('/api/del', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var db;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                db = getDb(ctx.request.body.gameName);
                return [4 /*yield*/, db.del(ctx.request.body.sectionName)];
            case 1:
                _a.sent();
                ctx.body = 'ok';
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUErQjtBQUMvQixrRUFBdUM7QUFDdkMsb0RBQTZCO0FBQzdCLHdEQUFpQztBQUNqQyxJQUFNLEtBQUssR0FBRyxVQUFDLENBQVMsSUFBSyxPQUFBLG9CQUFPLENBQUMsc0JBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixDQUFBO0FBQ2xELElBQU0sRUFBRSxHQUFnRCxFQUFFLENBQUE7QUFDMUQsSUFBTSxHQUFHLEdBQUcsSUFBSSx1QkFBTSxFQUFFLENBQUE7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBVSxFQUFFLENBQUMsQ0FBQTtBQUNyQixxQkFBZSxHQUFHLENBQUE7QUFDbEIsSUFBTSxLQUFLLEdBQUcsVUFBQyxDQUFTO0lBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsYUFBVyxDQUFDLFFBQUssQ0FBQyxDQUFBO0FBQ3hDLENBQUMsQ0FBQTtBQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQU0sR0FBRzs7Ozs7Z0JBQ3ZCLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUE7Z0JBQzVELEtBQUEsR0FBRyxDQUFBO2dCQUFRLHFCQUFNLElBQUksT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7d0JBQ3JDLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQTt3QkFDZCxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQTt3QkFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBUixDQUFRLENBQUMsQ0FBQTtvQkFDNUIsQ0FBQyxDQUFDLEVBQUE7O2dCQUpGLEdBQUksSUFBSSxHQUFHLFNBSVQsQ0FBQTs7OztLQUNGLENBQUMsQ0FBQTtBQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQU0sR0FBRzs7Ozs7Z0JBQzlCLEtBQUEsR0FBRyxDQUFBO2dCQUFRLHFCQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUE7O2dCQUFuRixHQUFJLElBQUksR0FBRyxTQUF3RSxDQUFBOzs7O0tBQ25GLENBQUMsQ0FBQTtBQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQU0sR0FBRzs7Ozs7Z0JBRXpCLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQzNDLHFCQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDcEUsSUFBSTtvQkFDSixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsSUFBSTtrQkFKZ0U7O2dCQUFwRSxTQUFvRSxDQUFBO2dCQUNwRSxJQUFJO2dCQUNKLGNBQWM7Z0JBQ2Qsa0JBQWtCO2dCQUNsQixJQUFJO2dCQUNKLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBOzs7O0tBQ2YsQ0FBQyxDQUFBO0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBTSxHQUFHOzs7OztnQkFDdkIsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDM0MscUJBQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQTs7Z0JBQTFDLFNBQTBDLENBQUE7Z0JBQzFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBOzs7O0tBQ2YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJ1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdrb2EtYm9keXBhcnNlcidcclxuaW1wb3J0IGxldmVsdXAgZnJvbSAnbGV2ZWx1cCdcclxuaW1wb3J0IGxldmVsZG93biBmcm9tICdsZXZlbGRvd24nXHJcbmNvbnN0IGxldmVsID0gKHM6IHN0cmluZykgPT4gbGV2ZWx1cChsZXZlbGRvd24ocykpXHJcbmNvbnN0IGRiOiB7IFtrZXk6IHN0cmluZ106IFJldHVyblR5cGU8dHlwZW9mIGxldmVsPiB9ID0ge31cclxuY29uc3QgYXBwID0gbmV3IFJvdXRlcigpXHJcbmFwcC51c2UoYm9keVBhcnNlcigpKVxyXG5leHBvcnQgZGVmYXVsdCBhcHBcclxuY29uc3QgZ2V0RGIgPSAoczogc3RyaW5nKSA9PiB7XHJcblx0aWYgKHMgaW4gZGIpIHJldHVybiBkYltzXVxyXG5cdHJldHVybiBkYltzXSA9IGxldmVsKGAuL2dhbWVzLyR7c30vZGJgKVxyXG59XHJcbmFwcC5wb3N0KCcvYXBpL2xzdCcsIGFzeW5jIGN0eCA9PiB7XHJcblx0Y29uc3QgcyA9IGdldERiKGN0eC5yZXF1ZXN0LmJvZHkuZ2FtZU5hbWUpLmNyZWF0ZUtleVN0cmVhbSgpXHJcblx0Y3R4LmJvZHkgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuXHRcdGNvbnN0IGxzdCA9IFtdXHJcblx0XHRzLm9uKCdkYXRhJywgZCA9PiBsc3QucHVzaChkLnRvU3RyaW5nKCkpKVxyXG5cdFx0cy5vbignZW5kJywgKCkgPT4gcmVzKGxzdCkpXHJcblx0fSlcclxufSlcclxuYXBwLnBvc3QoJy9hcGkvcmVhZCcsIGFzeW5jIGN0eCA9PiB7XHJcblx0Y3R4LmJvZHkgPSBhd2FpdCBnZXREYihjdHgucmVxdWVzdC5ib2R5LmdhbWVOYW1lKS5nZXQoY3R4LnJlcXVlc3QuYm9keS5zZWN0aW9uTmFtZSlcclxufSlcclxuYXBwLnBvc3QoJy9hcGkvd3JpdGUnLCBhc3luYyBjdHggPT4ge1xyXG5cdC8vIHRyeSB7XHJcblx0Y29uc3QgZGIgPSBnZXREYihjdHgucmVxdWVzdC5ib2R5LmdhbWVOYW1lKVxyXG5cdGF3YWl0IGRiLnB1dChjdHgucmVxdWVzdC5ib2R5LnNlY3Rpb25OYW1lLCBjdHgucmVxdWVzdC5ib2R5LmNvbnRlbnQpXHJcblx0Ly8gfVxyXG5cdC8vIGNhdGNoIChlKSB7XHJcblx0Ly8gXHRjdHgudGhyb3coNDAxKVxyXG5cdC8vIH1cclxuXHRjdHguYm9keSA9ICdvaydcclxufSlcclxuYXBwLnBvc3QoJy9hcGkvZGVsJywgYXN5bmMgY3R4ID0+IHtcclxuXHRjb25zdCBkYiA9IGdldERiKGN0eC5yZXF1ZXN0LmJvZHkuZ2FtZU5hbWUpXHJcblx0YXdhaXQgZGIuZGVsKGN0eC5yZXF1ZXN0LmJvZHkuc2VjdGlvbk5hbWUpXHJcblx0Y3R4LmJvZHkgPSAnb2snXHJcbn0pIl19