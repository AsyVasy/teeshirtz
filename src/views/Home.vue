<template>
  <div class="home">
   <img src="../assets/images/fond_2.jpg" alt="">
  <!-- <h2 v-for="(produit, n) in products.data[1]" :key="n">{{ produit }} <hr><hr> </h2> -->
  <!-- <h2> {{products.data[1]}} </h2> -->
  <!-- <img :src="products.data[1][0].url_image" alt=""> -->
  </div>
</template>

<script>
export default {
  // created() {
  //   this.$store.dispatch("getProducts")
  // },
  // computed: {
  //   products() {
  //     return this.$store.getters.displayProducts;
  //   }
  // }
}
</script>







<style lang="scss" scoped>
  img {
    margin: 0;
    padding: 0;
    width: 100%;
  }
</style>
