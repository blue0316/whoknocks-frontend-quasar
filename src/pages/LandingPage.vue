<template>
    <q-page>
        <div data-scroll-container>
            <section data-scroll-section id="home">
                <HomeFirst />
            </section>
            <section data-scroll-section id="chainlight-city">
                <HomeSecond />
            </section>
            <section data-scroll-section id="live-play-earn">
                <HomeThird />
            </section>
            <section data-scroll-section id="be-your-self">
                <HomeAvatar />
            </section>
            <section data-scroll-section id="community">
                <HomeParthners />
            </section>
            <section data-scroll-section id="roadmap">
                <HomeRoadMap />
            </section>
            <section data-scroll-section id="contact">
                <HomeFooters />
            </section>
        </div>
    </q-page>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useScrollStore } from 'src/stores/scroll-store';
import LocomotiveScroll from 'locomotive-scroll';
import HomeFirst from 'src/components/HomeFirst.vue';
import HomeSecond from 'src/components/HomeSecond.vue';
import HomeThird from 'src/components/HomeThird.vue'; 
import HomeAvatar from 'src/components/HomeAvatar.vue';
import HomeParthners from 'src/components/HomeParthners.vue';
import HomeRoadMap from 'src/components/HomeRoadMap.vue';
import HomeFooters from 'src/components/HomeFooters.vue';

let scroll;

const scrollStore = useScrollStore();


watch(scrollStore, (value) => {
    console.log(value.getSection);
    const target = document.querySelector('#' + value.getSection);

    scroll.scrollTo(target);

    scrollStore.setSection(null);
});

onMounted(() => {
    
    scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: .2
        // Add more options as needed
    });
});
</script>