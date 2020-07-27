import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
const { IconButton, Icon, List, ListItem, ListItemSecondaryAction, Paper, } = MaterialUI;
const saves = localforage.createInstance({ name: "saves" });
export default (props) => {
    const [lst, setLst] = useState([]);
    const load = async () => {
        const lst = [];
        for (const s of await saves.keys()) {
            lst.push(s);
        }
        setLst(lst);
    };
    useEffect(() => {
        load();
    }, []);
    return (React.createElement("div", { style: { margin: 10 }, onTouchMove: (e) => e.nativeEvent.stopPropagation() },
        React.createElement("h1", null, "UI\u5148\u968F\u4FBF\u51D1\u5408\u4E00\u4E0B"),
        React.createElement(IconButton, { onClick: async () => {
                await saves.setItem(prompt() || uuid(), undefined);
                load();
            } },
            React.createElement(Icon, null, "add")),
        React.createElement(List, null, lst.map((x) => (React.createElement(ListItem, { component: Paper, elevation: 4, onClick: () => props.onSelect(x), button: true, key: x, style: {
                marginBottom: 10,
                height: "10em",
            } },
            x,
            React.createElement(ListItemSecondaryAction, null,
                React.createElement(IconButton, { onClick: async () => {
                        await saves.removeItem(x);
                        load();
                    } },
                    React.createElement(Icon, null, "delete")))))))));
};
//# sourceMappingURL=saves.js.map