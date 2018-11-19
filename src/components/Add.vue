<template>
<div class="container">
    <div>
        <i class="fas fa-arrow-circle-left fa-5x icon" @click="goBack"></i>
        <p>Admin page</p>
    </div>
    <fieldset>
        <legend>Add A Product</legend>
        <form class="" method="post" @submit.prevent="postNow">
            <input type="text" name="" value="" placeholder="name" v-model="name">
            <input type="number" name="" value="" placeholder="price" v-model="price">
            <select name="" id="" v-model="brand">
                <option v-for="brand in brands.data[1]" :key="brand.id" :value="brand.id">{{brand.name}}</option>
            </select>
            <button type="submit" name="button">Submit</button>
        </form>
    </fieldset>
    <h2>{{name}}</h2>
    <h2>{{price}}</h2>
    <h2>{{brand}}</h2>

 </div>
</template>

<script>
    import axios from "axios";
export default {
    data() {
        return {
            name: "",
            price:0,
            brand: null
        }
    },
    computed: {
            brands() {
                return this.$store.getters.displayBrands;
            },
    },
    created() {
    this.$store.dispatch("getBrands")
    this.$store.dispatch("getProducts")
    
    },
    methods: {
        goBack() {
              this.$router.push({name:'admin'})
          },
          postNow() {
              console.log("ca post");
              var objet = {};
              objet.name= this.name;
              objet.price= Number(this.price);
              objet.brand= this.brand;
              console.log(objet);
              axios.post("http://localhost:8081/api/v1/products", objet)
              .then( function(res) {
                  console.log(res)
              })
              
          }
    }
}
</script>


<style scoped lang="scss">
    fieldset {
        width: 200px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
            width: 150px
        }
        button {
            width: 150px
        }
    }
    // .container {
    //     display: flex;
    //     justify-content: space-evenly
    // }
    .icon {
        cursor: pointer;
    }
</style>
