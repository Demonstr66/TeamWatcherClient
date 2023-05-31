<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>HELLO FROM  ~CI/CD</h2>
    <button @click="getData">try load</button>
    <div style="border-radius: 8px; border: 1px solid grey;">
      {{response}}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "about",
  data() {
    return {
      response: ""
    }
  },
  methods: {
    async getData() {
      axios.get('/api/123')
          .then((response) => {
            console.log(response)
            this.response = response.data
          })
          .catch((err) => {
            console.log(err)
          })

    }
  }
}
</script>
