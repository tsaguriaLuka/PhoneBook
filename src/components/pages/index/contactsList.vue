<template lang="pug">
  .contacts-list
    PagesIndexSubComponentsContactCard(v-for="i in 15")
</template>
<style scoped lang="sass">
.contacts-list
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 1rem
  background-color: #c4c4c4
  height: auto
  margin: 30px
  padding: 30px
  border-radius: 30px
</style>