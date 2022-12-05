<script setup>
    // import TabBar from "@/components/tab-bar/tab-bar.vue";
    import TabBar from "@/components/tab-bar/tab-bar_02.vue";
    import Loading from "@/components/loading/loading.vue";
    import { useRoute } from "vue-router";
    const route = useRoute()
</script>

<template>
    <div class="app">
        <keep-alive include="home"> 
            <router-view></router-view>
        </keep-alive>
        <!-- <tab-bar v-if="!route.meta.hideTabBar"></tab-bar> -->
        <tab-bar></tab-bar>
        <loading></loading>
    </div>
</template>

<style scoped>


</style>
