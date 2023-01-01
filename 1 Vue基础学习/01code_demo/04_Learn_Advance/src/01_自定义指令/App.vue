<template>
    <div class="home">
        <input type="text" v-focus>
        <h2 v-unit>{{ 111 }}</h2>
        <h2 v-ftime="'YYYY/MM/DD'">{{ 19898989898989898 }}</h2>
    </div>
</template>

<script setup>
    const vUnit = {
        mounted(el) {
            const defaultText = el.textContent
            el.textContent = "￥" + defaultText
        },
    }
    

</script>


<style lang="less" scoped>
</style>
