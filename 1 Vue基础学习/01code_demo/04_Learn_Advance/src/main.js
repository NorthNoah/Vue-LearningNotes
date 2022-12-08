import { createApp } from 'vue'
import App from '@/01_自定义指令/App.vue'
import useDirectives from "@/01_自定义指令/directives/index";
const app = createApp(App)
useDirectives(app)

app.mount('#app')
