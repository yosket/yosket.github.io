<template>
  <div class="container">
    <GlobalNavi />
    <div class="pageWrapper">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import GlobalNavi from '~/components/GlobalNavi.vue'
export default {
  components: {
    GlobalNavi
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
  padding-left: 16rem;
  position: relative;
}

.pageWrapper {
  min-height: 100vh;
  background: url('~assets/bg.jpg') no-repeat center center fixed / cover;
  color: #fff;
  position: relative;
  width: 100%;

  &::before {
    background: #FC5C7D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    content: '';
    height: 100%;
    left: 0;
    opacity: .5;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.page {
  position: relative;
  z-index: 1;

  &:not(.indexPage) {
    margin: 0 auto;
    max-width: 600px;
    padding: 3rem 0;
  }

  &__section {
    margin: 2rem 0;
  }

  &__title {
    font-size: 6vw;
    font-weight: bold;
    letter-spacing: .25em;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  &__subTitle {
    font-size: 4vw;
    font-weight: bold;
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
</style>
