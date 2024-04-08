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
            <section data-scroll-section id="tokenomics">
                <HomeToken />
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
import { onMounted, onUnmounted, watch } from 'vue';
import { useScrollStore } from '../stores/scroll-store';
import LocomotiveScroll from 'locomotive-scroll';
import HomeFirst from '../components/HomeFirst.vue';
import HomeSecond from '../components/HomeSecond.vue';
import HomeThird from '../components/HomeThird.vue'; 
import HomeAvatar from '../components/HomeAvatar.vue';
import HomeParthners from '../components/HomeParthners.vue';
import HomeToken from '../components/HomeToken.vue';
import HomeRoadMap from '../components/HomeRoadMap.vue';
import HomeFooters from '../components/HomeFooters.vue';

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
        multiplier: .8,
        smartphone: {   
            smooth: true,
        },
        reloadOnContextChange: true,
        // Add more options as needed
    });
});

onUnmounted(() => {
    scroll.destroy();
});
</script>