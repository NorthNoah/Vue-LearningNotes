<template>
    <div class="home">
        <teleport to="#abc">
            <hello-world></hello-world>
        </teleport>
    </div>
</template>

<script setup>
import HelloWorld from "./HelloWorld.vue";

</script>


<style lang="less" scoped>
</style>
