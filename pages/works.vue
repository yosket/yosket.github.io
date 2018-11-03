<template>
  <div class="page worksPage">
    <h2 class="page__title">Works</h2>
    <div class="products">
      <div v-for="work in works" :key="work.name" class="product">
        <img :src="require(`~/assets/products/${work.imageFileName}`)" :alt="work.name">
        <small>{{ work.year }}</small>
        <h3>{{ work.name }}</h3>
        <p>{{ work.description }}</p>
        <p class="product__work">{{ work.work }}</p>
        <ul class="tagList">
          <li v-for="tag in work.tags" :key="tag">{{ tag }}</li>
        </ul>
        <p v-if="work.isLive"><a :href="work.url" target="_blank">Live</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    return await app.$axios.$get('/data/works.json')
  }
}
</script>

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
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
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
    box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.25);
    height: auto;
    max-width: 100%;
    object-fit: cover;
    object-position: center 0;
  }

  small {
    color: #999;
    font-size: 0.8rem;
    margin-top: 1.5rem;
  }

  h3 {
    font-weight: bold;
    line-height: 1.2;
  }

  p {
    font-size: 0.8rem;
    margin-top: 1.5rem;
  }

  .tagList {
    margin: 1.5rem 0 auto;
    font-size: 0.8rem;
  }

  a {
    border: 1px solid;
    border-radius: 0.25rem;
    color: inherit;
    display: block;
    font-size: 1rem;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      background: #666;
      color: #fff;
    }
  }
}
</style>
