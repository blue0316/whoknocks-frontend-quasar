<template>
    <q-page>
        <div data-scroll-container>
            <section data-scroll-section>
                <HomeFirst />
            </section>
            <section data-scroll-section>
                <HomeSecond />
            </section>
            <section data-scroll-section>
                <HomeThird />
            </section>
            <section data-scroll-section>
                <HomeAvatar />
            </section>
            <section data-scroll-section>
                <HomeParthners />
            </section>
            <section data-scroll-section>
                <HomeRoadMap />
            </section>
            <section data-scroll-section>
                <HomeFooters />
            </section>
        </div>
    </q-page>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import LocomotiveScroll from 'locomotive-scroll';
import HomeFirst from 'src/components/HomeFirst.vue';
import HomeSecond from 'src/components/HomeSecond.vue';
import HomeThird from 'src/components/HomeThird.vue'; 
import HomeAvatar from 'src/components/HomeAvatar.vue';
import HomeParthners from 'src/components/HomeParthners.vue';
import HomeRoadMap from 'src/components/HomeRoadMap.vue';
import HomeFooters from 'src/components/HomeFooters.vue';

let scroll;

onMounted(() => {
    scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: .2
        // Add more options as needed
    });
});

onUnmounted(() => {
    scroll.destroy();
});
</script>