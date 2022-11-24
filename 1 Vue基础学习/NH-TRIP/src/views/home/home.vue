<template>
    <home-nav></home-nav>
    <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
    <home-content></home-content>
    <button @click="btnClick">加载更多</button>
    
</template>

<script setup>
    import HomeNav from "./cpns/home-nav-bar.vue";
    import HomeSearchBox from "./cpns/home-search-box.vue";
    import useHomeStore from "@/stores/modules/home";
    import HomeCategories from "@/views/home/cpns/home-categories.vue";
    import HomeContent from "@/views/home/cpns/home-content.vue";
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
    homeStore.fetchCategoriesData()


    // 请求分页的房间列表数据
    // let curPage = 1
    homeStore.fetchHouselistData()
    const btnClick = () => {
        // curPage++
        homeStore.fetchHouselistData()
    }

</script>

<style lang="less" scoped>
    .banner {
        img {
            width: 100%;
        }
    }
    

</style>
