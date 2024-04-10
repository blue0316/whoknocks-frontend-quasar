<script setup>
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import imgSrcBrands from '../assets/carousel/slide_brands.png';
import imgSrcBuild from '../assets/carousel/slide_build.png';
import imgSrcBusiness from '../assets/carousel/slide_business.png';
import imgSrcLive from '../assets/carousel/slide_live.png';
import imgSrcPlay from '../assets/carousel/slide_play.png';

const $q = useQuasar();

const startAnimation = ref(false);

const loadedBrands = ref(false);
const loadedBuild = ref(false);
const loadedBusiness = ref(false);
const loadedLive = ref(false);
const loadedPlay = ref(false);

onMounted(() => {
    setTimeout(() => {
    startAnimation.value = true;
  }, 2000);

  const imgBrands = new Image();
  imgBrands.src = imgSrcBrands;
  console.log(imgBrands.src);
  imgBrands.onload = () => {
    loadedBrands.value = true;
  };

  const imgBuild = new Image();
  imgBuild.src = imgSrcBuild;
  console.log(imgBuild.src);
  imgBuild.onload = () => {
    loadedBuild.value = true;
  };

  const imgBusiness = new Image();
  imgBusiness.src = imgSrcBusiness;
  console.log(imgBusiness.src);
  imgBusiness.onload = () => {
    loadedBusiness.value = true;
  };

  const imgLive = new Image();
  imgLive.src = imgSrcLive;
  console.log(imgLive.src);
  imgLive.onload = () => {
    loadedLive.value = true;
  };

  const imgPlay = new Image();
  imgPlay.src = imgSrcPlay;
  console.log(imgPlay.src);
  imgPlay.onload = () => {
    loadedPlay.value = true;
  };
});

const slide = ref(1)

