<template>
  <div class="container">
    <LazyHydrate when-visible>
    <product-card-list
      :products="products" />
      </LazyHydrate>


  </div>
</template>

<script>

import ProductCardList from '../../components/ProductCardList'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'Index',
  components: {
    ProductCardList,
    LazyHydrate,
  },
  async asyncData ({ $shopify, store }) {
    const products = await $shopify.product.fetchAll()
    store.commit('setProducts', products)
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  head () {
    return {
      title: this.$store.state.shop.name + ' | ' + 'Products'
    }
  }
}
</script>

<style scoped>
  .full-width {
    width: 100%;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .image {
    width: 100%;
    height: 15rem;
  }
  .description {
    margin-bottom: 1rem;
  }
</style>
