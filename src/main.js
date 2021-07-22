import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlus from './plugins/element-plus'
import 'styles/index.scss'
createApp(App)
    .use(router)
    .use(store)
    .use(elementPlus)
    .mount('#app')
