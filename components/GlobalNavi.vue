<template>
  <div class="globalNavi">
    <header class="bland">
      <h1>
        <nuxt-link to="/">
          <img src="~assets/photo.jpg" alt="Yosuke Tanaka">
          <span>Web Developer</span>
          <span>Yosuke Tanaka</span>
        </nuxt-link>
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
      <p><small>&copy; Yosuke Tanaka {{ new Date().getFullYear() }}</small></p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

.globalNavi {
  background: #fff;
  color: #666;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  left: 0;
  overflow: auto;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 16rem;
  z-index: 9999;

  a {
    color: #666;
    text-decoration: none;
  }
}

.bland {
  border-bottom: 1px solid #eee;
  margin: -2rem;
  text-align: center;

  a {
    display: block;
    padding: 1rem 0;
    transition: all .3s;

    &:hover {
      background: #666;
      color: #fff;
    }
  }

  img {
    border-radius: 50%;
    height: 160px;
    object-fit: cover;
    width: 160px;
  }

  span {
    display: block;

    &:nth-of-type(1) {
      font-weight: bold;
      margin: 1rem 0 0;
    }

    &:nth-of-type(2) {
      font-size: 1.8rem;
      margin: 0 0 1rem;
    }
  }
}

.navi {
  padding: 1rem 0;

  ul {
    padding: 2rem 0;
  }

  a {
    display: block;
    font-size: 1.5rem;
    margin: 1rem 0;
    padding: 0 1rem;

    &.nuxt-link-exact-active {
      font-weight: bold;
    }
  }
}

.footer {
  border-top: 1px solid #eee;
  color: #ccc;
  font-size: .8rem;
  margin: -2rem;
  padding: 1rem;
  text-align: center;
}
</style>
