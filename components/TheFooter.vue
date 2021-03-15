<template>
  <footer class="footer">
    <div class="content has-text-light">
      <div class="columns">
        <div class="column has-text-centered">
          <p class="footer-link">
            Made with Time and Patience <a href="https://github.com/20strategy"> Andrew Kim</a>
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <p class="footer-link-title">
            Newsletter
          </p>
        </div>
        <div class="column is-4">
          <p class="is-size-5">
            Policy
          </p>
          <p class="footer-link">
            <nuxt-link to="/">
              Privacy Policy
            </nuxt-link>
          </p>
          <p class="footer-link">
            <nuxt-link to="/">
              Refund Policy
            </nuxt-link>
          </p>
          <p class="footer-link">
            <nuxt-link to="/">
              Terms of service
            </nuxt-link>
          </p>
        </div>
        <div class="column is-4">
          <p class="is-size-5">
            FAQ
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
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
  }

</style>
