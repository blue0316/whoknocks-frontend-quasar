<template>
    <q-page>
        <div data-scroll-container style="background-color: #212121; max-width: 100%;" >
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
import { watch } from 'vue';
import { useScrollStore } from '../stores/scroll-store';
import HomeFirst from '../components/HomeFirst.vue';
import HomeSecond from '../components/HomeSecond.vue';
import HomeThird from '../components/HomeThird.vue'; 
import HomeAvatar from '../components/HomeAvatar.vue';
import HomeParthners from '../components/HomeParthners.vue';
import HomeToken from '../components/HomeToken.vue';
import HomeRoadMap from '../components/HomeRoadMap.vue';
import HomeFooters from '../components/HomeFooters.vue';


const scrollStore = useScrollStore();


watch(scrollStore, (value) => {
    console.log(value.getSection);
    const target = document.querySelector('#' + value.getSection);

    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
    scrollStore.setSection(null);
});
</script>