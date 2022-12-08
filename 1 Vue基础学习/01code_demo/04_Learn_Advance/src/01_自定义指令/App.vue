<template>
    <div class="home">
        <input type="text" v-focus>
        <h2 v-unit>{{ 111 }}</h2>
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
