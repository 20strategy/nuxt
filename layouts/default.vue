<template>
  <div class="app">

<LazyHydrate when-visible>
    <the-navbar />
</LazyHydrate>

    <section id="content-wrap" class="section">
<LazyHydrate when-visible>
      <nuxt />
        </LazyHydrate>
    </section>
<LazyHydrate when-visible>
    <the-footer />
    </LazyHydrate>

  </div>
</template>


<script>
import TheNavbar from '../components/TheNavbar'
import TheFooter from '../components/TheFooter'
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    TheFooter,
    TheNavbar,
    LazyHydrate,
  }
}
</script>

<style>
  #content-wrap {
    min-height: 100vh;
  }
</style>
