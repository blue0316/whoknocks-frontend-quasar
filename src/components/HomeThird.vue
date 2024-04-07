<script setup>
import { ref } from 'vue'

const slide = ref(1)

</script>
<template>
  <div class="background">
    <div class="container">
      <div class="marquee marquee1">
        <span style="font-size: 250px; font-weight: 800;">LIVE LIVE PLAY PLAY BUSINESS BUILD </span>
      </div>
      <div class="marquee marquee2">
        <span style="font-size: 250px; font-weight: 800;">LIVE LIVE PLAY PLAY BUSINESS BUILD </span>
      </div>
    </div>
    <q-carousel
      v-model="slide"
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      padding
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      infinite
      height="700px"
      class="carousel-shadow"
      autoplay
    >
      <q-carousel-slide :name="1" img-src="../assets/carousel/slide_live.png">
        <q-scroll-area class="fit" style="position: relative">
          <div class="text-center carousel-position">
            <div class="carousel-title-text gt-xs">LIVE</div>
            <div class="carousel-title-text-small lt-sm">LIVE</div>
            <div style="display: flex; justify-content: center;">
            <div class="carousel-text">
              Iconic landmarks such as the Metarise Tower and the Center Mall make up Cityland, 
              the beating heart of the city which with its buildings, villas, offices, shops, showrooms, 
              restaurants and art galleries is the perfect place to socialize , enjoy your interests and make business.
            </div>
          </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="../assets/carousel/slide_play.png">
        <q-scroll-area class="fit" style="position: relative">
          <div class="text-center carousel-position">
            <div class="carousel-title-text gt-xs">PLAY</div>
            <div class="carousel-title-text-small lt-sm">PLAY</div>
            <div style="display: flex; justify-content: center;">
            <div class="carousel-text">
              Funland is the realm of euphoria. Sport Stadiums, Concert Arena, Exhibition Hall are just some of the 
              entertainment options where you can take advantage of the gameplay mechanics to play during multiplayer 
              sessions and have fun with other real users.
            </div>
          </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="../assets/carousel/slide_business.png">
        <q-scroll-area class="fit" style="position: relative">
          <div class="text-center carousel-position">
            <div class="carousel-title-text gt-xs">BUSINESS</div>
            <div class="carousel-title-text-small lt-sm" style="font-size: 30px">BUSINESS</div>
            <div style="display: flex; justify-content: center;">
            <div class="carousel-text">
              Metarise provides opportunities for businesses to interact with clients and employees virtually. 
              Companies can create customized 3D offices for presentations, trainings and conferences. 
              The metaverse provides unique and interactive ways for brands to connect with their target audience, 
              tracking and targeting their digital touchpoints.
            </div>
          </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="../assets/carousel/slide_build.png">
        <q-scroll-area class="fit" style="position: relative">
          <div class="text-center carousel-position">
            <div class="carousel-title-text gt-xs">BUILD</div>
            <div class="carousel-title-text-small lt-sm">BUILD</div>
            <div style="display: flex; justify-content: center;">
            <div class="carousel-text">
              A land in Metarise is the starting point for creating your dream villa, 
              your office or your own mini-game where you can host other users. 
              Thanks to the advanced building system, no particular modeling and programming skills are necessary.
            </div>
          </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style scoped>
.background {
  background-color: #212121;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;
}
.carousel-shadow {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5), 0 -10px 10px -10px rgba(0, 0, 0, 0.5);
}

.container {
  position: relative;
  z-index: 9999;
  width: 100%;
  height: 200px
}

.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 20s linear infinite;
}

.marquee1 span {   
  animation-delay: -10s; 
}

.marquee2 span {
  animation-delay: 0s;
}

.carousel-position {
  position: absolute; bottom: 0; width: 100%; text-align: center;
}

.carousel-title-text {
  font-size: 65px;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 30px;
}

.carousel-title-text-small {
  font-size: 35px;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 30px;
}

.carousel-text {
  max-width: 450px;
  font-size: 25;
  font-weight: 600;
}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>