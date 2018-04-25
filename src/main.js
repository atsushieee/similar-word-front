import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// for using API: GET mathod
axios.defaults.baseURL = 'https://nike-words-api.herokuapp.com/word/0/'
// for communication between child's components
export const eventBus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
