import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import strings from './assets/strings.json';

const i18n = createI18n({
    locale: 'en',
    messages: strings
})

createApp(App).mount('#app')

App.use(i18n);

export default i18n;
