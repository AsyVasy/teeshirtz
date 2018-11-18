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
    
    min-height: 800px;
  }
  
  

</style>
