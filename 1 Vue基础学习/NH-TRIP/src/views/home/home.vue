<template>
    <home-nav></home-nav>
    <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
</template>

<script setup>
    import HomeNav from "./cpns/home-nav-bar.vue";
    import HomeSearchBox from "./cpns/home-search-box.vue";
</script>

<style lang="less" scoped>
    .banner {
        img {
            width: 100%;
        }
    }
    

</style>
