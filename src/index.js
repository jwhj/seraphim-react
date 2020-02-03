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
        react_1.default.createElement(Route, { path: "/game/:gameName", component: game_1.default }),
        react_1.default.createElement(Route, { path: "/editor", component: editor_1.default }))), document.querySelector('#app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBdUM7QUFDdkMsb0RBQTZCO0FBQzdCLGdEQUF5QjtBQUV4QixJQUFBLGtDQUFrQixFQUNsQiw4QkFBTSxFQUFFLDRCQUFLLENBQ0k7QUFDbEIsUUFBUSxDQUFDLE1BQU0sQ0FDZCw4QkFBQyxNQUFNO0lBQ04sOEJBQUMsTUFBTTtRQUNOLDhCQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsU0FBUyxFQUFFLGNBQUksR0FBSTtRQUNqRCw4QkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUUsZ0JBQU0sR0FBSSxDQUNuQyxDQUNELEVBQ1QsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FDOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnXHJcbmNvbnN0IHtcclxuXHRIYXNoUm91dGVyOiBSb3V0ZXIsXHJcblx0U3dpdGNoLCBSb3V0ZVxyXG59ID0gUmVhY3RSb3V0ZXJET01cclxuUmVhY3RET00ucmVuZGVyKFxyXG5cdDxSb3V0ZXI+XHJcblx0XHQ8U3dpdGNoPlxyXG5cdFx0XHQ8Um91dGUgcGF0aD1cIi9nYW1lLzpnYW1lTmFtZVwiIGNvbXBvbmVudD17R2FtZX0gLz5cclxuXHRcdFx0PFJvdXRlIHBhdGg9XCIvZWRpdG9yXCIgY29tcG9uZW50PXtFZGl0b3J9IC8+XHJcblx0XHQ8L1N3aXRjaD5cclxuXHQ8L1JvdXRlcj4sXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcbikiXX0=