<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tshirtz">Tshirtz</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>


    <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>  
    </div>
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
    z-index: 10000;

  padding: 30px;
  a {
    font-weight: bold;
    color: #a9b4be;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.moveInUp-enter-active{
  animation: fadeIn .7s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  
  100%{
    opacity: 1;
  }
}
.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translate(0);
  opacity: 1;
 }
  100%{
  transform: translate(-1000px);
  opacity: 0;
 }
}



</style>
