import { createApp } from 'vue';
import Buefy from 'buefy';
import '@fortawesome/fontawesome-free/css/all.css';
import './scss/main.scss';
import './style.scss';
import App from './App.vue';

createApp(App).use(Buefy).mount('#app');
