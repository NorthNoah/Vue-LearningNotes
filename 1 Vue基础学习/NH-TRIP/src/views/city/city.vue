<template>
    <div class="city topPage">
        <van-search 
            v-model="cityValue" 
            shape="round"
            show-action
            placeholder="城市/区域/地点" 
            @cancel="cancelClick"
        />

        <van-tabs v-model:active="active" color="var(--primary-color)">
            <van-tab title="国内·港澳台">国内区域</van-tab>
            <van-tab title="海外区域">海外区域</van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    const cityValue = ref("")
    const router = useRouter()
    const cancelClick = () => {
        router.back()
    }


</script>

<style lang="less" scoped>
    
</style>
