<script setup>
    // import TabBar from "@/components/tab-bar/tab-bar.vue";
    import TabBar from "@/components/tab-bar/tab-bar_02.vue";
    import Home from "@/views/home/home.vue";
</script>

<template>
    <!-- <router-view></router-view>
    <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link> -->
    <div class="app">
        <router-view></router-view>
        <tab-bar></tab-bar>
    </div>
</template>

<style scoped>

</style>
