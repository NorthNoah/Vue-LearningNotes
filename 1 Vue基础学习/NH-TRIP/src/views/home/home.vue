<template>
    <div class="home">
        <home-nav></home-nav>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <home-search-box></home-search-box>
        <home-categories></home-categories>
        <button @click="btnClick">加载更多</button>
        <home-content></home-content>
    </div>
   
    
</template>

<script setup>
    import { watch } from "vue";
    import HomeNav from "./cpns/home-nav-bar.vue";
    import HomeSearchBox from "./cpns/home-search-box.vue";
    import useHomeStore from "@/stores/modules/home";
    import HomeCategories from "@/views/home/cpns/home-categories.vue";
    import HomeContent from "@/views/home/cpns/home-content.vue";
    import useScroll from "@/hooks/useScroll";
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
    // const btnClick = () => {
    //     // curPage++
    //     homeStore.fetchHouselistData()
    // }
    
    // 监听滚动到底部
    // window.addEventListener("scroll", () => {
    //     // 客户端页面高度
    //     const clientHeight = document.documentElement.clientHeight
    //     // 已经卷上去的高度
    //     const scrollTop = document.documentElement.scrollTop
    //     // 总高度
    //     const scrollHeight = document.documentElement.scrollHeight
    
    //     if (clientHeight + scrollTop >= scrollHeight) {
    //         homeStore.fetchHouselistData()
    //     }
    // })
    
    // 监听滚动到底部
    const { isReachBottom } = useScroll()
    console.log(isReachBottom)
    // watch flag变量的改变，一旦为true则发送新的网络请求；
    // 当网络请求发送成功后，回调函数将flag重置为false
    watch(isReachBottom, (newVal) => {
        if (newVal) {
            homeStore.fetchHouselistData().then(() => {
                isReachBottom.value = false
            })
        }
    })


</script>

<style lang="less" scoped>
    .home {
        padding-bottom: 60px;
    }
    .banner {
        img {
            width: 100%;
        }
    }
    

</style>
