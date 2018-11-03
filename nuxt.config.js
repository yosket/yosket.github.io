if (process.env.NODE_ENV === 'production') {
  require('dotenv').config()
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Yosuke Tanaka - Freelance Web Developer in Tokyo, Japan',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '東京都新宿区のフリーランスウェブデベロッパー、田中庸介のサイトです。お仕事のご依頼やご質問等、なんでもお気軽にお問い合わせください。'
      },
      {
        name: 'google-site-verification',
        content: 'kRhaMZx82slgxcA7fWoALNVuzIxtbKonZ86p65pyiKw'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.12/css/all.css',
        integrity:
          'sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9',
        crossorigin: 'anonymous'
      }
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
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-118743049-1'
      }
    ]
  ],
  axios: {
    debug: true,
    baseURL: 'http://localhost:3000'
  }
}
