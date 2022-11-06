<template>
    <div class="home-search-box">
        <div class="location">
            <div class="city" @click="chooseCity">广州</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router";
    const positionClick = () => {
        navigator.geolocation.getCurrentPosition((res) => {
            console.log("已经获取成功", res)
        },(err) => {
            console.log("位置获取失败", err)
        })
    }
    const router = useRouter()
    const chooseCity = () => {
        router.push("/city")
    }

</script>

<style lang="less" scoped>
    .location {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;

        .city {
            //自动占据多余空间
            flex: 1;
            color: #333;
            font-size: 15px;
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
                color: #666;
            }

            img {
                margin-left: 5px;
                width: 18px;
                height: 18px;
            }
        }
    }

</style>
