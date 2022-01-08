<template>
  <div id="app">
    <b-nav>
      <b-nav-item to="/" active>Home</b-nav-item>
      <b-nav-item to="/login">Login</b-nav-item>
    </b-nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 750px;
  background-image: url("https://www.wallpaperbetter.com/wallpaper/707/699/675/eyes-cars-animals-pets-high-quality-picture-1080P-wallpaper-middle-size.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
