<template>
    <div class="container">
        <div class="produits" v-for="(produit, n) in produits" :key="n" v-if="produit.price <= prix">
            <div v-for="(brand, m) in byBrands" :key="m" v-if="brand === produit.brand || byBrands.length === 1">
                <div class="card">
                    <img class="cardimg" :src="produit.image" :alt="produit.name">
                    <div class="cardcontain">
                        <h4 class="cardtitle">{{produit.name}}</h4>
                        <div class="cardtext">{{produit.price}}€</div>
                    </div>
                </div>
            </div>
            <div>
            
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                produits: [
                    { brand: 'Bear', name: 'T-Shirt The Bear', image: require("../assets/images/bear-blue.jpg"), price: 10, color:"blue"},
                    { brand: 'Wiki', name: 'T-Shirt WikiPedia', image: require("../assets/images/blue-wiki.jpg"), price: 20, color:"blue"},
                    { brand: 'Dragon Ball z', name: 'T-Shirt Dragon Ball Z ', image: require("../assets/images/dbz-black.jpg"), price: 23, color:"black"  },
                    { brand: 'Geek', name: 'T-Shirt Geek', image: require("../assets/images/geek-green.jpg"), price: 25, color:"green"  },
                    { brand: 'Nintendo', name: 'T-Shirt Mario Bros', image: require("../assets/images/mario-white.jpg"), price: 55, color:"white"  },
                    { brand: 'Petanque', name: 'T-Shirt Pétanque', image: require("../assets/images/petanque-blue-red.jpg"), price: 75, color:"red"  },
                    { brand: 'Dieudonné', name: 'T-Shirt Dieudonné', image: require("../assets/images/purple-gooze.jpg"), price: 150, color:"purple"  },
                    { brand: 'DC', name: 'T-Shirt Superman', image: require("../assets/images/superman-blue.jpg"), price: 12, color:"blue"  },
                    { brand: 'Unkut', name: 'T-Shirt Unkut rouge', image: require("../assets/images/unkut-red.jpg"), price: 7, color:"red"  },
                ],
                prix : 150,
                byBrands : [],
                byColor: [],
                

           }
        },
        methods: {
                    test() {
                        console.log(this.byColor)
                    }
                },
        created() {
            this.$ebus.$on("send-price", price => {
                this.prix = price;
            });
            this.$ebus.$on("send-brandsFilter", brandsFilter => {
                this.byBrands = brandsFilter;

            });
            

            this.$ebus.$emit("send-produits", this.produits)
        },
        updated() {
            this.$ebus.$on("send-colorFilter", colorFilter => {
                this.byColor = colorFilter;

            });
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
            
            
            .card {
                border: 2px solid;
                width: 150px;
                height: 230px;
                display: flex;
                flex-direction: column;
                justify-content: center;;
                align-items: center;
                text-align: center;

                
                .cardimg {
                    width: 100px;
                   
                }
            }
            .card:hover {
                box-shadow: 0 10px 16px 0 rgba(0,0,0,0.9);
                transition: .5s
            }
        }
    }
</style>