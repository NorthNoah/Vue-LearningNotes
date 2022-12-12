import { createApp } from 'vue'
// import App from '@/01_自定义指令/App.vue'
import App from '@/04过渡动画/App.vue'
// import App from '@/02内置组件/App.vue'
//import useDirectives from "@/01_自定义指令/directives/index";
import directives from "@/01_自定义指令/directives/index";
// use传入函数，则直接调用函数，并将app传入函数内部
createApp(App).use(directives).mount('#app')
//useDirectives(app)

