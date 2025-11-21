<script setup lang="ts">
import Footer from './component/Footer.vue';
import Navbar from './component/Navbar.vue';

</script>

<template>
  <nav class="font-oswald fixed top-0 left-0 right-0 z-999">
    <Navbar />
  </nav>
  <main class="font-inter">
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>