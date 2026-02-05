<script setup lang="ts">
import type { MenuItem } from '~/types/menu';
import MenuIcon from './MenuIcon.vue';

const props = defineProps<{ menuItems: MenuItem[] }>()
</script>

<template>
    <div class="flex items-center h-full ml-2.5">
        <div v-for="item in props.menuItems" class="grow">
            <NuxtLink :to="item.href" class="flex items-center space-x-1.5">
                <MenuIcon :icon="item.icon ?? 'message'" class="size-5" />
                <span class="text-primary">
                    {{ item.label }}
                </span>
            </NuxtLink>
        </div>
    </div>
</template>