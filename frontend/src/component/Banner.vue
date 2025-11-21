<template>
    <div class="relative w-screen h-screen mt-24">
        <div
            class="absolute top-50 md:top-10 left-1/2 md:left-20 z-20 w-screen md:w-auto flex flex-col items-center md:items-start text-center md:text-left transform -translate-x-1/2 md:translate-x-0">
            <span data-aos="fade-down"
                class="font-pacifico font-italic text-6xl md:text-[10rem] text-white drop-shadow-lg relative">
                Say Yes to
            </span>
            <span data-aos="fade-up"
                class="font-oswald font-bold text-6xl md:text-[10rem] text-amber-700 drop-shadow-lg md:absolute md:top-24 md:left-72">
                Siargao~
            </span>
        </div>
        <div
            class="absolute top-85 left-1/2 md:left-95 z-20 w-screen md:w-auto flex flex-col md:flex-row justify-center md:block text-center md:text-left transform -translate-x-1/2 md:translate-x-0">
            <span data-aos="fade-down"
                class="font-oswald font-italic text-lg md:text-xl text-white drop-shadow-lg relative">
                “Where sunsets heal and waves inspire —”
            </span>
            <router-link to="/attractions"
                class="no-underline font-italic mx-16 mt-2 justify-center md:ml-4 inline-flex gap-2 items-center px-4 text-sm py-2 mb-8 rounded-lg bg-amber-700 text-white font-semibold font-oswald shadow hover:bg-amber-800 transition cursor-pointer">
                Start Adventure
                <i class="i-lucide-arrow-right block text-white z-10 w-6 h-6 md:w-5 md:h-5"></i>
            </router-link>
        </div>

        <div class="absolute inset-0 w-screen h-full bg-cover bg-center z-0" aria-label="Banner">
            <video v-if="currentBannerIndex === 0" src="/Siargao.mp4" autoplay muted loop playsinline
                class="w-full h-full object-cover"></video>
            <div v-else :style="`background-image: url('${currentBanner}')`" class="w-full h-full bg-cover bg-center">
            </div>
        </div>
        <!-- Clickable images -->
        <div
            class="absolute center top-2/3 left-1/2 -translate-x-1/2 flex flex-row gap-3 md:absolute md:top-1/2.5 md:right-10 md:transform md:-translate-y-1/2 md:flex md:flex-col md:gap-4 md:bottom-auto md:left-auto md:translate-x-0 z-30">
            <template v-for="(img, idx) in bannerImages" :key="idx">
                <div v-if="idx === 0" class="relative">
                    <img :src="img" @click="setBanner(idx)" :class="[
                        'w-15 h-15 md:w-35 md:h-32 object-cover rounded-lg cursor-pointer transition-all duration-200 shadow-lg',
                        idx === currentBannerIndex ? 'outline outline-2 outline-amber-500 scale-110' : 'outline-none',
                        'hover:border-amber-500'
                    ]" :alt="bannerNames[idx]" :title="bannerNames[idx]" />
                    <span class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span class="i-lucide-play text-white bg-black/60 rounded-full p-1 text-2xl"></span>
                    </span>
                </div>
                <img v-else :src="img" @click="setBanner(idx)" :class="[
                    'w-15 h-15 md:w-35 md:h-32 object-cover rounded-lg cursor-pointer transition-all duration-200 shadow-lg',
                    idx === currentBannerIndex ? 'outline outline-2 outline-amber-500 scale-110' : 'outline-none',
                    'hover:border-amber-500'
                ]" :alt="bannerNames[idx]" :title="bannerNames[idx]" />
            </template>
        </div>

        <div class="absolute bottom-0 w-full bg-cover bg-bottom bg-no-repeat brightness-50 z-10 invert"
            style="background-image: url('/image.svg'); height: 300px;" aria-label="Bottom decoration">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const bannerImages = [
    '/More.png',
    '/Daku.jpg',
    '/guyam4.jpg',
    '/guyam3.jpg'
]

const bannerNames = [
    'Secret Beach',
    'Cloud 9',
    'Siargao Island',
    'Guyam Island'
]

const currentBannerIndex = ref(0)
const currentBanner = ref(bannerImages[0])

function setBanner(index) {
    currentBanner.value = bannerImages[index]
    currentBannerIndex.value = index
}
</script>
