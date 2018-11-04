<template>
  <div class="teeshirtz">
    <PageProduit></PageProduit>
  </div>
</template>

<script>

import PageProduit from "@/components/PageProduit.vue"
export default {

  components : {
    PageProduit
  }
}
</script>

<style lang="scss" scoped>
  .teeshirtz {
    background:rgba($color: grey, $alpha: 0.2);
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
  }
  
  

</style>
