import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router'

import { createRedux } from "./plugins/pluginReduxTool";
import { store } from "./storesReduxTool/store";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createRedux(store))

app.mount('#app')
