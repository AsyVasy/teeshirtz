<template>
    <div>
        <div class="container">
            <h2>Page admin</h2>
            <router-link :to="`/list`" target="_blank" >List Product</router-link>
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
