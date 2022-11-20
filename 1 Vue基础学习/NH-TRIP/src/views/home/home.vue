<template>
    <home-nav></home-nav>
    <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box :suggestData="suggestCities"></home-search-box>
    
</template>

<script setup>
    import HomeNav from "./cpns/home-nav-bar.vue";
    import HomeSearchBox from "./cpns/home-search-box.vue";
    import yxRequest from "@/service/request";
    import { ref } from "vue";
    // 在页面发送请求，不要在组件中发送

    
    const suggestCities = ref([])
    yxRequest.get({
        url: "/home/hotSuggests"
    }).then(res => {
        return suggestCities.value = res.data
    })

</script>

<style lang="less" scoped>
    .banner {
        img {
            width: 100%;
        }
    }
    

</style>
