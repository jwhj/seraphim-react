!function(){var e={},t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e=function(){return t(n),n}}else{var r=new Array(16);e=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}for(var i=[],a=0;a<256;++a)i[a]=(a+256).toString(16).substr(1);var o,u,l=0,c=0,s=function(t,n,r){var a=n&&r||0,s=n||[],f=(t=t||{}).node||o,d=void 0!==t.clockseq?t.clockseq:u;if(null==f||null==d){var h=e();null==f&&(f=o=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==d&&(d=u=16383&(h[6]<<8|h[7]))}var p=void 0!==t.msecs?t.msecs:(new Date).getTime(),v=void 0!==t.nsecs?t.nsecs:c+1,y=p-l+(v-c)/1e4;if(y<0&&void 0===t.clockseq&&(d=d+1&16383),(y<0||p>l)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=p,c=v,u=d;var m=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;s[a++]=m>>>24&255,s[a++]=m>>>16&255,s[a++]=m>>>8&255,s[a++]=255&m;var w=p/4294967296*1e4&268435455;s[a++]=w>>>8&255,s[a++]=255&w,s[a++]=w>>>24&15|16,s[a++]=w>>>16&255,s[a++]=d>>>8|128,s[a++]=255&d;for(var b=0;b<6;++b)s[a+b]=f[b];return n||function(e,t){var n=t||0,r=i;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}(s)},f={};(function(e){"use strict";var t=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,u)}l((r=r.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(u){a=[6,u],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(f,"__esModule",{value:!0});var o=i("undefined"!=typeof window?window.React:void 0!==e?e.React:null),u=a("undefined"!=typeof window?window.axios:void 0!==e?e.axios:null),l=a(s),c=MaterialUI.Button,d=MaterialUI.IconButton,h=MaterialUI.Icon,p=MaterialUI.Grid,v=MaterialUI.List,y=MaterialUI.ListItem,m=MaterialUI.ListItemSecondaryAction,w=MaterialUI.ListSubheader,b=MaterialUI.TextField;f.default=function(){var e=r(o.useState([]),2),i=e[0],a=e[1],s=o.useRef(null),f=o.useRef(null),g=o.useRef(null),_=function(){return t(void 0,void 0,void 0,function(){var e;return n(this,function(t){switch(t.label){case 0:return[4,u.default.post("/api/lst",{gameName:g.current.value})];case 1:return t.sent(),e=a,[4,u.default.post("/api/lst",{gameName:g.current.value})];case 2:return e.apply(void 0,[t.sent().data]),[2]}})})};return o.default.createElement("div",null,o.default.createElement(p,{container:!0,spacing:3,style:{width:"100%"}},o.default.createElement(p,{item:!0,xs:3},o.default.createElement(v,null,o.default.createElement(w,null,"Sections",o.default.createElement(m,null,o.default.createElement(c,{variant:"contained",disableElevation:!0,onClick:function(){return t(void 0,void 0,void 0,function(){var e;return n(this,function(t){switch(t.label){case 0:return e=prompt("Section name:")||l.default(),[4,u.default.post("/api/write",{gameName:g.current.value,sectionName:e,content:""})];case 1:return t.sent(),[4,_()];case 2:return t.sent(),[2]}})})}},"Add"))),i.map(function(e){return o.default.createElement(y,{button:!0,key:e,onClick:function(){return r=e,t(void 0,void 0,void 0,function(){var e;return n(this,function(t){switch(t.label){case 0:return e=f.current,[4,u.default.post("/api/read",{gameName:g.current.value,sectionName:r})];case 1:return e.value=t.sent().data,s.current.value=r,f.current.focus(),[2]}})});var r}},e,o.default.createElement(m,null,o.default.createElement(d,{onClick:function(){return r=e,t(void 0,void 0,void 0,function(){return n(this,function(e){switch(e.label){case 0:return[4,u.default.post("/api/del",{gameName:g.current.value,sectionName:r})];case 1:return e.sent(),[4,_()];case 2:return e.sent(),[2]}})});var r}},o.default.createElement(h,null,"delete"))))}))),o.default.createElement(p,{item:!0,xs:9},o.default.createElement("div",{style:{width:"100%",padding:10}},o.default.createElement(b,{label:"Game name",InputLabelProps:{shrink:!0},inputRef:g,style:{marginRight:5},onKeyDown:function(e){"Enter"===e.key&&_()}}),o.default.createElement(b,{label:"Section name",InputLabelProps:{shrink:!0},inputRef:s})),o.default.createElement(b,{multiline:!0,variant:"filled",rows:"30",label:"Content",InputLabelProps:{shrink:!0},inputRef:f,style:{width:"100%"},inputProps:{style:{fontFamily:"monospace"}},onBlur:function(){u.default.post("/api/write",{gameName:g.current.value,sectionName:s.current.value,content:f.current.value})}}))))}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var d={};(function(e){"use strict";var t=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,u)}l((r=r.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(u){a=[6,u],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o},i=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(d,"__esModule",{value:!0});var o=a("undefined"!=typeof window?window.axios:void 0!==e?e.axios:null),u=function(){function e(){this.text="",this.curText="",this.char=null,this.qid=null,this.qry=null,this.opts=null,this._backgroundImage=null,this.backgroundImageChanged=!1}return Object.defineProperty(e.prototype,"backgroundImage",{get:function(){return this._backgroundImage||"/transparent.png"},set:function(e){this._backgroundImage=e,this.backgroundImageChanged=!0},enumerable:!0,configurable:!0}),e.prototype.applyText=function(e){this.text+=this.curText,this.curText=e},e}(),l={},c={"\\char":function(e,r){return t(void 0,void 0,void 0,function(){return n(this,function(t){switch(t.label){case 0:return r.length>1?e.state.char=r[1]:e.state.char=null,[4,c["\\clear"](e,[])];case 1:return t.sent(),[2,!1]}})})},"\\background-image":function(e,r){return t(void 0,void 0,void 0,function(){return n(this,function(t){return e.state.backgroundImage=r[1],[2,!1]})})},"\\newline":function(e,r){return t(void 0,void 0,void 0,function(){return n(this,function(t){return e.state.curText+="<br/>",[2,!1]})})},"\\clear":function(e,r){return t(void 0,void 0,void 0,function(){return n(this,function(t){return e.state.text=e.state.curText="",[2,Boolean(r[1])]})})},"\\goto":function(e,r){return t(void 0,void 0,void 0,function(){return n(this,function(t){switch(t.label){case 0:return[4,e.selectSection(r[1])];case 1:return t.sent(),[2,!1]}})})},"\\query":function(e,r){return t(void 0,void 0,void 0,function(){var t;return n(this,function(n){switch(n.label){case 0:return e.state.qid=r[1],t=e.state,[4,e.loadSection(r[1])];case 1:return t.qry=n.sent(),[2,!0]}})})},"\\options":function(e,r){return t(void 0,void 0,void 0,function(){var t;return n(this,function(n){switch(n.label){case 0:return e.state.qid=r[1],t=e.state,[4,e.loadSection(r[1])];case 1:return t.opts=n.sent().split("\n"),[2,!0]}})})}};l["\\script"]=1,c["\\script"]=function(e,r){return t(void 0,void 0,void 0,function(){return n(this,function(t){return new Function(r[1]).call(e),[2,!1]})})},c["\\beginscript"]=function(e,r){return t(void 0,void 0,void 0,function(){var t,r;return n(this,function(n){for(t=[];"\\endscript"!==(r=e.nextLine());)t.push(r);return new Function(t.join("\n")).call(e),[2,!1]})})};var s=function(){function e(e){this.cnt=0,this.cnt1=0,this.lst=[],this.lst1=[],this.ans={},this.gameName=e,this.state=new u}return e.prototype.loadSection=function(e){return t(this,void 0,void 0,function(){return n(this,function(t){switch(t.label){case 0:return[4,o.default.post("/api/read",{gameName:this.gameName,sectionName:e})];case 1:return[2,t.sent().data]}})})},e.prototype.selectSection=function(e){return t(this,void 0,void 0,function(){var t;return n(this,function(n){switch(n.label){case 0:return t=this,[4,this.loadSection(e)];case 1:return t.lst=n.sent().split("\n"),this.lst1=[],this.cnt=this.cnt1=0,[2]}})})},e.prototype.addLine=function(e){this.lst1.push(e)},e.prototype.nextLine=function(){if(this.cnt1<this.lst1.length)return this.lst1[this.cnt1++];if(this.cnt<this.lst.length)return this.lst[this.cnt++];throw"No more lines."},e.prototype.next=function(){return t(this,void 0,void 0,function(){var e,t,r,a;return n(this,function(n){switch(n.label){case 0:e=!1,n.label=1;case 1:return e?[3,9]:(t=this.nextLine()).startsWith("\\")?[3,5]:""!==t?[3,3]:[4,c["\\newline"](this,[])];case 2:return e=n.sent(),[3,4];case 3:return this.state.applyText(t),[3,9];case 4:return[3,8];case 5:return(r=t.split(" "))[0]in c?(r[0]in l&&(a=l[r[0]],r=i(r.slice(0,a),[r.slice(a).join(" ")])),[4,c[r[0]](this,r.filter(Boolean))]):[3,7];case 6:return e=n.sent(),[3,8];case 7:throw"Unexpected token "+r[0];case 8:return[3,1];case 9:return[2]}})})},e}();d.default=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var h={};(function(e){"use strict";var t=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,u)}l((r=r.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(u){a=[6,u],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(h,"__esModule",{value:!0});var o=i("undefined"!=typeof window?window.React:void 0!==e?e.React:null),u=a(d),l=a("undefined"!=typeof window?window.Typed:void 0!==e?e.Typed:null),c=(MaterialUI.Button,MaterialUI.Icon,MaterialUI.Card),s=MaterialUI.Divider,f=MaterialUI.Modal,p=MaterialUI.Backdrop,v=MaterialUI.Fade,y=MaterialUI.List,m=MaterialUI.ListItem;h.default=function(){var e=r(o.useState(!1),2),i=e[0],a=e[1],d=r(o.useState(""),2),h=d[0],w=d[1],b=r(o.useState(!0),2),g=(b[0],b[1]),_=r(o.useState(null),2),x=_[0],E=_[1],k=r(o.useState(""),2),I=k[0],S=k[1],M=r(o.useState(!1),2),R=M[0],C=M[1],U=o.useRef(),T=o.useRef(),P=function(){w(/Android|iPhone/i.test(navigator.userAgent)?"8.5em":"12em")},L=function(){return U.current?U.current:U.current=new u.default("test")};o.useEffect(function(){t(void 0,void 0,void 0,function(){return n(this,function(e){switch(e.label){case 0:return[4,L().selectSection("start")];case 1:return e.sent(),g(!1),P(),addEventListener("resize",P),addEventListener("touchmove",function(e){e.preventDefault()},{passive:!1}),[2]}})})},[]);var q=function(){T.current.destroy(),T.current=null;var e=L();S(e.state.text+e.state.curText)},N=function(){return t(void 0,void 0,void 0,function(){var e,t;return n(this,function(n){switch(n.label){case 0:return e=L(),T.current?(q(),[3,3]):[3,1];case 1:return[4,e.next()];case 2:n.sent(),e.state.qry?(t=prompt(e.state.qry),e.ans[e.state.qid]=t,e.state.qry=null,setTimeout(N)):e.state.opts?C(!0):(E(e.state.char),S(e.state.text),T.current=new l.default("#type",{strings:[e.state.curText],typeSpeed:20,onComplete:function(){q()}})),e.state.backgroundImageChanged&&(e.state.backgroundImageChanged=!1,a(!1),setTimeout(function(){a(!0)})),n.label=3;case 3:return[2]}})})};return o.default.createElement("div",null,o.default.createElement(v,{in:i,timeout:1500},o.default.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundPosition:"center",backgroundSize:"cover",backgroundImage:'url("/res/test'+L().state.backgroundImage+'")'}})),o.default.createElement(f,{open:R,BackdropComponent:p,BackdropProps:{transitionDuration:{enter:1500,exit:500}}},o.default.createElement(v,{in:R,timeout:{enter:1500,exit:500}},o.default.createElement("div",{style:{padding:"5% 10%",color:"white",height:"100%"}},o.default.createElement(y,null,R&&L().state.opts.map(function(e,r){return o.default.createElement(m,{key:r,button:!0,onClick:function(){return function(e,r){return t(void 0,void 0,void 0,function(){var t;return n(this,function(n){switch(n.label){case 0:return(t=L()).ans[t.state.qid]=[e,r],t.state.opts=null,C(!1),[4,N()];case 1:return n.sent(),[2]}})})}(r,e)}},e)}))))),o.default.createElement("div",{style:{width:"100%",height:h,padding:10,display:"flex",justifyContent:"center",position:"fixed",bottom:0}},o.default.createElement(c,{elevation:4,style:{width:"80%",backgroundColor:x?"#EEE":"#AAA",transition:"background-color 1s ease",padding:10,opacity:.8},onClick:N},x&&o.default.createElement("div",{style:{width:"30%"}},o.default.createElement("span",{style:{color:"#888"}},x),o.default.createElement(s,null)),o.default.createElement("div",{style:{padding:"0 10px"}},o.default.createElement("span",{dangerouslySetInnerHTML:{__html:I}}),o.default.createElement("span",{id:"type"})))))}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var p={};(function(e){"use strict";var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(p,"__esModule",{value:!0});var n=t("undefined"!=typeof window?window.React:void 0!==e?e.React:null),r=t(f),i=t(h),a=ReactRouterDOM.HashRouter,o=ReactRouterDOM.Switch,u=ReactRouterDOM.Route;ReactDOM.render(n.default.createElement(a,null,n.default.createElement(o,null,n.default.createElement(u,{exact:!0,path:"/",component:i.default}),n.default.createElement(u,{path:"/editor",component:r.default}))),document.querySelector("#app"))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}();