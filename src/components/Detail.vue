<template>
    <div class="details">
            <div class="gauche">
                <i class="fas fa-arrow-circle-left fa-5x icon" @click="goBack"></i>
                <img :src="this.$route.params.produit.url_image" alt="">
            </div>
            <div class="droite">
                <h1 class="text-primary text-center">{{title}}</h1>
                <!-- <h2>the product id is :{{this.$route.params.produit}}</h2> -->
                <h2>{{this.$route.params.produit.name}}</h2>
                <h2>Price: {{this.$route.params.produit.price}} €</h2>
        </div>
    </div>
</template>
<script>
 export default{
  name:'detail',
  data(){
   return{
    title:"details"
   }
  },
  methods: {
      goBack() {
          this.$router.push({name:'tshirtz'})
      }
  }
 }
</script>

<style scoped lang="scss">

    .details {
        display: flex;
        flex-direction: row;
        .gauche {
            width: 50vw;
            .icon {
                cursor: pointer;
                z-index: 1000;
            }
            img {
                width: 100%;
                position: relative;
                top: 0
            }
        }
        .droite {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50vw;
            h1 {
                color: #42b983;
            }
        }
    }

</style>
