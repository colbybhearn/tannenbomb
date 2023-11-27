<template>
  <div id="app">
    <nav>
      <router-link to="/">You're Invited!</router-link> |
      <router-link to="/about">FAQ</router-link> |
    <br/>
      <router-link to="/yr2020">2020</router-link>  |      
      <router-link to="/yr2022">2022</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightgreen;
  background: #182315;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #48ff00;

    &.router-link-exact-active {
      color: #fb7c02;
    }
  }
}
</style>
