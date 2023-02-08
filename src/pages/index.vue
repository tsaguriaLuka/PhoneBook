<template lang="pug">
  .index-page
    PagesIndexContactsList
</template>
<script>
export default {
  name: 'IndexPage',
  created() {
    this.$store.dispatch('fetchAllContacts')
  }
}
</script>
