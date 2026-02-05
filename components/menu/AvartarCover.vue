<script setup lang="ts">
import type { MenuItem } from '~/types/menu';

import { useToggleManager } from '~/composable/toggleManager';
import AvatarCoverIcon from '../Icon/AvatarCoverIcon.vue';
import UserIcon from '../Icon/UserIcon.vue';
import ExitIcon from '../Icon/ExitIcon.vue';
import HomeIcon from '../Icon/HomeIcon.vue';
import StatsIcon from '../Icon/StatsIcon.vue';
import TargetIcon from '../Icon/TargetIcon.vue';
import WalletIcon from '../Icon/WalletIcon.vue';

const { isOpen, handleOpen, handleClose, handleToggle } = useToggleManager()

type Icon = 'user' | 'stats' | 'target' | 'exit' | 'home' | 'wallet';

const props = defineProps<{ menuItems: MenuItem[] }>();

const iconMap: Record<Icon, Component> = {
    exit: ExitIcon,
    home: HomeIcon,
    stats: StatsIcon,
    target: TargetIcon,
    user: UserIcon,
    wallet: WalletIcon
}

</script>

<template>
    <div role="button" class="relative" @click="handleToggle" @mouseenter="handleOpen" @mouseleave="handleClose">
        <AvatarCoverIcon class="size-10 scale-110" />
        <div
            class="absolute cursor-pointer rounded-full size-6 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 right-0 bottom-0 justify-center items-center text-sm text-black text-center">
            AF</div>

        <Transition>
            <div v-if="isOpen"
                class="flex flex-col mt-1 space-y-1.5 absolute top-full -right-2 border shadow border-gray-200/80 w-84 z-40! bg-white/20 p-1.5 backdrop-blur-2xl rounded-3xl">
                <div v-for="item in props.menuItems ?? []">
                    <NuxtLink :to="item.href"
                        class="group flex items-center space-x-2 py-2.5 rounded-full px-5 hover:bg-secondary duration-300 transition-colors bg-secondary/5">
                        <component :is="iconMap[(item.icon ?? 'user') as Icon]" class="group-hover:text-primary" />
                        <span class="group-hover:text-primary group-hover:font-bold">Trung tâm Tài khoản</span>
                    </NuxtLink>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>