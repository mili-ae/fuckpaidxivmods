<script setup>
    import { Carousel, Slide, Navigation } from 'vue3-carousel';

    defineProps({
    title: {
        type: String,
        required: true
    }
    })
</script>

<template>
    <div class="md:h-auto">
        <h3 class="bg-slate-500 mb-1 p-2 text-center rounded-lg text-xl cursor-default">{{title}}</h3>
        <Carousel :items-to-show="3" :breakpoints="breakpoints" class="space-x-4">
            <Slide v-for="slide in 10" :key="slide" class="h-auto">
                <div class="align-baseline m-3 bg-black bg-opacity-50">
                    <p class="cursor-default">TestName</p>
                    <img src="../images/itemimageplaceholder.png" alt="">
                </div>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script>
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
}
</script>