!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=scene},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";n.r(e);var i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const o=new WeakMap,s=t=>"function"==typeof t&&o.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},l={},c={},u=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${u}--\x3e`,h=new RegExp(`${u}|${d}`),p="$lit$";class f{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],o=document.createTreeWalker(e.content,133,null,!1);let s=0,r=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=o.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)m(e[t].name,p)&&i++;for(;i-- >0;){const e=l[a],n=y.exec(e)[2],i=n.toLowerCase()+p,o=t.getAttribute(i);t.removeAttribute(i);const s=o.split(h);this.parts.push({type:"attribute",index:r,name:n,strings:s}),a+=s.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(u)>=0){const i=t.parentNode,o=e.split(h),s=o.length-1;for(let e=0;e<s;e++){let n,s=o[e];if(""===s)n=g();else{const t=y.exec(s);null!==t&&m(t[2],p)&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-p.length)+t[3]),n=document.createTextNode(s)}i.insertBefore(n,t),this.parts.push({type:"node",index:++r})}""===o[s]?(i.insertBefore(g(),t),n.push(t)):t.data=o[s],a+=s}}else if(8===t.nodeType)if(t.data===u){const e=t.parentNode;null!==t.previousSibling&&r!==s||(r++,e.insertBefore(g(),t)),s=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(n.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(u,e+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const m=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},v=t=>-1!==t.index,g=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let o,s=0,a=0,l=i.nextNode();for(;s<n.length;)if(o=n[s],v(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class b{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const s=y.exec(t);e+=null===s?t+(n?u:d):t.substr(0,s.index)+s[1]+s[2]+p+s[3]+u}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const x=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class N{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(x(t)||!w(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===l||x(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=l,t(this)}this.value!==l&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=l,t(this)}const t=this.__pendingValue;t!==l&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===c?(this.value=c,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const n=new _(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const o of t)void 0===(n=e[i])&&(n=new S(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(o),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){a(this.startNode.parentNode,t.nextSibling,this.endNode)}}class V{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=l,t(this)}if(this.__pendingValue===l)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=l}}class T extends N{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends k{}let O=!1;try{const t={get capture(){return O=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class P{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=l,t(this)}if(this.__pendingValue===l)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=l}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(O?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const j=new class{handleAttributeExpressions(t,e,n,i){const o=e[0];return"."===o?new T(t,e.slice(1),n).parts:"@"===o?[new P(t,e.slice(1),i.eventContext)]:"?"===o?[new V(t,e.slice(1),n)]:new N(t,e,n).parts}handleTextExpression(t){return new S(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function C(t){let e=M.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},M.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(u);return void 0===(n=e.keyString.get(i))&&(n=new f(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const M=new Map,L=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1");const z=(t,...e)=>new b(t,e,"html",j);function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function F(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t,e,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function $(t){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function W(){var t=q(['\n            <div class="ticker__item">',"</div>\n          "]);return W=function(){return t},t}function D(){var t=q(["\n  <style>\n    * {\n      box-sizing: border-box;\n    }\n\n    @-webkit-keyframes ticker {\n      from {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n        visibility: visible;\n      }\n\n      to {\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n      }\n    }\n\n    @keyframes ticker {\n      from {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n        visibility: visible;\n      }\n\n      to {\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n      }\n    }\n\n    .ticker-wrap {\n      position: fixed;\n      bottom: 0;\n      width: 100%;\n      overflow: hidden;\n      height: 4rem;\n      background-color: rgba(#000, 0.9);\n      padding-left: ",";\n      box-sizing: content-box;\n      font-family: ",";\n      /* direction: ","; */\n    }\n\n    .ticker-wrap .ticker {\n      display: inline-block;\n      min-width: 100%;\n      text-align: ",";\n      height: 4rem;\n      line-height: 4rem;\n      white-space: nowrap;\n      padding-right: ",";\n      box-sizing: content-box;\n\n      -webkit-animation-iteration-count: infinite;\n      animation-iteration-count: infinite;\n      -webkit-animation-timing-function: linear;\n      animation-timing-function: linear;\n      -webkit-animation-name: ",";\n      animation-name: ",";\n      -webkit-animation-duration: ",";\n      animation-duration: ",";\n      animation-direction: ",";\n    }\n\n    .ticker-wrap .ticker__item {\n      display: inline-block;\n      font-size: ",";\n      color: ",';\n    }\n\n    body {\n      padding-bottom: 5rem;\n    }\n    h1,\n    h2,\n    p {\n      padding: 0 5%;\n    }\n  </style>\n\n  <div class="ticker-wrap">\n    <div class="ticker">\n      ',"\n    </div>\n  </div>\n"]);return D=function(){return t},t}function q(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var G={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"select",label:"direction",name:"direction",property:{options:[{display:"horizontal",value:"horizontal"},{display:"vertical",value:"vertical"}]}},{type:"checkbox",label:"reverse",name:"reverse"},{type:"select",label:"animation-start-position",name:"animationStartPosition",property:{options:[{display:"start",value:"start"},{display:"end",value:"end"}]}},{type:"number",label:"duration",name:"duration",property:{placeholder:"seconds"}}]};var J=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,$(e).apply(this,arguments))}var n,o,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(e,i["HTMLOverlayElement"]),n=e,(o=[{key:"createElement",value:function(){I($(e.prototype),"createElement",this).call(this),this.setState("text","#{data}");var t=this.bounds,n=t.width,i=t.height,o=this.element;o.style.overflow="hidden",o.width=n,o.height=i}},{key:"setElementProperties",value:function(t){var e=this.bounds,n=e.width,i=e.height;try{t.width=n,t.height=i,this.updateAndRender()}catch(t){error(t)}}},{key:"updateAndRender",value:function(){var t=this.state,e=(t.direction,t.reverse),n=t.animationStartPosition,i=void 0===n?"end":n,o=t.textAlign,s=t.fontColor,r=void 0===s?"black":s,l=t.fontSize,c=void 0===l?13:l,u=t.font,d=t.duration,h=void 0===d?30:d,p=this.textSubstitutor().trim().split("\n"),f=this.element,m=e,v=this.isTextOverflowed;((t,e,n)=>{let i=L.get(e);void 0===i&&(a(e,e.firstChild),L.set(e,i=new S(Object.assign({templateFactory:C},n))),i.appendInto(e)),i.setValue(t),i.commit()})(function(t){var e=t.duration,n=t.fontColor,i=t.fontSize,o=t.fontFamily,s=t.textAlign,r=t.isReverse,a=t.isTextOverflowed,l=t.animationStartPosition,c=t.textLines;return z(D(),"start"==l?0:"100%",o,r?"rtl":"ltr",s,"start"==l?0:"100%",a?"ticker":"none",a?"ticker":"none",e,e,r?"reverse":"normal",i,n,c.map(function(t){return z(W(),t)}))}({duration:"".concat(h,"s"),fontColor:r,fontFamily:u,fontSize:"".concat(c,"px"),textAlign:o,isReverse:m,isTextOverflowed:v,animationStartPosition:i,textLines:p}),f)}},{key:"dispose",value:function(){I($(e.prototype),"dispose",this).call(this)}},{key:"startAnimation",value:function(){this.app.isViewMode}},{key:"onchange",value:function(t,n){I($(e.prototype),"onchange",this).call(this,t,n),console.log(t)}},{key:"nature",get:function(){return G}},{key:"hasTextProperty",get:function(){return!0}},{key:"tagName",get:function(){return"div"}},{key:"isTextOverflowed",get:function(){var t=document.createElement("span");t.style.font=this.font,t.style.position="fixed",t.style.left="-100%",t.style.visibility="none",t.textContent=this.textSubstitutor(),document.body.appendChild(t);var e=t.getBoundingClientRect(),n=this.element.width<e.width;return document.body.removeChild(t),t=null,n}}])&&H(n.prototype,o),s&&H(n,s),e}();i.Component.register("news-ticker",J),n.d(e,"NewsTicker",function(){return J})}]);
//# sourceMappingURL=things-scene-news-ticker-ie.js.map