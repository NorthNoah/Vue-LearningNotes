<template>
    <div class="tab-bar">
        <div class="tab-item">
            <img src="@/assets/img/tabbar/tab_home.png" alt="">
            <span class="text">首页</span>
        </div>

        <div class="tab-item">
            <img src="@/assets/img/tabbar/tab_favor.png" alt="">
            <span class="text">收藏</span>
        </div>

        <div class="tab-item">
            <img src="@/assets/img/tabbar/tab_order.png" alt="">
            <span class="text">订单</span>
        </div>

        <div class="tab-item">
            <img src="@/assets/img/tabbar/tab_message.png" alt="">
            <span class="text">消息</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    .tab-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
