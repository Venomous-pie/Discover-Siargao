<template>
  <section class="relative min-h-screen bg-white overflow-hidden mt-24" data-aos="fade-up">
    <!-- Visual band -->
    <div class="relative h-[60vh]" data-aos="fade-up" data-aos-delay="100">
      <img src="/Guyam.jpg" alt="Siargao shoreline" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      <div class="relative z-10 h-full flex items-center" data-aos="fade-up" data-aos-delay="200">
        <div class="max-w-4xl px-8" data-aos="fade-up" data-aos-delay="300">
          <h1 class="font-oswald text-5xl md:text-7xl text-white mb-4">What This Site Is About</h1>
          <p class="font-inter text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Discover Siargao is your local-first guide to the island—built for travelers who want real insight, not just
            pretty pictures. We share what’s true, what’s useful, and what helps you connect with Siargao’s people,
            places, and rhythms.
          </p>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="max-w-6xl mx-auto px-8 py-20" data-aos="fade-up" data-aos-delay="200">
      <div class="grid md:grid-cols-3 gap-12" data-aos="fade-up" data-aos-delay="300">
        <div class="md:col-span-2">
          <h2 class="font-oswald text-3xl text-amber-700 mb-6">A Different Kind of Guide</h2>
          <p class="font-inter text-lg font-light leading-relaxed mb-6">
            We go beyond the usual travel tips. Here, you’ll find honest advice about getting around, local customs, and
            how to make your visit meaningful for both you and the community. Our goal: help you experience Siargao as
            it really is, not just as a tourist.
          </p>
          <p class="font-inter text-lg font-light leading-relaxed mb-6">
            Whether it’s finding transport, understanding the seasons, or discovering places locals love, every part of
            this site is designed to help you travel with respect and awareness.
          </p>

          <h2 class="font-oswald text-3xl text-amber-700 mb-6">Our Editorial Approach</h2>
          <p class="font-inter text-lg font-light leading-relaxed">
            We value truth over trends, and local voices over viral content. Everything here is checked, updated, and
            written with the island’s best interests in mind—so you get advice that’s actually useful, not just what’s
            popular online.
          </p>
        </div>

        <!-- Philosophy Panel -->
        <div class="bg-amber-50 rounded-2xl p-8 shadow-md" data-aos="fade-left" data-aos-delay="400">
          <h3 class="font-oswald text-2xl text-amber-800 mb-4">Core Principles</h3>
          <ul class="font-inter text-base space-y-3 leading-relaxed">
            <li>Mindful tourism over mass consumption</li>
            <li>Local respect over viral aesthetics</li>
            <li>Functionality over fantasy</li>
            <li>Experience over appearance</li>
          </ul>
        </div>
      </div>

      <!-- Closing Statement -->
      <div class="mt-20 max-w-3xl" data-aos="fade-up" data-aos-delay="400">
        <h2 class="font-oswald text-3xl text-amber-700 mb-6">Why This Matters</h2>
        <p class="font-inter text-lg font-light leading-relaxed mb-8">
          Siargao is a living island—home to families, workers, and nature that needs care. We built this site to help
          you travel in a way that supports the community and protects what makes Siargao special. Responsible travel
          starts with understanding, and that’s what we hope you find here.
        </p>

        <router-link to="/plan-trip"
          class="inline-flex items-center gap-2 px-10 py-2 rounded-lg bg-amber-700 text-white font-oswald text-lg shadow hover:bg-amber-800 transition">
          Explore Responsibly
          <i class="i-lucide-arrow-right w-5 h-5"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
