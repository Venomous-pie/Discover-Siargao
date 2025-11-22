<template>
  <section class="min-h-screen bg-white mt-24">
    <!-- Hero / Intro Section -->
    <div class="relative h-[50vh] w-full mb-12">
      <img src="/Food.png" alt="Siargao Food Banner" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      <div class="relative z-10 h-full flex flex-col justify-center items-start px-8">
        <h1 class="font-oswald text-5xl md:text-7xl text-white mb-4">Food & Dining in Siargao</h1>
        <p class="font-inter text-lg md:text-xl text-white/90 max-w-2xl mb-6">
          Siargao’s food scene is laid-back, surf-inspired, and a delicious mix of local flavors and global favorites.
          From beachside BBQs to cozy cafes, there’s something for every taste and budget.
        </p>
        <router-link to="/map-and-direction"
          class="inline-flex gap-2 items-center px-8 py-3 rounded-lg bg-amber-700 text-white font-oswald text-lg shadow hover:bg-amber-800 transition">
          Explore the Map
          <i class="i-lucide-map-pin w-5 h-5"></i>
        </router-link>
      </div>
    </div>

    <!-- Dining Categories -->
    <div class="max-w-6xl mx-auto mb-12">
      <nav class="flex flex-wrap gap-4 justify-center mb-8">
        <span class="px-6 py-2 rounded-full bg-amber-100 text-amber-700 font-oswald cursor-pointer">Local /
          Filipino</span>
        <span class="px-6 py-2 rounded-full bg-amber-100 text-amber-700 font-oswald cursor-pointer">International /
          Fusion</span>
        <span class="px-6 py-2 rounded-full bg-amber-100 text-amber-700 font-oswald cursor-pointer">Cafe &
          Breakfast</span>
        <span class="px-6 py-2 rounded-full bg-amber-100 text-amber-700 font-oswald cursor-pointer">Seafood</span>
        <span class="px-6 py-2 rounded-full bg-amber-100 text-amber-700 font-oswald cursor-pointer">Budget / Street
          Eats</span>
        <span class="px-6 py-2 rounded-full bg-amber-100 text-amber-700 font-oswald cursor-pointer">Fine Dining /
          Resort</span>
      </nav>

      <!-- Featured Restaurants Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Kermit Siargao -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/kermit.jpeg" alt="Kermit Siargao" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">Kermit Siargao</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Italian / Pizza / Pasta</span>
            <p class="font-inter text-base text-gray-700 mb-2">Wood-fired pizzas, pasta, and a lively group dinner vibe.
              Must-try for pizza lovers.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱₱ • 11am–10pm</p>
            <a href="https://www.klook.com/en-PH/blog/siargao-restaurants/" target="_blank"
              class="text-amber-700 underline">See Menu & Reviews</a>
          </div>
        </div>
        <!-- Altrove Trattoria -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/altrove.jpg" alt="Altrove Trattoria" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">Altrove Trattoria</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Italian</span>
            <p class="font-inter text-base text-gray-700 mb-2">Cozy, romantic, and authentic Italian cuisine with a
              great wine selection.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱₱ • 12pm–10pm</p>
            <a href="https://rafsworldtravel.blogspot.com/2022/07/siargao-food-trip.html" target="_blank"
              class="text-amber-700 underline">See Reviews</a>
          </div>
        </div>
        <!-- La Carinderia -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/lacarinderia.jpg" alt="La Carinderia" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">La Carinderia</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Filipino + Italian Fusion</span>
            <p class="font-inter text-base text-gray-700 mb-2">Local comfort food meets Italian classics. A staple for
              islanders and visitors alike.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱ • 8am–9pm</p>
            <a href="https://vismin.ph/2022/siargao-food-trip/" target="_blank" class="text-amber-700 underline">See
              Reviews</a>
          </div>
        </div>
        <!-- Shaka Café -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/shaka.jpg" alt="Shaka Café" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">Shaka Café</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Healthy / Vegetarian / Smoothie Bowl</span>
            <p class="font-inter text-base text-gray-700 mb-2">Organic smoothie bowls, fresh juices, and vegan-friendly
              options. Perfect for a healthy start.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱ • 7am–5pm</p>
            <a href="https://guidetothephilippines.ph/articles/what-to-eat/siargao-restaurants" target="_blank"
              class="text-amber-700 underline">See Reviews</a>
          </div>
        </div>
        <!-- Mama’s Grill -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/mamasgrill.jpg" alt="Mama’s Grill" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">Mama’s Grill</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">BBQ / Filipino / Seafood</span>
            <p class="font-inter text-base text-gray-700 mb-2">Cheap, grilled meats & seafood. Classic Filipino BBQ,
              best enjoyed with friends.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱ • 5pm–10pm</p>
            <a href="https://www.klook.com/en-PH/blog/siargao-restaurants/" target="_blank"
              class="text-amber-700 underline">See Reviews</a>
          </div>
        </div>
        <!-- Buddha Siargao -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/buddha.jpg" alt="Buddha Siargao" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">Buddha Siargao</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Thai / Open-air Island Restaurant</span>
            <p class="font-inter text-base text-gray-700 mb-2">Thai classics in a surf-resort setting. Open-air,
              laid-back, and flavorful.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱ • 12pm–10pm</p>
            <a href="https://www.klook.com/en-PH/blog/siargao-restaurants/" target="_blank"
              class="text-amber-700 underline">See Reviews</a>
          </div>
        </div>
        <!-- Cev (Kinilaw / Ceviche) -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/cev.jpg" alt="Cev" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">Cev (Kinilaw / Ceviche)</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Seafood / Raw</span>
            <p class="font-inter text-base text-gray-700 mb-2">Raw fish, kinilaw, and ceviche-style dishes. A true taste
              of Siargao’s island flavors.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱ • 11am–9pm</p>
            <a href="https://rafsworldtravel.blogspot.com/2022/07/siargao-food-trip.html" target="_blank"
              class="text-amber-700 underline">See Reviews</a>
          </div>
        </div>
        <!-- Kanin Baboy -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/kaninbaboy.jpg" alt="Kanin Baboy" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">Kanin Baboy</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Filipino Comfort / Lechon</span>
            <p class="font-inter text-base text-gray-700 mb-2">Lechon sisig, sinigang, and classic Filipino fare.
              Comfort food for every craving.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱ • 10am–9pm</p>
            <a href="https://www.spot.ph/eatdrink/the-latest-eat-drink/88541/siargao-restaurants-a5229-20220318-lfrm"
              target="_blank" class="text-amber-700 underline">See Reviews</a>
          </div>
        </div>
        <!-- La Mesa -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/lamesa.jpg" alt="La Mesa" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">La Mesa</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Bar + Island Kitchen</span>
            <p class="font-inter text-base text-gray-700 mb-2">Cocktail bar plus comfort food. Filipino dishes and
              creative drinks in a lively setting.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱ • 5pm–12am</p>
            <a href="https://goforlokal.com/siargao-restaurants/" target="_blank" class="text-amber-700 underline">See
              Reviews</a>
          </div>
        </div>
        <!-- White Beard Coffee -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/whitebeardcoffee.jpg" alt="White Beard Coffee" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">White Beard Coffee</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Breakfast / Cafe</span>
            <p class="font-inter text-base text-gray-700 mb-2">Breakfast rice meals, waffles, and specialty coffee.
              Great for early risers.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱ • 7am–3pm</p>
            <a href="https://www.spot.ph/eatdrink/the-latest-eat-drink/88541/siargao-restaurants-a5229-20220318-lfrm"
              target="_blank" class="text-amber-700 underline">See Reviews</a>
          </div>
        </div>
        <!-- Harana Surf Restaurant -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/harana.jpg" alt="Harana Surf Restaurant" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">Harana Surf Restaurant</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Filipino Fusion / Island Restaurant</span>
            <p class="font-inter text-base text-gray-700 mb-2">Filipino fusion, island desserts like halo-halo, and live
              music. A true island experience.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱ • 7am–10pm</p>
            <a href="https://vismin.ph/2022/siargao-food-trip/" target="_blank" class="text-amber-700 underline">See
              Reviews</a>
          </div>
        </div>
        <!-- Haole -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src="/Haole.jpg" alt="Haole" class="h-40 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="font-oswald text-xl text-amber-800 mb-1">Haole</h2>
            <span class="font-inter text-sm text-amber-700 mb-2">Hawaiian / Filipino Fusion</span>
            <p class="font-inter text-base text-gray-700 mb-2">Island-style Hawaiian and Filipino dishes. Unique flavors
              and a chill vibe.</p>
            <p class="font-inter text-xs text-gray-500 mb-2">General Luna • ₱₱ • 11am–9pm</p>
            <a href="https://diwasiargao.com/haole-siargao/" target="_blank" class="text-amber-700 underline">See
              Reviews</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Map View Placeholder -->
    <div class="max-w-6xl mx-auto px-4 my-16">
      <h2 class="font-oswald text-3xl text-amber-700 mb-4">Map of Siargao’s Best Eats</h2>
      <div
        class="w-full h-96 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 font-oswald text-xl">
        [Map coming soon: Find restaurants near you!]
      </div>
    </div>

    <!-- Local Eats / Hidden Gems -->
    <div class="max-w-6xl mx-auto px-4 my-16">
      <h2 class="font-oswald text-3xl text-amber-700 mb-4">Local Eats & Hidden Gems</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-amber-50 rounded-2xl p-6 shadow flex flex-col">
          <h3 class="font-oswald text-xl text-amber-800 mb-2">Karinderyas & Street Food</h3>
          <p class="font-inter text-base text-gray-700 mb-2">Try local favorites like barbecue, lechon, and pancit at
            small eateries and street stalls. Ask locals for their go-to spots!</p>
        </div>
        <div class="bg-amber-50 rounded-2xl p-6 shadow flex flex-col">
          <h3 class="font-oswald text-xl text-amber-800 mb-2">Budget Bites</h3>
          <p class="font-inter text-base text-gray-700 mb-2">Find filling meals for under ₱100 at local canteens. Great
            for backpackers and anyone wanting authentic island food.</p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto mb-8">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- LEFT : Content -->
        <div class="flex flex-col space-y-12">

          <!-- Foodie Tips -->
          <section>
            <h2 class="font-oswald text-3xl text-amber-700 mb-6">Foodie Tips for Siargao</h2>
            <ul class="font-inter text-gray-700 space-y-4 leading-relaxed">
              <li>Peak dining times: 6–8pm. Arrive early to avoid crowds.</li>
              <li>Most places are cash-only. Bring enough pesos.</li>
              <li>Reservations recommended for popular spots.</li>
              <li>Try local dishes: kinilaw, lechon, pancit, halo-halo.</li>
              <li>Be respectful. Greet staff and ask permission before photos.</li>
            </ul>
          </section>

          <!-- References -->
          <section>
            <h2 class="font-oswald text-3xl text-amber-700">References & Resources</h2>
            <ul class="font-inter text-gray-800 space-y-3">
              <li><a href="https://www.klook.com/en-PH/blog/siargao-restaurants/" target="_blank"
                  class="hover:text-amber-700 transition underline">Klook – Siargao Food Guide</a></li>
              <li><a href="https://guidetothephilippines.ph/articles/what-to-eat/siargao-restaurants" target="_blank"
                  class="hover:text-amber-700 transition underline">Guide to the Philippines – Siargao Eats</a></li>
              <li><a href="https://vismin.ph/2022/siargao-food-trip/" target="_blank"
                  class="hover:text-amber-700 transition underline">VisMin.ph – Food Trip</a></li>
              <li><a href="https://rafsworldtravel.blogspot.com/2022/07/siargao-food-trip.html" target="_blank"
                  class="hover:text-amber-700 transition underline">Raf’s World Travel – Siargao Food Trip</a></li>
              <li><a
                  href="https://www.spot.ph/eatdrink/the-latest-eat-drink/88541/siargao-restaurants-a5229-20220318-lfrm"
                  target="_blank" class="hover:text-amber-700 transition underline">Spot.ph – Siargao Restaurants</a>
              </li>
              <li><a href="https://goforlokal.com/siargao-restaurants/" target="_blank"
                  class="hover:text-amber-700 transition underline">GoForLokal – Siargao Eats</a></li>
              <li><a href="https://diwasiargao.com/haole-siargao/" target="_blank"
                  class="hover:text-amber-700 transition underline">Diwa Siargao – Haole Review</a></li>
            </ul>
          </section>

        </div>

        <!-- RIGHT : Visual Feature -->
        <div class="sticky top-24">
          <div class="rounded-3xl overflow-hidden shadow-xl h-screen max-h-170 w-full bg-center bg-cover"
            style="background-image: url('/Food.png');">
          </div>
        </div>

      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mx-16 mb-16">
      <div class="aspect-video bg-black rounded-2xl overflow-hidden">
        <iframe width="100%" height="100%" src="https://www.youtube.com/watch?v=TAaIR7aapJg" title="Siargao Food Tour"
          frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="aspect-video bg-black rounded-2xl overflow-hidden">
        <iframe width="100%" height="100%" src="https://www.youtube.com/watch?v=NkI_cST9oHw" title="Siargao Eats"
          frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </section>
</template>
