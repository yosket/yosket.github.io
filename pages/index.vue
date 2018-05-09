<template>
  <div class="page indexPage">
    <div class="topMessage">
      Web Developer in Tokyo, Japan
    </div>
    <h2>Yosuke Tanaka</h2>
  </div>
</template>

<style lang="scss" scoped>

.indexPage {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: center;
  }
}

.topMessage {
  font-size: 3.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 5vw;
  }
}

h2 {
  font-size: 2.5rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 2.5vw;
  }
}
</style>
