<template>
  <div class="page contactPage">
    <h2 class="page__title">Contact</h2>
    <p class="lead">
      お仕事のご依頼やご質問等、なんでもお気軽にお問い合わせください。
    </p>
    <ul class="contactList">
      <li>
        <a href="mailto:yosket87@gmail.com">
          <i class="far fa-envelope" />
        </a>
      </li>
      <li>
        <a href="https://github.com/yosket" target="_blank">
          <i class="fab fa-github" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/yosket87" target="_blank">
          <i class="fab fa-twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/yosuke.tanaka.87" target="_blank">
          <i class="fab fa-facebook" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.lead {
  font-size: 1.2rem;
  margin: 4rem 0;
  text-align: center;
}

.contactList {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    margin: 1rem 2rem;
  }

  a {
    align-items: center;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
    color: #ccc;
    display: flex;
    font-size: 3rem;
    height: 5rem;
    justify-content: center;
    line-height: 1;
    text-decoration: none;
    transition: all 0.3s;
    width: 5rem;

    @media (min-width: 768px) {
      font-size: 4rem;
      height: 7rem;
      width: 7rem;
    }

    &:hover {
      background: #ccc;
      color: #fff;
    }
  }
}
</style>
