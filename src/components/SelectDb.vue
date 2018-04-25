<template>
  <div>
    <form>
      <div class="wordArea">
        <p>Search Word: </p>
        <input
          type="text"
          v-model="searchText">
        <button
          @click.prevent="submitted">Check!</button>
        <p v-if="noText" class="alert">
          Please input at least one letter.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    data () {
      return {
        searchText: '',
        noText: false
      }
    },
    methods: {
      submitted() {
        if(this.searchText.length > 0) {
          this.noText = false
          // transmit to Result component
          eventBus.$emit('searchWords', this.searchText)
        } else {
          this.noText = true
        }
      }
    }
  }
</script>

<style>
  form {
    margin: 0 auto;
    width: 980px;
  }
  .wordArea {
    margin: 40px 0;
  }
  .alert {
    color: red;
  }
</style>
