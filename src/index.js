import React from "react";
import Editor from "./editor";
import Game from "./game";
import { defineStyle } from './define-style';
const { HashRouter: Router, Switch, Route, Link, useHistory } = ReactRouterDOM;
const { Button } = MaterialUI;
const Index = () => {
    const barStyle = defineStyle({
        width: '30%',
        marginBottom: 10
    });
    const history = useHistory();
    const start = () => {
        const gameName = prompt('Game name:');
        if (gameName) {
            history.push(`/game/${gameName}`);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "UI\u968F\u4FBF\u5427\uFF0C\u53CD\u6B63\u4E5F\u6CA1\u6709\u4EBA\u4F1A\u7528"),
        React.createElement("div", { style: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            } },
            React.createElement(Button, { style: barStyle, variant: "contained", onClick: start }, "Start"),
            React.createElement(Link, { style: barStyle, variant: "contained", to: "/editor", component: Button }, "Editor"))));
};
ReactDOM.render(React.createElement(Router, null,
    React.createElement(Switch, null,
        React.createElement(Route, { exact: true, path: "/", component: Index }),
        React.createElement(Route, { path: "/game/:gameName", component: Game }),
        React.createElement(Route, { path: "/editor", component: Editor }))), document.querySelector("#app"));
//# sourceMappingURL=index.js.map