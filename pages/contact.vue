<template>
  <div class="page contactPage">
    <h2 class="page__title">Contact</h2>
    <p class="lead">
      お仕事のご依頼やご質問等、なんでもお気軽にお問い合わせください。
    </p>
    <ul class="contactList">
      <li>
        <a href="mailto:yosket87@gmail.com"><i class="far fa-envelope"></i></a>
      </li>
      <li>
        <a href="https://github.com/yosket" target="_blank"><i class="fab fa-github"></i></a>
      </li>
      <li>
        <a href="https://twitter.com/yosket87" target="_blank"><i class="fab fa-twitter"></i></a>
      </li>
      <li>
        <a href="https://www.facebook.com/yosuke.tanaka.87" target="_blank"><i class="fab fa-facebook"></i></a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.lead {
  font-size: 1.5vw;
  margin: 4rem 0;
  text-align: center;
}

.contactList {
  align-items: center;
  display: flex;
  justify-content: center;

  li {
    margin: 0 2rem;
  }

  a {
    align-items: center;
    background: #fff;
    border-radius: 50%;
    box-shadow:  0 .125rem .25rem rgba(0, 0, 0, .5);
    color: #ccc;
    display: flex;
    font-size: 4rem;
    height: 7rem;
    justify-content: center;
    line-height: 1;
    text-decoration: none;
    transition: all .3s;
    width: 7rem;

    &:hover {
      background: #ccc;
      color: #fff;
    }
  }
}
</style>
