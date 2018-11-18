<template>
    <div class="price">
        <p>Price Max</p>
        <input type="range" min="0" max="150" v-model="price">
        <div class="prix">
            <input id="price" type="number" min="0" max="150" v-model="price"><p>€</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            price: 150
        }
        
    },    
updated() {
        this.$ebus.$emit("send-price", this.price)
    },

created() {
        this.$ebus.$on("reset-filter", () => {
            this.price = 150
        })
}
}
</script>

<style lang="scss" scoped>
    .prix {
        display: flex
    }
    #price {
        width: 50px;
        background: rgba($color: black, $alpha: 0.8);
        color: snow;
        border-radius: 10px;
        text-align: center
    }
</style>
