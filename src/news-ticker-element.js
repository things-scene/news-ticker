/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
import { html, LitElement } from 'lit-element'
import './news-ticker-horizontal'
import './news-ticker-vertical'

export default class ThingsNewsTicker extends LitElement {
  static get is() {
    return 'things-news-ticker'
  }

  static get properties() {
    return {
      width: Number,
      height: Number,
      textData: String,
      fontFamily: String,
      fontColor: String,
      fontSize: String,
      textAlign: String,
      isReverse: Boolean,
      animationStartPosition: String,
      isTextOverflowed: Boolean,
      direction: String,
      duration: Number
    }
  }

  render() {
    this.style.setProperty('--things-news-ticker-font-family', this.fontFamily)
    this.style.setProperty('--things-news-ticker-font-size', this.fontSize)
    this.style.setProperty('--things-news-ticker-font-color', this.fontColor)
    this.style.setProperty('--things-news-ticker-text-align', this.textAlign)

    return html`
      ${this.direction == 'vertical'
        ? html`
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
          `
        : html`
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
    `
  }
}

customElements.define(ThingsNewsTicker.is, ThingsNewsTicker)
