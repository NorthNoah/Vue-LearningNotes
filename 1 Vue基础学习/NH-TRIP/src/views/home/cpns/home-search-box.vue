<template>
    <div class="home-search-box">
        <!-- 位置信息 -->
        <div class="location">
            <div class="city" @click="chooseCity">{{ curCity.cityName }}</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>

        <!-- 日期范围 -->
        <div class="date-range section" @click="showCalender = true">
            <div class="start">
                <div class="date">
                    <div class="tip">入住</div>
                    <div class="time">{{ startDate }}</div>
                </div>
               
            </div>

            <div class="stay">共{{ diffDays }}晚</div>

            <div class="end">
                <div class="date">
                    <div class="tip">离店</div>
                    <div class="time">{{ endDate }}</div>
                </div>
            </div>
        </div>

        <div class="calender">
            <van-calendar 
            v-model:show="showCalender" 
            color=var(--primary-color)
            type="range"
            @confirm="onConfirm"/>
        </div>

        <!-- 价格和人数选择 -->
        <div class="condition section bottom-gray-line">
            <div class="price">价格不限</div>
            <div class="people">人数不限</div>
        </div>

        <!-- 关键字 -->
        <div class="keyword section bottom-gray-line">关键字/位置/民宿名</div>


        <!-- 热门建议 -->
        <div class="hot-suggest section">
            <template v-for="(item, index) in suggestData" :key="index">
                <div 
                    class="item"
                    :style="{ color: item.tagText.color, backgroud: item.tagText.backgroud.color }"
                >
                    {{ item.tagText.text }}
                </div>
             </template>           
        </div>
    </div>



</template>

<script setup>
    import { ref } from "vue";
    import { storeToRefs } from "pinia";
    import { useRouter } from "vue-router";
    import useCityStore from "@/stores/modules/city";
    import { formatMonthDay, getDaysDiff } from "@/utils/date-format";
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

    // 解构获取curCity
    const cityStore = useCityStore()
    const { curCity } = storeToRefs(cityStore)

    
    // 日历
    const showCalender = ref(false)
    // 现在时间，未来时间
    const nowDate = new Date()
    const newDate = nowDate.setDate(nowDate.getDate() + 1)
    // 格式化
    const startDate = ref(formatMonthDay(nowDate))
    const endDate = ref(formatMonthDay(newDate))

    // 时间差
    const diffDays = ref(getDaysDiff(newDate, nowDate))

    const onConfirm = (values) => {
        const [start,end] = values
        // 注意赋值必须都是赋给value
        startDate.value = formatMonthDay(start)
        endDate.value = formatMonthDay(end)
        diffDays.value = getDaysDiff(start, end)
        showCalender.value = false 
    }


    // 定义父组件传来的参数
    defineProps({
        suggestData: {
            type: Array,
            default: () => []
        }
    })



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

    .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        color: #999;
        height: 44px;
        .tip {
            color: #999;
            font-size: 12px;
        }
        .date {
            color: #333;

            .time {
                margin-top: 10px;
            }
        }
        .price {
            font-size: 12px;
        }

        .people {
            font-size: 12px;
        }
       
    }
    .hot-suggest {
        .item {
            padding: 3px 5px;
        }
    }
   
    

</style>
