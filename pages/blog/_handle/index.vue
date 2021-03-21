<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1>{{ blog.title }}</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column">
<LazyHydrate when-visible>
        <blog-card-list :blog="blog" />
</LazyHydrate>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCardList from '../../../components/BlogCardList'
import LazyHydrate from 'vue-lazy-hydration'
export default {
  name: 'Index',
  components: {
    BlogCardList,
    LazyHydrate
  },
  asyncData ({ app, params }) {
    return app.$axios({
      method: 'POST',
      data: {
        query: `query {
          blogByHandle (handle:"${params.handle}") {
            title,
            handle,
            articles(first: 250) {
              edges {
                node {
                  id,
                  title,
                  handle,
                  publishedAt,
                  excerpt,
                  tags,
                  image (maxWidth: 768) {
                    originalSrc,
                    altText
                  }
                }
              }
            }
          }
        }`
      }
    }).then((response) => {
      return {
        blog: response.data.data.blogByHandle
      }
    })
  },
  head () {
    return {
      title: this.$store.state.shop.name + ' | ' + this.blog.title
    }
  }
}
</script>

<style scoped>
</style>
