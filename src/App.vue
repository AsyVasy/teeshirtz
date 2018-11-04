<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tshirtz">Tshirtz</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
    background: rgba($color: black, $alpha: 0.8);
    text-align: center;
    height: auto;
    font-size: 25px;

  padding: 30px;
  a {
    font-weight: bold;
    color: #a9b4be;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
