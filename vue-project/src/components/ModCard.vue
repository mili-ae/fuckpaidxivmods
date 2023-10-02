<script setup>
    defineProps({
        previewImg: {
            type: String,
            required: false
        },
        modName: {
            type: String,
            required: true
        },
        seen: {
            type: Number,
            required: false,
            default: 0
        },
        likes: {
            type: Number,
            required: false,
            default: 0
        }
    })
</script>

<template>
    <div class="m-1 border-md bg-slate-700 p-1 rounded-md">
        <img :src="previewImg" alt="mod preview image" class="rounded-md">
        <div class="flex w-full p-2 content-center justify-between">
            <span class="cursor-default flex font-bold text-lg w-fit place-items-center">
                <p>
                    {{ modName }}
                </p>
            </span>
            <span>
                <p>
                    <v-icon name="fa-regular-eye" scale="1" />
                    {{ seen }}
                </p>
                <p>
                    <v-icon name="bi-heart-fill" scale="1" />
                    {{ likes }}
                </p>
            </span>
        </div>
    </div>
</template>