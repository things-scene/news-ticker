/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
import { css, html, LitElement } from 'lit-element'
import 'web-animations-js'

const CUBIC_BEZIER_EASING = 'cubic-bezier(1, 0, 0.5, 0)'

export default class ThingsNewsTickerVertical extends LitElement {
  static get is() {
    return 'things-news-ticker-vertical'
  }

  static get styles() {
    return [
      css`
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
      `
    ]
  }

  static get properties() {
    return {
      width: Number,
      height: Number,
      fontFamily: String,
      fontColor: String,
      fontSize: String,
      textAlign: String,
      isReverse: Boolean,
      animationStartPosition: String,
      isTextOverflowed: Boolean,
      duration: Number,
      textData: String
    }
  }

  get currentAnimation() {
    return this._anim
  }

  set currentAnimation(anim) {
    this._anim = anim
  }

  get animationTargetEl() {
    return this.renderRoot.querySelector('#news_ticker > ul')
  }

  get textLines() {
    return this.textData.split('\n')
  }

  render() {
    return html`
      <div id="news_ticker">
        <ul>
          ${this.textLines.map(
            t => html`
              <li><a href="#">${t}</a></li>
            `
          )}
        </ul>
      </div>
    `
  }

  updated(changed) {
    if (
      changed.has('textData') ||
      changed.has('duration') ||
      changed.has('isReverse')
    ) {
      this.startAnimation()
    }
  }

  startAnimation() {
    this.stopAnimation()

    var frames = this.createAnimationFrames()
    this.currentAnimation = this.animationTargetEl.animate(frames, {
      duration: this.textLines.length * this.duration,
      iterations: Infinity,
      direction: this.isReverse ? 'reverse' : 'normal'
    })
  }

  stopAnimation() {
    if (this.currentAnimation) this.currentAnimation.cancel()
  }

  createAnimationFrames() {
    var textLinesLength = this.textLines.length
    var frames = this.textLines.map((t, i) => {
      return {
        transform: `translateY(${-(i / textLinesLength) * 100}%)`,
        offset: (1 / textLinesLength) * i,
        easing: CUBIC_BEZIER_EASING
      }
    })

    frames.push({
      transform: `translateY(0)`,
      offset: 1,
      easing: CUBIC_BEZIER_EASING
    })

    return frames
  }
}

customElements.define(ThingsNewsTickerVertical.is, ThingsNewsTickerVertical)
