"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
const react_1 = __importStar(require("react"));
const engine_1 = __importDefault(require("./engine"));
const typed_js_1 = __importDefault(require("typed.js"));
const { Button, Fab, Icon, Card, Divider, Backdrop, Fade, List, ListItem, Drawer } = MaterialUI;
const BackgroundImage = (_a) => {
    var { src, style } = _a, rest = __rest(_a, ["src", "style"]);
    // const { style, ...rest1 } = rest
    return (react_1.default.createElement("div", Object.assign({ style: Object.assign({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url("${src}")`
        }, style) }, rest)));
};
const backgroundSwitchTimeout = 1000;
const showOptionsTimeout = { enter: 1500, exit: 500 };
exports.default = (props) => {
    const gameName = props.match.params.gameName;
    const [tmp, setTmp] = react_1.useState(false);
    const [prevBackgroundImage, setPrevBackgroundImage] = react_1.useState();
    const [srcHeight, setSrcHeight] = react_1.useState('');
    const [engineLoading, setEngineLoading] = react_1.useState(true);
    const [char, setChar] = react_1.useState();
    const [text, setText] = react_1.useState('');
    const [showOptions, setShowOptions] = react_1.useState(false);
    const [showMenu, setShowMenu] = react_1.useState(false);
    const engineRef = react_1.useRef();
    if (!engineRef.current)
        engineRef.current = new engine_1.default(gameName);
    const engine = engineRef.current;
    const type = react_1.useRef();
    const adjustSizes = () => {
        setSrcHeight(/Android|iPhone/i.test(navigator.userAgent) ? '8.5em' : '12em');
    };
    // const getEngine = (): Engine => {
    // 	if (!engine.current) return engine.current = new Engine(gameName)
    // 	else return engine.current
    // }
    react_1.useEffect(() => {
        void (async () => {
            await engine.selectSection('start');
            // await new Promise(res => setTimeout(res, 1000))
            setEngineLoading(false);
            adjustSizes();
            addEventListener('resize', adjustSizes);
            addEventListener('touchmove', (e) => {
                e.preventDefault();
            }, { passive: false });
            addEventListener('keydown', handleKeyDown);
            next();
        })();
    }, []);
    const handleKeyDown = (evt) => {
        switch (evt.key) {
            case 'Escape':
                setShowMenu(true);
                break;
            case ' ':
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
    const next = async () => {
        if (type.current) {
            finish();
        }
        else {
            await engine.next();
            // localforage.setItem('test', engine)
            // const a = await localforage.getItem('test') as unknown as { gameName: string }
            // console.log(a)
            // console.log(Engine.from(a).state.backgroundImage)
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
            else {
                setChar(engine.state.char);
                setText(engine.state.text);
                type.current = new typed_js_1.default('#type', {
                    strings: [engine.state.curText],
                    typeSpeed: 35,
                    onComplete() {
                        finish();
                    }
                });
            }
            if (engine.state.backgroundImageChanged) {
                engine.state.backgroundImageChanged = false;
                setTmp(false);
                setTimeout(() => {
                    setTmp(true);
                    setTimeout(() => setPrevBackgroundImage(engine.state.backgroundImage), backgroundSwitchTimeout);
                });
            }
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        prevBackgroundImage && react_1.default.createElement(BackgroundImage, { src: `/res/${gameName}${prevBackgroundImage}` }),
        react_1.default.createElement(Fade, { in: tmp, timeout: { enter: backgroundSwitchTimeout, exit: 0 } },
            react_1.default.createElement(BackgroundImage, { src: `/res/${gameName}${engine.state.backgroundImage}` })),
        react_1.default.createElement(Fade, { in: showOptions, timeout: showOptionsTimeout },
            react_1.default.createElement(Backdrop, { open: showOptions, style: { zIndex: 5 } },
                react_1.default.createElement("div", { style: {
                        padding: '5% 10%',
                        color: 'white',
                        width: '100%',
                        height: '100%'
                    } },
                    react_1.default.createElement(List, null, showOptions && engine.state.opts.map((x, i) => (react_1.default.createElement(ListItem, { key: i, button: true, onClick: () => choose(i, x) }, x))))))),
        react_1.default.createElement("div", { style: {
                position: 'fixed',
                right: 0,
                top: 0,
                margin: 10
            } },
            react_1.default.createElement(Fab, { onClick: () => fastForward(), size: "small", style: { marginRight: 10 } },
                react_1.default.createElement(Icon, null, "directions_run")),
            react_1.default.createElement(Fab, { onClick: () => fastForward(15), size: "small" },
                react_1.default.createElement(Icon, null, "directions_walk"))),
        react_1.default.createElement(Fab, { size: "small", color: "primary", onClick: () => setShowMenu(true), style: {
                position: 'fixed',
                left: 0,
                top: 0,
                margin: 10,
                zIndex: 6
            } },
            react_1.default.createElement(Icon, null, "dehaze")),
        react_1.default.createElement(Drawer, { open: showMenu, onClose: () => setShowMenu(false) },
            react_1.default.createElement("div", { style: { width: document.documentElement.clientWidth * 0.35, padding: 10 } },
                react_1.default.createElement(List, null,
                    react_1.default.createElement(ListItem, { button: true }, "Saves")))),
        react_1.default.createElement("div", { style: {
                width: '100%',
                height: srcHeight,
                padding: 10,
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                left: 0,
                bottom: 0
            } },
            react_1.default.createElement(Card, { elevation: 4, style: {
                    width: '80%',
                    backgroundColor: char ? '#EEE' : '#AAA',
                    transition: 'background-color 1s ease',
                    padding: 10,
                    opacity: 0.8
                }, onClick: next },
                char && (react_1.default.createElement("div", { style: { width: '30%' } },
                    react_1.default.createElement("span", { style: { color: '#888' } }, char),
                    react_1.default.createElement(Divider, null))),
                react_1.default.createElement("div", { style: { padding: '0 10px' } },
                    react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: text } }),
                    react_1.default.createElement("span", { id: "type" }))))));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBEO0FBQzFELHNEQUE2QjtBQUM3Qix3REFBNEI7QUFDNUIsTUFBTSxFQUNMLE1BQU0sRUFBRSxHQUFHLEVBQ1gsSUFBSSxFQUNKLElBQUksRUFDSixPQUFPLEVBQ1AsUUFBUSxFQUNSLElBQUksRUFDSixJQUFJLEVBQUUsUUFBUSxFQUNkLE1BQU0sRUFDTixHQUFHLFVBQVUsQ0FBQTtBQUNkLE1BQU0sZUFBZSxHQUFHLENBQUMsRUFBd0QsRUFBRSxFQUFFO1FBQTVELEVBQUUsR0FBRyxFQUFFLEtBQUssT0FBNEMsRUFBMUMsbUNBQU87SUFDN0MsbUNBQW1DO0lBQ25DLE9BQU8sQ0FDTixxREFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN6QixRQUFRLEVBQUUsT0FBTztZQUNqQixHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLGtCQUFrQixFQUFFLFFBQVE7WUFDNUIsY0FBYyxFQUFFLE9BQU87WUFDdkIsZUFBZSxFQUFFLFFBQVEsR0FBRyxJQUFJO1NBQ2hDLEVBQUUsS0FBSyxDQUFDLElBQUssSUFBSSxFQUFRLENBQzFCLENBQUE7QUFDRixDQUFDLENBQUE7QUFDRCxNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQTtBQUNwQyxNQUFNLGtCQUFrQixHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUE7QUFDckQsa0JBQWUsQ0FBQyxLQUFrRCxFQUFFLEVBQUU7SUFDckUsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO0lBQzVDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFB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MUIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO29CQUN2QyxVQUFVLEVBQUUsMEJBQTBCO29CQUN0QyxPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsR0FBRztpQkFDWixFQUFFLE9BQU8sRUFBRSxJQUFJO2dCQUNkLElBQUksSUFBSSxDQUNSLHVDQUFLLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7b0JBQzNCLHdDQUFNLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBRyxJQUFJLENBQVE7b0JBQzdDLDhCQUFDLE9BQU8sT0FBRyxDQUNOLENBQ047Z0JBQ0QsdUNBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtvQkFDaEMsd0NBQU0sdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQVM7b0JBQ3hELHdDQUFNLEVBQUUsRUFBQyxNQUFNLEdBQVEsQ0FDbEIsQ0FDQSxDQUNGLENBQ0osQ0FDSCxDQUFBO0FBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lJ1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sIEZhYixcclxuXHRJY29uLFxyXG5cdENhcmQsXHJcblx0RGl2aWRlcixcclxuXHRCYWNrZHJvcCxcclxuXHRGYWRlLFxyXG5cdExpc3QsIExpc3RJdGVtLFxyXG5cdERyYXdlclxyXG59ID0gTWF0ZXJpYWxVSVxyXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2UgPSAoeyBzcmMsIHN0eWxlLCAuLi5yZXN0IH06IHsgc3JjOiBzdHJpbmcsIHN0eWxlPzogb2JqZWN0IH0pID0+IHtcclxuXHQvLyBjb25zdCB7IHN0eWxlLCAuLi5yZXN0MSB9ID0gcmVzdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHN0eWxlPXtPYmplY3QuYXNzaWduKHtcclxuXHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0aGVpZ2h0OiAnMTAwJScsXHJcblx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcblx0XHRcdGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke3NyY31cIilgXHJcblx0XHR9LCBzdHlsZSl9ey4uLnJlc3R9PjwvZGl2PlxyXG5cdClcclxufVxyXG5jb25zdCBiYWNrZ3JvdW5kU3dpdGNoVGltZW91dCA9IDEwMDBcclxuY29uc3Qgc2hvd09wdGlvbnNUaW1lb3V0ID0geyBlbnRlcjogMTUwMCwgZXhpdDogNTAwIH1cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiB7IG1hdGNoOiB7IHBhcmFtczogeyBnYW1lTmFtZTogc3RyaW5nIH0gfSB9KSA9PiB7XHJcblx0Y29uc3QgZ2FtZU5hbWUgPSBwcm9wcy5tYXRjaC5wYXJhbXMuZ2FtZU5hbWVcclxuXHRjb25zdCBbdG1wLCBzZXRUbXBdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgW3ByZXZCYWNrZ3JvdW5kSW1hZ2UsIHNldFByZXZCYWNrZ3JvdW5kSW1hZ2VdID0gdXNlU3RhdGU8c3RyaW5nPigpXHJcblx0Y29uc3QgW3NyY0hlaWdodCwgc2V0U3JjSGVpZ2h0XSA9IHVzZVN0YXRlKCcnKVxyXG5cdGNvbnN0IFtlbmdpbmVMb2FkaW5nLCBzZXRFbmdpbmVMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblx0Y29uc3QgW2NoYXIsIHNldENoYXJdID0gdXNlU3RhdGU8c3RyaW5nPigpXHJcblx0Y29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3QgW3Nob3dPcHRpb25zLCBzZXRTaG93T3B0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IGVuZ2luZVJlZiA9IHVzZVJlZjxFbmdpbmU+KClcclxuXHRpZiAoIWVuZ2luZVJlZi5jdXJyZW50KSBlbmdpbmVSZWYuY3VycmVudCA9IG5ldyBFbmdpbmUoZ2FtZU5hbWUpXHJcblx0Y29uc3QgZW5naW5lID0gZW5naW5lUmVmLmN1cnJlbnRcclxuXHRjb25zdCB0eXBlID0gdXNlUmVmPFR5cGVkPigpXHJcblx0Y29uc3QgYWRqdXN0U2l6ZXMgPSAoKSA9PiB7XHJcblx0XHRzZXRTcmNIZWlnaHQoL0FuZHJvaWR8aVBob25lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/ICc4LjVlbScgOiAnMTJlbScpXHJcblx0fVxyXG5cdC8vIGNvbnN0IGdldEVuZ2luZSA9ICgpOiBFbmdpbmUgPT4ge1xyXG5cdC8vIFx0aWYgKCFlbmdpbmUuY3VycmVudCkgcmV0dXJuIGVuZ2luZS5jdXJyZW50ID0gbmV3IEVuZ2luZShnYW1lTmFtZSlcclxuXHQvLyBcdGVsc2UgcmV0dXJuIGVuZ2luZS5jdXJyZW50XHJcblx0Ly8gfVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XHJcblx0XHRcdGF3YWl0IGVuZ2luZS5zZWxlY3RTZWN0aW9uKCdzdGFydCcpXHJcblx0XHRcdC8vIGF3YWl0IG5ldyBQcm9taXNlKHJlcyA9PiBzZXRUaW1lb3V0KHJlcywgMTAwMCkpXHJcblx0XHRcdHNldEVuZ2luZUxvYWRpbmcoZmFsc2UpXHJcblx0XHRcdGFkanVzdFNpemVzKClcclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYWRqdXN0U2l6ZXMpXHJcblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlOiBUb3VjaEV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdH0sIHsgcGFzc2l2ZTogZmFsc2UgfSlcclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pXHJcblx0XHRcdG5leHQoKVxyXG5cdFx0fSkoKVxyXG5cdH0sIFtdKVxyXG5cdGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZ0OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcblx0XHRzd2l0Y2ggKGV2dC5rZXkpIHtcclxuXHRcdFx0Y2FzZSAnRXNjYXBlJzpcclxuXHRcdFx0XHRzZXRTaG93TWVudSh0cnVlKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICcgJzpcclxuXHRcdFx0XHRuZXh0KClcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblx0Y29uc3QgZmluaXNoID0gKCkgPT4ge1xyXG5cdFx0dHlwZS5jdXJyZW50LmRlc3Ryb3koKVxyXG5cdFx0dHlwZS5jdXJyZW50ID0gdW5kZWZpbmVkXHJcblx0XHRzZXRUZXh0KGVuZ2luZS5zdGF0ZS50ZXh0ICsgZW5naW5lLnN0YXRlLmN1clRleHQpXHJcblx0fVxyXG5cdGNvbnN0IG5leHQgPSBhc3luYyAoKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcblx0XHRpZiAodHlwZS5jdXJyZW50KSB7XHJcblx0XHRcdGZpbmlzaCgpXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0YXdhaXQgZW5naW5lLm5leHQoKVxyXG5cdFx0XHQvLyBsb2NhbGZvcmFnZS5zZXRJdGVtKCd0ZXN0JywgZW5naW5lKVxyXG5cdFx0XHQvLyBjb25zdCBhID0gYXdhaXQgbG9jYWxmb3JhZ2UuZ2V0SXRlbSgndGVzdCcpIGFzIHVua25vd24gYXMgeyBnYW1lTmFtZTogc3RyaW5nIH1cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coYSlcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coRW5naW5lLmZyb20oYSkuc3RhdGUuYmFja2dyb3VuZEltYWdlKVxyXG5cdFx0XHRpZiAoZW5naW5lLnN0YXRlLnFyeSkge1xyXG5cdFx0XHRcdGNvbnN0IGFucyA9IHByb21wdChlbmdpbmUuc3RhdGUucXJ5KVxyXG5cdFx0XHRcdGVuZ2luZS5hbnNbZW5naW5lLnN0YXRlLnFpZF0gPSBhbnNcclxuXHRcdFx0XHRlbmdpbmUuc3RhdGUucXJ5ID0gdW5kZWZpbmVkXHJcblx0XHRcdFx0c2V0VGltZW91dChuZXh0KVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGVuZ2luZS5zdGF0ZS5vcHRzKSB7XHJcblx0XHRcdFx0c2V0U2hvd09wdGlvbnModHJ1ZSlcclxuXHRcdFx0XHQvLyBlbmdpbmUuc3RhdGUub3B0cyA9IHVuZGVmaW5lZFxyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQobmV4dClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzZXRDaGFyKGVuZ2luZS5zdGF0ZS5jaGFyKVxyXG5cdFx0XHRcdHNldFRleHQoZW5naW5lLnN0YXRlLnRleHQpXHJcblx0XHRcdFx0dHlwZS5jdXJyZW50ID0gbmV3IFR5cGVkKCcjdHlwZScsIHtcclxuXHRcdFx0XHRcdHN0cmluZ3M6IFtlbmdpbmUuc3RhdGUuY3VyVGV4dF0sXHJcblx0XHRcdFx0XHR0eXBlU3BlZWQ6IDM1LFxyXG5cdFx0XHRcdFx0b25Db21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0ZmluaXNoKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbmdpbmUuc3RhdGUuYmFja2dyb3VuZEltYWdlQ2hhbmdlZCkge1xyXG5cdFx0XHRcdGVuZ2luZS5zdGF0ZS5iYWNrZ3JvdW5kSW1hZ2VDaGFuZ2VkID0gZmFsc2VcclxuXHRcdFx0XHRzZXRUbXAoZmFsc2UpXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRUbXAodHJ1ZSlcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4gc2V0UHJldkJhY2tncm91bmRJbWFnZShlbmdpbmUuc3RhdGUuYmFja2dyb3VuZEltYWdlKSwgYmFja2dyb3VuZFN3aXRjaFRpbWVvdXQpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWVcclxuXHR9XHJcblx0Y29uc3QgZmFzdEZvcndhcmQgPSBhc3luYyAobWF4U3RlcD86IG51bWJlcikgPT4ge1xyXG5cdFx0bWF4U3RlcCA9IG1heFN0ZXAgfHwgSW5maW5pdHlcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U3RlcCAmJiBhd2FpdCBuZXh0KCk7IGkrKyk7XHJcblx0fVxyXG5cdGNvbnN0IGNob29zZSA9IGFzeW5jIChpOiBudW1iZXIsIHM6IHN0cmluZykgPT4ge1xyXG5cdFx0ZW5naW5lLmFuc1tlbmdpbmUuc3RhdGUucWlkXSA9IFtpLCBzXVxyXG5cdFx0ZW5naW5lLnN0YXRlLm9wdHMgPSB1bmRlZmluZWRcclxuXHRcdHNldFNob3dPcHRpb25zKGZhbHNlKVxyXG5cdFx0YXdhaXQgbmV4dCgpXHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7cHJldkJhY2tncm91bmRJbWFnZSAmJiA8QmFja2dyb3VuZEltYWdlIHNyYz17YC9yZXMvJHtnYW1lTmFtZX0ke3ByZXZCYWNrZ3JvdW5kSW1hZ2V9YH0gLz59XHJcblx0XHRcdHsvKiA8RmFkZSBpbj17IXRtcH0gdGltZW91dD17eyBlbnRlcjogMCwgZXhpdDogMTUwMCB9fT5cclxuXHRcdFx0XHQ8QmFja2dyb3VuZEltYWdlIHNyYz17YC9yZXMvZjcke3ByZXZCYWNrZ3JvdW5kSW1hZ2V9YH0gLz5cclxuXHRcdFx0PC9GYWRlPiAqL31cclxuXHRcdFx0PEZhZGUgaW49e3RtcH0gdGltZW91dD17eyBlbnRlcjogYmFja2dyb3VuZFN3aXRjaFRpbWVvdXQsIGV4aXQ6IDAgfX0+XHJcblx0XHRcdFx0PEJhY2tncm91bmRJbWFnZSBzcmM9e2AvcmVzLyR7Z2FtZU5hbWV9JHtlbmdpbmUuc3RhdGUuYmFja2dyb3VuZEltYWdlfWB9IC8+XHJcblx0XHRcdDwvRmFkZT5cclxuXHRcdFx0ey8qIHtlbmdpbmVMb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogKFxyXG5cdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17bmV4dH0+bmV4dDxJY29uPmFycm93X2ZvcndhcmQ8L0ljb24+PC9CdXR0b24+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxiciAvPiAqL31cclxuXHRcdFx0PEZhZGUgaW49e3Nob3dPcHRpb25zfSB0aW1lb3V0PXtzaG93T3B0aW9uc1RpbWVvdXR9PlxyXG5cdFx0XHRcdDxCYWNrZHJvcCBvcGVuPXtzaG93T3B0aW9uc30gc3R5bGU9e3sgekluZGV4OiA1IH19PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnNSUgMTAlJyxcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogJzEwMCUnXHJcblx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0PExpc3Q+XHJcblx0XHRcdFx0XHRcdFx0e3Nob3dPcHRpb25zICYmIGVuZ2luZS5zdGF0ZS5vcHRzLm1hcCgoeCwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtIGtleT17aX0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IGNob29zZShpLCB4KX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt4fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9MaXN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9CYWNrZHJvcD5cclxuXHRcdFx0PC9GYWRlPlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7XHJcblx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdFx0cmlnaHQ6IDAsXHJcblx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdG1hcmdpbjogMTBcclxuXHRcdFx0fX0+XHJcblx0XHRcdFx0PEZhYiBvbkNsaWNrPXsoKSA9PiBmYXN0Rm9yd2FyZCgpfSBzaXplPVwic21hbGxcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+PEljb24+ZGlyZWN0aW9uc19ydW48L0ljb24+PC9GYWI+XHJcblx0XHRcdFx0PEZhYiBvbkNsaWNrPXsoKSA9PiBmYXN0Rm9yd2FyZCgxNSl9IHNpemU9XCJzbWFsbFwiPjxJY29uPmRpcmVjdGlvbnNfd2FsazwvSWNvbj48L0ZhYj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxGYWIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUodHJ1ZSl9IHN0eWxlPXt7XHJcblx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHR6SW5kZXg6IDZcclxuXHRcdFx0fX0+XHJcblx0XHRcdFx0PEljb24+ZGVoYXplPC9JY29uPlxyXG5cdFx0XHQ8L0ZhYj5cclxuXHRcdFx0PERyYXdlciBvcGVuPXtzaG93TWVudX0gb25DbG9zZT17KCkgPT4gc2V0U2hvd01lbnUoZmFsc2UpfT5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKiAwLjM1LCBwYWRkaW5nOiAxMCB9fT5cclxuXHRcdFx0XHRcdDxMaXN0PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW0gYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFNhdmVzXHJcblx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHQ8L0xpc3Q+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvRHJhd2VyPlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7XHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRoZWlnaHQ6IHNyY0hlaWdodCxcclxuXHRcdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0Ym90dG9tOiAwXHJcblx0XHRcdH19PlxyXG5cdFx0XHRcdDxDYXJkIGVsZXZhdGlvbj17NH0gc3R5bGU9e3tcclxuXHRcdFx0XHRcdHdpZHRoOiAnODAlJyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogY2hhciA/ICcjRUVFJyA6ICcjQUFBJyxcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UnLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMTAsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjhcclxuXHRcdFx0XHR9fSBvbkNsaWNrPXtuZXh0fT5cclxuXHRcdFx0XHRcdHtjaGFyICYmIChcclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogJzMwJScgfX0+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjODg4JyB9fT57Y2hhcn08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMCAxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19Pjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gaWQ9XCJ0eXBlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdClcclxufSJdfQ==