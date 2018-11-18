<template>
     <div class="brands">
            <ul>
                <li v-for="(elm, n) in brands.data[1]" :key="n"><input checked :id="n" type="checkbox"   autofocus  :value="elm.id" v-model="brandsFilter">{{elm.name}}</li>
            </ul>
     </div>
</template>

<script>
export default {
    computed: {
            products() {
                return this.$store.getters.displayProducts;
            },
            brands() {
                return this.$store.getters.displayBrands;
                }
        },
    data() {
        return {
            brandsFilter : ["hello"]
        }
    },
    methods: {
        
        test2() {
            console.log(this.brands)
        }
       
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
        this.$store.dispatch("getProducts")
        this.$store.dispatch("getBrands")
        
        this.$ebus.$on("reset-filter", () => {
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
