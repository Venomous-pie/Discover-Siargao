<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 mt-24" data-aos="fade-up">
    <!-- Decorative background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
      <div class="absolute top-20 right-10 w-32 h-32 text-amber-500 animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      </div>
    </div>

    <div class="relative pt-16 pb-20 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Header Section -->
        <div class="relative mb-10 rounded-3xl overflow-hidden shadow-lg animate-fade-in" data-aos="fade-up" data-aos-delay="100">
          <img src="/Cloud9.jpg" alt="Siargao Map Banner"
            class="absolute inset-0 w-full h-full object-cover object-center opacity-80"
            style="min-height: 180px; max-height: 260px;" />
          <div
            class="relative z-10 flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-r from-amber-700/80 via-orange-600/70 to-yellow-500/60">
            <h1 class="font-oswald text-3xl md:text-5xl text-white drop-shadow font-bold mb-2 tracking-tight">Siargao
              Map & Directions</h1>
            <p class="font-inter text-white/90 text-base md:text-lg max-w-2xl text-center drop-shadow-sm">
              Find your way around Siargao! Use the interactive map below to locate towns, surf spots, and hidden gems,
              or get step-by-step directions to anywhere on the island.
            </p>
          </div>
        </div>

        <!-- Main Content Grid -->
        <div class="grid lg:grid-cols-3 gap-6 mb-10" data-aos="fade-up" data-aos-delay="200">
          <!-- Map Section - Takes up 2 columns -->
          <div class="lg:col-span-2" data-aos="fade-right" data-aos-delay="250">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
              <div class="bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 class="text-lg font-bold text-white font-oswald">Interactive Map</h2>
                </div>
              </div>
              <div id="siargao-map" class="w-full h-[350px] md:h-[400px]" style="background: #fffbeb" />
            </div>
          </div>

          <!-- Directions Form -->
          <div class="lg:col-span-1" data-aos="fade-left" data-aos-delay="250">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 lg:sticky lg:top-4">
              <div class="bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <h2 class="text-lg font-bold text-white font-oswald">Get Directions</h2>
                </div>
              </div>
              <form @submit.prevent="openDirections" class="p-4 space-y-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2 font-inter">
                    Starting Point (Optional)
                  </label>
                  <input v-model="start" type="text" placeholder="e.g. General Luna, Airport"
                    class="w-full py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none font-inter" />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2 font-inter">
                    Destination
                  </label>
                  <select v-model="destination"
                    @change="zoomToDestination"
                    class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none font-inter">
                    <option v-for="place in places" :key="place.name" :value="place.name">
                      {{ place.name }}
                    </option>
                  </select>
                </div>

                <button type="submit"
                  class="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 font-oswald">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Open Directions
                </button>

                <div class="pt-4 border-t border-gray-200">
                  <p class="text-xs text-gray-500 text-center font-inter">
                    Powered by OpenStreetMap
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Popular Points of Interest -->
        <div>
          <div class="text-center mb-6" data-aos="fade-up" data-aos-delay="300">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-oswald">
              Popular Destinations
            </h2>
            <p class="text-gray-700 font-inter text-sm">
              Click any location to view on the map
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="350">
            <div v-for="(place, index) in places" :key="place.name" @click="selectPlace(place)" :class="[
              'bg-white rounded-xl p-4 shadow hover:shadow-md transition-all duration-200 cursor-pointer border',
              selectedPlace === place.name ? 'border-amber-500 ring-1 ring-amber-200' : 'border-gray-100'
            ]" :style="{ animationDelay: `${index * 80}ms` }">
              <div class="flex items-start gap-4">
                <div class="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-xl flex-shrink-0">
                  <component :is="place.icon" class="w-6 h-6 text-amber-700" />
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-800 mb-2 font-oswald">
                    {{ place.name }}
                  </h3>
                  <p class="text-sm text-gray-600 leading-relaxed font-inter">
                    {{ place.description }}
                  </p>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span class="text-xs text-gray-500 font-inter">View on map</span>
                <svg class="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// SVG Icons as components
const WavesIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
    </svg>
  `
}

const NavigationIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  `
}

const SunIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  `
}

const PalmtreeIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  `
}

let map = null
const start = ref('')
const destination = ref('Cloud 9')
const selectedPlace = ref(null)

const places = [
  { name: 'Cloud 9', lat: 9.8489, lng: 126.1703, description: 'World-famous surf spot with iconic boardwalk', icon: WavesIcon },
  { name: 'Siargao Airport', lat: 9.8597, lng: 126.0139, description: 'Sayak Airport - Your gateway to paradise', icon: NavigationIcon },
  { name: 'General Luna', lat: 9.7995, lng: 126.1596, description: 'Tourism hub with resorts and restaurants', icon: SunIcon },
  { name: 'Dapa Port', lat: 9.7491, lng: 126.0452, description: 'Main ferry port and transport hub', icon: NavigationIcon },
  { name: 'Magpupungko Rock Pools', lat: 9.9274, lng: 126.0706, description: 'Natural tidal pools perfect for swimming', icon: WavesIcon },
  { name: 'Sugba Lagoon', lat: 9.9335, lng: 125.9569, description: 'Scenic lagoon for SUP and swimming', icon: PalmtreeIcon },
]

onMounted(async () => {
  if (window.L) return initMap()

  const leafletCss = document.createElement('link')
  leafletCss.rel = 'stylesheet'
  leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
  document.head.appendChild(leafletCss)

  await import('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js')
  initMap()
})

function initMap() {
  map = window.L.map('siargao-map').setView([9.8489, 126.1703], 11)

  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  places.forEach(place => {
    const marker = window.L.marker([place.lat, place.lng]).addTo(map)
    marker.bindPopup(`<div style="font-family: sans-serif;"><b>${place.name}</b><br/>${place.description}</div>`)

    marker.on('click', () => {
      selectedPlace.value = place.name
      destination.value = place.name
    })
  })
}

function selectPlace(place) {
  selectedPlace.value = place.name
  destination.value = place.name

  if (map) {
    map.setView([place.lat, place.lng], 13)
  }
}

function openDirections() {
  const dest = places.find(p => p.name === destination.value)
  let url = 'https://www.google.com/maps/dir/?api=1'
  if (start.value) {
    url += `&origin=${encodeURIComponent(start.value)}`
  }
  if (dest) {
    url += `&destination=${encodeURIComponent(dest.lat + ',' + dest.lng)}`
  } else {
    url += `&destination=${encodeURIComponent(destination.value)}`
  }
  url += '&travelmode=driving'
  window.open(url, '_blank')
}
function zoomToDestination() {
  const dest = places.find(p => p.name === destination.value)
  if (map && dest) {
    map.setView([dest.lat, dest.lng], 13)
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

#siargao-map {
  min-height: 500px;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
