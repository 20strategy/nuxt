<template>
 

<div>
  <br>
 <section>
      <Subscribe/>
          <br>
  </section>
  <footer class="footer">

    <div class="content has-text-light">
      <div class="columns">
        <div class="column has-text-left">
          <p class="footer-link">
            puppyous.com
          </p>
        </div>
      </div>
      <div class="columns">

        <div class="column is-4">
          <p class="footer-link-title">
         Policy
          </p>
          <p class="footer-link">
            <nuxt-link to="/policy/refund-policy">
              Refund Policy
            </nuxt-link>
          </p>
          <p class="footer-link">
            <nuxt-link to="/shipping">
              Shipping Policy
            </nuxt-link>
          </p>
          <p class="footer-link">
            <nuxt-link to="/policy/terms-of-service">
              Terms of service
            </nuxt-link>
          </p>
        </div>

        <div class="column is-4">
          <p class="is-size-5">
            Information
          </p>
          <p class="footer-link">
            Email: bark@puppyous.com
          </p>
          <p class="footer-link">
            Location: Los Angeles, CA
          </p>
          <p class="footer-link">
            <nuxt-link to="/">
             
            </nuxt-link>
          </p>
        </div>

        
        <div class="column is-4">
          <p class="is-size-5">
            

          </p>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>

import Subscribe from "@/components/Subscribe"
export default {
  components:{
    Subscribe,
  },
  name: 'TheFooter'
}
</script>

<style scoped>
  .footer-link-title {
    font-size: 1.25rem;
    font-weight: 600;

  }

  .footer-link {
    margin-top: .5rem;
    margin-bottom: 0 !important;
    color:turquoise;
    }
  a {
    color: turquoise;
  }

</style>
