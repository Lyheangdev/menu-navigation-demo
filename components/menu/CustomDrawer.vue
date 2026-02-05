<template>
    <!-- Overlay -->
    <transition name="fade">
        <div v-if="modelValue" class="fixed inset-0 bg-black/40 z-40" @click="$emit('update:modelValue', false)"></div>
    </transition>

    <!-- Drawer -->
    <transition name="slide">
        <aside v-if="modelValue" class="fixed top-0 right-0 h-full w-full sm:w-sm bg-white z-50 shadow-xl">
            <slot></slot>
        </aside>
    </transition>
</template>

<script setup lang="ts">
defineProps({
    modelValue: Boolean
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
/* Overlay */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Drawer */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.25s ease;
}

/* ⬇️ change is here */
.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}
</style>
