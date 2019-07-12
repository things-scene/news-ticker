/*
 * Copyright © 2017 HatioLab Inc. All rights reserved.
 */

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [
    {
      type: 'select',
      label: 'direction',
      name: 'direction',
      property: {
        options: [
          {
            display: 'horizontal',
            value: 'horizontal'
          },
          {
            display: 'vertical',
            value: 'vertical'
          }
        ]
      }
    },
    {
      type: 'checkbox',
      label: 'reverse',
      name: 'reverse'
    },
    {
      type: 'select',
      label: 'animation-start-position',
      name: 'animationStartPosition',
      property: {
        options: [
          {
            display: 'start',
            value: 'start'
          },
          {
            display: 'end',
            value: 'end'
          }
        ]
      }
    },
    {
      type: 'number',
      label: 'duration',
      name: 'duration',
      property: { placeholder: 'seconds' }
    }
  ]
}

import { Component, HTMLOverlayElement } from '@hatiolab/things-scene'
import './news-ticker-element'

export default class NewsTicker extends HTMLOverlayElement {
  get nature() {
    return NATURE
  }

  get hasTextProperty() {
    return true
  }

  get tagName() {
    return 'things-news-ticker'
  }

  createElement() {
    super.createElement()

    this.setState('text', '#{data}')

    var { width, height } = this.bounds
    var element = this.element

    element.style.overflow = 'hidden'
    element.width = width
    element.height = height
  }

  /* component.property => element.property */
  setElementProperties(element) {
    var { width, height } = this.bounds

    try {
      element.width = width
      element.height = height

      this.updateAndRender()
    } catch (e) {
      error(e)
    }
  }

  get isTextOverflowed() {
    var span = document.createElement('span')
    span.style.font = this.font
    span.style.position = 'fixed'
    span.style.left = '-100%'
    span.style.visibility = 'none'

    span.textContent = this.textSubstitutor()

    document.body.appendChild(span)

    var textBounds = span.getBoundingClientRect()
    var isOverflowed = this.element.width < textBounds.width

    document.body.removeChild(span)
    span = null

    return isOverflowed
  }

  updateAndRender() {
    var {
      direction = 'horizontal',
      reverse,
      animationStartPosition = 'end',
      textAlign,
      fontColor = 'black',
      fontSize = 13,
      font,
      duration = 30
    } = this.state

    var text = this.textSubstitutor().trim()
    var textLines = text.split('\n')

    var isReverse = reverse
    var isTextOverflowed = this.isTextOverflowed

    this.element.direction = direction
    this.element.duration = `${duration}s`
    this.element.fontColor = fontColor
    this.element.fontFamily = font
    this.element.fontSize = `${fontSize}px`
    this.element.textAlign = textAlign
    this.element.isReverse = isReverse
    this.element.isTextOverflowed = isTextOverflowed
    this.element.animationStartPosition = animationStartPosition
    this.element.textLines = textLines
  }

  dispose() {
    super.dispose()
  }

  startAnimation() {
    if (!this.app.isViewMode) return
  }
}

Component.register('news-ticker', NewsTicker)
