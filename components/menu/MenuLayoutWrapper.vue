<template>
    <div class="relative bg-black py-13 w-screen">
        <!-- Overlay Background -->
        <div
            class="absolute h-full right-0 top-0 bottom-0 w-[80%] sm:w-[calc(100%-calc((100%-38rem)/2))] md:w-[calc(100%-calc((100%-47rem)/2))] lg:w-[calc(100%-calc((100%-56rem)/2))] xl:w-[calc(100%-calc((100%-80rem)/2))]">
            <div class="w-full py-7 bg-linear-to-r from-primary-200 via-primary-200/80 to-primary"></div>
        </div>

        <!-- Menu -->
        <div
            class="absolute top-0 right-0 left-0 bottom-0 h-full sm:max-w-152 md:max-w-188 lg:max-w-4xl xl:max-w-7xl mx-auto z-40">
            <div class="grid grid-cols-16 h-full w-full">
                <!-- Log Section -->
                <div
                    class="col-span-6 sm:col-span-5 md:col-span-4 lg:col-span-3 xl:col-span-2 bg-black rounded-r-full flex items-center justify-center">
                    <slot name="logo-section"></slot>
                </div>

                <!-- Menu Section -->
                <div class="col-span-10 sm:col-span-11 md:col-span-12 lg:col-span-13 xl:col-span-14">
                    <slot name="menu-section"></slot>
                </div>
            </div>
        </div>
    </div>
</template>