/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
import { css, html, LitElement } from 'lit-element'

export default class ThingsNewsTickerHorizontal extends LitElement {
  static get is() {
    return 'things-news-ticker-horizontal'
  }

  static get styles() {
    return [
      css`
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
    return this.renderRoot.querySelector('.ticker-wrap .ticker')
  }

  get textLines() {
    return this.textData.split('\n')
  }

  render() {
    this.style.setProperty(
      '--things-news-ticker-wrapper-padding-left',
      this.isTextOverflowed ? '100%' : 0
    )
    this.style.setProperty(
      '--things-news-ticker-container-padding-right',
      this.isTextOverflowed ? '100%' : 0
    )

    return html`
      <div class="ticker-wrap">
        <div class="ticker">
          ${this.textLines.map(
            t =>
              html`
                <div class="ticker__item">${t}</div>
              `
          )}
        </div>
      </div>
    `
  }

  updated(changed) {
    if (
      changed.has('textData') ||
      changed.has('duration') ||
      changed.has('isReverse') ||
      changed.has('isTextOverflowed')
    ) {
      this.startAnimation()
    }
  }

  startAnimation() {
    this.stopAnimation()

    if (!this.isTextOverflowed) return

    this.currentAnimation = this.animationTargetEl.animate(
      [
        {
          transform: 'translate3d(0, 0, 0)',
          visibility: 'hidden'
        },
        {
          transform: 'translate3d(-100%, 0, 0)',
          visibility: 'visible'
        }
      ],
      {
        duration: this.duration,
        iterations: Infinity,
        direction: this.isReverse ? 'reverse' : 'normal'
      }
    )
  }

  stopAnimation() {
    if (this.currentAnimation) this.currentAnimation.cancel()
  }
}

customElements.define(ThingsNewsTickerHorizontal.is, ThingsNewsTickerHorizontal)
