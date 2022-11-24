<template>
    <div class="content">
        <div class="title">
            <h2>热门推荐</h2>
        </div>
        <div class="list">
            <template v-for="(item, index) in houselist" :key="item.data.houseId">
                <h3 v-if="item.discoveryContentType === 9">type-9: {{ item.data.houseName }} </h3>
                <h3 v-else-if="item.discoveryContentType === 3">type-3: {{ item.data.houseName }} </h3>
            </template>
        </div>
    </div>
</template>

<script setup>
    import useHomeStore from '@/stores/modules/home';
    import { storeToRefs } from 'pinia';
    const homeStore = useHomeStore()
    const { houselist } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
    .content {
        padding: 10px 8px;
        .title {
            font-size: 14px;
            padding: 10px;
        }
    }
</style>
