<template>
    <section class="h-screen flex items-center justify-center p-8 text-white relative overflow-hidden"
             style="background: url('/Siargao.jpg') no-repeat center center/cover;">
        
        <div class="relative z-10 text-center max-w-4xl mx-auto">
            
            <h1 data-aos="fade-down" class="text-5xl md:text-7xl font-extrabold font-oswald tracking-tight drop-shadow-lg">
                Your Siargao Adventure Starts Now
            </h1>
            
            <p data-aos="fade-up" class="mt-4 text-xl md:text-2xl font-light font-inter max-w-3xl mx-auto drop-shadow-md">
                Discover Cloud 9, Sugba Lagoon, and secret spots. Surf, swim, and soak up the island life.
            </p>

            <div class="mt-10">
                <router-link to="/map"
                    class="inline-flex gap-3 items-center px-10 py-4 text-lg font-bold rounded-xl bg-white text-[#10B981] shadow-2xl hover:bg-gray-100 transition transform hover:scale-[1.05] active:scale-[0.98] duration-200 uppercase font-oswald">
                    Plan My Dream Trip Now
                    <i class="i-lucide-arrow-right block w-5 h-5"></i>
                </router-link>
            </div>
            
        </div>
        
        <div class="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>

    </section>
</template>

<style scoped>
h1, p {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}
</style>