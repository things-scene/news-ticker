!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@hatiolab/things-scene"),require("lit-element"),require("web-animations-js")):"function"==typeof define&&define.amd?define(["exports","@hatiolab/things-scene","lit-element","web-animations-js"],e):e((t=t||self)["things-scene-news-ticker"]={},t.scene,t.litElement)}(this,function(t,e,i){"use strict";class n extends i.LitElement{static get is(){return"things-news-ticker-horizontal"}static get styles(){return[i.css`
        :host * {
          box-sizing: border-box;
        }

        :host .ticker-wrap {
          position: absolute;
          bottom: 0;
          width: 100%;
          overflow: hidden;
          height: 100%;
          background-color: rgba(#000, 0.9);
          padding-left: var(--things-news-ticker-wrapper-padding-left);
          box-sizing: content-box;
          font-family: var(--things-news-ticker-font-family);
        }

        :host .ticker-wrap .ticker {
          display: inline-block;
          min-width: 100%;
          text-align: var(--things-news-ticker-text-align);
          height: 4rem;
          line-height: 4rem;
          white-space: nowrap;
          padding-right: var(--things-news-ticker-container-padding-right);
          box-sizing: content-box;
        }

        :host .ticker-wrap .ticker__item {
          display: inline-block;
          font-size: var(--things-news-ticker-font-size);
          color: var(--things-news-ticker-font-color);
        }

        :host body {
          padding-bottom: 5rem;
        }
        :host h1,
        :host h2,
        :host p {
          padding: 0 5%;
        }
      `]}static get properties(){return{width:Number,height:Number,fontFamily:String,fontColor:String,fontSize:String,textAlign:String,isReverse:Boolean,animationStartPosition:String,isTextOverflowed:Boolean,duration:Number,textData:String}}get currentAnimation(){return this._anim}set currentAnimation(t){this._anim=t}get animationTargetEl(){return this.renderRoot.querySelector(".ticker-wrap .ticker")}get textLines(){return this.textData.split("\n")}render(){return this.style.setProperty("--things-news-ticker-wrapper-padding-left",this.isTextOverflowed?"100%":0),this.style.setProperty("--things-news-ticker-container-padding-right",this.isTextOverflowed?"100%":0),i.html`
      <div class="ticker-wrap">
        <div class="ticker">
          ${this.textLines.map(t=>i.html`
                <div class="ticker__item">${t}</div>
              `)}
        </div>
      </div>
    `}updated(t){(t.has("textData")||t.has("duration")||t.has("isReverse")||t.has("isTextOverflowed"))&&this.startAnimation()}startAnimation(){this.stopAnimation(),this.isTextOverflowed&&(this.currentAnimation=this.animationTargetEl.animate([{transform:"translate3d(0, 0, 0)",visibility:"hidden"},{transform:"translate3d(-100%, 0, 0)",visibility:"visible"}],{duration:this.duration,iterations:1/0,direction:this.isReverse?"reverse":"normal"}))}stopAnimation(){this.currentAnimation&&this.currentAnimation.cancel()}}customElements.define(n.is,n);const r="cubic-bezier(1, 0, 0.5, 0)";class s extends i.LitElement{static get is(){return"things-news-ticker-vertical"}static get styles(){return[i.css`
        :host {
          display: block;
          overflow: hidden;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
        }
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          white-space: nowrap;
        }

        #news_ticker {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        li {
          display: flex;
          height: 100%;
          align-items: center;
          overflow: hidden;
          text-align: var(--things-news-ticker-text-align, left);
        }
        #news_ticker a {
          width: 100%;
          line-height: normal;
          color: var(--things-news-ticker-font-color, black);
          text-decoration: none;
          font-size: var(--things-news-ticker-font-size, 13px);
        }
      `]}static get properties(){return{width:Number,height:Number,fontFamily:String,fontColor:String,fontSize:String,textAlign:String,isReverse:Boolean,animationStartPosition:String,isTextOverflowed:Boolean,duration:Number,textData:String}}get currentAnimation(){return this._anim}set currentAnimation(t){this._anim=t}get animationTargetEl(){return this.renderRoot.querySelector("#news_ticker > ul")}get textLines(){return this.textData.split("\n")}render(){return i.html`
      <div id="news_ticker">
        <ul>
          ${this.textLines.map(t=>i.html`
              <li><a href="#">${t}</a></li>
            `)}
        </ul>
      </div>
    `}updated(t){(t.has("textData")||t.has("duration")||t.has("isReverse"))&&this.startAnimation()}startAnimation(){this.stopAnimation();var t=this.createAnimationFrames();this.currentAnimation=this.animationTargetEl.animate(t,{duration:this.textLines.length*this.duration,iterations:1/0,direction:this.isReverse?"reverse":"normal"})}stopAnimation(){this.currentAnimation&&this.currentAnimation.cancel()}createAnimationFrames(){var t=this.textLines.length,e=this.textLines.map((e,i)=>({transform:`translateY(${-i/t*100}%)`,offset:1/t*i,easing:r}));return e.push({transform:"translateY(0)",offset:1,easing:r}),e}}customElements.define(s.is,s);class o extends i.LitElement{static get is(){return"things-news-ticker"}static get properties(){return{width:Number,height:Number,textData:String,fontFamily:String,fontColor:String,fontSize:String,textAlign:String,isReverse:Boolean,animationStartPosition:String,isTextOverflowed:Boolean,direction:String,duration:Number}}render(){return this.style.setProperty("--things-news-ticker-font-family",this.fontFamily),this.style.setProperty("--things-news-ticker-font-size",this.fontSize),this.style.setProperty("--things-news-ticker-font-color",this.fontColor),this.style.setProperty("--things-news-ticker-text-align",this.textAlign),i.html`
      ${"vertical"==this.direction?i.html`
            <things-news-ticker-vertical
              .direction=${this.direction}
              .duration=${this.duration}
              .fontColor=${this.fontColor}
              .fontFamily=${this.font}
              .fontSize=${this.fontSize}
              .textAlign=${this.textAlign}
              .isReverse=${this.isReverse}
              .isTextOverflowed=${this.isTextOverflowed}
              .animationStartPosition=${this.animationStartPosition}
              .textData=${this.textData}
            ></things-news-ticker-vertical>
          `:i.html`
            <things-news-ticker-horizontal
              .direction=${this.direction}
              .duration=${this.duration}
              .fontColor=${this.fontColor}
              .fontFamily=${this.font}
              .fontSize=${this.fontSize}
              .textAlign=${this.textAlign}
              .isReverse=${this.isReverse}
              .isTextOverflowed=${this.isTextOverflowed}
              .animationStartPosition=${this.animationStartPosition}
              .textData=${this.textData}
            ></things-news-ticker-horizontal>
          `}
    `}}customElements.define(o.is,o);const a={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"select",label:"direction",name:"direction",property:{options:[{display:"horizontal",value:"horizontal"},{display:"vertical",value:"vertical"}]}},{type:"checkbox",label:"reverse",name:"reverse"},{type:"number",label:"duration",name:"duration",property:{placeholder:"seconds"}}]};class l extends e.HTMLOverlayElement{get nature(){return a}get hasTextProperty(){return!0}get tagName(){return"things-news-ticker"}createElement(){super.createElement(),this.setState("text","#{data}");var{width:t,height:e}=this.bounds,i=this.element;i.style.overflow="hidden",i.width=t,i.height=e}setElementProperties(t){var{width:e,height:i}=this.bounds;try{t.width=e,t.height=i,this.updateAndRender()}catch(t){error(t)}}get isTextOverflowed(){var t=document.createElement("span");t.style.font=this.font,t.style.position="fixed",t.style.left="-100%",t.style.visibility="none",t.textContent=this.textSubstitutor(),document.body.appendChild(t);var e=t.getBoundingClientRect(),i=this.element.width<e.width;return document.body.removeChild(t),t=null,i}updateAndRender(){var{direction:t="horizontal",reverse:e,animationStartPosition:i="end",textAlign:n,fontColor:r="black",fontSize:s=13,font:o,duration:a=30}=this.state,l=this.textSubstitutor().trim(),h=e,d=this.isTextOverflowed;this.element.direction=t,this.element.duration=1e3*a,this.element.fontColor=r,this.element.fontFamily=o,this.element.fontSize=`${s}px`,this.element.textAlign=n,this.element.isReverse=h,this.element.isTextOverflowed=d,this.element.animationStartPosition=i,this.element.textData=l}dispose(){super.dispose()}startAnimation(){this.app.isViewMode}}e.Component.register("news-ticker",l),t.NewsTicker=l,Object.defineProperty(t,"__esModule",{value:!0})});
