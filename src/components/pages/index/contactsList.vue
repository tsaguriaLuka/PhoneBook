<template lang="pug">
  .contacts-list
    .list-header
      PagesIndexSubComponentsContactsMenu
      PagesIndexSubComponentsContactsPagination
      PagesIndexSubComponentsCreateContact
    .contact-cards
      PagesIndexSubComponentsContactCard(v-for="contact in contacts[pagination_page]" :key="contact.id" :contact_data="contact")
</template>
<script>
export default {
  data: () => ({
    contacts: [],
    selected_pagination_page: localStorage.getItem('selected_pagination_page')
  }),
  watch: {
    get_contacts() {
      this.paginate()
    }
  },
  computed: {
    get_contacts() {
      return this.$store.getters.get_contacts
    },
    pagination_page() {
      return this.$store.getters.get_selected_pagination_page
    }
  },
  methods: {
    paginate() {
      this.contacts = []
      const contacts = [...this.get_contacts]
      for (let i = 0; i < contacts.length; i += 12) {
        const chunk = contacts.slice(i, i + 12);
        this.contacts.push(chunk);
      }
      this.$store.dispatch('setPaginationPages', this.contacts.length)
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