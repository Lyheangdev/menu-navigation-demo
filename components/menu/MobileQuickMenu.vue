<script setup lang="ts">
import type { MenuItem } from '~/types/menu';

import MenuIcon from './MenuIcon.vue';

const props = defineProps<{ menuItems: MenuItem[] }>()
</script>

<template>
    <div v-for="item in props.menuItems ?? []">
        <NuxtLink :to="item.href">
            <MenuIcon :icon="item.icon ?? 'message'" class="size-7" />
        </NuxtLink>
    </div>
</template>