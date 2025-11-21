<template>
  <footer class="bg-black text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h3 class="text-xl font-bold mb-4">
            <router-link to="/" class="no-underline font-pacifico text-amber-700">Discover Siargao~</router-link>
          </h3>
          <p class="text-white/80 text-sm">Your gateway to paradise in Surigao del Norte.</p>
        </div>
        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm list-none">
            <li><router-link to="/about" class="text-white hover:text-amber-400 transition-colors">About</router-link>
            </li>
            <li><router-link to="/attractions"
                class="text-white hover:text-amber-400 transition-colors">Attractions</router-link>
            </li>
            <li><router-link to="/activities"
                class="text-white hover:text-amber-400 transition-colors">Activities</router-link>
            </li>
          </ul>
        </div>
        <!-- More Links -->
        <div>
          <h4 class="font-semibold mb-4">Explore</h4>
          <ul class="space-y-2 text-sm list-none">
            <li><router-link to="/culture" class="text-white hover:text-amber-400 transition-colors">Culture &
                People</router-link>
            </li>
            <li><router-link to="/food" class="text-white hover:text-amber-400 transition-colors">Food &
                Dining</router-link></li>
            <li><router-link to="/map" class="text-white hover:text-amber-400 transition-colors">Map &
                Directions</router-link>
            </li>
          </ul>
        </div>
        <!-- Contact -->
        <div>
          <h4 class="font-semibold mb-4">Contact Us</h4>
          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-2">
              <span class="i-lucide-phone w-4 h-4"></span>
              <span>+63 9123 456 789</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="i-lucide-mail w-4 h-4"></span>
              <span>info@siargao.ph</span>
            </div>
            <div class="flex items-start gap-2 mt-2">
              <span class="i-lucide-map-pin w-4 h-4 mt-1 flex-shrink-0"></span>
              <span>Siargao, Surigao del Norte, Philippines</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Social Media -->
      <div class="border-t border-white/20 pt-8">
        <div class="flex justify-center gap-6 mb-6">
          <a href="#" class="hover:text-amber-400 transition-colors">
            <span class="i-lucide-facebook w-5 h-5"></span>
          </a>
          <a href="#" class="hover:text-amber-400 transition-colors">
            <span class="i-lucide-instagram w-5 h-5"></span>
          </a>
          <a href="#" class="hover:text-amber-400 transition-colors">
            <span class="i-lucide-twitter w-5 h-5"></span>
          </a>
        </div>
        <p class="text-center text-sm text-white/70">
          © 2025 Discover Siargao~. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script logic needed; all links/icons are static
</script>
