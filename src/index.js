"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var editor_1 = __importDefault(require("./editor"));
var game_1 = __importDefault(require("./game"));
var Router = ReactRouterDOM.HashRouter, Switch = ReactRouterDOM.Switch, Route = ReactRouterDOM.Route;
ReactDOM.render(react_1.default.createElement(Router, null,
    react_1.default.createElement(Switch, null,
        react_1.default.createElement(Route, { exact: true, path: "/", component: game_1.default }),
        react_1.default.createElement(Route, { path: "/editor", component: editor_1.default }))), document.querySelector('#app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBdUM7QUFDdkMsb0RBQTZCO0FBQzdCLGdEQUF5QjtBQUV4QixJQUFBLGtDQUFrQixFQUNsQiw4QkFBTSxFQUFFLDRCQUFLLENBQ0k7QUFDbEIsUUFBUSxDQUFDLE1BQU0sQ0FDZCw4QkFBQyxNQUFNO0lBQ04sOEJBQUMsTUFBTTtRQUNOLDhCQUFDLEtBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsY0FBSSxHQUFJO1FBQ3pDLDhCQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBRSxnQkFBTSxHQUFJLENBQ25DLENBQ0QsRUFDVCxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUM5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSdcclxuY29uc3Qge1xyXG5cdEhhc2hSb3V0ZXI6IFJvdXRlcixcclxuXHRTd2l0Y2gsIFJvdXRlXHJcbn0gPSBSZWFjdFJvdXRlckRPTVxyXG5SZWFjdERPTS5yZW5kZXIoXHJcblx0PFJvdXRlcj5cclxuXHRcdDxTd2l0Y2g+XHJcblx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17R2FtZX0gLz5cclxuXHRcdFx0PFJvdXRlIHBhdGg9XCIvZWRpdG9yXCIgY29tcG9uZW50PXtFZGl0b3J9IC8+XHJcblx0XHQ8L1N3aXRjaD5cclxuXHQ8L1JvdXRlcj4sXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcbikiXX0=