<script setup>
import ModCarousel from './ModCarousel.vue'
</script>

<template>
  <body class="container mx-auto grid place-content-center content-start cursor-default overflow-hidden h-full">
    <div class="container mx-auto bg-slate-700 rounded-lg p-6 text-center max-w-max">
      <h3 class="underline font-bold text-2xl mb-6">42,069 paid mods for free for people with common sense</h3>
      <p class="text-lg">
        Fuck Paid XIV Mods is a place for people to easily find and download leaked paid XIV mods.
        <br/> 
        Because mods must be free.
      </p>
      <div class="mt-6">
        <a to="#" class="hover:text-purple-400 place-content-center object-contain">
          <v-icon name="bi-discord" scale="2" animation="wrench" hover />
        </a>
      </div>
    </div>
    <div class="mt-5">
      <div class="">
        <ModCarousel title="New and Updated mods"></ModCarousel>
      </div>
      <div class="mt-4 mb-4">
        <ModCarousel title="Popular mods"></ModCarousel>
      </div>
    </div>
  </body>
</template>
