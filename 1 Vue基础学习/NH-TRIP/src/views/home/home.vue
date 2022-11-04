<template>
    <home-nav></home-nav>
    <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="location">
        <div class="city">广州</div>
        <div class="position">
            <span class="text">我的位置</span>
            <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
    </div>
</template>

<script setup>
    import HomeNav from "./cpns/home-nav-bar.vue";
</script>

<style lang="less" scoped>
    .banner {
        img {
            width: 100%;
        }
    }
    .location {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;

        .city {
            //自动占据多余空间
            flex: 1;
        }

        .position  {
            width: 74px;
            //竖直方向对齐
            display: flex;
            align-items: center;

            .text {
                position: relative;
                top: 2px;
                font-size: 12px;
            }

            img {
                margin-left: 5px;
                width: 18px;
                height: 18px;
            }
        }
    }


</style>
