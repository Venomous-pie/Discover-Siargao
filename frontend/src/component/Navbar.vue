<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const menuOpen = ref(false)
const isToggling = ref(false)
const navRef = ref(null)

const toggleMenu = () => {
    if (isToggling.value) return
    isToggling.value = true
    menuOpen.value = !menuOpen.value
    setTimeout(() => {
        isToggling.value = false
    }, 200)
}

const closeMenu = () => {
    if (menuOpen.value) {
        menuOpen.value = false
    }
}

const handleClickOutside = (event) => {
    if (menuOpen.value && navRef.value && !navRef.value.contains(event.target)) {
        closeMenu()
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <nav ref="navRef" class="bg-white w-screen h-24 flex items-center justify-between shadow-md relative">
        <div class="flex items-center px-8">
            <span>
                <router-link to="/" class="no-underline font-bold text-2xl cursor-pointer font-pacifico text-amber-700"
                    @click="closeMenu">Discover Siargao~</router-link>
            </span>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex gap-4 list-none px-8">
            <li>
                <router-link to="/"
                    class="text-black no-underline hover:bg-amber-700 hover:text-white hover:shadow-md p-2 rounded-lg cursor-pointer transition-colors duration-200 block"
                    @click="closeMenu">Home</router-link>
            </li>
            <li>
                <router-link to="/about"
                    class="text-black no-underline hover:bg-amber-700 hover:text-white hover:shadow-md p-2 rounded-lg cursor-pointer transition-colors duration-200 block"
                    @click="closeMenu">About</router-link>
            </li>
            <li>
                <router-link to="/attractions"
                    class="text-black no-underline hover:bg-amber-700 hover:text-white hover:shadow-md p-2 rounded-lg cursor-pointer transition-colors duration-200 block"
                    @click="closeMenu">Attractions</router-link>
            </li>
            <li>
                <router-link to="/food-and-dining"
                    class="text-black no-underline hover:bg-amber-700 hover:text-white hover:shadow-md p-2 rounded-lg cursor-pointer transition-colors duration-200 block"
                    @click="closeMenu">Food and Dining</router-link>
            </li>
            <li>
                <router-link to="/map-and-direction"
                    class="text-black no-underline hover:bg-amber-700 hover:text-white hover:shadow-md p-2 rounded-lg cursor-pointer transition-colors duration-200 block"
                    @click="closeMenu">Map and Direction</router-link>
            </li>
            <li>
                <router-link to="/contact-us"
                    class="text-black no-underline hover:bg-amber-700 hover:text-white hover:shadow-md p-2 rounded-lg cursor-pointer transition-colors duration-200 block"
                    @click="closeMenu">Contact Us</router-link>
            </li>
        </ul>

        <!-- Burger Icon -->
        <div class="block md:hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded p-2 mx-6 rounded-lg text-black hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            :class="{ 'pointer-events-none opacity-50': isToggling }" @click="toggleMenu"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'" :aria-expanded="menuOpen">
            <!-- Animated Hamburger/X Icon -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
                    class="transition-all duration-300" />
            </svg>
        </div>

        <!-- Mobile Menu with Smooth Transition -->
        <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100" leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="max-h-96 opacity-100" leave-to-class="max-h-0 opacity-0">
            <div v-if="menuOpen" class="fixed top-24 bg-white w-full shadow-lg z-[1000] md:hidden overflow-hidden">
                <ul class="flex flex-col list-none text-black px-8">
                    <li>
                        <router-link to="/"
                            class="text-black no-underline rounded-lg pl-4 hover:bg-amber-700 hover:text-white cursor-pointer transition-colors duration-200 py-3 font-medium w-full block"
                            @click="closeMenu">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about"
                            class="text-black no-underline rounded-lg pl-4 hover:bg-amber-700 hover:text-white cursor-pointer transition-colors duration-200 py-3 font-medium w-full block"
                            @click="closeMenu">About</router-link>
                    </li>
                    <li>
                        <router-link to="/attractions"
                            class="text-black no-underline rounded-lg pl-4 hover:bg-amber-700 hover:text-white cursor-pointer transition-colors duration-200 py-3 font-medium w-full block"
                            @click="closeMenu">Attractions</router-link>
                    </li>
                    <li>
                        <router-link to="/food-and-dining"
                            class="text-black no-underline rounded-lg pl-4 hover:bg-amber-700 hover:text-white cursor-pointer transition-colors duration-200 py-3 font-medium w-full block"
                            @click="closeMenu">Food and Dining</router-link>
                    </li>
                    <li>
                        <router-link to="/map-and-direction"
                            class="text-black no-underline rounded-lg pl-4 hover:bg-amber-700 hover:text-white cursor-pointer transition-colors duration-200 py-3 font-medium w-full block"
                            @click="closeMenu">Map and Direction</router-link>
                    </li>
                    <li>
                        <router-link to="/contact-us"
                            class="text-black no-underline rounded-lg pl-4 hover:bg-amber-700 hover:text-white cursor-pointer transition-colors duration-200 py-3 font-medium w-full block"
                            @click="closeMenu">Contact Us</router-link>
                    </li>
                </ul>
            </div>
        </transition>
    </nav>
</template>