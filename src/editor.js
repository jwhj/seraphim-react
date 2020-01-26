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
var axios_1 = __importDefault(require("axios"));
var v1_1 = __importDefault(require("uuid/v1"));
var Button = MaterialUI.Button, IconButton = MaterialUI.IconButton, Icon = MaterialUI.Icon, Grid = MaterialUI.Grid, List = MaterialUI.List, ListItem = MaterialUI.ListItem, ListItemSecondaryAction = MaterialUI.ListItemSecondaryAction, ListSubheader = MaterialUI.ListSubheader, TextField = MaterialUI.TextField;
exports["default"] = (function () {
    var _a = __read(react_1.useState([]), 2), sectionList = _a[0], setSectionList = _a[1];
    var curSectionName = react_1.useRef(null);
    var sectionContent = react_1.useRef(null);
    var gameName = react_1.useRef(null);
    var load = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('/api/lst', { gameName: gameName.current.value })];
                case 1:
                    res = _b.sent();
                    _a = setSectionList;
                    return [4 /*yield*/, axios_1["default"].post('/api/lst', { gameName: gameName.current.value })];
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
                    s = prompt('Section name:') || v1_1["default"]();
                    return [4 /*yield*/, axios_1["default"].post('/api/write', {
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
                    return [4 /*yield*/, axios_1["default"].post('/api/read', { gameName: gameName.current.value, sectionName: sectionName })];
                case 1:
                    _a.value = (_b.sent()).data;
                    curSectionName.current.value = sectionName;
                    return [2 /*return*/];
            }
        });
    }); };
    var deleteSection = function (sectionName) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('/api/del', { gameName: gameName.current.value, sectionName: sectionName })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, load()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Grid, { container: true, xs: 12, spacing: 3 },
            react_1["default"].createElement(Grid, { item: true, xs: 3 },
                react_1["default"].createElement(List, null,
                    react_1["default"].createElement(ListSubheader, null,
                        "Sections",
                        react_1["default"].createElement(ListItemSecondaryAction, null,
                            react_1["default"].createElement(Button, { variant: "contained", disableElevation: true, onClick: handleAddSection }, "Add"))),
                    sectionList.map(function (x) { return (react_1["default"].createElement(ListItem, { button: true, onClick: function () { return openSection(x); } },
                        x,
                        react_1["default"].createElement(ListItemSecondaryAction, null,
                            react_1["default"].createElement(IconButton, { onClick: function () { return deleteSection(x); } },
                                react_1["default"].createElement(Icon, null, "delete"))))); }))),
            react_1["default"].createElement(Grid, { item: true, xs: 9 },
                react_1["default"].createElement("div", { style: { width: '100%', padding: 10 } },
                    react_1["default"].createElement(TextField, { label: "Game name", InputLabelProps: { shrink: true }, inputRef: gameName, style: {
                            marginRight: 5
                        }, onKeyDown: function (evt) {
                            evt.key === 'Enter' && load();
                        } }),
                    react_1["default"].createElement(TextField, { label: "Section name", InputLabelProps: { shrink: true }, inputRef: curSectionName })),
                react_1["default"].createElement(TextField, { multiline: true, variant: "filled", rows: "30", label: "Content", InputLabelProps: { shrink: true }, inputRef: sectionContent, style: { width: '100%' }, onBlur: function () {
                        axios_1["default"].post('/api/write', {
                            gameName: gameName.current.value,
                            sectionName: curSectionName.current.value,
                            content: sectionContent.current.value
                        });
                    } })))));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWRpdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStDO0FBQy9DLGdEQUF5QjtBQUN6QiwrQ0FBMEI7QUFFekIsSUFBQSwwQkFBTSxFQUFFLGtDQUFVLEVBQ2xCLHNCQUFJLEVBQ0osc0JBQUksRUFDSixzQkFBSSxFQUFFLDhCQUFRLEVBQUUsNERBQXVCLEVBQUUsd0NBQWEsRUFDdEQsZ0NBQVMsQ0FDSTtBQUNkLHNCQUFlO0lBQ1IsSUFBQSxvQ0FBNEMsRUFBM0MsbUJBQVcsRUFBRSxzQkFBOEIsQ0FBQTtJQUNsRCxJQUFNLGNBQWMsR0FBRyxjQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkMsSUFBTSxjQUFjLEdBQUcsY0FBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ25DLElBQU0sUUFBUSxHQUFHLGNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QixJQUFNLElBQUksR0FBRzs7Ozt3QkFDQSxxQkFBTSxrQkFBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFBOztvQkFBeEUsR0FBRyxHQUFHLFNBQWtFO29CQUM5RSxLQUFBLGNBQWMsQ0FBQTtvQkFBRSxxQkFBTSxrQkFBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFBOztvQkFBbEYsa0JBQWUsQ0FBQyxTQUFrRSxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUE7Ozs7U0FDekYsQ0FBQTtJQUNELElBQU0sZ0JBQWdCLEdBQUc7Ozs7O29CQUNsQixDQUFDLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJ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QUMsU0FBUyxJQUFDLFNBQVMsUUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3BKLE1BQU0sRUFBRTt3QkFDUCxrQkFBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7NEJBQ3hCLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUs7NEJBQ2hDLFdBQVcsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUs7NEJBQ3pDLE9BQU8sRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUs7eUJBQ3JDLENBQUMsQ0FBQTtvQkFDSCxDQUFDLEdBQUksQ0FDQSxDQUNELENBQ0YsQ0FDTixDQUFBO0FBQ0YsQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJ1xyXG5jb25zdCB7XHJcblx0QnV0dG9uLCBJY29uQnV0dG9uLFxyXG5cdEljb24sXHJcblx0R3JpZCxcclxuXHRMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24sIExpc3RTdWJoZWFkZXIsXHJcblx0VGV4dEZpZWxkXHJcbn0gPSBNYXRlcmlhbFVJXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRjb25zdCBbc2VjdGlvbkxpc3QsIHNldFNlY3Rpb25MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IGN1clNlY3Rpb25OYW1lID0gdXNlUmVmKG51bGwpXHJcblx0Y29uc3Qgc2VjdGlvbkNvbnRlbnQgPSB1c2VSZWYobnVsbClcclxuXHRjb25zdCBnYW1lTmFtZSA9IHVzZVJlZihudWxsKVxyXG5cdGNvbnN0IGxvYWQgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xzdCcsIHsgZ2FtZU5hbWU6IGdhbWVOYW1lLmN1cnJlbnQudmFsdWUgfSlcclxuXHRcdHNldFNlY3Rpb25MaXN0KChhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xzdCcsIHsgZ2FtZU5hbWU6IGdhbWVOYW1lLmN1cnJlbnQudmFsdWUgfSkpLmRhdGEpXHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZUFkZFNlY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCBzID0gcHJvbXB0KCdTZWN0aW9uIG5hbWU6JykgfHwgdXVpZCgpXHJcblx0XHRhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3dyaXRlJywge1xyXG5cdFx0XHRnYW1lTmFtZTogZ2FtZU5hbWUuY3VycmVudC52YWx1ZSxcclxuXHRcdFx0c2VjdGlvbk5hbWU6IHMsXHJcblx0XHRcdGNvbnRlbnQ6ICcnXHJcblx0XHR9KVxyXG5cdFx0YXdhaXQgbG9hZCgpXHJcblx0fVxyXG5cdGNvbnN0IG9wZW5TZWN0aW9uID0gYXN5bmMgKHNlY3Rpb25OYW1lOiBzdHJpbmcpID0+IHtcclxuXHRcdHNlY3Rpb25Db250ZW50LmN1cnJlbnQudmFsdWUgPSAoYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9yZWFkJywgeyBnYW1lTmFtZTogZ2FtZU5hbWUuY3VycmVudC52YWx1ZSwgc2VjdGlvbk5hbWUgfSkpLmRhdGFcclxuXHRcdGN1clNlY3Rpb25OYW1lLmN1cnJlbnQudmFsdWUgPSBzZWN0aW9uTmFtZVxyXG5cdH1cclxuXHRjb25zdCBkZWxldGVTZWN0aW9uID0gYXN5bmMgKHNlY3Rpb25OYW1lOiBzdHJpbmcpID0+IHtcclxuXHRcdGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZGVsJywgeyBnYW1lTmFtZTogZ2FtZU5hbWUuY3VycmVudC52YWx1ZSwgc2VjdGlvbk5hbWUgfSlcclxuXHRcdGF3YWl0IGxvYWQoKVxyXG5cdH1cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIHhzPXsxMn0gc3BhY2luZz17M30+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17M30+XHJcblx0XHRcdFx0XHQ8TGlzdD5cclxuXHRcdFx0XHRcdFx0PExpc3RTdWJoZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0U2VjdGlvbnNcclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgZGlzYWJsZUVsZXZhdGlvbiBvbkNsaWNrPXtoYW5kbGVBZGRTZWN0aW9ufT5BZGQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RTdWJoZWFkZXI+XHJcblx0XHRcdFx0XHRcdHtzZWN0aW9uTGlzdC5tYXAoeCA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuU2VjdGlvbih4KX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7eH1cclxuXHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlU2VjdGlvbih4KX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb24+ZGVsZXRlPC9JY29uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9MaXN0PlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXs5fT5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogMTAgfX0+XHJcblx0XHRcdFx0XHRcdDxUZXh0RmllbGQgbGFiZWw9XCJHYW1lIG5hbWVcIiBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19IGlucHV0UmVmPXtnYW1lTmFtZX0gc3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogNVxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGV2dDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZXZ0LmtleSA9PT0gJ0VudGVyJyAmJiBsb2FkKClcclxuXHRcdFx0XHRcdFx0XHR9fSAvPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkIGxhYmVsPVwiU2VjdGlvbiBuYW1lXCIgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fSBpbnB1dFJlZj17Y3VyU2VjdGlvbk5hbWV9IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxUZXh0RmllbGQgbXVsdGlsaW5lIHZhcmlhbnQ9XCJmaWxsZWRcIiByb3dzPVwiMzBcIiBsYWJlbD1cIkNvbnRlbnRcIiBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19IGlucHV0UmVmPXtzZWN0aW9uQ29udGVudH0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG5cdFx0XHRcdFx0XHRvbkJsdXI9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRheGlvcy5wb3N0KCcvYXBpL3dyaXRlJywge1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2FtZU5hbWU6IGdhbWVOYW1lLmN1cnJlbnQudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uTmFtZTogY3VyU2VjdGlvbk5hbWUuY3VycmVudC52YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHNlY3Rpb25Db250ZW50LmN1cnJlbnQudmFsdWVcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9fSAvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59Il19