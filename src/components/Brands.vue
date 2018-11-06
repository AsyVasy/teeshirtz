<template>
     <div class="brands">
            <ul>
                <li v-for="(produit, n) in products" :key="n"><input checked :id="n" type="checkbox"   autofocus  :value="produit.brand" v-model="brandsFilter">{{produit.brand}}</li>
            </ul>
     </div>
</template>

<script>
export default {
    data() {
        return {
            products: "",
            brandsFilter : ["hello"]
        }
    },
    methods: {
        test2(id) {
            var test = document.getElementById(id);
            console.log(this.brandsFilter)
        },
        test() {
            console.log(this.brandsFilter)
        },
        // filter(i, brandToFilter) {
        //     this.brandsFilter.forEach(function(element) {
        //         if (element === this.products[i]) {
        //             this.brandsFilter.slice(element);
        //         } else {
        //             this.brandsFilter.push(this.products[i]);
        //         }
        //     });
        //     console.log(this.brandsFilter)
        // }
    },
    created() {
        this.$ebus.$on("send-produits", produits => {
            this.products = produits
            })
        this.$ebus.$on("reset-filter", brandsFilter => {
            this.brandsFilter = ["hello"]
        })
    },
    updated() {
        this.$ebus.$emit("send-brandsFilter", this.brandsFilter)
}
}
</script>


<style lang="scss" scoped>
    .brands {
        height: 200px;
        width: 100%;
        background: rgba($color: black, $alpha: 0.7);
        overflow-x: auto;
        ul {
            text-align: left;
            margin-left: -40px;
            li {
                list-style: none;
                input {
                    width: 25px
                }
            }
        }
    }
    
    
</style>
