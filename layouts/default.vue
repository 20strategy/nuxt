<template>
  <div class="app">
<LazyHydrate when-visible>
    <the-navbar />
</LazyHydrate>

    <section id="content-wrap" class="section"> 
   
        <nuxt />
        
    </section>
<LazyHydrate when-visible>
    <the-footer />
    </LazyHydrate>

  </div>
</template>


<script>

export default {
  components: {
    TheFooter:() => import('@/components/TheFooter'),
    TheNavbar:() => import('@/components/TheNavbar'),
    LazyHydrate: () => import ('vue-lazy-hydration'),
  }
}
</script>

<style>
  #content-wrap {
    min-height: 100vh;
  }
</style>
