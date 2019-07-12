!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@hatiolab/things-scene")):"function"==typeof define&&define.amd?define(["exports","@hatiolab/things-scene"],e):e((t=t||self)["things-scene-news-ticker"]={},t.scene)}(this,function(t,e){"use strict";const i=new WeakMap,n=t=>"function"==typeof t&&i.has(t),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},r={},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${l}--\x3e`,h=new RegExp(`${l}|${d}`),c="$lit$";class u{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],s=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:d,values:{length:u}}=t;for(;a<u;){const t=s.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)p(e[t].name,c)&&n++;for(;n-- >0;){const e=d[a],i=f.exec(e)[2],n=i.toLowerCase()+c,s=t.getAttribute(n);t.removeAttribute(n);const o=s.split(h);this.parts.push({type:"attribute",index:r,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(l)>=0){const n=t.parentNode,s=e.split(h),o=s.length-1;for(let e=0;e<o;e++){let i,o=s[e];if(""===o)i=g();else{const t=f.exec(o);null!==t&&p(t[2],c)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-c.length)+t[3]),i=document.createTextNode(o)}n.insertBefore(i,t),this.parts.push({type:"node",index:++r})}""===s[o]?(n.insertBefore(g(),t),i.push(t)):t.data=s[o],a+=o}}else if(8===t.nodeType)if(t.data===l){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(g(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(i.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(l,e+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const p=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},m=t=>-1!==t.index,g=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,l=n.nextNode();for(;r<i.length;)if(o=i[r],m(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}class _{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],s=t.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===t.indexOf("--\x3e",s+1);const o=f.exec(t);e+=null===o?t+(i?l:d):t.substr(0,o.index)+o[1]+o[2]+c+o[3]+l}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const x=t=>null===t||!("object"==typeof t||"function"==typeof t),y=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class b{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(x(t)||!y(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r||x(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=r,t(this)}this.value!==r&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}const t=this.__pendingValue;t!==r&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof _?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):y(t)?this.__commitIterable(t):t===a?(this.value=a,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)void 0===(i=e[n])&&(i=new N(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class k{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r}}class V extends b{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends w{}let T=!1;try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class A{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=S(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const S=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const $=new class{handleAttributeExpressions(t,e,i,n){const s=e[0];return"."===s?new V(t,e.slice(1),i).parts:"@"===s?[new A(t,e.slice(1),n.eventContext)]:"?"===s?[new k(t,e.slice(1),i)]:new b(t,e,i).parts}handleTextExpression(t){return new N(t)}};function C(t){let e=P.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},P.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(l);return void 0===(i=e.keyString.get(n))&&(i=new u(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const P=new Map,M=new WeakMap,L=(t,e,i)=>{let n=M.get(e);void 0===n&&(o(e,e.firstChild),M.set(e,n=new N(Object.assign({templateFactory:C},i))),n.appendInto(e)),n.setValue(t),n.commit()};(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1");const z=(t,...e)=>new _(t,e,"html",$),O={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"select",label:"direction",name:"direction",property:{options:[{display:"horizontal",value:"horizontal"},{display:"vertical",value:"vertical"}]}},{type:"checkbox",label:"reverse",name:"reverse"},{type:"select",label:"animation-start-position",name:"animationStartPosition",property:{options:[{display:"start",value:"start"},{display:"end",value:"end"}]}},{type:"number",label:"duration",name:"duration",property:{placeholder:"seconds"}}]},H=({duration:t,fontColor:e,fontSize:i,fontFamily:n,textAlign:s,isReverse:o,isTextOverflowed:r,animationStartPosition:a,textLines:l})=>z`
  <style>
    * {
      box-sizing: border-box;
    }

    @-webkit-keyframes ticker {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }

    @keyframes ticker {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
      }

      to {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }

    .ticker-wrap {
      position: fixed;
      bottom: 0;
      width: 100%;
      overflow: hidden;
      height: 4rem;
      background-color: rgba(#000, 0.9);
      padding-left: ${"start"==a?0:"100%"};
      box-sizing: content-box;
      font-family: ${n};
      /* direction: ${o?"rtl":"ltr"}; */
    }

    .ticker-wrap .ticker {
      display: inline-block;
      min-width: 100%;
      text-align: ${s};
      height: 4rem;
      line-height: 4rem;
      white-space: nowrap;
      padding-right: ${"start"==a?0:"100%"};
      box-sizing: content-box;

      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-name: ${r?"ticker":"none"};
      animation-name: ${r?"ticker":"none"};
      -webkit-animation-duration: ${t};
      animation-duration: ${t};
      animation-direction: ${o?"reverse":"normal"};
    }

    .ticker-wrap .ticker__item {
      display: inline-block;
      font-size: ${i};
      color: ${e};
    }

    body {
      padding-bottom: 5rem;
    }
    h1,
    h2,
    p {
      padding: 0 5%;
    }
  </style>

  <div class="ticker-wrap">
    <div class="ticker">
      ${l.map(t=>z`
            <div class="ticker__item">${t}</div>
          `)}
    </div>
  </div>
`;class F extends e.HTMLOverlayElement{get nature(){return O}get hasTextProperty(){return!0}get tagName(){return"div"}createElement(){super.createElement(),this.setState("text","#{data}");var{width:t,height:e}=this.bounds,i=this.element;i.style.overflow="hidden",i.width=t,i.height=e}setElementProperties(t){var{width:e,height:i}=this.bounds;try{t.width=e,t.height=i,this.updateAndRender()}catch(t){error(t)}}get isTextOverflowed(){var t=document.createElement("span");t.style.font=this.font,t.style.position="fixed",t.style.left="-100%",t.style.visibility="none",t.textContent=this.textSubstitutor(),document.body.appendChild(t);var e=t.getBoundingClientRect(),i=this.element.width<e.width;return document.body.removeChild(t),t=null,i}updateAndRender(){var{direction:t="horizontal",reverse:e,animationStartPosition:i="end",textAlign:n,fontColor:s="black",fontSize:o=13,font:r,duration:a=30}=this.state,l=this.textSubstitutor().trim().split("\n"),d=this.element,h=e,c=this.isTextOverflowed;L(H({duration:`${a}s`,fontColor:s,fontFamily:r,fontSize:`${o}px`,textAlign:n,isReverse:h,isTextOverflowed:c,animationStartPosition:i,textLines:l}),d)}dispose(){super.dispose()}startAnimation(){this.app.isViewMode}onchange(t,e){super.onchange(t,e),console.log(t)}}e.Component.register("news-ticker",F),t.NewsTicker=F,Object.defineProperty(t,"__esModule",{value:!0})});
