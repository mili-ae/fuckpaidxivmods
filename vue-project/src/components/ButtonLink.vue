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
        }
    })
</script>

<template>
    <RouterLink v-bind:to="to" class="hover:bg-gray-300 hover:text-black rounded-md p-1 flex items-center space-x-1">
        <v-icon v-bind:name="icon" v-bind:scale="iconScale" />
        <p>{{ buttonName }}</p>
    </RouterLink>
</template>