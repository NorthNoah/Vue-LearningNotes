import { onMounted, onUnmounted, ref } from "vue"
export default function useScroll() {
    const isReachBottom = ref(false)
    const scrollListenerHandler = () => {
        // 客户端页面高度
        const clientHeight = document.documentElement.clientHeight
        // 已经卷上去的高度
        const scrollTop = document.documentElement.scrollTop
        // 总高度
        const scrollHeight = document.documentElement.scrollHeight
        if (clientHeight + scrollTop >= scrollHeight) {
            isReachBottom.value = true
        }
    }

    // 挂载阶段：绑定监听器
    onMounted(() => {
        window.addEventListener("scroll", scrollListenerHandler)
    })
    // 卸载阶段：卸载监听器
    onUnmounted(() => {
        window.removeEventListener("scroll", scrollListenerHandler)
    })

    // 此处要加{}才能返回ref对象
    return { isReachBottom }
}



