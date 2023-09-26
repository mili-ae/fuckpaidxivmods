import './assets/main.css';
import 'vue3-carousel/dist/carousel.css'
// import './assets/reset.css';

import { createApp } from 'vue';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import App from './App.vue';
import router from './router';

import { BiSearch,
    LaDiceSolid,
    IoNewspaper,
    BiDiscord,
    LaPatreon } from "oh-vue-icons/icons";

addIcons(BiSearch,
    LaDiceSolid,
    IoNewspaper,
    BiDiscord,
    LaPatreon);

const app = createApp(App);

app.use(router);
app.component("v-icon", OhVueIcon);
app.mount('#app');
