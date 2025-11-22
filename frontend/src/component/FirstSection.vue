<template>
    <div class="mx-8 mb-16">
        <div class="grid gap-8 md:grid-cols-3">
            <!-- Column 1: Surf Culture -->
            <div data-aos="fade-right"
                class="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center outline outline-1 outline-amber-500">
                <span class="absolute top-1/4 z-10 i-lucide-waves text-5xl text-white mb-4"></span>
                <div class="relative rounded-xl overflow-hidden w-full h-100 bg-cover bg-center bg-no-repeat"
                    style="background-image: url('https://cdn.sanity.io/images/we0tdimr/production/4312803662077b6566b623767a10c7660da79277-3840x2560.jpg?rect=0,200,3840,2160&w=1920&h=1080&q=70&auto=format');">

                    <div class="absolute inset-0 bg-black/50"></div>

                </div>
                <h3 class="px-8 font-bold text-xl mb-2">World-Class Waves</h3>
                <p class="text-gray-700 mb-6 px-8">Experience the thrill of Cloud 9 and Siargao's legendary surf spots.
                    Enjoy
                    year-round waves and a vibrant surf community welcoming all skill levels.</p>
                <router-link to="/attractions#surfing"
                    class="inline-block px-6 py-2 mb-8 rounded-lg bg-amber-700 text-white font-semibold font-oswald shadow hover:bg-amber-800 transition">Learn
                    More</router-link>
            </div>
            <!-- Column 2: Natural Wonders -->
            <div data-aos="fade-up"
                class="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center outline outline-1 outline-amber-500">
                <span class="absolute top-1/4 z-10 i-lucide-ship text-5xl text-white mb-4"></span>
                <div class="relative rounded-xl overflow-hidden w-full h-100 bg-cover bg-center bg-no-repeat"
                    style="background-image: url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/8f/e0/8d/mam-on-island.jpg?w=1200&h=1200&s=1');">
                    <div class="absolute inset-0 bg-black/50"></div>
                </div>
                <h3 class="px-8 font-bold text-xl mb-2">Island Hopping Magic</h3>
                <p class="text-gray-700 mb-6 px-8">Discover Daku, Naked, and Guyam Islands, swim in Sugba Lagoon, and
                    marvel at Magpupungko Rock Pools—Siargao's natural wonders await you.</p>
                <router-link to="/attractions#islands"
                    class="inline-block px-6 py-2 mb-8 rounded-lg bg-amber-700 text-white font-semibold font-oswald shadow hover:bg-amber-800 transition">Learn
                    More</router-link>
            </div>
            <!-- Column 3: Lifestyle/Vibe -->
            <div data-aos="fade-left"
                class="bg-white rounded-2xl shadow-lg flex flex-col items-center text-center outline outline-1 outline-amber-500">
                <span class="absolute top-1/4 z-10 i-lucide-sun text-5xl text-white mb-4"></span>
                <div class="relative rounded-xl overflow-hidden w-full h-100 bg-cover bg-center bg-no-repeat"
                    style="background-image: url('https://thefroggyadventures.com/wp-content/uploads/2024/10/shakabrah-siargao-beachfront.jpg');">
                    <div class="absolute inset-0 bg-black/50"></div>
                </div>
                <h3 class="px-8 font-bold text-xl mb-2">Laid-Back Vibe</h3>
                <p class="text-gray-700 mb-6 px-8">Embrace the relaxed island lifestyle, friendly locals, unique cafes,
                    and vibrant nightlife in General Luna—a true blend of cultures and community.</p>
                <router-link to="/about#vibe"
                    class="inline-block px-6 py-2 mb-8 rounded-lg bg-amber-700 text-white font-semibold font-oswald shadow hover:bg-amber-800 transition">Learn
                    More</router-link>
            </div>
        </div>
    </div>
</template>