<template>
  <div class="resultArea">
    <p v-if="isLoading" class="loading">
      Now Loading...
    </p>
    <template v-if="isDisplayedResult">
      <table v-if="wordsList.length>0">
      　<tr class="table-title">
      　　<th>WORD</th>
      　　<th>FREQUENCY</th>
      　</tr>
        <template v-for="word in wordsList" class="test">
          　<tr>
          　　<td>{{ word.name }}</td>
          　　<td>{{ word.frequency }}</td>
          　</tr>
        </template>
      </table>

      <p v-else class="no-word">
        Corresponding Words Not Found.
      </p>
    </template>
  </div>
</template>

<script>
  import { eventBus } from '../main'
  import axios from 'axios'

  export default {
    data() {
      return {
        wordsList: [],
        isLoading: false,
        isDisplayedResult: false
      }
    },
    methods: {
      sortCount(wordsList) {
        wordsList.sort((a,b) => {
          return a.frequency > b.frequency ? -1 : 1
        })
        return wordsList
      }
    },
    created() {
      eventBus.$on('searchWords', (text) => {
        this.isDisplayedResult = false
        this.isLoading = true
        axios.get(encodeURIComponent(text))
          .then(response => {
            const wordsData = response.data['word']
            const tmpWordsList = []
            for (let key in wordsData) {
              const wordData = wordsData[key]
              tmpWordsList.push(wordData)
            }
            this.wordsList = this.sortCount(tmpWordsList)
            this.isLoading = false
            this.isDisplayedResult = true
          })
          .catch(error => {
            console.log(error)
          })
      })
    }
  }
</script>

<style>
  .resultArea {
    margin: 0 auto;
    width: 980px;
  }
  table {
    margin: 40px auto;
    width: 800px;
  }
  .table-title {
    border-bottom: solid 1px black;
  }
  th, td {
    width: 400px;
  }
  th {
    background-color: black;
    color: white;
  }
  td, .no-word, .loading {
    text-align: center;
  }
  tr:nth-child(even) {
    background-color: #eee;
  }
</style>
