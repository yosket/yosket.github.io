<template>
  <div class="page worksPage">
    <h2 class="page__title">Works</h2>
    <div class="products">
      <div class="product" :key="work.name" v-for="work in works">
        <img class="lazyload" :data-src="require(`~/assets/products/${work.imageFileName}`)" :alt="work.name">
        <small>{{ work.year }}</small>
        <h3>{{ work.name }}</h3>
        <p>{{ work.description }}</p>
        <p class="product__work">{{ work.work }}</p>
        <ul class="tagList">
          <li :key="tag" v-for="tag in work.tags">{{ tag }}</li>
        </ul>
        <p v-if="work.isLive"><a :href="work.url" target="_blank">Live</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  asyncData() {
    return axios.get('/data/works.json')
      .then((response) => response.data)
      .catch((error) => console.error(error))
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
    opacity: 0;
    transition: opacity .3s;

    &.lazyloaded {
      opacity: 1;
    }
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
