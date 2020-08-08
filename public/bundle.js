(()=>{var ra=Object.defineProperty,_a=Object.prototype.hasOwnProperty,u=(a,e)=>()=>(e||(e={exports:{}},a(e.exports,e)),e.exports),Ib=a=>ra(a,"__esModule",{value:!0}),Jb=(a,e)=>{Ib(a);if(typeof e==="object"||typeof e==="function")for(let l in e)_a.call(e,l)&&!_a.call(a,l)&&l!=="default"&&ra(a,l,{get:()=>e[l],enumerable:!0});return a},K=a=>a&&a.__esModule?a:Jb(ra({},"default",{value:a,enumerable:!0}),a);var Q=u((a,e)=>{e.exports=window.React});var da=u((a,e)=>{"use strict";e.exports=function l(k,j){return function d(){for(var f=new Array(arguments.length),n=0;n<f.length;n++)f[n]=arguments[n];return k.apply(j,f)}}});var Ja=u((a,e)=>{e.exports=function l(k){return k!=null&&k.constructor!=null&&typeof k.constructor.isBuffer==="function"&&k.constructor.isBuffer(k)}});var G=u((P,N)=>{"use strict";var a=da(),e=Ja(),l=Object.prototype.toString;function k(q){return l.call(q)==="[object Array]"}function j(q){return l.call(q)==="[object ArrayBuffer]"}function d(q){return typeof FormData!=="undefined"&&q instanceof FormData}function f(q){var I;return typeof ArrayBuffer!=="undefined"&&ArrayBuffer.isView?I=ArrayBuffer.isView(q):I=q&&q.buffer&&q.buffer instanceof ArrayBuffer,I}function n(q){return typeof q==="string"}function h(q){return typeof q==="number"}function c(q){return typeof q==="undefined"}function m(q){return q!==null&&typeof q==="object"}function p(q){return l.call(q)==="[object Date]"}function g(q){return l.call(q)==="[object File]"}function i(q){return l.call(q)==="[object Blob]"}function o(q){return l.call(q)==="[object Function]"}function b(q){return m(q)&&o(q.pipe)}function r(q){return typeof URLSearchParams!=="undefined"&&q instanceof URLSearchParams}function s(q){return q.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return typeof navigator!=="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!=="undefined"&&typeof document!=="undefined"}function B(q,I){if(q===null||typeof q==="undefined")return;typeof q!=="object"&&(q=[q]);if(k(q))for(var D=0,O=q.length;D<O;D++)I.call(null,q[D],D,q);else for(var C in q)Object.prototype.hasOwnProperty.call(q,C)&&I.call(null,q[C],C,q)}function v(){var q={};function I(C,F){typeof q[F]==="object"&&typeof C==="object"?q[F]=v(q[F],C):q[F]=C}for(var D=0,O=arguments.length;D<O;D++)B(arguments[D],I);return q}function y(){var q={};function I(C,F){typeof q[F]==="object"&&typeof C==="object"?q[F]=y(q[F],C):typeof C==="object"?q[F]=y({},C):q[F]=C}for(var D=0,O=arguments.length;D<O;D++)B(arguments[D],I);return q}function z(q,I,D){return B(I,function O(C,F){D&&typeof C==="function"?q[F]=a(C,D):q[F]=C}),q}N.exports={isArray:k,isArrayBuffer:j,isBuffer:e,isFormData:d,isArrayBufferView:f,isString:n,isNumber:h,isObject:m,isUndefined:c,isDate:p,isFile:g,isBlob:i,isFunction:o,isStream:b,isURLSearchParams:r,isStandardBrowserEnv:x,forEach:B,merge:v,deepMerge:y,extend:z,trim:s}});var ea=u((l,k)=>{"use strict";var a=G();function e(j){return encodeURIComponent(j).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}k.exports=function j(d,f,n){if(!f)return d;var h;if(n)h=n(f);else if(a.isURLSearchParams(f))h=f.toString();else{var c=[];a.forEach(f,function p(g,i){if(g===null||typeof g==="undefined")return;a.isArray(g)?i=i+"[]":g=[g],a.forEach(g,function o(b){a.isDate(b)?b=b.toISOString():a.isObject(b)&&(b=JSON.stringify(b)),c.push(e(i)+"="+e(b))})}),h=c.join("&")}if(h){var m=d.indexOf("#");m!==-1&&(d=d.slice(0,m)),d+=(d.indexOf("?")===-1?"?":"&")+h}return d}});var xa=u((l,k)=>{"use strict";var a=G();function e(){this.handlers=[]}e.prototype.use=function j(d,f){return this.handlers.push({fulfilled:d,rejected:f}),this.handlers.length-1};e.prototype.eject=function j(d){this.handlers[d]&&(this.handlers[d]=null)};e.prototype.forEach=function j(d){a.forEach(this.handlers,function f(n){n!==null&&d(n)})};k.exports=e});var Ba=u((e,l)=>{"use strict";var a=G();l.exports=function k(j,d,f){return a.forEach(f,function n(h){j=h(j,d)}),j}});var $=u((a,e)=>{"use strict";e.exports=function l(k){return!!(k&&k.__CANCEL__)}});var Ga=u((e,l)=>{"use strict";var a=G();l.exports=function k(j,d){a.forEach(j,function f(n,h){h!==d&&h.toUpperCase()===d.toUpperCase()&&(j[d]=n,delete j[h])})}});var za=u((a,e)=>{"use strict";e.exports=function l(k,j,d,f,n){return k.config=j,d&&(k.code=d),k.request=f,k.response=n,k.isAxiosError=!0,k.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},k}});var aa=u((e,l)=>{"use strict";var a=za();l.exports=function k(j,d,f,n,h){var c=new Error(j);return a(c,d,f,n,h)}});var Aa=u((e,l)=>{"use strict";var a=aa();l.exports=function k(j,d,f){var n=f.config.validateStatus;!n||n(f.status)?j(f):d(a("Request failed with status code "+f.status,f.config,null,f.request,f))}});var Ha=u((l,k)=>{"use strict";var a=G(),e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];k.exports=function j(d){var f={},n,h,c;return d?(a.forEach(d.split(`
`),function m(p){c=p.indexOf(":"),n=a.trim(p.substr(0,c)).toLowerCase(),h=a.trim(p.substr(c+1));if(n){if(f[n]&&e.indexOf(n)>=0)return;n==="set-cookie"?f[n]=(f[n]?f[n]:[]).concat([h]):f[n]=f[n]?f[n]+", "+h:h}}),f):f}});var Fa=u((e,l)=>{"use strict";var a=G();l.exports=a.isStandardBrowserEnv()?function k(){var j=/(msie|trident)/i.test(navigator.userAgent),d=document.createElement("a"),f;function n(h){var c=h;return j&&(d.setAttribute("href",c),c=d.href),d.setAttribute("href",c),{href:d.href,protocol:d.protocol?d.protocol.replace(/:$/,""):"",host:d.host,search:d.search?d.search.replace(/^\?/,""):"",hash:d.hash?d.hash.replace(/^#/,""):"",hostname:d.hostname,port:d.port,pathname:d.pathname.charAt(0)==="/"?d.pathname:"/"+d.pathname}}return f=n(window.location.href),function h(c){var m=a.isString(c)?n(c):c;return m.protocol===f.protocol&&m.host===f.host}}():function k(){return function j(){return!0}}()});var Da=u((e,l)=>{"use strict";var a=G();l.exports=a.isStandardBrowserEnv()?function k(){return{write:function j(d,f,n,h,c,m){var p=[];p.push(d+"="+encodeURIComponent(f)),a.isNumber(n)&&p.push("expires="+new Date(n).toGMTString()),a.isString(h)&&p.push("path="+h),a.isString(c)&&p.push("domain="+c),m===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function j(d){var f=document.cookie.match(new RegExp("(^|;\\s*)("+d+")=([^;]*)"));return f?decodeURIComponent(f[3]):null},remove:function j(d){this.write(d,"",Date.now()-864e5)}}}():function k(){return{write:function j(){},read:function j(){return null},remove:function j(){}}}()});var Z=u((f,n)=>{"use strict";var a=G(),e=Aa(),l=ea(),k=Ha(),j=Fa(),d=aa();n.exports=function h(c){return new Promise(function m(p,g){var i=c.data,o=c.headers;a.isFormData(i)&&delete o["Content-Type"];var b=new XMLHttpRequest();if(c.auth){var r=c.auth.username||"",s=c.auth.password||"";o.Authorization="Basic "+btoa(r+":"+s)}b.open(c.method.toUpperCase(),l(c.url,c.params,c.paramsSerializer),!0),b.timeout=c.timeout,b.onreadystatechange=function v(){if(!b||b.readyState!==4)return;if(b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0))return;var y="getAllResponseHeaders"in b?k(b.getAllResponseHeaders()):null,z=!c.responseType||c.responseType==="text"?b.responseText:b.response,P={data:z,status:b.status,statusText:b.statusText,headers:y,config:c,request:b};e(p,g,P),b=null},b.onabort=function v(){if(!b)return;g(d("Request aborted",c,"ECONNABORTED",b)),b=null},b.onerror=function v(){g(d("Network Error",c,null,b)),b=null},b.ontimeout=function v(){g(d("timeout of "+c.timeout+"ms exceeded",c,"ECONNABORTED",b)),b=null};if(a.isStandardBrowserEnv()){var x=Da(),B=(c.withCredentials||j(c.url))&&c.xsrfCookieName?x.read(c.xsrfCookieName):void 0;B&&(o[c.xsrfHeaderName]=B)}"setRequestHeader"in b&&a.forEach(o,function v(y,z){typeof i==="undefined"&&z.toLowerCase()==="content-type"?delete o[z]:b.setRequestHeader(z,y)}),c.withCredentials&&(b.withCredentials=!0);if(c.responseType)try{b.responseType=c.responseType}catch(v){if(c.responseType!=="json")throw v}typeof c.onDownloadProgress==="function"&&b.addEventListener("progress",c.onDownloadProgress),typeof c.onUploadProgress==="function"&&b.upload&&b.upload.addEventListener("progress",c.onUploadProgress),c.cancelToken&&c.cancelToken.promise.then(function v(y){if(!b)return;b.abort(),g(y),b=null}),i===void 0&&(i=null),b.send(i)})}});var ca=u((f,n)=>{"use strict";var a=G(),e=Ga(),l={"Content-Type":"application/x-www-form-urlencoded"};function k(h,c){!a.isUndefined(h)&&a.isUndefined(h["Content-Type"])&&(h["Content-Type"]=c)}function j(){var h;return typeof process!=="undefined"&&Object.prototype.toString.call(process)==="[object process]"?h=Z():typeof XMLHttpRequest!=="undefined"&&(h=Z()),h}var d={adapter:j(),transformRequest:[function h(c,m){return e(m,"Accept"),e(m,"Content-Type"),a.isFormData(c)||a.isArrayBuffer(c)||a.isBuffer(c)||a.isStream(c)||a.isFile(c)||a.isBlob(c)?c:a.isArrayBufferView(c)?c.buffer:a.isURLSearchParams(c)?(k(m,"application/x-www-form-urlencoded;charset=utf-8"),c.toString()):a.isObject(c)?(k(m,"application/json;charset=utf-8"),JSON.stringify(c)):c}],transformResponse:[function h(c){if(typeof c==="string")try{c=JSON.parse(c)}catch(m){}return c}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function h(c){return c>=200&&c<300}};d.headers={common:{Accept:"application/json, text/plain, */*"}};a.forEach(["delete","get","head"],function h(c){d.headers[c]={}});a.forEach(["post","put","patch"],function h(c){d.headers[c]=a.merge(l)});n.exports=d});var Ea=u((a,e)=>{"use strict";e.exports=function l(k){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(k)}});var Ca=u((a,e)=>{"use strict";e.exports=function l(k,j){return j?k.replace(/\/+$/,"")+"/"+j.replace(/^\/+/,""):k}});var ya=u((n,h)=>{"use strict";var a=G(),e=Ba(),l=$(),k=ca(),j=Ea(),d=Ca();function f(c){c.cancelToken&&c.cancelToken.throwIfRequested()}h.exports=function c(m){f(m),m.baseURL&&!j(m.url)&&(m.url=d(m.baseURL,m.url)),m.headers=m.headers||{},m.data=e(m.data,m.headers,m.transformRequest),m.headers=a.merge(m.headers.common||{},m.headers[m.method]||{},m.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function g(i){delete m.headers[i]});var p=m.adapter||k.adapter;return p(m).then(function g(i){return f(m),i.data=e(i.data,i.headers,m.transformResponse),i},function g(i){return l(i)||(f(m),i&&i.response&&(i.response.data=e(i.response.data,i.response.headers,m.transformResponse))),Promise.reject(i)})}});var ba=u((e,l)=>{"use strict";var a=G();l.exports=function k(j,d){d=d||{};var f={};return a.forEach(["url","method","params","data"],function n(h){typeof d[h]!=="undefined"&&(f[h]=d[h])}),a.forEach(["headers","auth","proxy"],function n(h){a.isObject(d[h])?f[h]=a.deepMerge(j[h],d[h]):typeof d[h]!=="undefined"?f[h]=d[h]:a.isObject(j[h])?f[h]=a.deepMerge(j[h]):typeof j[h]!=="undefined"&&(f[h]=j[h])}),a.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function n(h){typeof d[h]!=="undefined"?f[h]=d[h]:typeof j[h]!=="undefined"&&(f[h]=j[h])}),f}});var wa=u((f,n)=>{"use strict";var a=G(),e=ea(),l=xa(),k=ya(),j=ba();function d(h){this.defaults=h,this.interceptors={request:new l(),response:new l()}}d.prototype.request=function h(c){typeof c==="string"?(c=arguments[1]||{},c.url=arguments[0]):c=c||{},c=j(this.defaults,c),c.method=c.method?c.method.toLowerCase():"get";var m=[k,void 0],p=Promise.resolve(c);for(this.interceptors.request.forEach(function g(i){m.unshift(i.fulfilled,i.rejected)}),this.interceptors.response.forEach(function g(i){m.push(i.fulfilled,i.rejected)});m.length;)p=p.then(m.shift(),m.shift());return p};d.prototype.getUri=function h(c){return c=j(this.defaults,c),e(c.url,c.params,c.paramsSerializer).replace(/^\?/,"")};a.forEach(["delete","get","head","options"],function h(c){d.prototype[c]=function(m,p){return this.request(a.merge(p||{},{method:c,url:m}))}});a.forEach(["post","put","patch"],function h(c){d.prototype[c]=function(m,p,g){return this.request(a.merge(g||{},{method:c,url:m,data:p}))}});n.exports=d});var _=u((e,l)=>{"use strict";function a(k){this.message=k}a.prototype.toString=function k(){return"Cancel"+(this.message?": "+this.message:"")};a.prototype.__CANCEL__=!0;l.exports=a});var va=u((l,k)=>{"use strict";var a=_();function e(j){if(typeof j!=="function")throw new TypeError("executor must be a function.");var d;this.promise=new Promise(function n(h){d=h});var f=this;j(function n(h){if(f.reason)return;f.reason=new a(h),d(f.reason)})}e.prototype.throwIfRequested=function j(){if(this.reason)throw this.reason};e.source=function j(){var d,f=new e(function n(h){d=h});return{token:f,cancel:d}};k.exports=e});var Ia=u((a,e)=>{"use strict";e.exports=function l(k){return function j(d){return k.apply(null,d)}}});var ua=u((n,h)=>{"use strict";var a=G(),e=da(),l=wa(),k=ba(),j=ca();function d(c){var m=new l(c),p=e(l.prototype.request,m);return a.extend(p,l.prototype,m),a.extend(p,m),p}var f=d(j);f.Axios=l;f.create=function c(m){return d(k(f.defaults,m))};f.Cancel=_();f.CancelToken=va();f.isCancel=$();f.all=function c(m){return Promise.all(m)};f.spread=Ia();h.exports=f;h.exports.default=f});var ta=u((a,e)=>{e.exports=ua()});var ga=u((k,j)=>{var a=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof window.msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto);if(a){var e=new Uint8Array(16);j.exports=function d(){return a(e),e}}else{var l=new Array(16);j.exports=function d(){for(var f=0,n;f<16;f++)(f&3)===0&&(n=Math.random()*4294967296),l[f]=n>>>((f&3)<<3)&255;return l}}});var fa=u((k,j)=>{var a=[];for(var e=0;e<256;++e)a[e]=(e+256).toString(16).substr(1);function l(d,f){var n=f||0,h=a;return[h[d[n++]],h[d[n++]],h[d[n++]],h[d[n++]],"-",h[d[n++]],h[d[n++]],"-",h[d[n++]],h[d[n++]],"-",h[d[n++]],h[d[n++]],"-",h[d[n++]],h[d[n++]],h[d[n++]],h[d[n++]],h[d[n++]],h[d[n++]]].join("")}j.exports=l});var ha=u((k,j)=>{var a=ga(),e=fa();function l(d,f,n){var h=f&&n||0;typeof d=="string"&&(f=d==="binary"?new Array(16):null,d=null),d=d||{};var c=d.random||(d.rng||a)();c[6]=c[6]&15|64,c[8]=c[8]&63|128;if(f)for(var m=0;m<16;++m)f[h+m]=c[m];return f||e(c)}j.exports=l});var La=u((n,h)=>{var a=ga(),e=fa(),l,k,j=0,d=0;function f(c,m,p){var g=m&&p||0,i=m||[];c=c||{};var o=c.node||l,b=c.clockseq!==void 0?c.clockseq:k;if(o==null||b==null){var r=a();o==null&&(o=l=[r[0]|1,r[1],r[2],r[3],r[4],r[5]]),b==null&&(b=k=(r[6]<<8|r[7])&16383)}var s=c.msecs!==void 0?c.msecs:new Date().getTime(),x=c.nsecs!==void 0?c.nsecs:d+1,B=s-j+(x-d)/1e4;B<0&&c.clockseq===void 0&&(b=b+1&16383),(B<0||s>j)&&c.nsecs===void 0&&(x=0);if(x>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");j=s,d=x,k=b,s+=122192928e5;var v=((s&268435455)*1e4+x)%4294967296;i[g++]=v>>>24&255,i[g++]=v>>>16&255,i[g++]=v>>>8&255,i[g++]=v&255;var y=s/4294967296*1e4&268435455;i[g++]=y>>>8&255,i[g++]=y&255,i[g++]=y>>>24&15|16,i[g++]=y>>>16&255,i[g++]=b>>>8|128,i[g++]=b&255;for(var z=0;z<6;++z)i[g+z]=o[z];return m?m:e(i)}h.exports=f});var Ka=u((a,e)=>{(function l(k,j){typeof a==="object"&&typeof e==="object"?e.exports=j():typeof define==="function"&&define.amd?define([],j):typeof a==="object"?a.Typed=j():k.Typed=j()})(a,function(){return function(l){var k={};function j(d){if(k[d])return k[d].exports;var f=k[d]={exports:{},id:d,loaded:!1};return l[d].call(f.exports,f,f.exports,j),f.loaded=!0,f.exports}return j.m=l,j.c=k,j.p="",j(0)}([function(l,k,j){"use strict";Object.defineProperty(k,"__esModule",{value:!0});var d=function(){function m(p,g){for(var i=0;i<g.length;i++){var o=g[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(p,o.key,o)}}return function(p,g,i){return g&&m(p.prototype,g),i&&m(p,i),p}}();function f(m,p){if(!(m instanceof p))throw new TypeError("Cannot call a class as a function")}var n=j(1),h=j(3),c=function(){function m(p,g){f(this,m),n.initializer.load(this,g,p),this.begin()}return d(m,[{key:"toggle",value:function p(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function p(){if(this.typingComplete)return;if(this.pause.status)return;this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this)}},{key:"start",value:function p(){if(this.typingComplete)return;if(!this.pause.status)return;this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this)}},{key:"destroy",value:function p(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function p(){var g=arguments.length<=0||arguments[0]===void 0?!0:arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,g&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function p(){var g=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){!g.currentElContent||g.currentElContent.length===0?g.typewrite(g.strings[g.sequence[g.arrayPos]],g.strPos):g.backspace(g.currentElContent,g.currentElContent.length)},this.startDelay)}},{key:"typewrite",value:function p(g,i){var o=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var b=this.humanizer(this.typeSpeed),r=1;if(this.pause.status===!0){this.setPauseStatus(g,i,!0);return}this.timeout=setTimeout(function(){i=h.htmlParser.typeHtmlChars(g,i,o);var s=0,x=g.substr(i);if(x.charAt(0)==="^"){if(/^\^\d+/.test(x)){var B=1;x=/\d+/.exec(x)[0],B+=x.length,s=parseInt(x),o.temporaryPause=!0,o.options.onTypingPaused(o.arrayPos,o),g=g.substring(0,i)+g.substring(i+B),o.toggleBlinking(!0)}}if(x.charAt(0)==="`"){for(;g.substr(i+r).charAt(0)!=="`";){r++;if(i+r>g.length)break}var v=g.substring(0,i),y=g.substring(v.length+1,i+r),z=g.substring(i+r+1);g=v+y+z,r--}o.timeout=setTimeout(function(){o.toggleBlinking(!1),i>=g.length?o.doneTyping(g,i):o.keepTyping(g,i,r),o.temporaryPause&&(o.temporaryPause=!1,o.options.onTypingResumed(o.arrayPos,o))},s)},b)}},{key:"keepTyping",value:function p(g,i,o){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),i+=o;var b=g.substr(0,i);this.replaceText(b),this.typewrite(g,i)}},{key:"doneTyping",value:function p(g,i){var o=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0);if(this.arrayPos===this.strings.length-1){this.complete();if(this.loop===!1||this.curLoop===this.loopCount)return}this.timeout=setTimeout(function(){o.backspace(g,i)},this.backDelay)}},{key:"backspace",value:function p(g,i){var o=this;if(this.pause.status===!0){this.setPauseStatus(g,i,!0);return}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var b=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=h.htmlParser.backSpaceHtmlChars(g,i,o);var r=g.substr(0,i);o.replaceText(r);if(o.smartBackspace){var s=o.strings[o.arrayPos+1];s&&r===s.substr(0,i)?o.stopNum=i:o.stopNum=0}i>o.stopNum?(i--,o.backspace(g,i)):i<=o.stopNum&&(o.arrayPos++,o.arrayPos===o.strings.length?(o.arrayPos=0,o.options.onLastStringBackspaced(),o.shuffleStringsIfNeeded(),o.begin()):o.typewrite(o.strings[o.sequence[o.arrayPos]],i))},b)}},{key:"complete",value:function p(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function p(g,i,o){this.pause.typewrite=o,this.pause.curString=g,this.pause.curStrPos=i}},{key:"toggleBlinking",value:function p(g){if(!this.cursor)return;if(this.pause.status)return;if(this.cursorBlinking===g)return;this.cursorBlinking=g,g?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")}},{key:"humanizer",value:function p(g){return Math.round(Math.random()*g/2)+g}},{key:"shuffleStringsIfNeeded",value:function p(){if(!this.shuffle)return;this.sequence=this.sequence.sort(function(){return Math.random()-.5})}},{key:"initFadeOut",value:function p(){var g=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){g.arrayPos++,g.replaceText(""),g.strings.length>g.arrayPos?g.typewrite(g.strings[g.sequence[g.arrayPos]],0):(g.typewrite(g.strings[0],0),g.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function p(g){this.attr?this.el.setAttribute(this.attr,g):this.isInput?this.el.value=g:this.contentType==="html"?this.el.innerHTML=g:this.el.textContent=g}},{key:"bindFocusEvents",value:function p(){var g=this;if(!this.isInput)return;this.el.addEventListener("focus",function(i){g.stop()}),this.el.addEventListener("blur",function(i){if(g.el.value&&g.el.value.length!==0)return;g.start()})}},{key:"insertCursor",value:function p(){if(!this.showCursor)return;if(this.cursor)return;this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)}}]),m}();k.default=c,l.exports=k.default},function(l,k,j){"use strict";Object.defineProperty(k,"__esModule",{value:!0});var d=Object.assign||function(i){for(var o=1;o<arguments.length;o++){var b=arguments[o];for(var r in b)Object.prototype.hasOwnProperty.call(b,r)&&(i[r]=b[r])}return i},f=function(){function i(o,b){for(var r=0;r<b.length;r++){var s=b[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(o,s.key,s)}}return function(o,b,r){return b&&i(o.prototype,b),r&&i(o,r),o}}();function n(i){return i&&i.__esModule?i:{default:i}}function h(i,o){if(!(i instanceof o))throw new TypeError("Cannot call a class as a function")}var c=j(2),m=n(c),p=function(){function i(){h(this,i)}return f(i,[{key:"load",value:function o(b,r,s){typeof s==="string"?b.el=document.querySelector(s):b.el=s,b.options=d({},m.default,r),b.isInput=b.el.tagName.toLowerCase()==="input",b.attr=b.options.attr,b.bindInputFocusEvents=b.options.bindInputFocusEvents,b.showCursor=b.isInput?!1:b.options.showCursor,b.cursorChar=b.options.cursorChar,b.cursorBlinking=!0,b.elContent=b.attr?b.el.getAttribute(b.attr):b.el.textContent,b.contentType=b.options.contentType,b.typeSpeed=b.options.typeSpeed,b.startDelay=b.options.startDelay,b.backSpeed=b.options.backSpeed,b.smartBackspace=b.options.smartBackspace,b.backDelay=b.options.backDelay,b.fadeOut=b.options.fadeOut,b.fadeOutClass=b.options.fadeOutClass,b.fadeOutDelay=b.options.fadeOutDelay,b.isPaused=!1,b.strings=b.options.strings.map(function(z){return z.trim()}),typeof b.options.stringsElement==="string"?b.stringsElement=document.querySelector(b.options.stringsElement):b.stringsElement=b.options.stringsElement;if(b.stringsElement){b.strings=[],b.stringsElement.style.display="none";var x=Array.prototype.slice.apply(b.stringsElement.children),B=x.length;if(B)for(var v=0;v<B;v+=1){var y=x[v];b.strings.push(y.innerHTML.trim())}}b.strPos=0,b.arrayPos=0,b.stopNum=0,b.loop=b.options.loop,b.loopCount=b.options.loopCount,b.curLoop=0,b.shuffle=b.options.shuffle,b.sequence=[],b.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},b.typingComplete=!1;for(var v in b.strings)b.sequence[v]=v;b.currentElContent=this.getCurrentElContent(b),b.autoInsertCss=b.options.autoInsertCss,this.appendAnimationCss(b)}},{key:"getCurrentElContent",value:function o(b){var r="";return b.attr?r=b.el.getAttribute(b.attr):b.isInput?r=b.el.value:b.contentType==="html"?r=b.el.innerHTML:r=b.el.textContent,r}},{key:"appendAnimationCss",value:function o(b){var r="data-typed-js-css";if(!b.autoInsertCss)return;if(!b.showCursor&&!b.fadeOut)return;if(document.querySelector("["+r+"]"))return;var s=document.createElement("style");s.type="text/css",s.setAttribute(r,!0);var x="";b.showCursor&&(x+=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),b.fadeOut&&(x+=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `);if(s.length===0)return;s.innerHTML=x,document.body.appendChild(s)}}]),i}();k.default=p;var g=new p();k.initializer=g},function(l,k){"use strict";Object.defineProperty(k,"__esModule",{value:!0});var j={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:Infinity,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function d(f){},preStringTyped:function d(f,n){},onStringTyped:function d(f,n){},onLastStringBackspaced:function d(f){},onTypingPaused:function d(f,n){},onTypingResumed:function d(f,n){},onReset:function d(f){},onStop:function d(f,n){},onStart:function d(f,n){},onDestroy:function d(f){}};k.default=j,l.exports=k.default},function(l,k){"use strict";Object.defineProperty(k,"__esModule",{value:!0});var j=function(){function h(c,m){for(var p=0;p<m.length;p++){var g=m[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(c,g.key,g)}}return function(c,m,p){return m&&h(c.prototype,m),p&&h(c,p),c}}();function d(h,c){if(!(h instanceof c))throw new TypeError("Cannot call a class as a function")}var f=function(){function h(){d(this,h)}return j(h,[{key:"typeHtmlChars",value:function c(m,p,g){if(g.contentType!=="html")return p;var i=m.substr(p).charAt(0);if(i==="<"||i==="&"){var o="";for(i==="<"?o=">":o=";";m.substr(p+1).charAt(0)!==o;){p++;if(p+1>m.length)break}p++}return p}},{key:"backSpaceHtmlChars",value:function c(m,p,g){if(g.contentType!=="html")return p;var i=m.substr(p).charAt(0);if(i===">"||i===";"){var o="";for(i===">"?o="<":o="&";m.substr(p-1).charAt(0)!==o;){p--;if(p<0)break}p--}return p}}]),h}();k.default=f;var n=new f();k.htmlParser=n}])})});const Mb=K(Q()),{Dialog:ab,TextField:bb,Button:Oa}=MaterialUI,R=()=>{const[a,e]=Mb.useState(!1),[l,k]=Mb.useState(""),j=Mb.useRef(),d=Mb.useRef(),f=async h=>(e(!0),k(h),await new Promise(c=>{d.current=c})),n=h=>{j.current.value="",d.current(h),e(!1)};return[f,Mb.default.createElement(ab,{open:a,PaperProps:{style:{padding:"15px 20px 5px"}},onEntered:()=>j.current.focus()},Mb.default.createElement(bb,{size:"small",label:l,variant:"outlined",inputRef:j,style:{width:"20em"},onKeyPress:h=>{h.stopPropagation(),h.key==="Enter"&&n(j.current.value)}}),Mb.default.createElement("div",{style:{textAlign:"right"}},Mb.default.createElement(Oa,{size:"small",onClick:()=>n(void 0)},"Cancel"),Mb.default.createElement(Oa,{size:"small",color:"primary",onClick:()=>n(j.current.value)},"OK")))]};const Ob=K(Q()),Pb=K(ta()),Qb=K(ha()),{Button:eb,IconButton:fb,Icon:gb,Grid:ja,List:hb,ListItem:ib,ListItemSecondaryAction:Pa,ListSubheader:jb,TextField:ka}=MaterialUI;var Qa=()=>{const[a,e]=Ob.useState([]),l=Ob.useRef(),k=Ob.useRef(),j=Ob.useRef(),[d,f]=R(),n=async()=>{const p=await Pb.default.post("/api/lst",{gameName:j.current.value});e(p.data)},h=async()=>{const p=await d("Section name:");await Pb.default.post("/api/write",{gameName:j.current.value,sectionName:p||Qb.default(),content:""}),await n(),await c(p)},c=async p=>{k.current.value=(await Pb.default.post("/api/read",{gameName:j.current.value,sectionName:p})).data,l.current.value=p,k.current.focus()},m=async p=>{await Pb.default.post("/api/del",{gameName:j.current.value,sectionName:p}),await n()};return Ob.default.createElement(Ob.default.Fragment,null,Ob.default.createElement(ja,{container:!0,spacing:3,style:{width:"100%"}},Ob.default.createElement(ja,{item:!0,xs:3},Ob.default.createElement(hb,null,Ob.default.createElement(jb,null,"Sections",Ob.default.createElement(Pa,null,Ob.default.createElement(eb,{variant:"contained",disableElevation:!0,onClick:h},"Add"))),a.map(p=>Ob.default.createElement(ib,{button:!0,key:p,onClick:()=>c(p)},p,Ob.default.createElement(Pa,null,Ob.default.createElement(fb,{color:"secondary",onClick:()=>m(p)},Ob.default.createElement(gb,null,"delete"))))))),Ob.default.createElement(ja,{item:!0,xs:9},Ob.default.createElement("div",{style:{width:"100%",padding:10}},Ob.default.createElement(ka,{label:"Game name",InputLabelProps:{shrink:!0},inputRef:j,style:{marginRight:5},onKeyDown:p=>{p.key==="Enter"&&n()}}),Ob.default.createElement(ka,{label:"Section name",InputLabelProps:{shrink:!0},inputRef:l,onKeyDown:p=>{p.key==="Enter"&&c(l.current.value)}})),Ob.default.createElement(ka,{multiline:!0,variant:"filled",rows:"30",label:"Content",InputLabelProps:{shrink:!0},inputRef:k,style:{width:"100%"},inputProps:{style:{fontFamily:"monospace"}},onBlur:()=>{Pb.default.post("/api/write",{gameName:j.current.value,sectionName:l.current.value,content:k.current.value})}}))),f)};const hc=K(Q()),ic=K(La()),{IconButton:Ya,Icon:Za,List:Eb,ListItem:Fb,ListItemSecondaryAction:Gb,Paper:Hb}=MaterialUI,qa=localforage.createInstance({name:"saves"});var Sa=a=>{const[e,l]=hc.useState([]),k=async()=>{const j=[];for(const d of await qa.keys())j.push(d);l(j)};return hc.useEffect(()=>{k()},[]),hc.default.createElement("div",{style:{margin:10},onTouchMove:j=>j.nativeEvent.stopPropagation()},hc.default.createElement("h1",null,"UI先随便凑合一下"),hc.default.createElement(Ya,{onClick:async()=>{await qa.setItem(prompt()||ic.default(),void 0),k()}},hc.default.createElement(Za,null,"add")),hc.default.createElement(Eb,null,e.map(j=>hc.default.createElement(Fb,{component:Hb,elevation:4,onClick:()=>a.onSelect(j),button:!0,key:j,style:{marginBottom:10,height:"10em"}},j,hc.default.createElement(Gb,null,hc.default.createElement(Ya,{onClick:async()=>{await qa.removeItem(j),k()}},hc.default.createElement(Za,null,"delete")))))))};const V=async(a,e)=>await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});V.text=async(a,e)=>(await V(a,e)).text();V.json=async(a,e)=>(await V(a,e)).json();var Ra=V;class la{constructor(){this.text="";this.curText="";this.backgroundImageChanged=!1}get backgroundImage(){return this._backgroundImage||"/transparent.png"}set backgroundImage(a){this._backgroundImage=a,this.backgroundImageChanged=!0}applyText(a){this.text+=this.curText,this.curText=a}}const W={},H={};H["\\char"]=async(a,e)=>(e.length>1?a.state.char=e[1]:a.state.char=void 0,await H["\\clear"](a,[]),!1);H["\\background-image"]=async(a,e)=>(a.state.backgroundImage=e[1],!1);H["\\newline"]=async(a,e)=>(a.state.curText+="<br/>",!1);H["\\clear"]=async(a,e)=>(a.state.text=a.state.curText="",Boolean(e[1]));W["\\text"]=1;H["\\text"]=async(a,e)=>(a.state.applyText(e[1]),!0);H["\\goto"]=async(a,e)=>(await a.selectSection(e[1]),!1);H["\\query"]=async(a,e)=>(a.state.qid=e[1],a.state.qry=await a.loadSection(e[1]),!0);H["\\options"]=async(a,e)=>(a.state.qid=e[1],a.state.opts=(await a.loadSection(e[1])).split(`
`),!0);W["\\script"]=1;H["\\script"]=async(a,e)=>(void new Function(e[1]).call(a),!1);H["\\beginscript"]=async(a,e)=>{const l=[];let k;for(;(k=a.nextLine())!=="\\endscript";)l.push(k);return void new Function(l.join(`
`)).call(a),!1};class X{constructor(a){this.cnt=0;this.cnt1=0;this.lst=[];this.lst1=[];this.ans={};this.data={};this.gameName=a,this.state=new la()}static from(a){return Object.setPrototypeOf(a,X.prototype),a.hasOwnProperty("state")?Object.setPrototypeOf(a.state,la.prototype):a.state=new la(),a}async loadSection(a){return await Ra.text("/api/read",{gameName:this.gameName,sectionName:a})}async selectSection(a){this.lst=(await this.loadSection(a)).split(`
`),this.lst1=[],this.cnt=this.cnt1=0}addLine(a){this.lst1.push(a)}nextLine(){if(this.cnt1<this.lst1.length)return this.lst1[this.cnt1++];if(this.cnt<this.lst.length)return this.lst[this.cnt++];throw"No more lines."}async next(){let a=!1;for(;!a;){const e=this.nextLine();if(e.startsWith("\\")){let l=e.split(" ");if(l[0]in H){if(l[0]in W){const k=W[l[0]];l=[...l.slice(0,k),l.slice(k).join(" ")]}a=await H[l[0]](this,l.filter(Boolean))}else throw`Unexpected token ${l[0]}`}else if(e==="")a=await H["\\newline"](this,[]);else{this.state.applyText(e);break}}}}const Vb=K(Q()),Yb=K(Ka()),Zb=K(ha()),{IconButton:$b,Fab:ma,Icon:na,Card:ob,Divider:pb,Backdrop:qb,Dialog:rb,Fade:Ta,List:Ua,ListItem:oa,Drawer:sb}=MaterialUI,tb=({src:a,style:e,...l})=>Vb.default.createElement("div",{style:Object.assign({position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundPosition:"center",backgroundSize:"cover",backgroundImage:`url("${a}")`},e),...l}),ub=500,vb={enter:1500,exit:500},Va=localforage.createInstance({name:"saves"});var Wa=a=>{const e=a.match.params.gameName,[l,k]=Vb.useState(!1),[j,d]=Vb.useState([]),[f,n]=Vb.useState(""),[h,c]=Vb.useState(!0),[m,p]=Vb.useState(),[g,i]=Vb.useState(""),[o,b]=Vb.useState(!1),[r,s]=Vb.useState(!1),[x,B]=Vb.useState(!1),v=Vb.useRef();v.current||(v.current=new X(e));const y=v.current,z=Vb.useRef(),P=Vb.useRef(),N=Vb.useRef(!1),[q,I]=R(),D=()=>{n(/Android|iPhone/i.test(navigator.userAgent)?"8.5em":"12em")};Vb.useEffect(()=>(void(async()=>{await y.selectSection("start"),c(!1),D(),addEventListener("resize",D),addEventListener("touchmove",w=>{w.preventDefault()},{passive:!1}),addEventListener("keydown",O),document.querySelectorAll("button").forEach(w=>{w.addEventListener("mousedown",A=>A.preventDefault(),{passive:!1})}),S()})(),()=>{removeEventListener("keydown",O)}),[]);const O=Vb.useCallback(w=>{switch(w.key){case"Escape":s(!0);break;case" ":S();break;default:break}},[]),C=()=>{const w=v.current;z.current.destroy(),z.current=void 0,i(w.state.text+w.state.curText)},F=async w=>{const A=v.current;if(A.state.backgroundImageChanged||w){A.state.backgroundImageChanged=!1;const sa=[A.state.backgroundImage,Zb.default()];j.push(sa),j.length>10&&j.splice(0,5),d(j)}if(A.state.qry){N.current=!0;const sa=await q(A.state.qry);return A.ans[A.state.qid]=sa,A.state.qry=void 0,setTimeout(S),N.current=!1,!1}else{if(A.state.opts)return N.current=!0,b(!0),!1;p(A.state.char),i(A.state.text),z.current=new Yb.default("#type",{strings:[A.state.curText],typeSpeed:27,onComplete(){C()}})}return!0},S=async w=>{const A=v.current;if(z.current)C();else if(!N.current){w||await A.next();if(!await F())return!1}return!0},$a=async w=>{w=w||Infinity;for(let A=0;A<w&&await S();A++);},Kb=async(w,A)=>{y.ans[y.state.qid]=[w,A],y.state.opts=void 0,b(!1),N.current=!1,await S()},Lb=async w=>{P.current==="load"?(v.current=X.from(await Va.getItem(w)),z.current&&(z.current.destroy(),z.current=void 0),B(!1),s(!1),await F(!0)):P.current==="save"&&await Va.setItem(w,y)};return Vb.default.createElement(Vb.default.Fragment,null,j.map(w=>Vb.default.createElement(Ta,{key:w[1],in:!0,timeout:{enter:ub,exit:0}},Vb.default.createElement(tb,{src:`/res/${e}${w[0]}`}))),Vb.default.createElement(Ta,{in:o,timeout:vb},Vb.default.createElement(qb,{open:o,style:{zIndex:5,backgroundColor:"rgba(0,0,0,0.7)"}},Vb.default.createElement("div",{style:{padding:"10%",color:"white",width:"100%",height:"100%"}},Vb.default.createElement(Ua,{style:{width:"70%"}},y.state.opts&&y.state.opts.map((w,A)=>Vb.default.createElement(oa,{className:"options-item",key:A,button:!0,onClick:()=>Kb(A,w)},w)))))),Vb.default.createElement("div",{style:{position:"fixed",right:0,top:0,margin:10}},Vb.default.createElement(ma,{onClick:()=>$a(),size:"small",style:{marginRight:10}},Vb.default.createElement(na,null,"directions_run")),Vb.default.createElement(ma,{onClick:()=>$a(15),size:"small"},Vb.default.createElement(na,null,"directions_walk"))),Vb.default.createElement(ma,{size:"small",color:"primary",onClick:()=>s(!0),style:{position:"fixed",left:0,top:0,margin:10,zIndex:6}},Vb.default.createElement(na,null,"dehaze")),Vb.default.createElement(sb,{open:r,onClose:()=>s(!1)},Vb.default.createElement("div",{style:{width:document.documentElement.clientWidth*.35,padding:10}},Vb.default.createElement(Ua,null,Vb.default.createElement(oa,{button:!0,onClick:()=>{B(!0),P.current="load"}},"Load"),Vb.default.createElement(oa,{button:!0,onClick:()=>{B(!0),P.current="save"}},"Save")))),Vb.default.createElement(rb,{open:x,onClose:()=>B(!1),maxWidth:"md",fullWidth:!0,PaperProps:{style:{height:"80%"}}},Vb.default.createElement(Sa,{onSelect:Lb})),Vb.default.createElement("div",{style:{width:"100%",height:f,padding:10,display:"flex",justifyContent:"center",position:"fixed",left:0,bottom:0,userSelect:"none"}},Vb.default.createElement(ob,{elevation:4,style:{width:"80%",backgroundColor:m?"#EEE":"#AAA",transition:"background-color 1s ease",padding:10,opacity:.8},onClick:()=>S()},m&&Vb.default.createElement("div",{style:{width:"30%"}},Vb.default.createElement("span",{style:{color:"#888"}},m),Vb.default.createElement(pb,null)),Vb.default.createElement("div",{style:{padding:"0 10px"}},Vb.default.createElement("span",{dangerouslySetInnerHTML:{__html:g}}),Vb.default.createElement("span",{id:"type"})))),I)};const bc=K(Q()),{HashRouter:wb,Switch:xb,Route:pa,Link:yb,useHistory:zb}=ReactRouterDOM,{Button:Xa}=MaterialUI,Ab=()=>{const a={width:"30%",marginBottom:10},e=zb(),[l,k]=R(),j=async()=>{const d=await l("Game name:");d&&e.push(`/game/${d}`)};return bc.default.createElement(bc.default.Fragment,null,bc.default.createElement("h1",null,"UI随便吧，反正也没有人会用"),bc.default.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},bc.default.createElement(Xa,{style:a,variant:"contained",onClick:j},"Start"),bc.default.createElement(yb,{style:a,variant:"contained",to:"/editor",component:Xa},"Editor")),k)};ReactDOM.render(bc.default.createElement(wb,null,bc.default.createElement(xb,null,bc.default.createElement(pa,{exact:!0,path:"/",component:Ab}),bc.default.createElement(pa,{path:"/game/:gameName",component:Wa}),bc.default.createElement(pa,{path:"/editor",component:Qa}))),document.querySelector("#app"));})();
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.9
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */