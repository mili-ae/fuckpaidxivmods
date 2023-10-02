<script setup>

    import ModCard from '../components/ModCard.vue';

</script>

<template>
    <div class="container mx-auto bg-slate-700 rounded-lg p-6 max-w-max mb-6">
      <h3 class="underline font-bold text-4xl mb-6">Browse mods</h3>
      <p class="text-lg">
        Comfortably browse for mods and mod authors via premade filters.
      </p>
    </div>
    <div class="container grid grid-cols-3 gap-3 place-self-center">
        <div class="grid grid-cols-1">
            <h3 class="bg-slate-700 text-center p-4 rounded-lg font-bold text-xl mb-2">Random Tag</h3>
            <div v-for="card in dataJson" :key="card.id" class="place-self-center last:mb-2">
                <ModCard :preview-img="card.previewImg" :mod-name="card.modName" :seen="card.seen" :likes="card.likes" class="max-w-sm"></ModCard>
            </div>
        </div>
        <div class="grid grid-cols-1">
            <h3 class="bg-slate-700 text-center p-4 rounded-lg font-bold text-xl mb-2">Random Tag1</h3>
            <div v-for="card in dataJson" :key="card.id" class="place-self-center last:mb-2">
                <ModCard :preview-img="card.previewImg" :mod-name="card.modName" :seen="card.seen" :likes="card.likes" class="max-w-sm"></ModCard>
            </div>
        </div>
        <div class="grid grid-cols-1">
            <h3 class="bg-slate-700 text-center p-4 rounded-lg font-bold text-xl mb-2">Random Tag2</h3>
            <div v-for="card in dataJson" :key="card.id" class="place-self-center last:mb-2">
                <ModCard :preview-img="card.previewImg" :mod-name="card.modName" :seen="card.seen" :likes="card.likes" class="max-w-sm"></ModCard>
            </div>
        </div>
    </div>
    <div class="container bg-slate-700 mx-auto mt-4 p-6 rounded-lg">
        <h3 class="font-bold text-xl">Here are some more commonly used filters.</h3>
        <ul class="list-disc mt-2 pl-6">
            <li>Tag</li> <!-- add routerview links later  -->
            <li>Tag1</li>
            <li>Tag2</li>
            <li>Tag3</li>
            <li>Tag4</li>
            <li>Tag5</li>
        </ul>
    </div>
</template>

<script>

    import json from '../test/testJson.json';

    export default {
        data() {
            return {
                dataJson: json
            }
        }
    }

</script>