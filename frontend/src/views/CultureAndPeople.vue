<template>
  <div class="m-0">
    <!-- Hero Section -->
    <section class="relative h-72 md:h-96 flex items-center justify-center bg-cover bg-center rounded-b-3xl shadow-lg" style="background-image: url('/public/Siargao.jpg');" data-aos="fade-up" data-aos-delay="100">
      <div class="absolute inset-0 bg-black bg-opacity-40 rounded-b-3xl"></div>
      <div class="relative z-10 text-center w-full px-4">
        <h1 class="font-oswald underline text-white text-3xl md:text-6xl drop-shadow-lg">Siargao Culture & People</h1>
        <p class="font-italic font-light text-white font-inter text-md md:text-xl mt-4 max-w-2xl mx-auto">Discover
          Siargao beyond the surf — its people, traditions, and everyday moments that make the island feel like home.
        </p>
      </div>
    </section>

    <!-- Main Content Container -->
    <div class="max-w-7xl mx-auto px-4 md:px-8" data-aos="fade-up" data-aos-delay="200">
      <!-- Two Column Layout -->
      <div class="flex flex-col md:flex-row gap-8 mt-12" data-aos="fade-up" data-aos-delay="250">
        <!-- Left Column - Main Content -->
        <div class="flex-1" data-aos="fade-right" data-aos-delay="300">
          <h2 class="text-3xl font-oswald">A Sea‑Shaped Culture</h2>
          <p class="mt-4 font-inter text-md">Siargao's communities are intertwined with the ocean: fishing,
            boat-building and coastal harvests shape daily life. Hospitality is genuine and communal ties are strong —
            visitors may find themselves welcomed to local gatherings and shared meals.</p>

          <h3 class="mt-6 text-2xl font-oswald">Customs & Values</h3>
          <ul class="list-disc ml-6 mt-3 font-inter text-md space-y-2" data-aos="fade-up" data-aos-delay="350">
            <li>Communal cooperation during festivals, harvests, and family events.</li>
            <li>Respect for elders and strong family connections influence local decisions.</li>
            <li>Religious and seasonal rites often blend with indigenous practices.</li>
          </ul>

          <h3 class="mt-6 text-2xl font-oswald">Festivals & Community Life</h3>
          <p class="mt-3 font-inter text-md">Fiestas and seaside celebrations feature music, dance and food.
            These events are a great time to experience local color — attend respectfully and enjoy the communal spirit.
          </p>

          <h3 class="mt-6 text-2xl font-oswald">Cuisine & Markets</h3>
          <p class="mt-3 font-inter text-md">Fresh seafood, coconut-based dishes, and market snacks are staples.
            Visiting local markets supports families and is the best way to taste authentic island flavors.</p>
        </div>

        <!-- Right Column - Sidebar -->
        <aside class="w-full md:w-96 flex flex-col gap-6" data-aos="fade-left" data-aos-delay="350">
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img src="/IslandHopping.jpg" alt="Siargao culture" class="w-full h-64 object-cover" />
          </div>

          <div class="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="font-oswald text-xl">Arts & Handicrafts</h4>
            <p class="mt-2 font-inter text-sm">Look for woven items, small handicrafts, and pieces inspired by
              the sea. Buying local sustains artisans and traditions.</p>

            <h4 class="mt-4 font-oswald text-xl">Language & Greetings</h4>
            <p class="mt-2 font-inter text-sm">Tagalog and Bisaya are commonly spoken; a simple greeting in the
              local language is appreciated and warmly received.</p>
          </div>
        </aside>
      </div>

      <!-- Experience Local Life Section -->
      <section class="mt-16" data-aos="fade-up" data-aos-delay="300">
        <h2 class="text-3xl font-oswald mb-6 text-center">How to Experience Local Life</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 border rounded-xl shadow-md bg-white flex flex-col items-center text-center">
            <h5 class="font-oswald text-lg">Visit Local Markets</h5>
            <p class="mt-2 font-inter text-sm">Markets are social hubs. Try street snacks and converse with vendors to
              learn about daily rhythms and tastes.</p>
          </div>
          <div class="p-6 border rounded-xl shadow-md bg-white flex flex-col items-center text-center">
            <h5 class="font-oswald text-lg">Attend a Fiesta</h5>
            <p class="mt-2 font-inter text-sm">If you can, attend a village fiesta to experience performances, parades,
              and communal feasting. Observe respectfully and enjoy the warmth of the event.</p>
          </div>
          <div class="p-6 border rounded-xl shadow-md bg-white flex flex-col items-center text-center">
            <h5 class="font-oswald text-lg">Support Homestays & Guides</h5>
            <p class="mt-2 font-inter text-sm">Choose homestays, community-based tours, and local guides to create
              meaningful interactions and directly benefit residents.</p>
          </div>
        </div>
      </section>

      <!-- Visitor Etiquette Section -->
      <section class="mt-16 mb-16" data-aos="fade-up" data-aos-delay="350">
        <div class="bg-yellow-50 border-l-4 border-amber-700 p-6 rounded-xl shadow-sm">
          <h2 class="text-3xl font-oswald mb-3">Visitor Etiquette</h2>
          <ul class="list-disc ml-6 font-inter text-md space-y-1">
            <li>Ask permission before photographing people, especially during private or sacred moments.</li>
            <li>Dress modestly in village or religious settings and remove shoes when entering homes if asked.</li>
            <li>Respect nature: minimise waste and avoid disturbing wildlife or protected areas.</li>
            <li>Buy local goods and services to support the island economy.</li>
          </ul>
          <p class="mt-6 font-inter text-sm">Siargao's culture is carried in everyday kindness — a shared meal, a wave,
            and a patient smile. Slow down, listen, and you'll leave with stories and friendships that last long after
            the trip.</p>
        </div>
      </section>
    </div>
  </div>
</template>