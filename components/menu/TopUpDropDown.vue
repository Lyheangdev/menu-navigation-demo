<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

import PlusIcon from '../Icon/PlusIcon.vue';
import TopUpGoldIcon from '../Icon/TopUpGoldIcon.vue';
import TopUpKingIcon from '../Icon/TopUpKingIcon.vue';
import TopUpSiliverIcon from '../Icon/TopUpSiliverIcon.vue';
import XIcon from '../Icon/XIcon.vue';

const isShow = ref(false)
function handleToggle() {
    isShow.value = !isShow.value
}


const topUpList = [
    { id: 1, value: 1000, icon: "gold" },
    { id: 2, value: 20.000, icon: "siliver" },
    { id: 3, value: 30.000, icon: "king" }
]

const activeTopUp = ref(topUpList[0])

function handleOptionSelect(id: number) {
    const activeOption = topUpList.find(x => x.id == id);
    if (activeOption) activeTopUp.value = activeOption;
    handleToggle()
}

const renderList = computed(() => topUpList?.filter(x => x.id != activeTopUp.value.id))
</script>

<template>
    <div class="relative w-36">
        <div
            class="relative px-2.5 z-50! py-1.5 rounded-full bg-white flex items-center space-x-3 justify-evenly grow mx-1">
            <TopUpGoldIcon v-if="activeTopUp.icon == 'gold'" />
            <TopUpSiliverIcon v-if="activeTopUp.icon == 'siliver'" />
            <TopUpKingIcon v-if="activeTopUp.icon == 'king'" />

            <span class="text-black text-sm font-bold">{{ activeTopUp.value }}</span>

            <button @click="handleToggle" class="bg-primary-200 rounded-full p-1.5 border border-primary">
                <PlusIcon v-if="!isShow" />
                <XIcon v-else="isShow" />
            </button>
        </div>

        <!-- Options -->

        <div class="transition-all duration-200 ease-linear absolute flex z-40! -top-1 left-1/2 -translate-x-1/2 rounded-2xl bg-secondary/20 flex-col space-y-1 w-full backdrop-blur-3xl! h-0"
            :class="{ 'min-h-52 px-1 pt-12 pb-3': isShow }">
            <div v-for="topUp in renderList" :key="topUp.id" class="w-full" v-show="isShow">
                <div class="flex items-center space-x-2 px-2.5 py-1.5 w-full rounded-full bg-secondary/50"
                    @click="handleOptionSelect(topUp.id)">
                    <TopUpGoldIcon v-if="topUp.icon == 'gold'" />
                    <TopUpSiliverIcon v-if="topUp.icon == 'siliver'" />
                    <TopUpKingIcon v-if="topUp.icon == 'king'" />
                    <span class="text-sm">{{ topUp.value }}</span>
                </div>
            </div>

            <!-- Add Button -->
            <button class="flex items-center justify-center space-x-1 mt-1">
                <span class="p-1 rounded-full bg-primary">
                    <PlusIcon class="size-2" />
                </span>
                <span class="text-xs">Nạp thêm</span>
            </button>
        </div>
    </div>
</template>