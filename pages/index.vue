<script setup lang="ts">
import AppMenu from '~/components/menu/AppMenu.vue';
import type { MenuResponse } from '~/server/api/menu-config';

//-- Simulate fetch mock from Nuxt interanl api
const { data } = await useFetch('/api/menu-config')
</script>

<template>
    <!-- Use true of false to see different UI -->
    <AppMenu :is-register="true" :menu-response="data as MenuResponse" />
</template>