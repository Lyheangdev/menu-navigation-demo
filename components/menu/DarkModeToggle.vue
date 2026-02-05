<script setup lang="ts">
import SunIcon from '../Icon/SunIcon.vue';

const isOpen = ref(false);

function handleToggleOpen() {
    isOpen.value = !isOpen.value;
}

</script>

<template>
    <div role="button" @click="handleToggleOpen" class="min-w-16 h-8 rounded-full bg-secondary border border-primary"
        :class="{ 'bg-white!': isOpen }">
        <button class="duration-300 transition-transform ease-linear" :class="{ 'translate-x-8': isOpen }">
            <SunIcon />
        </button>
    </div>
</template>