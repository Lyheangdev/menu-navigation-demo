<script setup lang="ts">
type Icon = 'gold' | 'siliver' | 'king' | 'soccer' | 'world-cup' | 'esport' | 'cassino' | 'basket-ball';

const props = defineProps<{
    icon: string
}>();

const imageMap: Record<Icon, string> = {
    gold: "/images/gold-medal.png",
    siliver: "/images/siliver-medal.png",
    king: "/images/king-medal.png",
    soccer: '/images/foot-ball.png',
    "basket-ball": "/images/basket-ball.png",
    "world-cup": "/images/world-cup.png",
    cassino: '/images/casino.png',
    esport: '/images/esport.png'
};

const selectedImage = computed(() => imageMap[(props.icon) as Icon]);

</script>
<template>
    <img :src="selectedImage" alt="Logo" class="size-6 object-cover" />
</template>