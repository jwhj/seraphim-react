import React, { useState, useEffect, useRef } from "react";
import Saves from "./saves";
import Engine from "./engine";
import Typed from "typed.js";
import { defineStyle } from "./define-style";
const { Button, Fab, Icon, Card, Divider, Backdrop, Dialog, Fade, List, ListItem, Drawer, } = MaterialUI;
const BackgroundImage = ({ src, style, ...rest }) => {
    // const { style, ...rest1 } = rest
    return (React.createElement("div", Object.assign({ style: Object.assign({
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url("${src}")`,
        }, style) }, rest)));
};
const backgroundSwitchTimeout = 1000;
const showOptionsTimeout = { enter: 1500, exit: 500 };
const saves = localforage.createInstance({ name: "saves" });
export default (props) => {
    const gameName = props.match.params.gameName;
    const [tmp, setTmp] = useState(false);
    const [prevBackgroundImage, setPrevBackgroundImage] = useState();
    const [srcHeight, setSrcHeight] = useState("");
    const [engineLoading, setEngineLoading] = useState(true);
    const [char, setChar] = useState();
    const [text, setText] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showSaves, setShowSaves] = useState(false);
    const engineRef = useRef();
    if (!engineRef.current)
        engineRef.current = new Engine(gameName);
    const engine = engineRef.current;
    const type = useRef();
    const selectType = useRef();
    const adjustSizes = () => {
        setSrcHeight(/Android|iPhone/i.test(navigator.userAgent) ? "8.5em" : "12em");
    };
    // const getEngine = (): Engine => {
    // 	if (!engine.current) return engine.current = new Engine(gameName)
    // 	else return engine.current
    // }
    useEffect(() => {
        void (async () => {
            await engine.selectSection("start");
            // await new Promise(res => setTimeout(res, 1000))
            setEngineLoading(false);
            adjustSizes();
            addEventListener("resize", adjustSizes);
            addEventListener("touchmove", (e) => {
                e.preventDefault();
            }, { passive: false });
            addEventListener("keydown", handleKeyDown);
            next();
        })();
    }, []);
    const handleKeyDown = (evt) => {
        switch (evt.key) {
            case "Escape":
                setShowMenu(true);
                break;
            case " ":
                next();
                break;
            default:
                break;
        }
    };
    const finish = () => {
        type.current.destroy();
        type.current = undefined;
        setText(engine.state.text + engine.state.curText);
    };
    const updateFromEngine = (restoreFromSave) => {
        const engine = engineRef.current;
        if (restoreFromSave) {
            setChar(engine.state.char);
            setText(engine.state.text + engine.state.curText);
            setShowOptions(false);
        }
        if (engine.state.backgroundImageChanged || restoreFromSave) {
            engine.state.backgroundImageChanged = false;
            setTmp(false);
            setTimeout(() => {
                setTmp(true);
                setTimeout(() => setPrevBackgroundImage(engine.state.backgroundImage), backgroundSwitchTimeout);
            });
        }
        if (engine.state.qry) {
            const ans = prompt(engine.state.qry);
            engine.ans[engine.state.qid] = ans;
            engine.state.qry = undefined;
            setTimeout(next);
            return false;
        }
        else if (engine.state.opts) {
            setShowOptions(true);
            // engine.state.opts = undefined
            // setTimeout(next)
            return false;
        }
        else if (!restoreFromSave) {
            setChar(engine.state.char);
            setText(engine.state.text);
            type.current = new Typed("#type", {
                strings: [engine.state.curText],
                typeSpeed: 27,
                onComplete() {
                    finish();
                },
            });
        }
        return true;
    };
    const next = async (flag) => {
        const engine = engineRef.current;
        if (type.current) {
            finish();
        }
        else {
            if (!flag)
                await engine.next();
            if (!updateFromEngine())
                return false;
        }
        return true;
    };
    const fastForward = async (maxStep) => {
        maxStep = maxStep || Infinity;
        for (let i = 0; i < maxStep && await next(); i++)
            ;
    };
    const choose = async (i, s) => {
        engine.ans[engine.state.qid] = [i, s];
        engine.state.opts = undefined;
        setShowOptions(false);
        await next();
    };
    const onSelect = async (saveName) => {
        if (selectType.current === "load") {
            engineRef.current = Engine.from(await saves.getItem(saveName));
            updateFromEngine(true);
            setShowSaves(false);
            setShowMenu(false);
        }
        else if (selectType.current === "save") {
            saves.setItem(saveName, engine);
        }
    };
    return (React.createElement(React.Fragment, null,
        prevBackgroundImage &&
            React.createElement(BackgroundImage, { src: `/res/${gameName}${prevBackgroundImage}` }),
        React.createElement(Fade, { in: tmp, timeout: { enter: backgroundSwitchTimeout, exit: 0 } },
            React.createElement(BackgroundImage, { src: `/res/${gameName}${engine.state.backgroundImage}` })),
        React.createElement(Fade, { in: showOptions, timeout: showOptionsTimeout },
            React.createElement(Backdrop, { open: showOptions, style: { zIndex: 5 } },
                React.createElement("div", { style: {
                        padding: "5% 10%",
                        color: "white",
                        width: "100%",
                        height: "100%",
                    } },
                    React.createElement(List, null, engine.state.opts && engine.state.opts.map((x, i) => (React.createElement(ListItem, { key: i, button: true, onClick: () => choose(i, x) }, x))))))),
        React.createElement("div", { style: {
                position: "fixed",
                right: 0,
                top: 0,
                margin: 10,
            } },
            React.createElement(Fab, { onClick: () => fastForward(), size: "small", style: { marginRight: 10 } },
                React.createElement(Icon, null, "directions_run")),
            React.createElement(Fab, { onClick: () => fastForward(15), size: "small" },
                React.createElement(Icon, null, "directions_walk"))),
        React.createElement(Fab, { size: "small", color: "primary", onClick: () => setShowMenu(true), style: {
                position: "fixed",
                left: 0,
                top: 0,
                margin: 10,
                zIndex: 6,
            } },
            React.createElement(Icon, null, "dehaze")),
        React.createElement(Drawer, { open: showMenu, onClose: () => setShowMenu(false) },
            React.createElement("div", { style: {
                    width: document.documentElement.clientWidth * 0.35,
                    padding: 10,
                } },
                React.createElement(List, null,
                    React.createElement(ListItem, { button: true, onClick: () => {
                            setShowSaves(true);
                            selectType.current = "load";
                        } }, "Load"),
                    React.createElement(ListItem, { button: true, onClick: () => {
                            setShowSaves(true);
                            selectType.current = "save";
                        } }, "Save")))),
        React.createElement(Dialog, { open: showSaves, onClose: () => setShowSaves(false), maxWidth: "md", fullWidth: true },
            React.createElement(Saves, { onSelect: onSelect })),
        React.createElement("div", { style: defineStyle({
                width: "100%",
                height: srcHeight,
                padding: 10,
                display: "flex",
                justifyContent: "center",
                position: "fixed",
                left: 0,
                bottom: 0,
                userSelect: 'none'
            }) },
            React.createElement(Card, { elevation: 4, style: {
                    width: "80%",
                    backgroundColor: char ? "#EEE" : "#AAA",
                    transition: "background-color 1s ease",
                    padding: 10,
                    opacity: 0.8,
                }, onClick: () => next() },
                char && (React.createElement("div", { style: { width: "30%" } },
                    React.createElement("span", { style: { color: "#888" } }, char),
                    React.createElement(Divider, null))),
                React.createElement("div", { style: { padding: "0 10px" } },
                    React.createElement("span", { dangerouslySetInnerHTML: { __html: text } }),
                    React.createElement("span", { id: "type" }))))));
};
//# sourceMappingURL=game.js.map