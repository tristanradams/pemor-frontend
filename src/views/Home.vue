<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>Hello {{ username }}</h1>
    <div>
      <b-alert show dismissible>
        Dismissible Alert! Click the close button over there <b>&rArr;</b>
      </b-alert>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      username: this.$store.state.username,
    };
  },
};
</script>
