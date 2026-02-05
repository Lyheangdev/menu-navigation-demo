<script setup lang="ts">
import type { MenuItem } from '@/types/menu'
import ImageIcon from '../ImageIcon.vue';

const props = defineProps<{ menuItem: MenuItem }>();

const isShow = ref(false);

function handleMounseEnter() {
    if (isShow.value) return;
    isShow.value = true;
}

function handleMouseLeave() {
    if (!isShow.value) return;
    isShow.value = false;
}
</script>

<template>
    <div role="button" class="relative h-fit w-full" @mouseenter="handleMounseEnter" @mouseleave="handleMouseLeave">
        <NuxtLink :to="props.menuItem.href"
            class="py-1.5 relative z-30! text-secondary rounded-full duration-300 transition-colors flex items-center justify-center cursor-pointer mx-1"
            :class="{ 'bg-secondary': isShow }">
            <span :class="{ 'text-primary font-bold': isShow }">{{ props.menuItem.label
                }}</span>
        </NuxtLink>

        <!-- Sub menu items -->
        <Transition>
            <div v-if="isShow"
                class="px-1 pt-11 pb-3 transition-all duration-300 ease-linear absolute flex z-10! -top-1 left-1/2 -translate-x-1/2 rounded-2xl flex-col space-y-1 w-full backdrop-blur-3xl! bg-linear-to-b from-secondary/20 to-white border border-gray-200 text-sm">

                <div v-for="sub in props.menuItem.children ?? []" :key="sub.id">
                    <NuxtLink :to="sub.href"
                        class="hover:bg-primary hover:text-secondary duration-300 transition-colors flex items-center space-x-1.5 p-1 rounded-full bg-secondary/10 w-full">
                        <ImageIcon :icon="sub.icon ?? 'soccer'" class="size-5" />
                        <span class="text-sm text-secondary">{{ sub.label }}</span>
                    </NuxtLink>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>