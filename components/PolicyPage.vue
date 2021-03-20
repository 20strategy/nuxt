<template>
  <div class="columns policy">
    <div class="column">
      <h1 class="has-text-centered">{{ policy.title }}</h1>
      <div v-html="policy.body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PolicyPage',
  props: {
    policy: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.policy {
  max-width: 700px;
  width: 95%;
  margin-right:auto;
  margin-left: auto;


}

</style>
