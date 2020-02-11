"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_send_1 = __importDefault(require("koa-send"));
const levelup_1 = __importDefault(require("levelup"));
const leveldown_1 = __importDefault(require("leveldown"));
const os_1 = __importDefault(require("os"));
const level = (s) => levelup_1.default(leveldown_1.default(s));
const db = new Map();
const app = new koa_router_1.default();
app.use(koa_bodyparser_1.default());
exports.default = app;
const gamesDir = `${os_1.default.homedir()}/.seraphim/games`;
const getDb = (s) => {
    if (!db.has(s))
        db.set(s, level(`${gamesDir}/${s}/db`));
    return db.get(s);
};
app.post('/api/lst', async (ctx) => {
    const s = getDb(ctx.request.body.gameName).createKeyStream();
    ctx.body = await new Promise((res, rej) => {
        const lst = [];
        s.on('data', d => lst.push(d.toString()));
        s.on('end', () => res(lst));
    });
});
app.post('/api/read', async (ctx) => {
    ctx.body = await getDb(ctx.request.body.gameName).get(ctx.request.body.sectionName);
});
app.post('/api/write', async (ctx) => {
    // try {
    const db = getDb(ctx.request.body.gameName);
    await db.put(ctx.request.body.sectionName, ctx.request.body.content);
    // }
    // catch (e) {
    // 	ctx.throw(401)
    // }
    ctx.body = 'ok';
});
app.post('/api/del', async (ctx) => {
    const db = getDb(ctx.request.body.gameName);
    await db.del(ctx.request.body.sectionName);
    ctx.body = 'ok';
});
app.get('/res/:gameName/*', async (ctx) => {
    // ctx.body = ctx.path
    await koa_send_1.default(ctx, ctx.path.slice(ctx.params.gameName.length + 5), { root: `${gamesDir}/${ctx.params.gameName}/res` });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUErQjtBQUMvQixvRUFBdUM7QUFDdkMsd0RBQTJCO0FBQzNCLHNEQUE2QjtBQUM3QiwwREFBaUM7QUFDakMsNENBQW1CO0FBQ25CLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxpQkFBTyxDQUFDLG1CQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNsRCxNQUFNLEVBQUUsR0FBMEMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUMzRCxNQUFNLEdBQUcsR0FBRyxJQUFJLG9CQUFNLEVBQUUsQ0FBQTtBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLHdCQUFVLEVBQUUsQ0FBQyxDQUFBO0FBQ3JCLGtCQUFlLEdBQUcsQ0FBQTtBQUNsQixNQUFNLFFBQVEsR0FBRyxHQUFHLFlBQUUsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUE7QUFDbEQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRTtJQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ3ZELE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNqQixDQUFDLENBQUE7QUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUU7SUFDaEMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQzVELEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUN6QyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUE7UUFDZCxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM1QixDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO0lBQ2pDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ3BGLENBQUMsQ0FBQyxDQUFBO0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO0lBQ2xDLFFBQVE7SUFDUixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDM0MsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNwRSxJQUFJO0lBQ0osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixJQUFJO0lBQ0osR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDaEIsQ0FBQyxDQUFDLENBQUE7QUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUU7SUFDaEMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMxQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNoQixDQUFDLENBQUMsQ0FBQTtBQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO0lBQ3ZDLHNCQUFzQjtJQUN0QixNQUFNLGtCQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsTUFBTSxFQUFFLENBQUMsQ0FBQTtBQUNwSCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcidcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAna29hLWJvZHlwYXJzZXInXHJcbmltcG9ydCBzZW5kIGZyb20gJ2tvYS1zZW5kJ1xyXG5pbXBvcnQgbGV2ZWx1cCBmcm9tICdsZXZlbHVwJ1xyXG5pbXBvcnQgbGV2ZWxkb3duIGZyb20gJ2xldmVsZG93bidcclxuaW1wb3J0IG9zIGZyb20gJ29zJ1xyXG5jb25zdCBsZXZlbCA9IChzOiBzdHJpbmcpID0+IGxldmVsdXAobGV2ZWxkb3duKHMpKVxyXG5jb25zdCBkYjogTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2YgbGV2ZWw+PiA9IG5ldyBNYXAoKVxyXG5jb25zdCBhcHAgPSBuZXcgUm91dGVyKClcclxuYXBwLnVzZShib2R5UGFyc2VyKCkpXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFxyXG5jb25zdCBnYW1lc0RpciA9IGAke29zLmhvbWVkaXIoKX0vLnNlcmFwaGltL2dhbWVzYFxyXG5jb25zdCBnZXREYiA9IChzOiBzdHJpbmcpID0+IHtcclxuXHRpZiAoIWRiLmhhcyhzKSkgZGIuc2V0KHMsIGxldmVsKGAke2dhbWVzRGlyfS8ke3N9L2RiYCkpXHJcblx0cmV0dXJuIGRiLmdldChzKVxyXG59XHJcbmFwcC5wb3N0KCcvYXBpL2xzdCcsIGFzeW5jIGN0eCA9PiB7XHJcblx0Y29uc3QgcyA9IGdldERiKGN0eC5yZXF1ZXN0LmJvZHkuZ2FtZU5hbWUpLmNyZWF0ZUtleVN0cmVhbSgpXHJcblx0Y3R4LmJvZHkgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuXHRcdGNvbnN0IGxzdCA9IFtdXHJcblx0XHRzLm9uKCdkYXRhJywgZCA9PiBsc3QucHVzaChkLnRvU3RyaW5nKCkpKVxyXG5cdFx0cy5vbignZW5kJywgKCkgPT4gcmVzKGxzdCkpXHJcblx0fSlcclxufSlcclxuYXBwLnBvc3QoJy9hcGkvcmVhZCcsIGFzeW5jIGN0eCA9PiB7XHJcblx0Y3R4LmJvZHkgPSBhd2FpdCBnZXREYihjdHgucmVxdWVzdC5ib2R5LmdhbWVOYW1lKS5nZXQoY3R4LnJlcXVlc3QuYm9keS5zZWN0aW9uTmFtZSlcclxufSlcclxuYXBwLnBvc3QoJy9hcGkvd3JpdGUnLCBhc3luYyBjdHggPT4ge1xyXG5cdC8vIHRyeSB7XHJcblx0Y29uc3QgZGIgPSBnZXREYihjdHgucmVxdWVzdC5ib2R5LmdhbWVOYW1lKVxyXG5cdGF3YWl0IGRiLnB1dChjdHgucmVxdWVzdC5ib2R5LnNlY3Rpb25OYW1lLCBjdHgucmVxdWVzdC5ib2R5LmNvbnRlbnQpXHJcblx0Ly8gfVxyXG5cdC8vIGNhdGNoIChlKSB7XHJcblx0Ly8gXHRjdHgudGhyb3coNDAxKVxyXG5cdC8vIH1cclxuXHRjdHguYm9keSA9ICdvaydcclxufSlcclxuYXBwLnBvc3QoJy9hcGkvZGVsJywgYXN5bmMgY3R4ID0+IHtcclxuXHRjb25zdCBkYiA9IGdldERiKGN0eC5yZXF1ZXN0LmJvZHkuZ2FtZU5hbWUpXHJcblx0YXdhaXQgZGIuZGVsKGN0eC5yZXF1ZXN0LmJvZHkuc2VjdGlvbk5hbWUpXHJcblx0Y3R4LmJvZHkgPSAnb2snXHJcbn0pXHJcbmFwcC5nZXQoJy9yZXMvOmdhbWVOYW1lLyonLCBhc3luYyBjdHggPT4ge1xyXG5cdC8vIGN0eC5ib2R5ID0gY3R4LnBhdGhcclxuXHRhd2FpdCBzZW5kKGN0eCwgY3R4LnBhdGguc2xpY2UoY3R4LnBhcmFtcy5nYW1lTmFtZS5sZW5ndGggKyA1KSwgeyByb290OiBgJHtnYW1lc0Rpcn0vJHtjdHgucGFyYW1zLmdhbWVOYW1lfS9yZXNgIH0pXHJcbn0pIl19