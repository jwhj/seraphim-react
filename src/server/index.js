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
Object.defineProperty(exports, "__esModule", { value: true });
var koa_router_1 = __importDefault(require("koa-router"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var koa_send_1 = __importDefault(require("koa-send"));
var levelup_1 = __importDefault(require("levelup"));
var leveldown_1 = __importDefault(require("leveldown"));
var os_1 = __importDefault(require("os"));
var level = function (s) { return levelup_1.default(leveldown_1.default(s)); };
var db = new Map();
var app = new koa_router_1.default();
app.use(koa_bodyparser_1.default());
exports.default = app;
var gamesDir = os_1.default.homedir() + "/.seraphim/games";
var getDb = function (s) {
    if (!db.has(s))
        db.set(s, level(gamesDir + "/" + s + "/db"));
    return db.get(s);
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
app.get('/res/:gameName/*', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // ctx.body = ctx.path
            return [4 /*yield*/, koa_send_1.default(ctx, ctx.path.slice(ctx.params.gameName.length + 5), { root: gamesDir + "/" + ctx.params.gameName + "/res" })];
            case 1:
                // ctx.body = ctx.path
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUErQjtBQUMvQixrRUFBdUM7QUFDdkMsc0RBQTJCO0FBQzNCLG9EQUE2QjtBQUM3Qix3REFBaUM7QUFDakMsMENBQW1CO0FBQ25CLElBQU0sS0FBSyxHQUFHLFVBQUMsQ0FBUyxJQUFLLE9BQUEsaUJBQU8sQ0FBQyxtQkFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLENBQUE7QUFDbEQsSUFBTSxFQUFFLEdBQTBDLElBQUksR0FBRyxFQUFFLENBQUE7QUFDM0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxvQkFBTSxFQUFFLENBQUE7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBVSxFQUFFLENBQUMsQ0FBQTtBQUNyQixrQkFBZSxHQUFHLENBQUE7QUFDbEIsSUFBTSxRQUFRLEdBQU0sWUFBRSxDQUFDLE9BQU8sRUFBRSxxQkFBa0IsQ0FBQTtBQUNsRCxJQUFNLEtBQUssR0FBRyxVQUFDLENBQVM7SUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFJLFFBQVEsU0FBSSxDQUFDLFFBQUssQ0FBQyxDQUFDLENBQUE7SUFDdkQsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pCLENBQUMsQ0FBQTtBQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQU0sR0FBRzs7Ozs7Z0JBQ3ZCLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUE7Z0JBQzVELEtBQUEsR0FBRyxDQUFBO2dCQUFRLHFCQUFNLElBQUksT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7d0JBQ3JDLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQTt3QkFDZCxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQTt3QkFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBUixDQUFRLENBQUMsQ0FBQTtvQkFDNUIsQ0FBQyxDQUFDLEVBQUE7O2dCQUpGLEdBQUksSUFBSSxHQUFHLFNBSVQsQ0FBQTs7OztLQUNGLENBQUMsQ0FBQTtBQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQU0sR0FBRzs7Ozs7Z0JBQzlCLEtBQUEsR0FBRyxDQUFBO2dCQUFRLHFCQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUE7O2dCQUFuRixHQUFJLElBQUksR0FBRyxTQUF3RSxDQUFBOzs7O0tBQ25GLENBQUMsQ0FBQTtBQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQU0sR0FBRzs7Ozs7Z0JBRXpCLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQzNDLHFCQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDcEUsSUFBSTtvQkFDSixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsSUFBSTtrQkFKZ0U7O2dCQUFwRSxTQUFvRSxDQUFBO2dCQUNwRSxJQUFJO2dCQUNKLGNBQWM7Z0JBQ2Qsa0JBQWtCO2dCQUNsQixJQUFJO2dCQUNKLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBOzs7O0tBQ2YsQ0FBQyxDQUFBO0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBTSxHQUFHOzs7OztnQkFDdkIsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDM0MscUJBQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQTs7Z0JBQTFDLFNBQTBDLENBQUE7Z0JBQzFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBOzs7O0tBQ2YsQ0FBQyxDQUFBO0FBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxVQUFNLEdBQUc7Ozs7WUFDcEMsc0JBQXNCO1lBQ3RCLHFCQUFNLGtCQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBSyxRQUFRLFNBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFNBQU0sRUFBRSxDQUFDLEVBQUE7O2dCQURuSCxzQkFBc0I7Z0JBQ3RCLFNBQW1ILENBQUE7Ozs7S0FDbkgsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJ1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdrb2EtYm9keXBhcnNlcidcclxuaW1wb3J0IHNlbmQgZnJvbSAna29hLXNlbmQnXHJcbmltcG9ydCBsZXZlbHVwIGZyb20gJ2xldmVsdXAnXHJcbmltcG9ydCBsZXZlbGRvd24gZnJvbSAnbGV2ZWxkb3duJ1xyXG5pbXBvcnQgb3MgZnJvbSAnb3MnXHJcbmNvbnN0IGxldmVsID0gKHM6IHN0cmluZykgPT4gbGV2ZWx1cChsZXZlbGRvd24ocykpXHJcbmNvbnN0IGRiOiBNYXA8c3RyaW5nLCBSZXR1cm5UeXBlPHR5cGVvZiBsZXZlbD4+ID0gbmV3IE1hcCgpXHJcbmNvbnN0IGFwcCA9IG5ldyBSb3V0ZXIoKVxyXG5hcHAudXNlKGJvZHlQYXJzZXIoKSlcclxuZXhwb3J0IGRlZmF1bHQgYXBwXHJcbmNvbnN0IGdhbWVzRGlyID0gYCR7b3MuaG9tZWRpcigpfS8uc2VyYXBoaW0vZ2FtZXNgXHJcbmNvbnN0IGdldERiID0gKHM6IHN0cmluZykgPT4ge1xyXG5cdGlmICghZGIuaGFzKHMpKSBkYi5zZXQocywgbGV2ZWwoYCR7Z2FtZXNEaXJ9LyR7c30vZGJgKSlcclxuXHRyZXR1cm4gZGIuZ2V0KHMpXHJcbn1cclxuYXBwLnBvc3QoJy9hcGkvbHN0JywgYXN5bmMgY3R4ID0+IHtcclxuXHRjb25zdCBzID0gZ2V0RGIoY3R4LnJlcXVlc3QuYm9keS5nYW1lTmFtZSkuY3JlYXRlS2V5U3RyZWFtKClcclxuXHRjdHguYm9keSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG5cdFx0Y29uc3QgbHN0ID0gW11cclxuXHRcdHMub24oJ2RhdGEnLCBkID0+IGxzdC5wdXNoKGQudG9TdHJpbmcoKSkpXHJcblx0XHRzLm9uKCdlbmQnLCAoKSA9PiByZXMobHN0KSlcclxuXHR9KVxyXG59KVxyXG5hcHAucG9zdCgnL2FwaS9yZWFkJywgYXN5bmMgY3R4ID0+IHtcclxuXHRjdHguYm9keSA9IGF3YWl0IGdldERiKGN0eC5yZXF1ZXN0LmJvZHkuZ2FtZU5hbWUpLmdldChjdHgucmVxdWVzdC5ib2R5LnNlY3Rpb25OYW1lKVxyXG59KVxyXG5hcHAucG9zdCgnL2FwaS93cml0ZScsIGFzeW5jIGN0eCA9PiB7XHJcblx0Ly8gdHJ5IHtcclxuXHRjb25zdCBkYiA9IGdldERiKGN0eC5yZXF1ZXN0LmJvZHkuZ2FtZU5hbWUpXHJcblx0YXdhaXQgZGIucHV0KGN0eC5yZXF1ZXN0LmJvZHkuc2VjdGlvbk5hbWUsIGN0eC5yZXF1ZXN0LmJvZHkuY29udGVudClcclxuXHQvLyB9XHJcblx0Ly8gY2F0Y2ggKGUpIHtcclxuXHQvLyBcdGN0eC50aHJvdyg0MDEpXHJcblx0Ly8gfVxyXG5cdGN0eC5ib2R5ID0gJ29rJ1xyXG59KVxyXG5hcHAucG9zdCgnL2FwaS9kZWwnLCBhc3luYyBjdHggPT4ge1xyXG5cdGNvbnN0IGRiID0gZ2V0RGIoY3R4LnJlcXVlc3QuYm9keS5nYW1lTmFtZSlcclxuXHRhd2FpdCBkYi5kZWwoY3R4LnJlcXVlc3QuYm9keS5zZWN0aW9uTmFtZSlcclxuXHRjdHguYm9keSA9ICdvaydcclxufSlcclxuYXBwLmdldCgnL3Jlcy86Z2FtZU5hbWUvKicsIGFzeW5jIGN0eCA9PiB7XHJcblx0Ly8gY3R4LmJvZHkgPSBjdHgucGF0aFxyXG5cdGF3YWl0IHNlbmQoY3R4LCBjdHgucGF0aC5zbGljZShjdHgucGFyYW1zLmdhbWVOYW1lLmxlbmd0aCArIDUpLCB7IHJvb3Q6IGAke2dhbWVzRGlyfS8ke2N0eC5wYXJhbXMuZ2FtZU5hbWV9L3Jlc2AgfSlcclxufSkiXX0=