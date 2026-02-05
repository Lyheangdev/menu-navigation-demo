<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ title: string }>()

const isOpen = ref(false)

function toggle() {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <div class="rounded-xl border border-primary-200/50 overflow-hidden">
        <!-- Header -->
        <button class="w-full flex justify-between items-center py-2.5 px-4 text-left" @click="toggle">
            <span class="font-bold text-primary">{{ title }}</span>
            <span class="transition-transform duration-200 text-primary" :class="{ 'rotate-180': isOpen }">
                ▼
            </span>
        </button>

        <!-- Content -->
        <transition name="accordion">
            <div v-show="isOpen" class="px-4 pb-4">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
    transition: max-height 300ms ease, opacity 200ms ease;
}

.accordion-enter-from,
.accordion-leave-to {
    max-height: 0;
    opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
    max-height: 400px;
    opacity: 1;
}
</style>
