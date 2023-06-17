import { createApp } from 'vue'
import Maldavar from './Maldavar.vue'
import router from './router'
import './interceptors/axios'

const app = createApp(Maldavar)

app.use(router)

app.mount('#maldavar')
