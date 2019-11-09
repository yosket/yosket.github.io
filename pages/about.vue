<template>
  <div class="page aboutPage">
    <h2 class="page__title">About</h2>
    <p class="lead">
      フリーランスウェブエンジニア。<br />
      趣味はウェブ制作とカラオケとウォーキング。<br />
      作りたいと思ったものをデザインからインフラまで1人で作り上げ、できたものを無意味に眺めるのが好き。<br />
      もっと楽に。もっと自由に。
    </p>
    <div class="page__section">
      <h3 class="page__subTitle">Like</h3>
      <ul class="tagList">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>
    <div class="page__section">
      <h3 class="page__subTitle">History</h3>
      <dl class="history">
        <template v-for="item in history">
          <dt :key="item.year">{{ item.year }} -</dt>
          <dd :key="item.body">{{ item.body }}</dd>
        </template>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    return await Promise.all([
      app.$axios.$get('/data/tags.json'),
      app.$axios.$get('/data/history.json')
    ]).then(results => Object.assign(...results))
  }
}
</script>

<style lang="scss" scoped>
.lead {
  font-size: 1.2rem;
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