</script>
<template>
  <div class="background">
      <div class="container gt-sm">
        <div class="marquee marquee1">
          <span style="font-size: 250px; font-weight: 800;">LIVE PLAY BUSINESS BUILD BRANDS</span>
        </div>
        <!-- <div class="marquee marquee2">
          <span style="font-size: 250px; font-weight: 800;">LIVE PLAY BUSINESS BUILD BRANDS</span>
        </div> -->
      </div>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      padding
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      infinite
      height="700px"
      class="gt-sm"
      style="background-color: #212121;"
    >
      <q-carousel-slide :name="1" class="bg-live" :class="{ loadedLive: loadedLive }" style="display: flex; justify-content: center; align-items: flex-end;">
        <div>
          <div class="carousel-title-text-small text-center">LIVE</div>
          <div class="text-p-mobile text-center" style="max-width: 600px;">
            Iconic landmarks such as the Metarise Tower and the Center Mall make up Cityland, 
              the beating heart of the city which with its buildings, villas, offices, shops, showrooms, 
              restaurants and art galleries is the perfect place to socialize, enjoy your interests and make business.
          </div>
        </div>  
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="bg-play" :class="{ loadedPlay: loadedPlay }" style="display: flex; justify-content: center; align-items: flex-end;">
        <div>
          <div class="carousel-title-text-small text-center">PLAY</div>
          <div class="text-p-mobile text-center" style="max-width: 600px;">
            Funland is the realm of euphoria. Sport Stadiums, Concert Arena, Exhibition Hall are just some of the 
            entertainment options where you can take advantage of the gameplay mechanics to play during multiplayer 
            sessions and have fun with other real users.
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="bg-business" :class="{ loadedBusiness: loadedBusiness }" style="display: flex; justify-content: center; align-items: flex-end;">
        <div>
          <div class="carousel-title-text-small text-center">BUSINESS</div>
          <div class="text-p-mobile text-center" style="max-width: 600px;">
            Metarise provides opportunities for businesses to interact with clients and employees virtually. 
              Companies can create customized 3D offices for presentations, trainings and conferences. 
              The metaverse provides unique and interactive ways for brands to connect with their target audience, 
              tracking and targeting their digital touchpoints.
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="bg-build" :class="{ loadedBuild: loadedBuild }" style="display: flex; justify-content: center; align-items: flex-end;">
        <div>
          <div class="carousel-title-text-small text-center">BUILD</div>
            <div class="text-p-mobile text-center" style="max-width: 600px;">
              A land in Metarise is the starting point for creating your dream villa, 
                your office or your own mini-game where you can host other users. 
                Thanks to the advanced building system, no particular modeling and programming skills are necessary.
            </div>
        </div>  
      </q-carousel-slide>
      <q-carousel-slide :name="5" class="bg-brands" :class="{ loadedBrands: loadedBrands }" style="display: flex; justify-content: center; align-items: flex-end;">
          <div>
            <div class="carousel-title-text-small text-center">FOR BRANDS</div>
            <div class="text-p-mobile text-center" style="max-width: 600px;">
              Metarise is an exciting metaverse for brands, combining gaming, social interaction, 
                and user-generated content. It offers a new marketing tool for brands to enhance their identity, 
                involve users in immersive experiences, and increase awareness and engagement. 
                The metaverse provides unique and interactive ways for brands to connect with their target audience, 
                tracking and targeting their digital touchpoints.
            </div>

          </div>
      </q-carousel-slide>
    </q-carousel>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      padding
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      infinite
      height="100vh"
      class="lt-md"
      autoplay
      style="background-color: #212121;"
    >
      <q-carousel-slide :name="1" class="column no-wrap flex-center bg-live" :class="{ loadedLive: loadedLive }">
          <div class="carousel-title-text-small text-center">LIVE</div>
          <div class="text-p-mobile lt-md text-center" style="max-width: 600px;">
            Iconic landmarks such as the Metarise Tower and the Center Mall make up Cityland, 
              the beating heart of the city which with its buildings, villas, offices, shops, showrooms, 
              restaurants and art galleries is the perfect place to socialize, enjoy your interests and make business.
          </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap flex-center bg-play" :class="{ loadedPlay: loadedPlay }">
          <div class="carousel-title-text-small text-center">PLAY</div>
          <div class="text-p-mobile lt-md text-center" style="max-width: 600px;">
            Funland is the realm of euphoria. Sport Stadiums, Concert Arena, Exhibition Hall are just some of the 
            entertainment options where you can take advantage of the gameplay mechanics to play during multiplayer 
            sessions and have fun with other real users.
          </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap flex-center bg-business" :class="{ loadedBusiness: loadedBusiness }">
          <div class="carousel-title-text-small text-center">BUSINESS</div>
          <div class="text-p-mobile lt-md text-center" style="max-width: 600px;">
            Metarise provides opportunities for businesses to interact with clients and employees virtually. 
              Companies can create customized 3D offices for presentations, trainings and conferences. 
              The metaverse provides unique and interactive ways for brands to connect with their target audience, 
              tracking and targeting their digital touchpoints.
          </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap flex-center bg-build" :class="{ loadedBuild: loadedBuild }">
          <div class="carousel-title-text-small text-center">BUILD</div>
          <div class="text-p-mobile lt-md text-center" style="max-width: 600px;">
            A land in Metarise is the starting point for creating your dream villa, 
              your office or your own mini-game where you can host other users. 
              Thanks to the advanced building system, no particular modeling and programming skills are necessary.
          </div>
      </q-carousel-slide>
      <q-carousel-slide :name="5" class="column no-wrap flex-center bg-brands" :class="{ loadedBrands: loadedBrands }">
          <div class="carousel-title-text-small text-center">FOR BRANDS</div>
          <div class="text-p-mobile lt-md text-center" style="max-width: 600px;">
            Metarise is an exciting metaverse for brands, combining gaming, social interaction, 
              and user-generated content. It offers a new marketing tool for brands to enhance their identity, 
              involve users in immersive experiences, and increase awareness and engagement. 
              The metaverse provides unique and interactive ways for brands to connect with their target audience, 
              tracking and targeting their digital touchpoints.
          </div>
      </q-carousel-slide>
    </q-carousel>
    <div v-if="!$q.platform.is.ios" class="container lt-md" style="height: 300px;">
      <div class="marquee marquee1">
        <span style="font-size: 250px; font-weight: 800;">LIVE PLAY BUSINESS BUILD BRANDS</span>
      </div>
    </div>
    <div v-if="$q.platform.is.ios && startAnimation" class="container lt-md" style="height: 300px;">
      <div class="marquee marquee1">
        <span style="font-size: 250px; font-weight: 800;">LIVE PLAY BUSINESS BUILD BRANDS</span>
      </div>
    </div>
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

.bg-gradient {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5));
  
}

.bg-live {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/carousel/slide_live_placeholder.jpeg");
  background-color: no-repeat;
  background-size: cover; 
  transition: background-image 0.5s ease-in-out;
}

.bg-live.loadedLive {
  background-image: url("../assets/carousel/slide_live.png");
}

.bg-play {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/carousel/slide_play_placeholder.jpeg");
  background-color: no-repeat;
  background-size: cover;
}

.bg-play.loadedPlay {
  background-image: url("../assets/carousel/slide_play.png");
}

.bg-business {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/carousel/slide_business_placeholder.jpeg");
  background-color: no-repeat;
  background-size: cover;
}

.bg-business.loadedBusiness {
  background-image: url("../assets/carousel/slide_business.png");
}

.bg-build {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/carousel/slide_build_placeholder.jpeg");
  background-color: no-repeat;
  background-size: cover;
}

.bg-build.loadedBuild {
  background-image: url("../assets/carousel/slide_build.png");
}

.bg-brands {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("../assets/carousel/slide_brands_placeholder.jpeg");
  background-color: no-repeat;
  background-size: cover;
}

.bg-brands.loadedBrands {
  background-image: url("../assets/carousel/slide_brands.png");
}

.container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 200px
}

.marquee.start-animation {
  animation-play-state: running;
}

.marquee-mobile {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  /* your existing CSS for the marquee */
  animation-play-state: paused;
}

.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
}

.marquee1 span {   
  animation-delay: -2.5s; 
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