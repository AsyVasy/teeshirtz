<template>
    <div>
        <div class="container">
        <div>
        <i class="fas fa-arrow-circle-left fa-5x icon" @click="goBack"></i>
        <p>Admin Page</p>
        </div>
        <!-- <h2>{{products.data[1]}} </h2> -->
        <table class="tab">
            <thead>
                <tr>
                    <th colspan="5">Produits dans la base de données</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>price</td>
                    <td>url_image</td>
                    <td>id_brand</td>                    
                </tr>
                <tr v-for="(product, n) in products.data[1]" :key="n">
                    <td>{{product.id}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.url_image}}</td>
                    <td>{{product.id_brand}}</td>
                </tr>

            </tbody>
        </table>
    <div>
     <i class="fas fa-arrow-circle-right fa-5x icon" @click="goAdd"></i>
<p>Add product</p>    </div>
    </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
              this.$router.push({name:'admin'})
          },
          goAdd() {
              this.$router.push({name:'/add'})
          }
    },
    computed: {
            products() {
                return this.$store.getters.displayProducts;
            },
        },
        created() {
    this.$store.dispatch("getBrands")
    this.$store.dispatch("getProducts")
    
    },
}

</script>

<style scoped lang="scss" >
    .icon {
        cursor: pointer     
    }
    table,
    td {
        border: 1px solid #333;
    }

    thead,
    tfoot {
        background-color: #333;
        color: #fff;
}

.tab {
    text-align: center;
    max-width: 100vw;
}

.container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px
}
</style>

