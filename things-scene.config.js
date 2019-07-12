import locales from './locales'

import icon from './assets/news-ticker.png'

var templates = [
  {
    type: 'news-ticker',
    description: 'news-ticker',
    group: 'etc',
    /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
    icon,
    model: {
      type: 'news-ticker',
      left: 10,
      top: 10,
      width: 300,
      height: 50,
      text: '#{data}'
    }
  }
]

export default {
  templates,
  locales
}
