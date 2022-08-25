import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router';
import store from "@/store";

// 创建vue实例
const app = createApp(App)
// 挂载pinia
app.use(store)
// 挂载路由
app.use(router)
// 挂载实例
app.mount('#app')