<template lang="pug">
  .contacts-list
    .list-header
      PagesIndexSubComponentsContactsMenu
      PagesIndexSubComponentsCreateContact
    .contact-cards
      PagesIndexSubComponentsContactCard(v-for="contact in contacts" :key="contact.id" :contact_data="contact")
</template>
<script>
export default {
  computed: {
    contacts() {
      return this.$store.getters.get_contacts
    }
  }
}
</script>
<style scoped lang="sass">
.contacts-list
  background-color: #c4c4c4
  height: auto
  margin: 30px
  padding: 30px
  border-radius: 30px
  .list-header
    display: flex
    align-items: center
    justify-content: space-between
  .contact-cards
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 1rem
</style>