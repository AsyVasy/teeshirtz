<template>
<div class="container">
     <div class="produits" v-for="(produit, n) in products.data[1]" :key="n">
        <div v-if="produit.price <= prix">
            <div v-for="(brand, m) in byBrands" :key="m">
                <div v-if="brand === produit.id_brand || byBrands.length === 1">
                    <div class="card">
                        <img class="cardimg" :src="produit.url_image" :alt="produit.name">
                        <div class="cardcontain" @click="test(produit)">
                            <h4 class="cardtitle">{{produit.name}}</h4>
                            <!-- <h4 class="cardtitle"><router-link :to="`/detail`" target="_blank" @click="setDetail(produit)" >{{produit.name}}</router-link></h4> -->
                            <div class="cardtext">{{produit.price}}€
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {

        computed: {
            products() {
                return this.$store.getters.displayProducts;
            },
        },
        
        data() {
            return {

                prix : 150,
                byBrands : [],
                byColor: [],
                detailWeWant: ["coucou"]
                }
        },
        methods: {

            test(produit) {
                this.detailWeWant = produit;
                console.log(this.detailWeWant);
                this.$router.push({name:'detail',params:{produit}})
            },

            setDetail(produit) {
            this.detailWeWant = produit;
            this.$ebus.$emit("send-detail", this.detailWeWant)
            },
        },
        created() {
            this.$store.dispatch("getProducts")

            this.$ebus.$on("send-price", price => {
                this.prix = price;
            });

            this.$ebus.$on("send-brandsFilter", brandsFilter => {
                this.byBrands = brandsFilter;});
            
            this.$ebus.$emit("send-produits", this.produits)
        },

        updated() {
            this.$ebus.$on("send-colorFilter", colorFilter => {
                this.byColor = colorFilter;
            });
            
            this.$ebus.$emit("send-detail", this.detailWeWant)
        },
        
        
        props: ['brand']
    }
</script>

<style scoped lang="scss">

    .container {
        width: auto;
        max-width: 40vw;
        height:auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 25px;
        

        .produits {
            background: white;
            height: 230px;
            cursor: pointer;

            
            .card {
                border: 2px solid;
                width: 150px;
                height: 230px;
                display: flex;
                flex-direction: column;
                justify-content: center;;
                align-items: center;
                text-align: center;
                

                .cardcontain {
                    transition: .5s
                }
                .cardcontain:hover {
                    color: #42b983;;
                    transition: .5s;
                    background: rgba($color: grey, $alpha: 0.2);;
                    border-radius: 10px
                }

                
                .cardimg {
                    width: 100px;
                    transition: .5s
                }
                .cardimg:hover {
                    transform: scale(1.8); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
                    transition: .5s;
                    border-radius: 10px;
                    border: solid 2px black
                    }                   
            }
            .card:hover {
                box-shadow: 0 10px 16px 0 rgba(0,0,0,0.9);
                transition: .5s
            }
        }
    }
</style>