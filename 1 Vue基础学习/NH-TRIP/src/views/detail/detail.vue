<template>
    <div class="detail topPage">
        <detail-nav></detail-nav>
        <div class="main" v-if="mainPart">
            <detail-swipe :swipeData="mainPart.topModule.housePicture.housePics"></detail-swipe>
            <detail-infos :topInfos="mainPart.topModule"></detail-infos>
            <detail-facility :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
            <detail-landlord :landlord="mainPart.dynamicModule.landlordModule"></detail-landlord>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import getDetailInfos from "@/service/modules/detail";
    import DetailNav from "./cpns/detail_01-nav.vue";
    import DetailSwipe from "./cpns/detail_02-swipe.vue";
    import DetailInfos from "./cpns/detail_03-infos.vue";
    import DetailFacility from "./cpns/detail_04-facility.vue";
    import DetailLandlord from "./cpns/detail_05-landlord.vue";
    const route = useRoute()
    const homeId = route.params.id

    // 在页面内管理数据，返回promise后用then回调函数
    const detailInfos = ref({})
    // 技巧：用计算属性导出其中一个的属性
    getDetailInfos(homeId).then(res => {
        detailInfos.value = res.data
    })

    const mainPart = computed(() => detailInfos.value.mainPart)
    console.log(mainPart)
</script>

<style lang="less" scoped>
</style>
