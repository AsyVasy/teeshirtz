<template>
    <div>
        <div class="container">
            <h2>Admin page</h2>
            <router-link :to="`/admin/products`">List Product</router-link> |
            <router-link :to="`/admin/products/add`">Add Product</router-link>


        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
    .container {
        h2 {
            color: blue
        }
        width: 80vw;
        height: 80vh;
        margin: auto;
        background:rgba($color: grey, $alpha: 0.2);
    }
</style>
