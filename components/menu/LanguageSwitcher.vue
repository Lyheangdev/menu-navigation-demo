<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{ mode: "mobile" | "desktop" }>()

import VietnameIcon from '../Icon/VietnameIcon.vue';

const isShow = ref(false)
function handleToggle() {
    isShow.value = !isShow.value
}


const languageList = [
    { id: 1, value: "tiếng việt", short: "Vn", icon: "vietname" },
    { id: 2, value: "English", short: "En", icon: "english" },
]

const activeSelect = ref(languageList[0])

function handleOptionSelect(id: number) {
    const activeOption = languageList.find(x => x.id == id);
    if (activeOption) activeSelect.value = activeOption;
    handleToggle()
}

function handleMobileAutoLanguageSwitch() {
    const currentLangIndex = languageList.findIndex(x => x.id == activeSelect.value.id);
    const nextIndex = (currentLangIndex + 1 >= languageList.length) ? 0 : currentLangIndex + 1
    const nextLange = languageList[nextIndex];

    activeSelect.value = nextLange;
}

const renderList = computed(() => languageList?.filter(x => x.id != activeSelect.value.id))
</script>

<template>
    <button v-if="props.mode == 'mobile'" @click="handleMobileAutoLanguageSwitch"
        class="sm:hidden size-10 font-bold text-white bg-black rounded-full">
        {{ activeSelect.short }}
    </button>

    <div v-if="props.mode == 'desktop'" class="max-sm:hidden relative w-36 h-fit">
        <div role="button" @click="handleToggle"
            class="relative px-1.5 z-30! py-1.5 rounded-full bg-white flex items-center space-x-2 grow mx-1">
            <VietnameIcon v-if="activeSelect.icon == 'vietname'" class="size-5" />
            <span class="text-black text-sm font-bold">{{ activeSelect.value }}</span>
        </div>

        <!-- Language Options -->
        <div class="transition-all duration-200 ease-linear absolute flex z-10! -top-1 left-1/2 -translate-x-1/2 rounded-2xl bg-secondary/20 flex-col space-y-1 w-full backdrop-blur-3xl! h-0"
            :class="{ 'min-h-44 px-1 pt-12 pb-3': isShow }">
            <div v-for="language in renderList" :key="language.id" class="w-full" v-if="isShow">
                <div role="button" @click="handleOptionSelect(language.id)"
                    class="flex items-center space-x-2 px-2.5 py-1.5 w-full rounded-full bg-secondary/50">
                    <span class="text-sm">{{ language.value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>