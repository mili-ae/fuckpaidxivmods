<script setup>
    import { RouterLink } from 'vue-router';

    defineProps({
        buttonName: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false
        },
        iconScale: {
            type: String,
            required: false,
            default: "1"
        },
        style: {
            type: String,
            required: false,
            default: "hover:bg-gray-300 hover:text-black rounded-md p-1 flex items-center space-x-1"
        }
    })
</script>

<template>
    <RouterLink :to="to" :class="style">
        <v-icon :name="icon" :scale="iconScale" />
        <p>{{ buttonName }}</p>
    </RouterLink>
</template>