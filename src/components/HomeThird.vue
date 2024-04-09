<script setup>
import { ref, onMounted, computed } from 'vue'

const loadedLive = ref(false);
const loadedPlay = ref(false);
const loadedBusiness = ref(false);
const loadedBuild = ref(false);
const loadedBrands = ref(false);

onMounted(() => {
  const imgLive = new Image();
  imgLive.src = 'src/assets/carousel/slide_live.png';
  imgLive.onload = () => {
    loadedLive.value = true;
  };
  const imgPlay = new Image();
  imgPlay.src = 'src/assets/carousel/slide_play.png';
  imgPlay.onload = () => {
    loadedPlay.value = true;
  };
  const imgBusiness = new Image();
  imgBusiness.src = 'src/assets/carousel/slide_business.png';
  imgBusiness.onload = () => {
    loadedBusiness.value = true;
  };
  const imgBuild = new Image();
  imgBuild.src = 'src/assets/carousel/slide_build.png';
  imgBuild.onload = () => {
    loadedBuild.value = true;
  };
  const imgBrands = new Image();
  imgBrands.src = 'src/assets/carousel/slide_brands.png';
  imgBrands.onload = () => {
    loadedBrands.value = true;
  };
});

const imgSrcLive = computed(() => loadedLive.value ? 'src/assets/carousel/slide_live.png' : 'src/assets/carousel/slide_live_placeholder.jpeg')
const imgSrcPlay = computed(() => loadedPlay.value ? 'src/assets/carousel/slide_play.png' : 'src/assets/carousel/slide_play_placeholder.jpeg')
const imgSrcBusiness = computed(() => loadedBusiness.value ? 'src/assets/carousel/slide_business.png' : 'src/assets/carousel/slide_business_placeholder.jpeg')
const imgSrcBuild = computed(() => loadedBuild.value ? 'src/assets/carousel/slide_build.png' : 'src/assets/carousel/slide_play_placeholder.jpeg')
const imgSrcBrands = computed(() => loadedBrands.value ? 'src/assets/carousel/slide_brands.png' : 'src/assets/carousel/slide_brands_placeholder.jpeg')

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
      class="carousel-shadow gt-sm"
      autoplay
      style="background-color: #212121;"
    >
      <q-carousel-slide :name="1" :img-src="imgSrcLive" class="bg-gradient">
        <q-scroll-area class="fit" style="position: relative">
          <div class="text-center carousel-position">
            <div class="carousel-title-text gt-xs">LIVE</div>
            <div class="carousel-title-text-small lt-sm">LIVE</div>
            <div style="display: flex; justify-content: center;">
            <div class="text-p-desktop gt-sm" style="max-width: 600px;">
              Iconic landmarks such as the Metarise Tower and the Center Mall make up Cityland, 
              the beating heart of the city which with its buildings, villas, offices, shops, showrooms, 
              restaurants and art galleries is the perfect place to socialize , enjoy your interests and make business.
            </div>
          </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide :name="2" :img-src="imgSrcPlay">
        <q-scroll-area class="fit" style="position: relative">
          <div class="text-center carousel-position">
            <div class="carousel-title-text gt-xs">PLAY</div>
            <div class="carousel-title-text-small lt-sm">PLAY</div>
            <div style="display: flex; justify-content: center;">
              <div class="text-p-desktop gt-sm" style="max-width: 600px;">
              Funland is the realm of euphoria. Sport Stadiums, Concert Arena, Exhibition Hall are just some of the 
              entertainment options where you can take advantage of the gameplay mechanics to play during multiplayer 
              sessions and have fun with other real users.
            </div>
          </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide :name="3" :img-src="imgSrcBusiness">
        <q-scroll-area class="fit" style="position: relative">
          <div class="text-center carousel-position">
            <div class="carousel-title-text gt-xs">BUSINESS</div>
            <div class="carousel-title-text-small lt-sm" style="font-size: 30px">BUSINESS</div>
            <div style="display: flex; justify-content: center;">
              <div class="text-p-desktop gt-sm" style="max-width: 600px;">
                Metarise provides opportunities for businesses to interact with clients and employees virtually. 
              Companies can create customized 3D offices for presentations, trainings and conferences. 
              The metaverse provides unique and interactive ways for brands to connect with their target audience, 
              tracking and targeting their digital touchpoints.
            </div>
          </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide :name="4" :img-src="imgSrcBuild">
        <q-scroll-area class="fit" style="position: relative">
          <div class="text-center carousel-position">
            <div class="carousel-title-text gt-xs">BUILD</div>
            <div class="carousel-title-text-small lt-sm">BUILD</div>
            <div style="display: flex; justify-content: center;">
              <div class="text-p-desktop gt-sm" style="max-width: 600px;">
                A land in Metarise is the starting point for creating your dream villa, 
              your office or your own mini-game where you can host other users. 
              Thanks to the advanced building system, no particular modeling and programming skills are necessary.
            </div>
          </div>
          </div>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide :name="5" :img-src="imgSrcBrands">
        <q-scroll-area class="fit" style="position: relative">
          <div class="text-center carousel-position">
            <div class="carousel-title-text gt-xs">FOR BRANDS</div>
            <div class="carousel-title-text-small lt-sm">FOR BRANDS</div>
            <div style="display: flex; justify-content: center;">
              <div class="text-p-desktop gt-sm" style="max-width: 600px;">
                Metarise is an exciting metaverse for brands, combining gaming, social interaction, 
              and user-generated content. It offers a new marketing tool for brands to enhance their identity, 
              involve users in immersive experiences, and increase awareness and engagement. 
              The metaverse provides unique and interactive ways for brands to connect with their target audience, 
              tracking and targeting their digital touchpoints.
            </div>
          </div>
          </div>
        </q-scroll-area>
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
      <q-carousel-slide :name="1" class="column no-wrap flex-center bg-live">
          <div class="carousel-title-text-small text-center">LIVE</div>
          <div class="text-p-mobile lt-md text-center" style="max-width: 600px;">
            Iconic landmarks such as the Metarise Tower and the Center Mall make up Cityland, 
              the beating heart of the city which with its buildings, villas, offices, shops, showrooms, 
              restaurants and art galleries is the perfect place to socialize , enjoy your interests and make business.
          </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap flex-center bg-play">
          <div class="carousel-title-text-small text-center">PLAY</div>
          <div class="text-p-mobile lt-md text-center" style="max-width: 600px;">
            Funland is the realm of euphoria. Sport Stadiums, Concert Arena, Exhibition Hall are just some of the 
            entertainment options where you can take advantage of the gameplay mechanics to play during multiplayer 
            sessions and have fun with other real users.
          </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap flex-center bg-business">
          <div class="carousel-title-text-small text-center">BUSINESS</div>
          <div class="text-p-mobile lt-md text-center" style="max-width: 600px;">
            Metarise provides opportunities for businesses to interact with clients and employees virtually. 
              Companies can create customized 3D offices for presentations, trainings and conferences. 
              The metaverse provides unique and interactive ways for brands to connect with their target audience, 
              tracking and targeting their digital touchpoints.
          </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap flex-center bg-build">
          <div class="carousel-title-text-small text-center">BUILD</div>
          <div class="text-p-mobile lt-md text-center" style="max-width: 600px;">
            A land in Metarise is the starting point for creating your dream villa, 
              your office or your own mini-game where you can host other users. 
              Thanks to the advanced building system, no particular modeling and programming skills are necessary.
          </div>
      </q-carousel-slide>
      <q-carousel-slide :name="5" class="column no-wrap flex-center bg-brands">
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
    <div class="container lt-md" style="height: 300px;">
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
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("src/assets/carousel/slide_live.png");
  
  background-color: no-repeat;
  background-size: cover;
  
}

.bg-play {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("src/assets/carousel/slide_play.png");
  background-color: no-repeat;
  background-size: cover;
}

.bg-business {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("src/assets/carousel/slide_business.png");
  background-color: no-repeat;
  background-size: cover;
}

.bg-build {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("src/assets/carousel/slide_build.png");
  background-color: no-repeat;
  background-size: cover;
}

.bg-brands {
  background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 100%, rgba(0,0,0,0.5)), url("src/assets/carousel/slide_brands.png");
  background-color: no-repeat;
  background-size: cover;
}

.container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 200px
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