import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { setupApp } from '@/app/setup';
import '@/styles/index.scss';

setupApp();

createApp(App).use(createPinia()).mount('#app');
