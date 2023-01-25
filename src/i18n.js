import strings from './assets/strings.json';
import { createI18n } from 'vue-i18n';
import { createApp } from 'vue';

const i18n = createI18n({
    locale: sessionStorage.getItem('locale') || 'en',
    messages: strings
});

export default i18n;