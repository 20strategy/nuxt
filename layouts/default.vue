<template>
  <div class="app">
<<<<<<< HEAD
<LazyHydrate when-visible>
    <the-navbar />
</LazyHydrate>

    <section id="content-wrap" class="section"> 
   
        <nuxt />
        
=======
    <the-navbar />
    <section id="content-wrap" class="section">
      <nuxt />
>>>>>>> parent of be1b377 (applied)
    </section>
    <the-footer />
  </div>
</template>

<style>
</style>
<script>
<<<<<<< HEAD

export default {
  components: {
    TheFooter:() => import('@/components/TheFooter'),
    TheNavbar:() => import('@/components/TheNavbar'),
    LazyHydrate: () => import ('vue-lazy-hydration'),
=======
import TheNavbar from '../components/TheNavbar'
import TheFooter from '../components/TheFooter'
export default {
  components: {
    TheFooter,
    TheNavbar
>>>>>>> parent of be1b377 (applied)
  }
}
</script>

<style>
  #content-wrap {
    min-height: 100vh;
  }
</style>
