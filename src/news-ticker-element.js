/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
import { css, html, LitElement } from 'lit-element'

export default class ThingsNewsTicker extends LitElement {
  static get is() {
    return 'things-news-ticker'
  }

  static get styles() {
    return [
      css`
        :host * {
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

          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          -webkit-animation-name: var(--things-news-ticker-animation-name);
          animation-name: var(--things-news-ticker-animation-name);
          -webkit-animation-duration: var(
            --things-news-ticker-animation-duration
          );
          animation-duration: var(--things-news-ticker-animation-duration);
          animation-direction: var(--things-news-ticker-animation-direction);
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
      duration: String
    }
  }

  firstUpdated() {}

  render() {
    this.style.setProperty('--things-news-ticker-font-family', this.fontFamily)
    this.style.setProperty('--things-news-ticker-font-size', this.fontSize)
    this.style.setProperty('--things-news-ticker-font-color', this.fontColor)
    this.style.setProperty(
      '--things-news-ticker-wrapper-padding-left',
      this.animationStartPosition == 'start' ? 0 : '100%'
    )
    this.style.setProperty(
      '--things-news-ticker-container-padding-right',
      this.animationStartPosition == 'start' ? 0 : '100%'
    )
    this.style.setProperty('--things-news-ticker-text-align', this.textAlign)
    this.style.setProperty(
      '--things-news-ticker-animation-name',
      this.isTextOverflowed ? 'ticker' : 'none'
    )
    this.style.setProperty(
      '--things-news-ticker-animation-duration',
      this.duration
    )
    this.style.setProperty(
      '--things-news-ticker-animation-direction',
      this.isReverse ? 'reverse' : 'normal'
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
}

customElements.define(ThingsNewsTicker.is, ThingsNewsTicker)
