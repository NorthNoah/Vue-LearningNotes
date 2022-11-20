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
    import useHomeStore from "@/stores/modules/home";
    import { storeToRefs } from "pinia";

    // 在页面发送请求，不要在组件中发送
    // const suggestCities = ref([])
    // yxRequest.get({
    //     url: "/home/hotSuggests"
    // }).then(res => {
    //     return suggestCities.value = res.data
    // })
    
    // 获取推荐城市数据
    const homeStore = useHomeStore()
    homeStore.fetchSuggestData()
</script>

<style lang="less" scoped>
    .banner {
        img {
            width: 100%;
        }
    }
    

</style>
