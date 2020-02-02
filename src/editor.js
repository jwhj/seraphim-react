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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var v1_1 = __importDefault(require("uuid/v1"));
var Button = MaterialUI.Button, IconButton = MaterialUI.IconButton, Icon = MaterialUI.Icon, Grid = MaterialUI.Grid, List = MaterialUI.List, ListItem = MaterialUI.ListItem, ListItemSecondaryAction = MaterialUI.ListItemSecondaryAction, ListSubheader = MaterialUI.ListSubheader, TextField = MaterialUI.TextField;
exports.default = (function () {
    var _a = __read(react_1.useState([]), 2), sectionList = _a[0], setSectionList = _a[1];
    var curSectionName = react_1.useRef(null);
    var sectionContent = react_1.useRef(null);
    var gameName = react_1.useRef(null);
    var load = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, axios_1.default.post('/api/lst', { gameName: gameName.current.value })];
                case 1:
                    res = _b.sent();
                    _a = setSectionList;
                    return [4 /*yield*/, axios_1.default.post('/api/lst', { gameName: gameName.current.value })];
                case 2:
                    _a.apply(void 0, [(_b.sent()).data]);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAddSection = function () { return __awaiter(void 0, void 0, void 0, function () {
        var s;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    s = prompt('Section name:') || v1_1.default();
                    return [4 /*yield*/, axios_1.default.post('/api/write', {
                            gameName: gameName.current.value,
                            sectionName: s,
                            content: ''
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, load()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var openSection = function (sectionName) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = sectionContent.current;
                    return [4 /*yield*/, axios_1.default.post('/api/read', { gameName: gameName.current.value, sectionName: sectionName })];
                case 1:
                    _a.value = (_b.sent()).data;
                    curSectionName.current.value = sectionName;
                    sectionContent.current.focus();
                    return [2 /*return*/];
            }
        });
    }); };
    var deleteSection = function (sectionName) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post('/api/del', { gameName: gameName.current.value, sectionName: sectionName })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, load()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Grid, { container: true, spacing: 3, style: { width: '100%' } },
            react_1.default.createElement(Grid, { item: true, xs: 3 },
                react_1.default.createElement(List, null,
                    react_1.default.createElement(ListSubheader, null,
                        "Sections",
                        react_1.default.createElement(ListItemSecondaryAction, null,
                            react_1.default.createElement(Button, { variant: "contained", disableElevation: true, onClick: handleAddSection }, "Add"))),
                    sectionList.map(function (x) { return (react_1.default.createElement(ListItem, { button: true, key: x, onClick: function () { return openSection(x); } },
                        x,
                        react_1.default.createElement(ListItemSecondaryAction, null,
                            react_1.default.createElement(IconButton, { onClick: function () { return deleteSection(x); } },
                                react_1.default.createElement(Icon, null, "delete"))))); }))),
            react_1.default.createElement(Grid, { item: true, xs: 9 },
                react_1.default.createElement("div", { style: { width: '100%', padding: 10 } },
                    react_1.default.createElement(TextField, { label: "Game name", InputLabelProps: { shrink: true }, inputRef: gameName, style: {
                            marginRight: 5
                        }, onKeyDown: function (evt) {
                            evt.key === 'Enter' && load();
                        } }),
                    react_1.default.createElement(TextField, { label: "Section name", InputLabelProps: { shrink: true }, inputRef: curSectionName })),
                react_1.default.createElement(TextField, { multiline: true, variant: "filled", rows: "30", label: "Content", InputLabelProps: { shrink: true }, inputRef: sectionContent, style: { width: '100%' }, inputProps: { style: { fontFamily: 'monospace' } }, onBlur: function () {
                        axios_1.default.post('/api/write', {
                            gameName: gameName.current.value,
                            sectionName: curSectionName.current.value,
                            content: sectionContent.current.value
                        });
                    } })))));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWRpdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStDO0FBQy9DLGdEQUF5QjtBQUN6QiwrQ0FBMEI7QUFFekIsSUFBQSwwQkFBTSxFQUFFLGtDQUFVLEVBQ2xCLHNCQUFJLEVBQ0osc0JBQUksRUFDSixzQkFBSSxFQUFFLDhCQUFRLEVBQUUsNERBQXVCLEVBQUUsd0NBQWEsRUFDdEQsZ0NBQVMsQ0FDSTtBQUNkLG1CQUFlO0lBQ1IsSUFBQSxvQ0FBNEMsRUFBM0MsbUJBQVcsRUFBRSxzQkFBOEIsQ0FBQTtJQUNsRCxJQUFNLGNBQWMsR0FBRyxjQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkMsSUFBTSxjQUFjLEdBQUcsY0FBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ25DLElBQU0sUUFBUSxHQUFHLGNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QixJQUFNLElBQUksR0FBRzs7Ozt3QkFDQSxxQkFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUE7O29CQUF4RSxHQUFHLEdBQUcsU0FBa0U7b0JBQzlFLEtBQUEsY0FBYyxDQUFBO29CQUFFLHFCQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQTs7b0JBQWxGLGtCQUFlLENBQUMsU0FBa0UsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFBOzs7O1NBQ3pGLENBQUE7SUFDRCxJQUFNLGdCQUFnQixHQUFHOzs7OztvQkFDbEIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFB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QyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsR0FBSSxDQUMxRjtnQkFDTiw4QkFBQyxTQUFTLElBQUMsU0FBUyxRQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUM5RCxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3JGLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUNsRCxNQUFNLEVBQUU7d0JBQ1AsZUFBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7NEJBQ3hCLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUs7NEJBQ2hDLFdBQVcsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUs7NEJBQ3pDLE9BQU8sRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUs7eUJBQ3JDLENBQUMsQ0FBQTtvQkFDSCxDQUFDLEdBQUksQ0FDQSxDQUNELENBQ0YsQ0FDTixDQUFBO0FBQ0YsQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJ1xyXG5jb25zdCB7XHJcblx0QnV0dG9uLCBJY29uQnV0dG9uLFxyXG5cdEljb24sXHJcblx0R3JpZCxcclxuXHRMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24sIExpc3RTdWJoZWFkZXIsXHJcblx0VGV4dEZpZWxkXHJcbn0gPSBNYXRlcmlhbFVJXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBbc2VjdGlvbkxpc3QsIHNldFNlY3Rpb25MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IGN1clNlY3Rpb25OYW1lID0gdXNlUmVmKG51bGwpXHJcblx0Y29uc3Qgc2VjdGlvbkNvbnRlbnQgPSB1c2VSZWYobnVsbClcclxuXHRjb25zdCBnYW1lTmFtZSA9IHVzZVJlZihudWxsKVxyXG5cdGNvbnN0IGxvYWQgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xzdCcsIHsgZ2FtZU5hbWU6IGdhbWVOYW1lLmN1cnJlbnQudmFsdWUgfSlcclxuXHRcdHNldFNlY3Rpb25MaXN0KChhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xzdCcsIHsgZ2FtZU5hbWU6IGdhbWVOYW1lLmN1cnJlbnQudmFsdWUgfSkpLmRhdGEpXHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZUFkZFNlY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBzID0gcHJvbXB0KCdTZWN0aW9uIG5hbWU6JykgfHwgdXVpZCgpXHJcblx0XHRhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3dyaXRlJywge1xyXG5cdFx0XHRnYW1lTmFtZTogZ2FtZU5hbWUuY3VycmVudC52YWx1ZSxcclxuXHRcdFx0c2VjdGlvbk5hbWU6IHMsXHJcblx0XHRcdGNvbnRlbnQ6ICcnXHJcblx0XHR9KVxyXG5cdFx0YXdhaXQgbG9hZCgpXHJcblx0fVxyXG5cdGNvbnN0IG9wZW5TZWN0aW9uID0gYXN5bmMgKHNlY3Rpb25OYW1lOiBzdHJpbmcpID0+IHtcclxuXHRcdHNlY3Rpb25Db250ZW50LmN1cnJlbnQudmFsdWUgPSAoYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9yZWFkJywgeyBnYW1lTmFtZTogZ2FtZU5hbWUuY3VycmVudC52YWx1ZSwgc2VjdGlvbk5hbWUgfSkpLmRhdGFcclxuXHRcdGN1clNlY3Rpb25OYW1lLmN1cnJlbnQudmFsdWUgPSBzZWN0aW9uTmFtZVxyXG5cdFx0c2VjdGlvbkNvbnRlbnQuY3VycmVudC5mb2N1cygpXHJcblx0fVxyXG5cdGNvbnN0IGRlbGV0ZVNlY3Rpb24gPSBhc3luYyAoc2VjdGlvbk5hbWU6IHN0cmluZykgPT4ge1xyXG5cdFx0YXdhaXQgYXhpb3MucG9zdCgnL2FwaS9kZWwnLCB7IGdhbWVOYW1lOiBnYW1lTmFtZS5jdXJyZW50LnZhbHVlLCBzZWN0aW9uTmFtZSB9KVxyXG5cdFx0YXdhaXQgbG9hZCgpXHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXszfT5cclxuXHRcdFx0XHRcdDxMaXN0PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdFN1YmhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHRTZWN0aW9uc1xyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBkaXNhYmxlRWxldmF0aW9uIG9uQ2xpY2s9e2hhbmRsZUFkZFNlY3Rpb259PkFkZDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcblx0XHRcdFx0XHRcdDwvTGlzdFN1YmhlYWRlcj5cclxuXHRcdFx0XHRcdFx0e3NlY3Rpb25MaXN0Lm1hcCh4ID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0gYnV0dG9uIGtleT17eH0gb25DbGljaz17KCkgPT4gb3BlblNlY3Rpb24oeCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3h9XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVNlY3Rpb24oeCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uPmRlbGV0ZTwvSWNvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvTGlzdD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17OX0+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6IDEwIH19PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkIGxhYmVsPVwiR2FtZSBuYW1lXCIgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fSBpbnB1dFJlZj17Z2FtZU5hbWV9IHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luUmlnaHQ6IDVcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRvbktleURvd249eyhldnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGV2dC5rZXkgPT09ICdFbnRlcicgJiYgbG9hZCgpXHJcblx0XHRcdFx0XHRcdFx0fX0gLz5cclxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZCBsYWJlbD1cIlNlY3Rpb24gbmFtZVwiIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX0gaW5wdXRSZWY9e2N1clNlY3Rpb25OYW1lfSAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8VGV4dEZpZWxkIG11bHRpbGluZSB2YXJpYW50PVwiZmlsbGVkXCIgcm93cz1cIjMwXCIgbGFiZWw9XCJDb250ZW50XCJcclxuXHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fSBpbnB1dFJlZj17c2VjdGlvbkNvbnRlbnR9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuXHRcdFx0XHRcdFx0aW5wdXRQcm9wcz17eyBzdHlsZTogeyBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyB9IH19XHJcblx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGF4aW9zLnBvc3QoJy9hcGkvd3JpdGUnLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRnYW1lTmFtZTogZ2FtZU5hbWUuY3VycmVudC52YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdHNlY3Rpb25OYW1lOiBjdXJTZWN0aW9uTmFtZS5jdXJyZW50LnZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogc2VjdGlvbkNvbnRlbnQuY3VycmVudC52YWx1ZVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH19IC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0iXX0=