<template>
    <div class="color">
            <div v-for="(product, n) in products" :key="n">
                
                <div class="cube" @click="addColor(product.color)" :style="{'background': product.color ? product.color : 'pink' }"></div>

            </div>
            <select name="" id="" value="all">
                <option v-for="(produit, l) in products" :key="l" :value="produit.color"><span :style="{background: produit.color}">{{produit.color}}</span></option>
            </select>
        </div>
</template>

<script>
export default {
    data() {
        return {
            products: "",
            colorFilter: []
        }
    },
    methods: {
        test() {
            console.log(this.products);
        },
        addColor(color) {
            this.colorFilter = [];
            this.colorFilter.push(color);
            this.$ebus.$emit("send-colorFilter", this.colorFilter)
            console.log(this.colorFilter)
        }
    },
    created() {
        this.$ebus.$on("send-produits", produits => {
            this.products = produits
            }),
            this.$ebus.$on("reset-filter", brandsFilter => {
            this.colorFilter = [],
            console.log(this.colorFilter)
            })
    },
}
</script>



<style lang="scss" scoped>
.color {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 150px;
    overflow: auto;
    height: 75px;
    padding-top: 10px
}

.cube {
    height: 15px;
    width: 15px;
    background: green;
    margin: 5px;
    cursor: pointer;
    animation: rotate 5s infinite;

}

@keyframes rotate {
    0% {

    }
    100% {
        transform: rotate(180deg)
    }
    
}
</style>

