<script setup lang="ts">
import BasketballIcon from '~/components/Icon/BasketballIcon.vue';
import CassinoIcon from '~/components/Icon/CassinoIcon.vue';
import EsportIcon from '~/components/Icon/EsportIcon.vue';
import FootballIcon from '~/components/Icon/FootballIcon.vue';
import WorldCupballIcon from '~/components/Icon/WorldCupballIcon.vue';
import BookIcon from '~/components/Icon/BookIcon.vue';
import FeedbackIcon from '~/components/Icon/FeedbackIcon.vue';
import FilmIcon from '~/components/Icon/FilmIcon.vue';
import HighlighIcon from '~/components/Icon/HighlighIcon.vue';
import MessageIcon from '~/components/Icon/MessageIcon.vue';
import ReelsIcon from '~/components/Icon/ReelsIcon.vue';
import CalandarIcon from '~/components/Icon/CalandarIcon.vue';
import NotificationIcon from '~/components/Icon/NotificationIcon.vue';
import MailIcon from '~/components/Icon/MailIcon.vue';


type Icon = 'soccer' | 'world-cup' | 'basket-ball' | "esport" | "cassino" | 'message' | 'reels' | 'highligh' | 'feedback' | 'film' | 'book' | 'calendar' | 'notification' | 'mail';
const props = defineProps<{ icon: string }>();
const iconsMap: Record<Icon, Component> = {
    soccer: FootballIcon,
    'world-cup': WorldCupballIcon,
    'basket-ball': BasketballIcon,
    esport: EsportIcon,
    cassino: CassinoIcon,
    message: MessageIcon,
    reels: ReelsIcon,
    highligh: HighlighIcon,
    feedback: FeedbackIcon,
    film: FilmIcon,
    book: BookIcon,
    calendar: CalandarIcon,
    notification: NotificationIcon,
    mail: MailIcon,   
}
</script>

<template>
    <component :is="iconsMap[(!props.icon ? 'soccer' : props.icon) as Icon]" class="size-5" />
</template>