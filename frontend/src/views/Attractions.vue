<template>
  <section class="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white py-20">
    <div class="w-full">

      <!-- HERO INTRO -->
      <div class="relative mb-8">

        <!-- Background Image -->
        <div class="absolute inset-0">
          <img src="/Cloud9.jpg" alt="Siargao aerial" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-36 grid lg:grid-cols-2 gap-10 items-center">

          <div class="text-white">
            <span class="uppercase tracking-widest text-amber-400 font-semibold text-sm">Siargao Guide</span>
            <h1 class="font-oswald text-5xl md:text-6xl mt-4 mb-6 leading-tight">
              Discover the Soul<br class="hidden sm:block" /> of Siargao
            </h1>
            <p class="font-inter text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
              From legendary surf breaks to untouched lagoons, Siargao unfolds in rhythm and raw beauty. Each
              destination tells a story shaped by tide, wind, and time.
            </p>
          </div>

          <!-- Floating Highlight Card -->
          <div class="hidden lg:block">
            <div class="bg-white/10 backdrop-blur-2sm rounded-3xl p-6 shadow-2xl max-w-sm ml-auto">
              <h3 class="font-oswald text-2xl text-white mb-2">Cloud 9</h3>
              <p class="text-white text-sm leading-relaxed">
                Siargao’s most iconic surf break. Sunrise, boardwalk silhouettes, and endless Pacific patterns.
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- CATEGORY FILTER -->
      <div class="flex flex-wrap gap-4 mb-14 justify-center">
        <button v-for="cat in categories" :key="cat" @click="activeCategory = cat"
          :class="activeCategory === cat ? 'bg-amber-600 text-white' : 'bg-white text-gray-700'"
          class="px-6 py-2 rounded-full font-medium shadow-sm border hover:bg-amber-50 transition">
          {{ cat }}
        </button>
      </div>

      <!-- ATTRACTIONS GRID -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-8">
        <div v-for="spot in filteredSpots" :key="spot.title"
          class="group relative rounded-2xl overflow-hidden shadow-xl">
          <img :src="spot.image" :alt="spot.title"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          <div
            class="absolute top-4 left-4 bg-amber-600 text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            {{ spot.category }}
          </div>

          <div class="absolute bottom-0 p-6 text-white">
            <h2 class="font-oswald text-2xl mb-2">{{ spot.title }}</h2>
            <p class="text-sm leading-relaxed text-gray-200">
              {{ spot.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('All')

const spots = [
  {
    title: 'Cloud 9 Boardwalk',
    image: '/Cloud9.jpg',
    category: 'Surf',
    description: 'Iconic surf break with a scenic boardwalk and viewing tower. Best for sunrise and wave watching.'
  },
  {
    title: 'Pacifico Beach',
    image: '/guyam3.jpg',
    category: 'Surf',
    description: 'Chill northern surf zone with open horizons and powerful breaks.'
  },
  {
    title: 'Sugba Lagoon',
    image: '/sugba.jpg',
    category: 'Nature',
    description: 'Turquoise waters framed by mangroves. Calm, expansive, and striking.'
  },
  {
    title: 'Magpupungko Rock Pools',
    image: '/Magpupungko.jpg',
    category: 'Nature',
    description: 'Tidal rock pools with crystal-clear water and sculpted limestone.'
  },
  {
    title: 'Island Hopping Trio',
    image: '/Daku.jpg',
    category: 'Islands',
    description: 'Guyam, Daku, and Naked Islands. White sand, shallow waters, and quiet charm.'
  },
  {
    title: 'Tayangban Cave Pool',
    image: '/tayangban.jpg',
    category: 'Adventure',
    description: 'Guided cave trek leading to a refreshing hidden pool sanctuary.'
  }
]

const categories = ['All', 'Surf', 'Nature', 'Islands', 'Adventure']

const filteredSpots = computed(() => {
  if (activeCategory.value === 'All') return spots
  return spots.filter(spot => spot.category === activeCategory.value)
})
</script>
