import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$filters={
    truncateName(value, length) {
    if (value.length > length) {
      return value.substring(0, length) + '...';
    }
    return value;
  }

}
app.use(createPinia())
app.use(router)

app.mount('#app')
