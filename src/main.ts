import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import "./assets/main.css";
import "./assets/normalize.css";
import "./assets/fonts/caviar-dreams/stylesheet.css";
import "./assets/fonts/montserrat/stylesheet.css";
import "./assets/icons/icon-v1.css";

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
