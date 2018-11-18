<template>
    <div>
         <div class="reset">
            <button @click="reset">reset filter</button>
        </div>

    </div>
</template>


<script>
export default {
    methods: {


        

        reset() {
            this.$ebus.$emit("reset-filter", "resetButton")
        }





    }


    
}
</script>
