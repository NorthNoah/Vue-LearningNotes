<template>
    <div class="city-group">
         <!-- 注意遍历对象的命名 -->
         <!-- 手动实现索引栏展示内容 -->
         <!-- <template v-for="(group, index) in groupData.cities" :key="index">
            <div class="group-item">
                <h2>标题:{{ group.group }}</h2>
                <div class="list">
                    <template v-for="(city, indey) in group.cities" :key="indey">
                        <div class="city">{{ city.cityName }}</div>
                    </template>

                </div>
            </div>
        </template> -->

        <template v-for="(group, index) in groupData.cities" :key="index">
            <van-index-bar>
                <van-index-anchor :index="group.group" />
                <template v-for="(city, indey) in group.cities" :key="indey">
                    <van-cell :title="city.cityName" />
                </template>
          </van-index-bar>
        </template>
    </div>
</template>

<script setup>
    // 此处相当于需要city.vue父组件传来group数据，在city-group中组织content的结构
    defineProps({
        groupData: {
            type: Object,
            default: () => ({})
        }
    })
</script>

<style lang="less" scoped>
</style>
