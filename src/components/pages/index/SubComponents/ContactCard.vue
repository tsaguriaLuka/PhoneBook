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
    .name
      input(:value="contact_data.full_name" disabled)
    .number
      input(:value="contact_data.phone_number" disabled)
    .actions
      .edit
        button Edit
      .delete(v-if="!clicked_delete" @click="clicked_delete = true")
        button Delete
      .confirm-delete(v-if="clicked_delete")
        button(@click="clicked_delete = false").cancel Cancel
        button.confirm(@click="delete_contact(contact_data.id)") Confirm
</template>
<script>
export default {
  props: ['contact_data'],
  data: () => ({
    clicked_delete: false
  }),
  methods: {
    delete_contact(id){
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
  input
    border: none
    background-color: white
    color: black
    width: 100%
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
  .divider
    border-bottom: 1px dashed black
    margin-bottom: 6px
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
  .actions
    display: flex
    float: right
    button
      width: 50px
      height: 24px
      border-radius: 10px
    .edit
      margin-right: 8px
    .delete
      button
        background-color: red
        color: white
    .confirm-delete
      button
        width: 60px
        height: 24px
        border-radius: 10px
        padding: 3px
      .cancel
        margin-right: 8px
      .confirm
        background-color: red
        color: white
</style>
