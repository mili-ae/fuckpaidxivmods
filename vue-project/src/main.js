import './assets/main.css';
import 'vue3-carousel/dist/carousel.css'

import { createApp } from 'vue';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import App from './App.vue';
import router from './router';
import Vueform from '@vueform/vueform/plugin'
import vueformConfig from './../vueform.config'

import { BiSearch,
    LaDiceSolid,
    IoNewspaper,
    BiDiscord,
    LaPatreon,
    FaRegularEye,
    BiHeartFill,
    BiQuestionSquare,
    BiQuestionLg } from "oh-vue-icons/icons";

addIcons(BiSearch,
    LaDiceSolid,
    IoNewspaper,
    BiDiscord,
    LaPatreon,
    FaRegularEye,
    BiHeartFill,
    BiQuestionSquare,
    BiQuestionLg);

const app = createApp(App);

app.use(router);
app.use(Vueform, vueformConfig);
app.component("v-icon", OhVueIcon);
app.mount('#app');
