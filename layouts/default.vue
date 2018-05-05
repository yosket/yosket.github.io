<template>
  <div class="container">
    <GlobalNavi :class="{ 'globalNavi--shown': isNaviShown }" />
    <div class="pageWrapper">
      <button class="toggleNaviButton" @click="toggleNavi"><i class="fas fa-bars"></i></button>
      <nuxt/>
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
  methods: {
    toggleNavi() {
      this.isNaviShown = !this.isNaviShown
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.isNaviShown = false
      }
    }
  }
}
</script>


<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  line-height: 1.5;
}

.container {

  >>> .globalNavi {
    transform: translateX(-100%);
    transition: all .3s;

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
  text-shadow: 0 0px 1px rgba(0, 0, 0, .5);
  top: 0;
  z-index: 2;

  @media (min-width: 768px) {
    display: none;
  }
}

.pageWrapper {
  height: 100%;
  color: #fff;
  overflow: hidden;
  width: 100%;

  &::before {
    background: url('~assets/bg.jpg') no-repeat center center fixed / auto 100%;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;

    @media (min-width: 768px) {
      background: url('~assets/bg.jpg') no-repeat center center fixed / cover;
    }
  }

  &::after {
    background: #FC5C7D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: .5;
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
    letter-spacing: .25em;
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

  &-enter-active, &-leave-active {
    transition: all .5s;
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
    border-radius: .25em;
    margin: 0 .5em .5em 0;
    padding: .25em .5em;
  }
}
</style>
