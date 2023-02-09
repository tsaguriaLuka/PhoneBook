<template lang="pug">
.create-contact
  .input-fields
    input.full-name(placeholder="Full name" v-model="full_name" )
    input.phone(placeholder="Phone number" type="number" v-model="phone_number" )
  button.create-btn(@click="createNewContact") Create
</template>
<script>
export default {
  data: () => ({
    full_name: '',
    phone_number: null
  }),
  methods: {
    createNewContact() {
      const dateNow = new Date().toISOString()
        if (this.full_name !== '' && this.phone_number !== null && this.phone_number !== '') {
         const newContactSample = {
          created_at: dateNow,
          updated_at: dateNow,
          full_name: this.full_name,
          phone_number: this.phone_number
        }
        this.$store.dispatch('createNewContact', newContactSample)
      } else {
        alert('Please check the fields')
      }
    }
  }
}
</script>
<style scoped lang="sass">
.create-contact
  display: flex
  align-items: center
  justify-content: space-between
  width: 380px
  height: 50px
  background-color: white
  margin-bottom: 20px
  border-radius: 30px
  padding-left: 15px
  padding-right: 15px
  .input-fields
    display: flex
    input
      border-radius: 5px
      padding: 2px
      border: 1px solid black
      text-align: center
    .full-name
      margin-right: 15px
  button
    width: 60px
    height: 24px
    padding: 3px
    border: 1px solid white
    border-radius: 10px
    color: white
    background-color: purple
</style>