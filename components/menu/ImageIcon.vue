<script setup lang="ts">
type Icon = 'gold' | 'siliver' | 'king';

const props = defineProps<{
    icon: string
}>();

const imageMap: Record<Icon, string> = {
    gold: "/images/gold-medal.png",
    siliver: "/images/siliver-medal.png",
    king: "/images/king-medal.png"
};

const selectedImage = computed(() => imageMap[(props.icon) as Icon]);

</script>
<template>
    <NuxtImg :src="selectedImage" alt="Logo" class="size-6 object-cover" />
</template>