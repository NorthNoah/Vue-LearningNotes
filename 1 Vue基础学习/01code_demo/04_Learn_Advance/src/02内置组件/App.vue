<template>
    <div class="home">
        <suspense>
            <template #default>
                <async-home></async-home>
            </template>
            <template #fallback>
                <h2>loading</h2>
            </template>
        </suspense>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const AsyncHome = defineAsyncComponent(() => import("./AsyncHome.vue"))

</script>


<style lang="less" scoped>
</style>
