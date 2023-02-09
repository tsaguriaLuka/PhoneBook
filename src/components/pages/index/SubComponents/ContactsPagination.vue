<template lang="pug">
.contacts-pagination
  button(v-for="page in pagination_pages" :class="active_button === page - 1 ? 'active' : ''" @click="chose_pagination_page(page - 1)") {{ page }}
</template>
<script>
export default {
  data: () => ({
    active_button: 0
  }),
  computed: {
    pagination_pages() {
      return this.$store.getters.get_pagination_pages
    }
  },
  methods: {
    chose_pagination_page(i) {
      this.active_button = i
      localStorage.setItem('selected_pagination_page', (i))
      this.$store.dispatch('selectPaginationPage')
    }
  }
}
</script>
<style scoped lang="sass">
.contacts-pagination
  display: flex
  align-items: center
  justify-content: space-between
  max-width: 500px
  height: 50px
  background-color: white
  margin-bottom: 20px
  border-radius: 30px
  padding-left: 15px
  padding-right: 15px
  button
    width: 40px
    height: 24px
    margin-right: 1px
    margin-left: 1px
  .active
    background-color: rgba(128, 0, 128, 0.85)
    color: white
</style>