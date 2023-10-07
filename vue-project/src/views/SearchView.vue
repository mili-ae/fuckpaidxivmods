<script setup>
    import ModCard from "../components/ModCard.vue"
</script>

<template>
    <div class="container mx-auto bg-slate-700 rounded-lg p-6">
        <h1 class="text-4xl">Search for Mods</h1>
        <div class="relative text-gray-600 mt-2 grid grid-flow-col place-content-between">
            <div id="search" class="col-span-5">
                <input type="search" name="search" placeholder="Search mods..." class=" w-full bg-white h-10 px-3 pr-3 rounded-l-md text-sm focus:outline-none">
                <button type="submit" class="absolute bg-white h-10 rounded-r-md pl-2 pr-2 text-sm focus:outline-none">
                    Search
                    <v-icon name="bi-search" scale="1" />
                </button>
            </div>
            <Vueform class="w-full text-black col-span-5">
                <MultiselectElement
                name="TomSelect"
                floating="Filter"
                placeholder="Change your filter here"
                :search="true"
                :groups="true"
                :clear-on-select="true"
                :hide-selected="false"
                :close-on-select="false"
                :items="[
                    {
                        label: 'Body Mods',
                        items: ['Body Replacement', 'Hair']
                    },
                    {
                        label: 'Other Mods',
                        items: ['Test1', 'Test2', 'Test2', 'Test3', 'Test4', 'Test5',]
                    }]" />
            </Vueform>
            <button type="submit" class="bg-white h-10 rounded-md pl-2 pr-2 text-sm focus:outline-none">
                NSFW
                <v-icon name="bi-question-lg" scale="1" />
            </button>
        </div>
    </div>
    <div id="modBody" class="container mx-auto mt-6 mb-2 grid grid-cols-4 grid-rows-4">
        <div id="modList" v-for="card in dataJson" :key="card.id" class="">
            <ModCard :preview-img="card.previewImg" :mod-name="card.modName" :seen="card.seen" :likes="card.likes" class="max-w-sm"></ModCard>
        </div>
    </div>
    <div class="container mx-auto flex items-center justify-between border-t border-gray-200 transparent px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black">Previous</a>
            <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black">Next</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-white">
                    Showing
                    <span class="font-medium">1</span>
                    to
                    <span class="font-medium">16</span>
                    of
                    <span class="font-medium">97</span>
                    results
                </p>
            </div>
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">Previous</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:outline-offset-0" -->
                    <!-- Change all links to RouterLinks later -->
                    <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0">2</a>
                    <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                    <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                    <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0">9</a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0">10</a>
                    <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">Next</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import json from '../test/searchTest.json';

    export default {
        data() {
            return {
                dataJson: json
            }
        }
    }
</script>