<template>
    <div class="detail">
        <van-nav-bar
            title="房屋详情"
            left-text="旅途"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import getDetailInfos from "@/service/modules/detail";
    const router = useRouter()
    const route = useRoute()
    const homeId = route.params.id

    // 在页面内管理数据，返回promise后用then回调函数
    const detailInfos = ref({})
    // 技巧：用计算属性导出其中一个的属性
    const minPart = computed(() => detailInfos.value.minPart)
    getDetailInfos(homeId).then(res => {
        console.log(res)
        detailInfos.value = res.data
    })

    const onClickLeft = () => {
        router.back()
    }
</script>

<style lang="less" scoped>
</style>
