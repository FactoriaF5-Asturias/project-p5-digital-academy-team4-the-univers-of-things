import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/authStore'  // ← ekle

const app = createApp(App)

const pinia = createPinia()  // ← önce değişkene al
app.use(pinia)               // ← sonra use et
app.use(router)

const authStore = useAuthStore()  // ← pinia'dan sonra çağır
authStore.initAuth()              // ← token kontrolü

app.mount('#app')