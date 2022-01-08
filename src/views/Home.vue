<template>
  <div class="home">
    <b-container class="justify-content-center">
      <b-row>
        <b-col>
          <HelloWorld msg="Welcome to Pemor" />
          <h1>Hello {{ username }}</h1>
          <h2>isAuthenticated: {{ isAuthenticated }}</h2>
        </b-col>
      </b-row>
    </b-container>
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
      isAuthenticated: this.$store.state.isAuthenticated,
    };
  },
};
</script>
