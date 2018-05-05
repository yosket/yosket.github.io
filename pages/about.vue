<template>
  <div class="page aboutPage">
    <h2 class="page__title">About</h2>
    <p class="lead">
      フリーランスウェブエンジニア。<br>
      趣味はウェブ制作とカラオケ。<br>
      作りたいと思ったものをデザインからインフラまで1人で作り上げ、できたものを無意味に眺めるのが好き。<br>
      もっと楽に。もっと自由に。
    </p>
    <div class="page__section">
      <h3 class="page__subTitle">Like</h3>
      <ul class="tagList">
        <li>Vue.js</li>
        <li>Angular</li>
        <li>Nuxt.js</li>
        <li>Parse</li>
        <li>Firebase</li>
        <li>Ruby on Rails</li>
        <li>Sass</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Heroku</li>
      </ul>
    </div>
    <div class="page__section">
      <h3 class="page__subTitle">History</h3>
      <dl class="history">
        <dt>1980 -</dt>
        <dd>愛知県安城市に生まれる</dd>
        <dt>1996 -</dt>
        <dd>父親にねだり初めてのPCをゲット。インターネットに触れ、ネットサーフィンやチャットに明け暮れる。</dd>
        <dt>1997 -</dt>
        <dd>独学でWebサイト制作を開始</dd>
        <dt>1999 -</dt>
        <dd>進学を機に上京</dd>
        <dt>2004 -</dt>
        <dd>就職せずにバンドマンとして生きていくことを決意</dd>
        <dt>2007 -</dt>
        <dd>結核性胸膜炎を発症。1年におよぶ自宅療養生活。</dd>
        <dt>2011 -</dt>
        <dd>念願のCDデビュー</dd>
        <dt>2012 -</dt>
        <dd>バンドの夢潰える</dd>
        <dt>2014 -</dt>
        <dd>中目黒のWeb制作会社に就職</dd>
        <dt>2015 -</dt>
        <dd>六本木のソーシャルゲーム会社に転職。1年弱勤めたのち、友人とともにWebサービス会社を起業。</dd>
        <dt>2017 -</dt>
        <dd>会社倒産を機にフリーランスへ転向</dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.lead {
  font-size: 1.5vw;
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

.history {

  dt {
    float: left;
    font-weight: bold;
    margin-right: 1rem;
  }

  dd {
    margin-bottom: 1rem;
    overflow: hidden;
  }
}
</style>
