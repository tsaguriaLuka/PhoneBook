<template lang="pug">
  .card
    .date
      .created
        p Created At:
          span {{ contact_data.created_at}}
      .updated
        p Updated At:
          span {{ contact_data.updated_at }}
    .divider
    .contact-info
      .name
        input(:class="edit_contact ? 'active' : 'disabled'" :placeholder="contact_data.full_name" :disabled="!edit_contact" v-model="edit_data.full_name" )
      .number
        input(:class="edit_contact ? 'active' : 'disabled'" :placeholder="contact_data.phone_number" :disabled="!edit_contact" v-model="edit_data.phone_number")
    .actions
      .edit(v-if="!delete_contact")
        button(v-if="!edit_contact" @click="edit_contact = !edit_contact") Edit
        .confirm(v-else)
          button(@click="edit_contact = false").cancel Cancel
          button.confirm Confirm
      .delete(v-if="!edit_contact" )
        button.delete-btn(v-if="!delete_contact" @click="delete_contact = true") Delete
        .confirm(v-else)
          button.cancel(@click="delete_contact = false") Cancel
          button.confirm(@click="deleteContact(contact_data.id)") Confirm
</template>
<script>
export default {
  props: ['contact_data'],
  data: () => ({
    edit_contact: false,
    delete_contact: false,
    edit_data: {
      full_name: "",
      phone_number: null
    }
  }),
  methods: {
    deleteContact(id){
      this.$store.dispatch('deleteContact', id)
    }
  }
}
</script>
<style scoped lang="sass">
.card
  width: 240px
  height: 110px
  background-color: white
  padding: 15px 20px 15px 20px
  border-radius: 20px
  box-shadow: 5px 5px 5px rgba(21, 21, 21, 0.6)
  // Date
  .date
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 2px
    p
      font-size: 12px
      margin-bottom: 0
      span
        font-weight: bolder
        margin-left: 4px
  // Divider
  .divider
    border-bottom: 1px dashed black
    margin-bottom: 6px
  // Contact Information
  .contact-info
    input
      background-color: white
      color: black
      width: 100%
      border: 1px solid black
      &::placeholder
        color: black
    .disabled
      border: 1px solid transparent
    .name
      input
        font-size: calc(16px + 8 * ((100vw - 320px) / (1440 - 320)))
        font-weight: bolder
    .number
      margin-top: 5px
      margin-bottom: 10px
      input
        font-size: calc(14px + 4 * ((100vw - 320px) / (1440 - 320)))
        font-weight: bold
  // Actions
  .actions
    display: flex
    float: right
    button
      width: 60px
      height: 24px
      border-radius: 10px
      padding: 3px
    // Confirm Delete / Edit
    .confirm
      .cancel
        margin-right: 8px
      .confirm
        background-color: red
        color: white
    // Edit
    .edit
      margin-right: 8px
    // Delete
    .delete
      .delete-btn
        background-color: red
        color: white
</style>
