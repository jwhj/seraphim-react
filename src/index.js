"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const editor_1 = __importDefault(require("./editor"));
const game_1 = __importDefault(require("./game"));
const { HashRouter: Router, Switch, Route } = ReactRouterDOM;
ReactDOM.render(react_1.default.createElement(Router, null,
    react_1.default.createElement(Switch, null,
        react_1.default.createElement(Route, { path: "/game/:gameName", component: game_1.default }),
        react_1.default.createElement(Route, { path: "/editor", component: editor_1.default }))), document.querySelector('#app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBdUM7QUFDdkMsc0RBQTZCO0FBQzdCLGtEQUF5QjtBQUN6QixNQUFNLEVBQ0wsVUFBVSxFQUFFLE1BQU0sRUFDbEIsTUFBTSxFQUFFLEtBQUssRUFDYixHQUFHLGNBQWMsQ0FBQTtBQUNsQixRQUFRLENBQUMsTUFBTSxDQUNkLDhCQUFDLE1BQU07SUFDTiw4QkFBQyxNQUFNO1FBQ04sOEJBQUMsS0FBSyxJQUFDLElBQUksRUFBQyxpQkFBaUIsRUFBQyxTQUFTLEVBQUUsY0FBSSxHQUFJO1FBQ2pELDhCQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBRSxnQkFBTSxHQUFJLENBQ25DLENBQ0QsRUFDVCxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUM5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSdcclxuY29uc3Qge1xyXG5cdEhhc2hSb3V0ZXI6IFJvdXRlcixcclxuXHRTd2l0Y2gsIFJvdXRlXHJcbn0gPSBSZWFjdFJvdXRlckRPTVxyXG5SZWFjdERPTS5yZW5kZXIoXHJcblx0PFJvdXRlcj5cclxuXHRcdDxTd2l0Y2g+XHJcblx0XHRcdDxSb3V0ZSBwYXRoPVwiL2dhbWUvOmdhbWVOYW1lXCIgY29tcG9uZW50PXtHYW1lfSAvPlxyXG5cdFx0XHQ8Um91dGUgcGF0aD1cIi9lZGl0b3JcIiBjb21wb25lbnQ9e0VkaXRvcn0gLz5cclxuXHRcdDwvU3dpdGNoPlxyXG5cdDwvUm91dGVyPixcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJylcclxuKSJdfQ==