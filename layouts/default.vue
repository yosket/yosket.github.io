<template>
  <div class="container">
    <GlobalNavi :class="{ 'globalNavi--shown': isNaviShown }" />
    <div class="pageWrapper">
      <video src="~assets/bg.mp4" loop muted autoplay playsinline />
      <button class="toggleNaviButton" @click="toggleNavi">
        <i class="fas fa-bars" />
      </button>
      <nuxt />
    </div>
  </div>
</template>

<script>
import GlobalNavi from '~/components/GlobalNavi.vue'
export default {
  components: {
    GlobalNavi
  },
  data() {
    return {
      isNaviShown: false
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.isNaviShown = false
      }
    }
  },
  methods: {
    toggleNavi() {
      this.isNaviShown = !this.isNaviShown
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
    'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN,
    'source-han-sans-japanese', YuGothic, Arial, 'メイリオ', Meiryo, sans-serif;
  font-size: 16px;
  font-weight: 100;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  line-height: 1.5;
}

.container {
  >>> .globalNavi {
    transform: translateX(-100%);
    transition: all 0.3s;

    &--shown {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    padding-left: 16rem;
    position: relative;

    >>> .globalNavi {
      transform: none;
    }
  }
}

.toggleNaviButton {
  appearance: none;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  line-height: 1;
  padding: 1rem;
  position: fixed;
  right: 0;
  text-shadow: 0 0px 1px rgba(0, 0, 0, 0.5);
  top: 0;
  z-index: 2;

  @media (min-width: 768px) {
    display: none;
  }
}

.pageWrapper {
  min-height: 100vh;
  color: #fff;
  overflow: hidden;
  width: 100%;

  &::after {
    background: #00f260; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right bottom,
      #0575e6,
      #00f260
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right bottom,
      #0575e6,
      #00f260
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    content: '';
    display: block;
    height: 100vh;
    left: 0;
    opacity: 0.5;
    position: fixed;
    top: 0;
    width: 100%;
  }

  video {
    height: 100vh;
    left: 0;
    object-fit: cover;
    position: fixed;
    top: 0;
    width: 100%;
  }
}

.page {
  padding: 4rem 1rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 3rem;
  }

  &:not(.indexPage) {
    @media (min-width: 768px) {
      margin: 0 auto;
      max-width: calc(800px + 3rem);
    }
  }

  &__section {
    margin: 2rem 0;
  }

  &__title {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.25em;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 6vw;
    }
  }

  &__subTitle {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;

    @media (min-width: 768px) {
      font-size: 4vw;
    }
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.5s;
  }

  &-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
}

.tagList {
  display: flex;
  flex-wrap: wrap;

  li {
    border: 1px solid;
    border-radius: 0.25em;
    margin: 0 0.5em 0.5em 0;
    padding: 0.25em 0.5em;
  }
}
</style>
