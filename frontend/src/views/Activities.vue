<template>
  <section class="min-h-screen bg-white outline outline-1 outline-amber-500 py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="font-oswald text-5xl md:text-6xl text-amber-700 mb-8">Things To Do in Siargao</h1>
      <p class="font-inter text-lg md:text-xl text-gray-700 mb-12 max-w-3xl">
        Siargao offers more than just world-class surfing. Here, you’ll find activities that connect you to the island’s
        nature, culture, and community. Choose experiences that support locals, respect the environment, and help you
        discover the real Siargao.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Surfing -->
        <div class="bg-white outline outline-1 outline-amber-500 rounded-2xl p-8 shadow-md flex flex-col">
          <h2 class="font-oswald text-2xl text-amber-800 mb-3">Surfing</h2>
          <p class="font-inter text-base text-gray-700 mb-4">Catch a wave at Cloud 9 or try beginner spots like Jacking
            Horse. Support local surf instructors and respect lineup etiquette.</p>
          <img src="/Surfing.jpg" alt="Surfing Siargao" class="rounded-lg h-40 object-cover mb-2" />
        </div>

        <!-- Island Hopping -->
        <div class="bg-white outline outline-1 outline-amber-500 rounded-2xl p-8 shadow-md flex flex-col">
          <h2 class="font-oswald text-2xl text-amber-800 mb-3">Island Hopping</h2>
          <p class="font-inter text-base text-gray-700 mb-4">Visit Guyam, Daku, and Naked Island. Choose community-run
            boat tours and leave no trace behind.</p>
          <img src="/Culture.jpg" alt="Island Hopping" class="rounded-lg h-40 object-cover mb-2" />
        </div>

        <!-- Nature & Wildlife -->
        <div class="bg-white outline outline-1 outline-amber-500 rounded-2xl p-8 shadow-md flex flex-col">
          <h2 class="font-oswald text-2xl text-amber-800 mb-3">Nature & Wildlife</h2>
          <p class="font-inter text-base text-gray-700 mb-4">Explore mangrove forests, swim in natural pools, and spot
            local wildlife. Always follow guides and respect protected areas.</p>
          <img src="/Mangroove.jpg" alt="Nature Siargao" class="rounded-lg h-40 object-cover mb-2" />
        </div>

        <!-- Community Experiences -->
        <div class="bg-white outline outline-1 outline-amber-500 rounded-2xl p-8 shadow-md flex flex-col">
          <h2 class="font-oswald text-2xl text-amber-800 mb-3">Community Experiences</h2>
          <p class="font-inter text-base text-gray-700 mb-4">Join cooking classes, handicraft workshops, or local
            festivals. Choose activities that benefit residents and share authentic culture.</p>
          <img src="/Daku.jpg" alt="Community Siargao" class="rounded-lg h-40 object-cover mb-2" />
        </div>

        <!-- Responsible Travel Tips -->
        <div class="bg-white outline outline-1 outline-amber-500 rounded-2xl p-8 shadow-md flex flex-col">
          <h2 class="font-oswald text-2xl text-amber-800 mb-3">Responsible Travel Tips</h2>
          <p class="font-inter text-base text-gray-700 mb-4">Pack out your trash, use reef-safe sunscreen, and support
            local businesses. Ask before taking photos and learn a few local phrases.</p>
          <img src="/guyam3.jpg" alt="Responsible Travel" class="rounded-lg h-40 object-cover mb-2" />
        </div>

        <!-- Off-the-Beaten-Path -->
        <div class="bg-white outline outline-1 outline-amber-500 rounded-2xl p-8 shadow-md flex flex-col">
          <h2 class="font-oswald text-2xl text-amber-800 mb-3">Off-the-Beaten-Path</h2>
          <p class="font-inter text-base text-gray-700 mb-4">Discover quiet beaches, hidden lagoons, and local eateries.
            Ask locals for recommendations and explore with care.</p>
          <img src="/Secret.jpg" alt="Hidden Siargao" class="rounded-lg h-40 object-cover mb-2" />
        </div>
      </div>
    </div>
  </section>
</template>
