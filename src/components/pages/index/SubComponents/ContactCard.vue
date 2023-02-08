<template lang="pug">
  .card
    .date
      .created
        p Created At:
          span 08.02.2023
      .updated
        p Updated At:
          span 08.02.2023
    .divider
    .name
      input(value="Luka Tsaguria" disabled)
    .number
      input(value="+380930329810" disabled)
    .actions
      .edit
        button Edit
      .delete
        button Delete
</template>
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
    .delete
      button
        background-color: red
        color: white
    .edit
      margin-right: 8px
</style>
