<template>
  <section class="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden">
    <!-- Hero background image with gradient overlay -->
    <div class="absolute inset-0 z-0">
      <img src="/Cloud9.jpg" alt="Siargao waves" class="w-full h-full object-cover object-center opacity-70" />
      <div class="absolute inset-0 bg-gradient-to-b from-amber-100/60 via-white/80 to-white"></div>
    </div>
    <div class="relative z-10 w-full mx-8 my-16 max-w-4xl">
      <div class="flex justify-center items-center gap-4 mb-8 animate-fade-in">
        <i class="i-lucide-heart text-amber-700 w-10 h-10 drop-shadow"></i>
        <h1 class="font-oswald underline text-5xl md:text-6xl text-center mb-2 drop-shadow-lg">About Us</h1>
        <i class="i-lucide-palm-tree text-amber-700 w-10 h-10 drop-shadow"></i>
      </div>
      <div class="font-italic font-light text-base md:text-lg font-inter text-center mb-8 animate-fade-in delay-100">
        Discover the soul of Siargao—beyond the surf, beyond the guidebooks.
      </div>
      <div class="bg-white/90 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto mb-8 animate-fade-in delay-200">
        <h2 class="font-oswald text-2xl md:text-3xl mb-4 text-amber-700">Our First Siargao Sunrise</h2>
        <p class="font-inter text-md md:text-xl font-light mb-6">
          The first time we set foot on Siargao, the island greeted us with golden light, salt air, and a sense of
          belonging we’d never felt before. What started as a simple getaway quickly became our <strong>home away from
            home</strong>—a place where every sunrise felt like a new beginning and every smile from a local felt like
          family.
        </p>
        <h2 class="font-oswald text-xl md:text-2xl mb-2 text-amber-700">Our Mission</h2>
        <p class="font-inter text-md md:text-xl font-light mb-6">
          We created this website to go <strong>beyond the usual tourist guides</strong>. Our goal is to capture the
          true
          spirit of Siargao—its <strong>warm-hearted people</strong>, hidden gems, and the vibrant community that makes
          the island so special. We believe Siargao’s magic lies not just in its waves, but in its stories, traditions,
          and everyday moments.
        </p>
        <h2 class="font-oswald text-xl md:text-2xl mb-2 text-amber-700">Our Promise</h2>
        <p class="font-inter text-md md:text-xl font-light mb-6">
          We’re committed to sharing <strong>authentic, up-to-date information</strong>, sustainable travel tips, and
          content that inspires respect for Siargao’s environment and culture. Every guide, article, and recommendation
          is
          made with care—so you can explore with confidence and appreciation.
        </p>
        <h2 class="font-oswald text-xl md:text-2xl mb-2 text-amber-700">Join Us</h2>
        <p class="font-inter text-md md:text-xl font-light mb-2">
          Whether you’re planning your first trip or returning for another adventure, we invite you to discover Siargao
          with an open heart. Let the island’s beauty, spirit, and community welcome you—just as it welcomed us.
        </p>
      </div>
      <div class="flex justify-center mt-8 animate-fade-in delay-300">
        <router-link to="/plan-trip"
          class="inline-block px-8 py-3 rounded-lg bg-amber-700 text-white font-semibold font-oswald shadow-lg hover:bg-amber-800 transition text-lg">
          Start Planning Your Journey
          <i class="i-lucide-arrow-right block text-white z-10 w-6 h-6 md:w-5 md:h-5 ml-2"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.animate-fade-in {
  animation: fade-in 1s cubic-bezier(.22, 1, .36, 1) both;
}

.animate-fade-in.delay-100 {
  animation-delay: .1s;
}

.animate-fade-in.delay-200 {
  animation-delay: .2s;
}

.animate-fade-in.delay-300 {
  animation-delay: .3s;
}

.bg-white\/90 {
  background: rgba(255, 255, 255, 0.90);
}

.drop-shadow {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.18));
}

.drop-shadow-lg {
  filter: drop-shadow(0 4px 24px rgba(0, 0, 0, 0.18));
}

.shadow-2xl {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
}
</style>
