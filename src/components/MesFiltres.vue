<template>
<div>
    <button @click="test"> Filter</button>
    <div id="contain" class="container">
        <Reset></Reset>
        <hr>
        <Price></Price>
        <p>{{prix}} €</p>
        <hr>
        <Brands></Brands>
        <hr>
        <Color></Color>
        <hr>
    </div>
    </div>
</template>

<script>

import Reset from "@/components/Reset.vue"
import Price from "@/components/Price.vue"
import Brands from "@/components/Brands.vue"
import Color from "@/components/Color.vue"


export default {
    components: {
        Reset,
        Price,
        Brands,
        Color
    },



    created() {
        this.$ebus.$on("send-price", price => {
            this.prix = price;
            console.log(price);
            console.log(this.prix)
        }),
        this.$ebus.$on("reset-filter", price => {
            this.prix = 150;
        })
    },


    data () {
        return {
            prix: ""
        }
    },

    methods: {
        test() {
            var cool = document.getElementById("contain");
            cool.classList.toggle("container2");
            
    
    }
}
}

</script>


<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    height: 500px;
    margin-top: 150px;
    border: 2px solid black;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 25px;
    background: rgba($color: black, $alpha: 0.5);
    color: snow;
    position: fixed;
    top: 15px;
    left: -500px;
    transition: .5s
}

.container2 {
    top: 15px;
    left: 50px;
    transition: .5s
}

button {
    position: fixed;
    left: 100px;
    width: 150px;
    height: 50px;
    transition: .5s;
    background: rgba($color: black, $alpha: 0.5);
    border-radius: 10px

}

button:hover {
    background: #42b983;
    color: white;
    transition: .5s;
}




</style>

