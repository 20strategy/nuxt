<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <b-carousel :indicator-inside="false">
          <b-carousel-item
            v-for="(image, index) in product.images"
            :key="index"
          >
            <span class="image">
              <img
                :src="image.src"
                style="max-width: 50rem"
                :alt="product.description">
            </span>
          </b-carousel-item>
          <template slot="indicators" slot-scope="props">
            <span class="al image">
              <img
                :src="product.images[props.i].src"
                :alt="product.description"
                style="max-width: 8rem" >
            </span>
          </template>
        </b-carousel>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column">
              <h1 class="title">{{ product.title }}</h1>               



        <div v-for="option in productOptions"
            :key="option.id"
            class="field">
            <div class="control">
              <label
                :for="option.name"
                class="label">
                {{ option.name }}
                <div class="select is-fullwidth">
                  <select
                    :id="option.name"
                    v-model="selectedOptions[option.name]">
                    <option
                      v-for="(value, index) in option.values"
                      :key="index"
                      :value="value.value">
                      {{ value.value }}
                    </option>
                  </select>
                </div>
              </label>
            </div>
          </div>

  <div class="columns">
              <div class="column">
                <p class="is-size-3">
                 $ {{ product.variants[0].price }}
                </p>
              </div>
            </div>
            
            <div class="columns is-flex">
              <div class="column is-2">
                <p>Quantity</p>
              </div>
              <div class="column is-6">
                <b-numberinput
                  v-model.number="quantity"
                />
              </div> </div>
              <div class="">
                <b-button
                  icon-left="cart"
                  type="is-danger"
                  @click="addToCart(product.variants[0].id, quantity)">
                  Buy Now
                </b-button>
              </div>
            </div>


              </div>
            
            <div class="columns">
              <div class="column">
                <div
                  class="subtitle"
                  v-html="product.descriptionHtml"
                />
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartMixins from '../../../mixins/cartMixins'

export default {
  name: 'Index',
  mixins: [
    cartMixins
  ],
  async asyncData ({ params, $shopify }) {
    const product = await $shopify.product.fetchByHandle(params.handle)
    return { product }
  },
  data () {
    return {
      product: {},
      quantity: 1,
      selectedOptions: {}
    }
  },
  computed: {
    productOptions () {
      return this.product.options.filter(({ name }) => name !== 'Title')
    }
  },
  head () {
    return {
      title: this.$store.state.shop.name + ' | ' + this.product.title,
      meta: [
        { hid: 'description', name: 'description', content: this.product.description }
      ]
    }
  },
  mounted() {
    // Automatically select first of each variant
    let options = this.product.options.filter(({ name }) => name !== 'Title');
    this.selectedOptions = Object.fromEntries(
        options.map(({name, values}) => [name, values[0].value]));
  }
}
</script>

<style scoped>
  .is-active .al img {
    filter: grayscale(0%);
  }
  .al img {
    filter: grayscale(100%);
  }
  .columns.is-flex {
    align-items: center;
  }
</style>
