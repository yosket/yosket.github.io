<template>
  <div class="page worksPage">
    <h2 class="page__title">Works</h2>
    <div class="products">
      <div class="product">
        <img src="~/assets/products/shironeko-tennis-best-members.png" alt="">
        <small>2018</small>
        <h3>白猫テニス ベストメンバーズ</h3>
        <p>アプリ「白猫テニス」で、あなたが持っているキャラの中から最適な組み合わせを判定します。</p>
        <p class="product__work">Planning / Dedign / Cording</p>
        <ul class="tagList">
          <li>Nuxt.js</li>
          <li>Vue.js</li>
          <li>Bootstrap 4</li>
          <li>Node.js</li>
          <li>Heroku</li>
        </ul>
        <p><a href="https://shironekotennis.club" target="_blank">Live</a></p>
      </div>
      <div class="product">
        <img src="~/assets/products/pitfit.png" alt="">
        <small>2017</small>
        <h3>PitFit</h3>
        <p>あなたの肌が探し求めていた洗顔料が見つかります。あなたは本当に自分の肌にあった洗顔料を選べていますか？乾燥、肌荒れ、ニキビなどのお肌の悩みは、実はあなたの選んだ洗顔料が原因かも。</p>
        <p class="product__work">Planning / Dedign / Cording</p>
        <ul class="tagList">
          <li>Ionic 2</li>
          <li>Angular</li>
          <li>Ruby on Rails 5</li>
          <li>Heroku</li>
        </ul>
        <p><a href="https://pitfit.net" target="_blank">Live</a></p>
      </div>
      <div class="product">
        <img src="~/assets/products/tetra.png" alt="">
        <small>2016</small>
        <h3>Tetra - 最大4人制グループチャット型SNS</h3>
        <p>人生において大切な友情は4人でいい。同じ趣味・仕事・悩み・価値観・地域など、あなたを求める人たちと出会い、相談相手・いつでも会える友達・そして一生の友人へ。最大4人制グループチャット型SNS "Tetra" で、本当に大切な友達を作ろう。</p>
        <p class="product__work">Planning / Dedign / Cording</p>
        <ul class="tagList">
          <li>AngularJS</li>
          <li>Angular Material</li>
          <li>Ruby on Rails 5</li>
          <li>Heroku</li>
        </ul>
        <p><a href="https://tetra-mates.com/" target="_blank">Live</a></p>
      </div>
      <div class="product">
        <img src="~/assets/products/bandally.png" alt="">
        <small>2016</small>
        <h3>bandally</h3>
        <p>Your favorite spot sharing site that connects the world. Let one of the world through travel. Also use it to help in the activation of the local. This can be explained and search of the spot in a variety of languages.</p>
        <p class="product__work">Planning / Dedign / Cording</p>
        <ul class="tagList">
          <li>AngularJS</li>
          <li>Bootstrap 3</li>
          <li>Ruby on Rails 5</li>
          <li>Parse Server</li>
        </ul>
        <p><a href="https://bandally.herokuapp.com/" target="_blank">Live</a></p>
      </div>
      <div class="product">
        <img src="~/assets/products/malo.png" alt="">
        <small>2016</small>
        <h3>malo - ボイスリクエストコミュニティ</h3>
        <p>魅力的な声のマリスト（ボイス配信者）を探して、言って欲しい台詞や歌をリクエスト！！今までに無い新しい価値を提供していくアプリです。</p>
        <p class="product__work">Planning / Dedign / Cording</p>
        <ul class="tagList">
          <li>Ionic</li>
          <li>AngularJS</li>
          <li>Perse Server</li>
        </ul>
        <p><a href="https://itunes.apple.com/jp/app/malo-%E3%83%9C%E3%82%A4%E3%82%B9%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3/id1082600552?l=en&mt=8" target="_blank">Live</a></p>
      </div>
      <div class="product">
        <img src="~/assets/products/bridges.png" alt="">
        <small>2015</small>
        <h3>Bridges - The broken links finder.</h3>
        <p>All the links that exist in your web site to list up, investigate to see if you can access.</p>
        <p class="product__work">Planning / Dedign / Cording</p>
        <ul class="tagList">
          <li>AngularJS</li>
          <li>PHP</li>
        </ul>
        <p><a href="https://fallen-bridges.com/" target="_blank">Live</a></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.products {

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: -2rem;
  }
}

.product {
  background: #fff;
  border-radius: .25rem;
  box-shadow:  0 .125rem .25rem rgba(0, 0, 0, .5);
  color: #666;
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem;
  padding: 1rem;

  @media (min-width: 768px) {
    margin: 0 0 2rem 2rem;
    padding: 2rem;
    width: calc((100% - 4rem) / 2);
  }

  &__work {
    color: #999;
    font-style: italic;
  }

  img {
    box-shadow: 0 .0625rem .125rem rgba(0, 0, 0, .25);
    height: auto;
    max-width: 100%;
    object-fit: cover;
    object-position: center 0;
  }

  small {
    color: #999;
    font-size: .8rem;
    margin-top: 1.5rem;
  }

  h3 {
    font-weight: bold;
    line-height: 1.2;
  }

  p {
    font-size: .8rem;
    margin-top: 1.5rem;
  }

  .tagList {
    margin: 1.5rem 0 auto;
    font-size: .8rem;
  }

  a {
    border: 1px solid;
    border-radius: .25rem;
    color: inherit;
    display: block;
    font-size: 1rem;
    padding: .5rem;
    text-align: center;
    text-decoration: none;
    transition: all .3s;

    &:hover {
      background: #666;
      color: #fff;
    }
  }
}
</style>
