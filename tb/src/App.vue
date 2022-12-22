<template>
  <div id="app">
    <nav>
      <router-link to="/">You're Invited!</router-link> |
      <router-link to="/about">What is even going on?</router-link> |
      <router-link to="/yr2020">2020</router-link>
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
  background: black;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
