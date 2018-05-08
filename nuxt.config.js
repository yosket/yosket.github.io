module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Yosuke Tanaka - Freelance Web Developer in Tokyo, Japan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '東京都新宿区のフリーランスウェブデベロッパー、田中庸介のサイトです。お仕事のご依頼やご質問等、なんでもお気軽にお問い合わせください。' },
      { name: 'google-site-verification', content: 'kRhaMZx82slgxcA7fWoALNVuzIxtbKonZ86p65pyiKw' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.12/css/all.css', integrity: 'sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9', crossorigin: 'anonymous' }
    ],
    script: [
      { src: 'https://use.typekit.net/hbn7tws.js' },
      { innerHTML: 'try{Typekit.load({ async: true });}catch(e){}' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#666', height: '4px' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.transformToRequire['img'] = ['src', 'data-src']
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['lazysizes']
  },
  modules: [
    [
      '@nuxtjs/google-analytics', {
        id: 'UA-118743049-1'
      }
    ]
  ]
}
