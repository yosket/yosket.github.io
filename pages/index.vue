<template>
  <div class="page indexPage">
    <div class="topMessage">
      Web Developer in Tokyo, Japan
    </div>
  </div>
</template>

<style lang="scss" scoped>

.indexPage {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
}

.topMessage {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 4vw;
  }
}
</style>
