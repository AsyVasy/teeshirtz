<template>
  <div class="teeshirtz">
    <MesFiltres></MesFiltres>
    <Produits></Produits>
  </div>
</template>

<script>

import MesFiltres from "@/components/MesFiltres.vue"
import Produits from "@/components/Produits.vue"
export default {

  components : {
    MesFiltres,
    Produits
  }
  
}
</script>

<style lang="scss" scoped>
  .teeshirtz {
    background:rgba($color: grey, $alpha: 0.2);
    width: 100vw;
    min-height: 800px;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
  }
  
  

</style>
