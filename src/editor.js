"use strict";
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
const axios_1 = __importDefault(require("axios"));
const v1_1 = __importDefault(require("uuid/v1"));
const { Button, IconButton, Icon, Grid, List, ListItem, ListItemSecondaryAction, ListSubheader, TextField } = MaterialUI;
exports.default = () => {
    const [sectionList, setSectionList] = react_1.useState([]);
    const curSectionName = react_1.useRef();
    const sectionContent = react_1.useRef();
    const gameName = react_1.useRef();
    const load = async () => {
        const res = await axios_1.default.post('/api/lst', { gameName: gameName.current.value });
        setSectionList((await axios_1.default.post('/api/lst', { gameName: gameName.current.value })).data);
    };
    const handleAddSection = async () => {
        const s = prompt('Section name:') || v1_1.default();
        await axios_1.default.post('/api/write', {
            gameName: gameName.current.value,
            sectionName: s,
            content: ''
        });
        await load();
        await openSection(s);
    };
    const openSection = async (sectionName) => {
        sectionContent.current.value = (await axios_1.default.post('/api/read', { gameName: gameName.current.value, sectionName })).data;
        curSectionName.current.value = sectionName;
        sectionContent.current.focus();
    };
    const deleteSection = async (sectionName) => {
        await axios_1.default.post('/api/del', { gameName: gameName.current.value, sectionName });
        await load();
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Grid, { container: true, spacing: 3, style: { width: '100%' } },
            react_1.default.createElement(Grid, { item: true, xs: 3 },
                react_1.default.createElement(List, null,
                    react_1.default.createElement(ListSubheader, null,
                        "Sections",
                        react_1.default.createElement(ListItemSecondaryAction, null,
                            react_1.default.createElement(Button, { variant: "contained", disableElevation: true, onClick: handleAddSection }, "Add"))),
                    sectionList.map(x => (react_1.default.createElement(ListItem, { button: true, key: x, onClick: () => openSection(x) },
                        x,
                        react_1.default.createElement(ListItemSecondaryAction, null,
                            react_1.default.createElement(IconButton, { onClick: () => deleteSection(x) },
                                react_1.default.createElement(Icon, null, "delete")))))))),
            react_1.default.createElement(Grid, { item: true, xs: 9 },
                react_1.default.createElement("div", { style: { width: '100%', padding: 10 } },
                    react_1.default.createElement(TextField, { label: "Game name", InputLabelProps: { shrink: true }, inputRef: gameName, style: {
                            marginRight: 5
                        }, onKeyDown: (evt) => {
                            evt.key === 'Enter' && load();
                        } }),
                    react_1.default.createElement(TextField, { label: "Section name", InputLabelProps: { shrink: true }, inputRef: curSectionName, onKeyDown: (evt) => {
                            evt.key === 'Enter' && openSection(curSectionName.current.value);
                        } })),
                react_1.default.createElement(TextField, { multiline: true, variant: "filled", rows: "30", label: "Content", InputLabelProps: { shrink: true }, inputRef: sectionContent, style: { width: '100%' }, inputProps: { style: { fontFamily: 'monospace' } }, onBlur: () => {
                        axios_1.default.post('/api/write', {
                            gameName: gameName.current.value,
                            sectionName: curSectionName.current.value,
                            content: sectionContent.current.value
                        });
                    } })))));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWRpdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFDL0Msa0RBQXlCO0FBQ3pCLGlEQUEwQjtBQUMxQixNQUFNLEVBQ0wsTUFBTSxFQUFFLFVBQVUsRUFDbEIsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLGFBQWEsRUFDdEQsU0FBUyxFQUNULEdBQUcsVUFBVSxDQUFBO0FBQ2Qsa0JBQWUsR0FBRyxFQUFFO0lBQ25CLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNsRCxNQUFNLGNBQWMsR0FBRyxjQUFNLEVBQW9CLENBQUE7SUFDakQsTUFBTSxjQUFjLEdBQUcsY0FBTSxFQUFvQixDQUFBO0lBQ2pELE1BQU0sUUFBUSxHQUFHLGNBQU0sRUFBb0IsQ0FBQTtJQUMzQyxNQUFNLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtRQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUM5RSxjQUFjLENBQUMsQ0FBQyxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFGLENBQUMsQ0FBQTtJQUNELE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDbkMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFlBQUksRUFBRSxDQUFBO1FBQzNDLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVB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LENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDakUsQ0FBQyxHQUFJLENBQ0Q7Z0JBQ04sOEJBQUMsU0FBUyxJQUFDLFNBQVMsUUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFDOUQsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUNyRixVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFDbEQsTUFBTSxFQUFFLEdBQUcsRUFBRTt3QkFDWixlQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTs0QkFDeEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSzs0QkFDaEMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSzs0QkFDekMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSzt5QkFDckMsQ0FBQyxDQUFBO29CQUNILENBQUMsR0FBSSxDQUNBLENBQ0QsQ0FDRixDQUNOLENBQUE7QUFDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjEnXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sIEljb25CdXR0b24sXHJcblx0SWNvbixcclxuXHRHcmlkLFxyXG5cdExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiwgTGlzdFN1YmhlYWRlcixcclxuXHRUZXh0RmllbGRcclxufSA9IE1hdGVyaWFsVUlcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IFtzZWN0aW9uTGlzdCwgc2V0U2VjdGlvbkxpc3RdID0gdXNlU3RhdGUoW10pXHJcblx0Y29uc3QgY3VyU2VjdGlvbk5hbWUgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKVxyXG5cdGNvbnN0IHNlY3Rpb25Db250ZW50ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KClcclxuXHRjb25zdCBnYW1lTmFtZSA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpXHJcblx0Y29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbHN0JywgeyBnYW1lTmFtZTogZ2FtZU5hbWUuY3VycmVudC52YWx1ZSB9KVxyXG5cdFx0c2V0U2VjdGlvbkxpc3QoKGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbHN0JywgeyBnYW1lTmFtZTogZ2FtZU5hbWUuY3VycmVudC52YWx1ZSB9KSkuZGF0YSlcclxuXHR9XHJcblx0Y29uc3QgaGFuZGxlQWRkU2VjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHMgPSBwcm9tcHQoJ1NlY3Rpb24gbmFtZTonKSB8fCB1dWlkKClcclxuXHRcdGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvd3JpdGUnLCB7XHJcblx0XHRcdGdhbWVOYW1lOiBnYW1lTmFtZS5jdXJyZW50LnZhbHVlLFxyXG5cdFx0XHRzZWN0aW9uTmFtZTogcyxcclxuXHRcdFx0Y29udGVudDogJydcclxuXHRcdH0pXHJcblx0XHRhd2FpdCBsb2FkKClcclxuXHRcdGF3YWl0IG9wZW5TZWN0aW9uKHMpXHJcblx0fVxyXG5cdGNvbnN0IG9wZW5TZWN0aW9uID0gYXN5bmMgKHNlY3Rpb25OYW1lOiBzdHJpbmcpID0+IHtcclxuXHRcdHNlY3Rpb25Db250ZW50LmN1cnJlbnQudmFsdWUgPSAoYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9yZWFkJywgeyBnYW1lTmFtZTogZ2FtZU5hbWUuY3VycmVudC52YWx1ZSwgc2VjdGlvbk5hbWUgfSkpLmRhdGFcclxuXHRcdGN1clNlY3Rpb25OYW1lLmN1cnJlbnQudmFsdWUgPSBzZWN0aW9uTmFtZVxyXG5cdFx0c2VjdGlvbkNvbnRlbnQuY3VycmVudC5mb2N1cygpXHJcblx0fVxyXG5cdGNvbnN0IGRlbGV0ZVNlY3Rpb24gPSBhc3luYyAoc2VjdGlvbk5hbWU6IHN0cmluZykgPT4ge1xyXG5cdFx0YXdhaXQgYXhpb3MucG9zdCgnL2FwaS9kZWwnLCB7IGdhbWVOYW1lOiBnYW1lTmFtZS5jdXJyZW50LnZhbHVlLCBzZWN0aW9uTmFtZSB9KVxyXG5cdFx0YXdhaXQgbG9hZCgpXHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXszfT5cclxuXHRcdFx0XHRcdDxMaXN0PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdFN1YmhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHRTZWN0aW9uc1xyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGRpc2FibGVFbGV2YXRpb24gb25DbGljaz17aGFuZGxlQWRkU2VjdGlvbn0+QWRkPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9MaXN0U3ViaGVhZGVyPlxyXG5cdFx0XHRcdFx0XHR7c2VjdGlvbkxpc3QubWFwKHggPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbSBidXR0b24ga2V5PXt4fSBvbkNsaWNrPXsoKSA9PiBvcGVuU2VjdGlvbih4KX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7eH1cclxuXHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlU2VjdGlvbih4KX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb24+ZGVsZXRlPC9JY29uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9MaXN0PlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXs5fT5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogMTAgfX0+XHJcblx0XHRcdFx0XHRcdDxUZXh0RmllbGQgbGFiZWw9XCJHYW1lIG5hbWVcIiBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19IGlucHV0UmVmPXtnYW1lTmFtZX0gc3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogNVxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGV2dDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZXZ0LmtleSA9PT0gJ0VudGVyJyAmJiBsb2FkKClcclxuXHRcdFx0XHRcdFx0XHR9fSAvPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkIGxhYmVsPVwiU2VjdGlvbiBuYW1lXCIgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fSBpbnB1dFJlZj17Y3VyU2VjdGlvbk5hbWV9XHJcblx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXsoZXZ0OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRldnQua2V5ID09PSAnRW50ZXInICYmIG9wZW5TZWN0aW9uKGN1clNlY3Rpb25OYW1lLmN1cnJlbnQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0fX0gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PFRleHRGaWVsZCBtdWx0aWxpbmUgdmFyaWFudD1cImZpbGxlZFwiIHJvd3M9XCIzMFwiIGxhYmVsPVwiQ29udGVudFwiXHJcblx0XHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX0gaW5wdXRSZWY9e3NlY3Rpb25Db250ZW50fSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcblx0XHRcdFx0XHRcdGlucHV0UHJvcHM9e3sgc3R5bGU6IHsgZm9udEZhbWlseTogJ21vbm9zcGFjZScgfSB9fVxyXG5cdFx0XHRcdFx0XHRvbkJsdXI9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRheGlvcy5wb3N0KCcvYXBpL3dyaXRlJywge1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2FtZU5hbWU6IGdhbWVOYW1lLmN1cnJlbnQudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uTmFtZTogY3VyU2VjdGlvbk5hbWUuY3VycmVudC52YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHNlY3Rpb25Db250ZW50LmN1cnJlbnQudmFsdWVcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9fSAvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59Il19