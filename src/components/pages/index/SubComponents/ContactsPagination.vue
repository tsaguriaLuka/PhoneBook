<template lang="pug">
.contacts-pagination
  button(v-for="page in 3" :class="active_button === page ? 'active' : ''" @click="chose_pagination_page(page)") {{ page }}
</template>
<script>
export default {
  data: () => ({
    active_button: 1
  }),
  methods: {
    chose_pagination_page(i) {
      this.active_button = i
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