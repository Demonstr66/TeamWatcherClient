<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>NE HELLO FORM CI CD!!!!</h2>
    <h2>NEW COMMIT</h2>
    <input v-model="req" type="text" />
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
      req: "",
      response: ""
    }
  },
  methods: {
    async getData() {
      axios.get(this.req)
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
