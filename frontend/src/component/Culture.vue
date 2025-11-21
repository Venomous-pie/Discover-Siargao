<template>
    <div class="m-8">
        <div class="flex justify-center items-center gap-4">
            <i data-aos="fade-right" class="i-lucide-arrow-right block text-black w-6 h-6 md:w-12 md:h-12"></i>
            <h1 data-aos="fade-up" class="font-oswald underline text-md text-center md:min-w-xl md:text-6xl">Siargao
                Culture</h1>
            <i data-aos="fade-left" class="i-lucide-arrow-left block text-black w-6 h-6 md:w-12 md:h-12"></i>
        </div>
        <h6 class="font-italic font-light text-sm font-inter text-center mt-0">Just you, the waves, and island time.
        </h6>
    </div>

    <div class="flex m-8 flex-col md:flex-row">

        <div class="flex-1 mr-8 max-w-lg">
            <h1 data-aos="fade-right" class="text-4xl font-oswald">Beyond the Surf: Discover the Heart of Siargao</h1>
            <p data-aos="fade-right" delay="100ms" class="mt-4 font-inter text-md line-height-5">
                <strong>Siargao Island</strong>, often hailed as the <strong>surfing capital of the
                    Philippines</strong>, is more than just a surfer's paradise. Beyond its world-class waves, Siargao
                boasts a <strong>rich cultural tapestry</strong> woven from the traditions and lifestyles of its local
                inhabitants. The island's culture is deeply rooted in <strong>community values</strong>,
                <strong>hospitality</strong>, and a <strong>profound connection to nature</strong>.<br>
                Visitors to Siargao can immerse themselves in the local way of life by participating in
                <strong>traditional festivals</strong>, sampling <strong>authentic Filipino cuisine</strong>, and
                engaging with the <strong>warm and welcoming locals</strong>.<br>
                The island's vibrant culture is reflected in its <strong>music, dance, and artisanal crafts</strong>,
                offering a unique blend of <strong>indigenous and contemporary influences</strong>.<br>
                Exploring Siargao's culture provides a <strong>holistic experience</strong> that goes beyond surfing,
                allowing visitors to appreciate the island's <strong>heritage</strong> and the <strong>resilience of its
                    people</strong>.<br>
                Whether it's through <strong>storytelling sessions with elders</strong>, <strong>visits to local
                    markets</strong>, or simply <strong>sharing a meal with a Siargao family</strong>, the cultural
                experiences on the island enrich the travel experience, making Siargao not just a destination for
                adventure but also a place to <strong>connect with its soul</strong>.
            </p>

            <div class="w-full mt-6">
                <div class="flex items-center w-full mb-8">
                    <div class="flex-1 outline outline-[1px] outline-black mr-6"></div>
                    <router-link to="/culture"
                        class="inline-flex gap-2 items-center px-4 py-2 rounded-lg bg-amber-700 text-white font-semibold font-oswald shadow hover:bg-amber-800 transition">
                        Learn More
                        <i class="i-lucide-arrow-right block text-white z-10 w-6 h-6 md:w-5 md:h-5"></i>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="flex-1">
            <div class="mirror-container w-full h-64 md:h-full relative">
                <img src="/Guyam.jpg" aria-hidden="true" alt="" class="shard shard-1" />
                <img src="/guyam2.jpg" aria-hidden="true" alt="" class="shard shard-2" />
                <img src="/Food.png" aria-hidden="true" alt="" class="shard shard-3" />
                <img src="/Cloud9.jpg" aria-hidden="true" alt="" class="shard shard-4" />
                <img src="/Food2.jpg" aria-hidden="true" alt="" class="shard shard-5" />
                <img src="/Culture.jpg" aria-hidden="true" alt="" class="shard shard-6" />
                <img src="/Magpupungko.jpg" aria-hidden="true" alt="" class="shard shard-7" />
                <img src="/Board.jpg" aria-hidden="true" alt="" class="shard shard-8" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.mirror-container {
    position: relative;
    perspective: 1000px;
    overflow: hidden;
}

.shard {
    position: absolute;
    inset: 0;
    width: 110%;
    height: 110%;
    object-fit: cover;
    object-position: center;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.4);
    transition: transform .6s cubic-bezier(.22, 1, .36, 1), box-shadow .3s;
    will-change: transform;
    transform-origin: center center;
}

.shard-1 {
    z-index: 20;
    clip-path: polygon(0 0, 45% 0, 35% 30%, 0 30%);
    transform: translate(-3px, -2px) rotate(-1deg);
}

.shard-2 {
    z-index: 18;
    clip-path: polygon(45% 0, 75% 0, 65% 28%, 35% 30%);
    transform: translate(1px, -1px) rotate(0.5deg);
}

.shard-3 {
    z-index: 16;
    clip-path: polygon(75% 0, 100% 0, 100% 40%, 65% 28%);
    transform: translate(3px, 0) rotate(1.5deg);
}

.shard-4 {
    z-index: 14;
    clip-path: polygon(0 30%, 35% 30%, 30% 65%, 0 65%);
    transform: translate(-2px, 3px) rotate(-0.5deg);
}

.shard-5 {
    z-index: 12;
    clip-path: polygon(35% 30%, 65% 28%, 60% 65%, 30% 65%);
    transform: translate(0, 2px) rotate(0.2deg);
}


.shard-6 {
    z-index: 11;
    clip-path: polygon(65% 28%, 100% 40%, 100% 95%, 55% 100%);
    transform: translate(4px, 4px) rotate(1.2deg);
}

.shard-7 {
    z-index: 19;
    clip-path: polygon(0 65%, 30% 65%, 25% 100%, 0 100%);
    transform: translate(-2px, 4px) rotate(-1.2deg);

}

.shard-8 {
    z-index: 17;
    clip-path: polygon(30% 65%, 60% 65%, 70% 100%, 25% 100%);
    transform: translate(7px, 10px) rotate(1deg);
}

.mirror-container:hover .shard-main {
    transform: translate3d(0, 0, 0) rotate(0);
}

.mirror-container:hover .shard-1 {
    transform: translate3d(-20px, -10px, 10px) rotate(-8deg);
}

.mirror-container:hover .shard-2 {
    transform: translate3d(8px, -6px, 10px) rotate(7deg);
}

.mirror-container:hover .shard-3 {
    transform: translate3d(24px, 2px, 10px) rotate(10deg);
}

.mirror-container:hover .shard-4 {
    transform: translate3d(-15px, 18px, 10px) rotate(-6deg);
}

.mirror-container:hover .shard-5 {
    transform: translate3d(0, 12px, 10px) rotate(4deg);
}

.mirror-container:hover .shard-6 {
    transform: translate3d(28px, 20px, 10px) rotate(9deg);
}

.mirror-container:hover .shard-7 {
    transform: translate3d(-25px, 15px, 10px) rotate(-10deg);
}

.mirror-container:hover .shard-8 {
    transform: translate3d(10px, 25px, 10px) rotate(5deg);
}

@media (max-width: 640px) {
    .mirror-container {
        height: 220px;
    }

    .shard {
        width: 120%;
        height: 120%;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }
}
</style>