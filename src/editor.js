import React, { useState, useRef } from "react";
import axios from "axios";
import uuid from "uuid/v1";
const { Button, IconButton, Icon, Grid, List, ListItem, ListItemSecondaryAction, ListSubheader, TextField, } = MaterialUI;
export default () => {
    const [sectionList, setSectionList] = useState([]);
    const curSectionName = useRef();
    const sectionContent = useRef();
    const gameName = useRef();
    const load = async () => {
        const res = await axios.post("/api/lst", { gameName: gameName.current.value });
        setSectionList(res.data);
    };
    const handleAddSection = async () => {
        const s = prompt("Section name:") || uuid();
        await axios.post("/api/write", {
            gameName: gameName.current.value,
            sectionName: s,
            content: "",
        });
        await load();
        await openSection(s);
    };
    const openSection = async (sectionName) => {
        sectionContent.current.value =
            (await axios.post("/api/read", { gameName: gameName.current.value, sectionName })).data;
        curSectionName.current.value = sectionName;
        sectionContent.current.focus();
    };
    const deleteSection = async (sectionName) => {
        await axios.post("/api/del", { gameName: gameName.current.value, sectionName });
        await load();
    };
    return (React.createElement("div", null,
        React.createElement(Grid, { container: true, spacing: 3, style: { width: "100%" } },
            React.createElement(Grid, { item: true, xs: 3 },
                React.createElement(List, null,
                    React.createElement(ListSubheader, null,
                        "Sections",
                        React.createElement(ListItemSecondaryAction, null,
                            React.createElement(Button, { variant: "contained", disableElevation: true, onClick: handleAddSection }, "Add"))),
                    sectionList.map((x) => (React.createElement(ListItem, { button: true, key: x, onClick: () => openSection(x) },
                        x,
                        React.createElement(ListItemSecondaryAction, null,
                            React.createElement(IconButton, { onClick: () => deleteSection(x) },
                                React.createElement(Icon, null, "delete")))))))),
            React.createElement(Grid, { item: true, xs: 9 },
                React.createElement("div", { style: { width: "100%", padding: 10 } },
                    React.createElement(TextField, { label: "Game name", InputLabelProps: { shrink: true }, inputRef: gameName, style: {
                            marginRight: 5,
                        }, onKeyDown: (evt) => {
                            evt.key === "Enter" && load();
                        } }),
                    React.createElement(TextField, { label: "Section name", InputLabelProps: { shrink: true }, inputRef: curSectionName, onKeyDown: (evt) => {
                            evt.key === "Enter" &&
                                openSection(curSectionName.current.value);
                        } })),
                React.createElement(TextField, { multiline: true, variant: "filled", rows: "30", label: "Content", InputLabelProps: { shrink: true }, inputRef: sectionContent, style: { width: "100%" }, inputProps: { style: { fontFamily: "monospace" } }, onBlur: () => {
                        axios.post("/api/write", {
                            gameName: gameName.current.value,
                            sectionName: curSectionName.current.value,
                            content: sectionContent.current.value,
                        });
                    } })))));
};
//# sourceMappingURL=editor.js.map