<template lang="pug">
  .app-header
    .header-container
      h2 Phone Book
</template>
<style scoped lang="sass">
.app-header
  width: 100%
  height: 80px
  background: purple
  display: flex
  align-items: center
  .header-container
    width: 95%
    margin: auto
    h2
      color: white
      font-size: calc(24px + 10 * ((100vw - 320px) / (1440 - 320)))
</style>