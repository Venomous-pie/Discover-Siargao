<template>
  <main class="min-h-screen w-screen bg-gradient-to-br from-amber-50 via-white to-white font-inter">
    <!-- Hero Section -->
    <section class="relative pt-20 mt-5 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-amber-800 mb-4 leading-tight font-oswald">Let's Connect</h1>
        <p class="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Have questions about Siargao or want to collaborate? We'd love to hear from you. Reach out and let's build
          something amazing together.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 pb-20" data-aos="fade-up" data-aos-delay="100">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        <!-- Contact Form -->
        <div class="flex flex-col w-full" data-aos="fade-right" data-aos-delay="200">
          <div class="mb-8">
            <h2 class="text-2xl md:text-3xl font-bold text-amber-700 mb-2 font-oswald">Send us a message</h2>
            <div class="w-12 h-1 bg-amber-500 rounded-full"></div>
          </div>
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-900 mb-2">Name</label>
              <input type="text" id="name" name="name" v-model="formData.name" placeholder="Your name"
                class="w-full max-w-full py-3 rounded-lg bg-white border border-amber-200 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                required />
            </div>
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <input type="email" id="email" name="email" v-model="formData.email" placeholder="you@example.com"
                class="w-full max-w-full py-3 rounded-lg bg-white border border-amber-200 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                required />
            </div>
            <div>
              <label for="subject" class="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" v-model="formData.subject"
                placeholder="What is this about?"
                class="w-full max-w-full py-3 rounded-lg bg-white border border-amber-200 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                required />
            </div>
            <div>
              <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">Message</label>
              <textarea id="message" name="message" v-model="formData.message"
                placeholder="Tell us what's on your mind..." rows="6"
                class="w-full max-w-full py-3 rounded-lg bg-white border border-amber-200 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                required></textarea>
            </div>
            <button type="submit"
              class="font-oswald w-full md:w-auto px-8 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors duration-200 active:scale-95">
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8" data-aos="fade-left" data-aos-delay="200">
          <div>
            <div class="mb-8">
              <h2 class="text-2xl md:text-3xl font-bold text-amber-800 mb-2 font-oswald">Get in touch</h2>
              <div class="w-12 h-1 bg-amber-500 rounded-full"></div>
            </div>
          </div>
          <!-- Email -->
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100 text-amber-600">
                <i class="i-lucide-mail w-6 h-6"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
              <a href="mailto:info@discoversiargao.com"
                class="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                info@discoversiargao.com
              </a>
              <p class="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
            </div>
          </div>
          <!-- Phone -->
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100 text-amber-600">
                <i class="i-lucide-phone w-6 h-6"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
              <a href="tel:+639123456789" class="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                +63 (912) 345-6789
              </a>
              <p class="text-sm text-gray-600 mt-1">Mon-Fri, 9am-6pm PHT</p>
            </div>
          </div>
          <!-- Location -->
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100 text-amber-600">
                <i class="i-lucide-map-pin w-6 h-6"></i>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">Location</h3>
              <p class="text-gray-900 font-medium">Siargao Island, Surigao del Norte</p>
              <p class="text-sm text-gray-600 mt-1">Philippines</p>
            </div>
          </div>
          <!-- Social Media -->
          <div class="pt-6 border-t border-amber-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Connect on social</h3>
            <div class="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors font-medium">
                <i class="i-lucide-instagram w-5 h-5"></i>
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors font-medium">
                <i class="i-lucide-facebook w-5 h-5"></i>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

function handleChange(e) {
  formData[e.target.name] = e.target.value
}

function handleSubmit() {
  // You can replace this with actual form submission logic
  console.log('Form submitted:', { ...formData })
  formData.name = ''
  formData.email = ''
  formData.subject = ''
  formData.message = ''
}
</script>