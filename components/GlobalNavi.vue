<template>
  <div class="globalNavi">
    <header class="bland">
      <h1>
        <a href="/">
          <span>Web Developer</span>
          <span>Yosuke Tanaka</span>
        </a>
      </h1>
    </header>
    <nav class="navi">
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/works">Works</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
    <footer class="footer">
      <p><small>&copy; Yosuke Tanaka 2018</small></p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

.globalNavi {
  background: #fff;
  box-shadow: .125rem 0 .25rem rgba(0, 0, 0, .5);
  color: #666;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  left: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 16rem;
  z-index: 1;

  a {
    color: #666;
    text-decoration: none;
  }
}

.bland {
  text-align: center;

  span {
    display: block;

    &:nth-of-type(1) {
      font-size: 1.2rem;
      margin: 1rem;
    }

    &:nth-of-type(2) {
      font-size: 1.5rem;
      margin: 1rem;
    }
  }
}

.navi {

  a {
    display: block;
    font-size: 1.5rem;
    margin: 1rem 0;
    padding: 0 1rem;
  }
}

.footer {
  font-size: .8rem;
  text-align: center;
}
</style>
