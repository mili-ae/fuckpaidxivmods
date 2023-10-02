<script setup>
    import { Carousel, Slide, Navigation } from 'vue3-carousel';
    import ModCard from './ModCard.vue';

    defineProps({
    title: {
        type: String,
        required: true
    }
    })
</script>

<template>
    <div class="max-w-full">
        <h3 class="bg-slate-700 mb-1 p-2 text-center rounded-lg text-xl cursor-default">{{title}}</h3>
        <Carousel :items-to-show="3" :items-to-scroll="3" :mouse-drag="false" :wrap-around="true">
            <Slide v-for="slide in dataJson" :key="slide.id" class="max-w-fit">
                <ModCard :preview-img="slide.previewImg" :mod-name="slide.modName" :seen="slide.seen" :likes="slide.likes"></ModCard>
            </Slide>
            <template #addons="{ slidesCount }">
                <Navigation v-if="slidesCount > 3"/>
            </template>
        </Carousel>
    </div>
</template>

<script>
    import json from '../test/testJson.json';
    import { defineComponent } from 'vue';

    export default {
        data() {
            return {
                dataJson: json
            }
        }
    }
</script>

<style>
.carousel__prev,
.carousel__next {
    border-color: rgb(0, 0, 0);
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    transition: ease-in 150ms;
}

.carousel__prev:hover,
.carousel__next:hover {
    border-color: rgb(119, 119, 119);
}
</style>