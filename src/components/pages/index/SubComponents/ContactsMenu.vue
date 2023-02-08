<template lang="pug">
.contacts-menu
  .sort
    select(v-model="sort")
      option(value="" disabled) --Choose an option--
      option(value='to_newest') Oldest to Newest
      option(value='to_oldest') Newest to Oldest
  .find
    input(placeholder="Find number" v-model="find" )
</template>
<script>
export default {
  data: () => ({
    sort: '',
    find: ''
  }),
  watch: {
    sort() {
      this.$store.dispatch('sortData', this.sort)
    },
    find() {
      this.$store.dispatch('findContact', this.find)
    }
  }
}
</script>
<style scoped lang="sass">
.contacts-menu
  display: flex
  align-items: center
  justify-content: space-between
  width: 300px
  height: 50px
  background-color: white
  margin-bottom: 20px
  border-radius: 30px
  padding-left: 15px
  padding-right: 15px
  .sort
    select
      border: none
      outline: none
  .find
    input
      border-radius: 5px
      padding: 2px
      border: 1px solid black
      text-align: center
</style>