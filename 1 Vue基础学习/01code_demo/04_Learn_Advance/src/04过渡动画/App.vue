<template>
    <div class="home">
        <div class="transition">
            <transition name="noah">
                <h2 v-if="isShow">
                    龙场悟道龙场悟道龙场悟道龙场悟道龙场悟道
                    龙场悟道龙场悟道龙场悟道龙场悟道龙场悟道
                    龙场悟道龙场悟道龙场悟道龙场悟道龙场悟道龙场悟道
                    龙场悟道龙场悟道龙场悟道龙场悟道龙场悟道龙场悟道
                    龙场悟道龙场悟道龙场悟道龙场悟道
                </h2>
            </transition>
        </div>
        <button @click="isShow = !isShow">切换显示</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(false)
</script>

<style scoped>
.noah-enter-active {
    animation: noahAnim 2s ease;
}

.noah-leave-active {
    /*animation: noahLeaveAnim 2s ease; */
    animation: noahAnim 2s ease reverse;

}
@keyframes noahAnim {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    50% {
        transform: scale(1.2);
        opacity: 0.5;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes noahLeaveAnim {
    0% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(-500px);                  
        opacity: 0;
    }
}


</style>
