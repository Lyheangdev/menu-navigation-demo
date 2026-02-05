<script setup lang="ts">
import type { MenuItem } from '~/types/menu';
import BaseMenuItem from './menu-item/BaseMenuItem.vue';

const props = defineProps<{ menuItems: MenuItem[] }>()
</script>

<template>
    <div class="flex h-full">
        <div v-for="menu in menuItems" :key="menu.id" class="min-w-32 my-auto z-99!">
            <BaseMenuItem :menu-item="menu" />
        </div>
    </div>
</template>