<script setup>
import { RouterLink, RouterView } from 'vue-router';
import ButtonLink from './components/ButtonLink.vue';
</script>

<template>
  <header class="bg-slate-500 flex max-w-7x1 items-center justify-between p-6 lg:px-8 h-14">
    <nav class="flex justify-between p-6 lg:px-8 items-center space-x-10">
      <div class="flex lg:flex-1 items-center">
        <RouterLink to="/">
            <h2 class="hover:text-gray-300 text-4xl items-center">FPXM</h2>
        </RouterLink>
      </div>
      <div class="flex lg:flex-1 space-x-5">
        <ButtonLink button-name="Browse" to="/all" icon="io-newspaper"/>
        <ButtonLink button-name="Search" to="/search" icon="bi-search"/>
      </div>
    </nav>
    <nav>
      <div class="flex lg:flex-1 items-center p-6 lg:px-8">
        <RouterLink to="/" class="hover:bg-gray-300 hover:text-black rounded-md p-1 flex items-center space-x-3">
          <p>UserName</p>
          <img src="./images/testavatar.jpg" alt="avatar" class="rounded-full h-10 w-10">
        </RouterLink>
      </div>
    </nav>
  </header>
  <RouterView />
</template>