<script setup lang="ts">
import DesktopTopMenu from './DesktopTopMenu.vue';
import TopUpDropDown from './TopUpDropDown.vue';
import NotificationBadge from './NotificationBadge.vue';
import MailBadge from './MailBadge.vue';
import CalandarIcon from '../Icon/CalandarIcon.vue';
import AvartarCover from './AvartarCover.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
import MobileMenuDrawer from './MobileMenuDrawer.vue';
import DesktopBottomMenu from './DesktopBottomMenu.vue';
import MobileQuickMenu from './MobileQuickMenu.vue';
import DarkModeToggle from './DarkModeToggle.vue';
import RegisterMenuButtons from './RegisterMenuButtons.vue';
import type { MenuResponse } from '~/server/api/menu-config';

const props = defineProps<{ isRegister?: boolean; menuResponse?: MenuResponse }>()
</script>

<template>
    <MenuLayoutWrapper>
        <template #logo-section>
            <p class="font-bold text-5xl sm:text-6xl text-center text-white">Logo</p>
        </template>

        <template #menu-section>
            <div class="grid grid-rows-2 h-full">
                <!-- Top Menu -->
                <div class="my-auto grid grid-cols-12">
                    <div class="sm:col-span-1 md:col-span-4 lg:col-span-6 xl:col-span-8">
                        <div class="h-full max-xl:hidden">
                            <DesktopTopMenu :menu-items="menuResponse?.topMenu ?? []" />
                        </div>
                    </div>

                    <div
                        class="max-sm:col-span-12 sm:col-span-11 md:col-span-8 lg:col-span-6 xl:col-span-4 max-xl:flex max-xl:items-center max-xl:space-x-1.5">

                        <div :hidden="Boolean(!props.isRegister)"
                            class="max-sm:hidden py-1 px-0.5 bg-secondary rounded-full flex items-center space-x-2 justify-between mt-1">
                            <TopUpDropDown />

                            <div class="flex items-center space-x-5">
                                <NotificationBadge />
                                <MailBadge />
                                <CalandarIcon class="size-7 text-primary" />
                            </div>

                            <div class="mr-2">
                                <AvartarCover :menu-items="menuResponse?.profile ?? []" />
                            </div>
                        </div>
                        <div :hidden="Boolean(props.isRegister)" class="max-sm:hidden grow">
                            <RegisterMenuButtons />
                        </div>

                        <!-- Show only screen lower than 1280 -->
                        <div class="xl:hidden ml-auto max-sm:px-4 flex items-center space-x-2">
                            <LanguageSwitcher mode="mobile" class="sm:hidden" />
                            <MobileMenuDrawer :top-menu="menuResponse?.topMenu || []"
                                :bottom-menu="menuResponse?.bottomMenu ?? []" :profile="menuResponse?.profile ?? []" />
                        </div>
                    </div>
                </div>

                <!-- Bottom Menu -->
                <div class="my-auto grid grid-cols-12">
                    <div class="sm:col-span-6 md:col-span-7 lg:col-span-8 xl:col-span-8">
                        <div class="h-full max-xl:hidden">
                            <DesktopBottomMenu :menu-items="menuResponse?.bottomMenu ?? []" />
                        </div>
                    </div>

                    <div class="col-span-12 max-sm:px-4 sm:col-span-6 md:col-span-5 lg:col-span-4 xl:col-span-4">
                        <div class="flex max-sm:space-x-3 items-center justify-between max-sm:justify-end mt-1">
                            <LanguageSwitcher mode="desktop" class="max-sm:hidden" />
                            <div class="sm:hidden flex items-center space-x-3">
                                <MobileQuickMenu :menu-items="menuResponse?.quickMenu ?? []" />
                            </div>
                            <DarkModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </MenuLayoutWrapper>
</template>
