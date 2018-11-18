<template>
    <div>
        <h3>coucou</h3>
        <h2> {{products}} </h2>
    </div>
</template>

<script>
export default {
    computed: {
            products() {
                return this.$store.getters.displayProducts;
            },
        },
}
</script>
