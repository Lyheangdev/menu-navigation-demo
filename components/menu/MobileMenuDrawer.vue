<script setup lang="ts">
import { useToggleManager } from '~/composable/toggleManager';
import HumburgerIcon from '../Icon/HumburgerIcon.vue';
import CustomDrawer from './CustomDrawer.vue';
import CustomAccordion from './CustomAccordion.vue';
import type { MenuItem } from '~/types/menu';
import NotificationBadge from './NotificationBadge.vue';
import MailBadge from './MailBadge.vue';
import AvartarCover from './AvartarCover.vue';
import TopUpDropDown from './TopUpDropDown.vue';
import XIcon from '../Icon/XIcon.vue';
import MenuIcon from './MenuIcon.vue';
import RegisterMenuButtons from './RegisterMenuButtons.vue';

const props = defineProps<{ isRegister?: boolean; topMenu: MenuItem[]; bottomMenu: MenuItem[]; profile: MenuItem[] }>();

const { isOpen, handleOpen, handleClose } = useToggleManager()
</script>

<template>
    <ClientOnly>
        <div>
            <button @click="handleOpen" class="p-2 bg-black rounded-full">
                <HumburgerIcon class="text-primary size-6" />
            </button>

            <CustomDrawer v-model="isOpen">
                <div class="p-3 overflow-y-auto">
                    <button @click="handleClose" class="p-2 bg-primary rounded-full mb-2">
                        <XIcon class="size-5" />
                    </button>

                    <div :hidden="isRegister" class="mb-2 sm:hidden">
                        <RegisterMenuButtons />
                    </div>

                    <div :hidden="!props.isRegister"
                        class="sm:hidden py-1 px-0.5 bg-secondary rounded-full flex items-center space-x-1.5 justify-between mb-3">
                        <TopUpDropDown />
                        <div class="flex items-center space-x-2.5">
                            <NotificationBadge />
                            <MailBadge />
                            <MenuIcon icon="calendar" class="text-primary size-7" />
                        </div>

                        <div class="mr-2">
                            <AvartarCover :menu-items="props.profile" />
                        </div>
                    </div>


                    <div>
                        <p class="font-bold text-xl">Quick Links</p>
                        <div class="flex flex-col space-y-2 py-3">
                            <div v-for="parentMenu in props.topMenu ?? []" :key="parentMenu.id">
                                <CustomAccordion :title="parentMenu.label">
                                    <div class="flex flex-col space-y-2">
                                        <NuxtLink v-for="subMenu in parentMenu.children ?? []" :key="subMenu.id"
                                            :to="subMenu.href"
                                            class="flex items-center space-x-2 bg-primary/10 p-2 rounded-full">
                                            <MenuIcon :icon="subMenu.icon ?? 'soccer'" />
                                            <span> {{ subMenu.label }}</span>
                                        </NuxtLink>
                                    </div>
                                </CustomAccordion>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-xl">Others</p>
                        <div class="grid grid-cols-2 gap-2 py-3">
                            <NuxtLink v-for="menu in props.bottomMenu" :to="menu.href" :key="menu.id"
                                class="flex items-center space-x-2 p-2 bg-primary/10 rounded-xl">
                                <MenuIcon :icon="menu.icon ?? 'message'" />
                                <span>{{ menu.label }}</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </CustomDrawer>
        </div>
    </ClientOnly>
</template>