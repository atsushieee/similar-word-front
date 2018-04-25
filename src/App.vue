<template>
  <div id="app">
    <h1>Similar Word List</h1>
    <app-select-db></app-select-db>
    <hr />
    <app-result></app-result>
  </div>
</template>

<script>
  import SelectDb from './components/SelectDb.vue'
  import Result from './components/Result.vue'
  export default {
    components: {
      'appSelectDb': SelectDb,
      'appResult': Result
    }
  }
</script>

<style lang="scss">
  #app {
    margin: 0 auto;
  }
  h1 {
    text-align: center;
  }
  hr {
    margin: 0;
  }
</style>
