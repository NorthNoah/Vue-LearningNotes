import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    // 历史记录：哈希写法
    history: createWebHashHistory(),

    // 映射关系:path -> component
    routes: [
        // 首先写默认路径/,重定向到首页
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: () => import ("@/views/home/home.vue")
        },
        {
            path: "/favor",
            component: () => import ("@/views/favor/favor.vue")

        },
        {
            path: "/message",
            component: () => import ("@/views/message/message.vue")
        },
        {
            path: "/order",
            component: () => import ("@/views/order/order.vue")
        }

    ]
})

export default router