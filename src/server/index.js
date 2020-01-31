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
var level = function (s) { return levelup_1.default(leveldown_1.default(s)); };
var db = {};
var app = new koa_router_1.default();
app.use(koa_bodyparser_1.default());
exports.default = app;
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
app.get('/res/:gameName/*', function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // ctx.body = ctx.path
            return [4 /*yield*/, koa_send_1.default(ctx, ctx.path.slice(ctx.params.gameName.length + 5), { root: process.cwd() + "/games/" + ctx.params.gameName + "/res" })];
            case 1:
                // ctx.body = ctx.path
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUErQjtBQUMvQixrRUFBdUM7QUFDdkMsc0RBQTJCO0FBQzNCLG9EQUE2QjtBQUM3Qix3REFBaUM7QUFDakMsSUFBTSxLQUFLLEdBQUcsVUFBQyxDQUFTLElBQUssT0FBQSxpQkFBTyxDQUFDLG1CQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBckIsQ0FBcUIsQ0FBQTtBQUNsRCxJQUFNLEVBQUUsR0FBZ0QsRUFBRSxDQUFBO0FBQzFELElBQU0sR0FBRyxHQUFHLElBQUksb0JBQU0sRUFBRSxDQUFBO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsd0JBQVUsRUFBRSxDQUFDLENBQUE7QUFDckIsa0JBQWUsR0FBRyxDQUFBO0FBQ2xCLElBQU0sS0FBSyxHQUFHLFVBQUMsQ0FBUztJQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFO1FBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDekIsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGFBQVcsQ0FBQyxRQUFLLENBQUMsQ0FBQTtBQUN4QyxDQUFDLENBQUE7QUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFNLEdBQUc7Ozs7O2dCQUN2QixDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFBO2dCQUM1RCxLQUFBLEdBQUcsQ0FBQTtnQkFBUSxxQkFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO3dCQUNyQyxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUE7d0JBQ2QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUE7d0JBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQVIsQ0FBUSxDQUFDLENBQUE7b0JBQzVCLENBQUMsQ0FBQyxFQUFBOztnQkFKRixHQUFJLElBQUksR0FBRyxTQUlULENBQUE7Ozs7S0FDRixDQUFDLENBQUE7QUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFNLEdBQUc7Ozs7O2dCQUM5QixLQUFBLEdBQUcsQ0FBQTtnQkFBUSxxQkFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFBOztnQkFBbkYsR0FBSSxJQUFJLEdBQUcsU0FBd0UsQ0FBQTs7OztLQUNuRixDQUFDLENBQUE7QUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFNLEdBQUc7Ozs7O2dCQUV6QixFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUMzQyxxQkFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3BFLElBQUk7b0JBQ0osY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLElBQUk7a0JBSmdFOztnQkFBcEUsU0FBb0UsQ0FBQTtnQkFDcEUsSUFBSTtnQkFDSixjQUFjO2dCQUNkLGtCQUFrQjtnQkFDbEIsSUFBSTtnQkFDSixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTs7OztLQUNmLENBQUMsQ0FBQTtBQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQU0sR0FBRzs7Ozs7Z0JBQ3ZCLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQzNDLHFCQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUE7O2dCQUExQyxTQUEwQyxDQUFBO2dCQUMxQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTs7OztLQUNmLENBQUMsQ0FBQTtBQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsVUFBTSxHQUFHOzs7O1lBQ3BDLHNCQUFzQjtZQUN0QixxQkFBTSxrQkFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUssT0FBTyxDQUFDLEdBQUcsRUFBRSxlQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxTQUFNLEVBQUUsQ0FBQyxFQUFBOztnQkFEOUgsc0JBQXNCO2dCQUN0QixTQUE4SCxDQUFBOzs7O0tBQzlILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcidcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAna29hLWJvZHlwYXJzZXInXHJcbmltcG9ydCBzZW5kIGZyb20gJ2tvYS1zZW5kJ1xyXG5pbXBvcnQgbGV2ZWx1cCBmcm9tICdsZXZlbHVwJ1xyXG5pbXBvcnQgbGV2ZWxkb3duIGZyb20gJ2xldmVsZG93bidcclxuY29uc3QgbGV2ZWwgPSAoczogc3RyaW5nKSA9PiBsZXZlbHVwKGxldmVsZG93bihzKSlcclxuY29uc3QgZGI6IHsgW2tleTogc3RyaW5nXTogUmV0dXJuVHlwZTx0eXBlb2YgbGV2ZWw+IH0gPSB7fVxyXG5jb25zdCBhcHAgPSBuZXcgUm91dGVyKClcclxuYXBwLnVzZShib2R5UGFyc2VyKCkpXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFxyXG5jb25zdCBnZXREYiA9IChzOiBzdHJpbmcpID0+IHtcclxuXHRpZiAocyBpbiBkYikgcmV0dXJuIGRiW3NdXHJcblx0cmV0dXJuIGRiW3NdID0gbGV2ZWwoYC4vZ2FtZXMvJHtzfS9kYmApXHJcbn1cclxuYXBwLnBvc3QoJy9hcGkvbHN0JywgYXN5bmMgY3R4ID0+IHtcclxuXHRjb25zdCBzID0gZ2V0RGIoY3R4LnJlcXVlc3QuYm9keS5nYW1lTmFtZSkuY3JlYXRlS2V5U3RyZWFtKClcclxuXHRjdHguYm9keSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG5cdFx0Y29uc3QgbHN0ID0gW11cclxuXHRcdHMub24oJ2RhdGEnLCBkID0+IGxzdC5wdXNoKGQudG9TdHJpbmcoKSkpXHJcblx0XHRzLm9uKCdlbmQnLCAoKSA9PiByZXMobHN0KSlcclxuXHR9KVxyXG59KVxyXG5hcHAucG9zdCgnL2FwaS9yZWFkJywgYXN5bmMgY3R4ID0+IHtcclxuXHRjdHguYm9keSA9IGF3YWl0IGdldERiKGN0eC5yZXF1ZXN0LmJvZHkuZ2FtZU5hbWUpLmdldChjdHgucmVxdWVzdC5ib2R5LnNlY3Rpb25OYW1lKVxyXG59KVxyXG5hcHAucG9zdCgnL2FwaS93cml0ZScsIGFzeW5jIGN0eCA9PiB7XHJcblx0Ly8gdHJ5IHtcclxuXHRjb25zdCBkYiA9IGdldERiKGN0eC5yZXF1ZXN0LmJvZHkuZ2FtZU5hbWUpXHJcblx0YXdhaXQgZGIucHV0KGN0eC5yZXF1ZXN0LmJvZHkuc2VjdGlvbk5hbWUsIGN0eC5yZXF1ZXN0LmJvZHkuY29udGVudClcclxuXHQvLyB9XHJcblx0Ly8gY2F0Y2ggKGUpIHtcclxuXHQvLyBcdGN0eC50aHJvdyg0MDEpXHJcblx0Ly8gfVxyXG5cdGN0eC5ib2R5ID0gJ29rJ1xyXG59KVxyXG5hcHAucG9zdCgnL2FwaS9kZWwnLCBhc3luYyBjdHggPT4ge1xyXG5cdGNvbnN0IGRiID0gZ2V0RGIoY3R4LnJlcXVlc3QuYm9keS5nYW1lTmFtZSlcclxuXHRhd2FpdCBkYi5kZWwoY3R4LnJlcXVlc3QuYm9keS5zZWN0aW9uTmFtZSlcclxuXHRjdHguYm9keSA9ICdvaydcclxufSlcclxuYXBwLmdldCgnL3Jlcy86Z2FtZU5hbWUvKicsIGFzeW5jIGN0eCA9PiB7XHJcblx0Ly8gY3R4LmJvZHkgPSBjdHgucGF0aFxyXG5cdGF3YWl0IHNlbmQoY3R4LCBjdHgucGF0aC5zbGljZShjdHgucGFyYW1zLmdhbWVOYW1lLmxlbmd0aCArIDUpLCB7IHJvb3Q6IGAke3Byb2Nlc3MuY3dkKCl9L2dhbWVzLyR7Y3R4LnBhcmFtcy5nYW1lTmFtZX0vcmVzYCB9KVxyXG59KSJdfQ==