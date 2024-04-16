<template>
    <div class="background" ref="slidersWrapper">
        <div class="sliders-container">

            <!-- Slider items (thumbnails) -->
            <div class="slider-items-container">
                <div class="slider-item" v-for="(slider, index) in sliders" :key="'sliderItem' + index"
                    :class="{ active: index === activeSlideIndex }" @click="goToSlide(index)">
                    <!-- Thumbnail content (optional) -->
                </div>
            </div>

            <!-- Main slider content -->
            <div class="slider-main-container">
                <transition name="fade" mode="out-in">
                    <!-- Render only the active slide's content -->
                    <div class="slider-main" :key="'mainSlider' + activeSlideIndex" v-if="sliders[activeSlideIndex]">
                        <div class="slider-image">
                            <img :src="`/src/assets/sliders/slider_${activeSlideIndex + 1}.png`"
                                :alt="`Slider ${activeSlideIndex + 1} image`">
                        </div>
                        <div class="slider-content">
                            <p>{{ sliders[activeSlideIndex].description.title }}</p>
                            <p>{{ sliders[activeSlideIndex].description.subtitle }}</p>
                            <p>{{ sliders[activeSlideIndex].description.detail }}</p>
                            <div class="slider-btn-container">
                                <div class="btn-arrow">
                                    <img src="/src/assets/sliders/btn-arrow.png" alt="Arrow icon">
                                </div>
                                <p>VIRTUAL TOUR</p>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import _debounce from 'lodash/debounce';

gsap.registerPlugin(ScrollTrigger);

const sliders = ref([
    {
        id: 1,
        active: true,
        description: {
            title: 'Step into Villa, where modern elegance meets virtual paradise.',
            subtitle: 'With its sleek design and inviting pool in the garden, this retreat offers a luxurious escape in the heart of the Metarise metaverse. Experience the perfect blend of sophistication and relaxation.',
            detail: 'Explore Villa, your digital dream home.'
        },
    },
    {
        id: 2,
        active: false,
        description: {
            title: 'Welcome to M20 Tower, a cutting-edge modern office space in the heart of the MetaRise metaverse.',
            subtitle: 'As you step inside, you\'re greeted by a dynamic environment designed to inspire creativity and innovation. Sleek lines and contemporary architecture define the space, creating an atmosphere of professionalism and sophistication.',
            detail: 'Explore Office, the best place to work remotely.'
        },
    },
    {
        id: 3,
        active: false,
        description: {
            title: 'Imagine walking through the door of a luxury watch shop within the Metarise metaverse.',
            subtitle: 'You are welcomed by an elegant and refined atmosphere, where every detail is taken care of to offer an immersive and unforgettable experience.',
            detail: 'Explore Watch Shop, where you can find the best watch to impress.'
        },
    },
]);

const activeSlideIndex = ref(0);
const slidersWrapper = ref(null);
let animating = false;

// Function to change the active slide
const goToSlide = (index) => {
    if (animating || index === activeSlideIndex.value || index < 0 || index >= sliders.value.length) return;
    animating = true;

    let direction = index > activeSlideIndex.value ? 1 : -1;

    // Create a timeline with GSAP (no need to select .slider-main-container since it moves with the timeline)
    let tl = gsap.timeline({
        onComplete: () => {
            animating = false;
        }
    });

    tl.to(slidersWrapper.value.querySelectorAll('.slider-main'), { // directly targeting elements
        xPercent: -100 * direction,
        duration: 0.75,
        stagger: 0.1, // Optional: adds a small delay between each item
        onComplete: () => {
            activeSlideIndex.value = index; // Set the new active slide index
        }
    });
};

onMounted(() => {
    const totalSlides = sliders.value.length;

    ScrollTrigger.create({
        trigger: slidersWrapper.value,
        start: "top top",
        end: "bottom",
        pin: true,
        scrub: 1,
        // snap: 1 / (2),
        onUpdate: self => {
            const scrollProgress = self.progress;
            const nextSlideIndex = Math.min(Math.floor(scrollProgress * (totalSlides)), totalSlides - 1);
            if (activeSlideIndex.value !== nextSlideIndex && !animating) {
                goToSlide(nextSlideIndex);
            }
        }

    });
});

onUnmounted(() => {
    ScrollTrigger.getAll().forEach(st => st.kill());
});

</script>

<style scoped>
.background {
    background-image: url('/src/assets/sliders/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    width: 100%;
    position: sticky;
    top: 0;
}

.sliders-container {
    display: flex;
    overflow: hidden;
    width: 65%;
    gap: 100px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50vh;
    transform: translate(0, -280px);
}

.sliders-container .q-carousel {
    height: 560px;
}

.slider-items-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px 20px;
    align-items: center;
    /* min-width: 65px; */
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 50px;
    background-color: rgba(36, 36, 36, 0.8);
}

.slider-item {
    width: 35px;
    height: 35px;
    background-color: transparent;
    border: 1px solid #FFF;
    transform: rotate(45deg);
    cursor: pointer;
}

.slider-item.active {
    background-color: #FFF;
    /* Example active style */
    transform: rotate(45deg);
    /* Keep rotation and apply scale */
}

.slider-main-container {
    padding: 50px;
    overflow: hidden;
    border-radius: 50px;
    background-color: rgba(36, 36, 36, 0.8);
}

.slider-main {
    display: flex;
    gap: 40px;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

.slider-main[style*="display: none"] {
    opacity: 0;
}

.slider-image img {
    max-width: 400px;
}

.slider-btn-container {
    width: 80%;
    background-color: #242424;
    border-radius: 50px;
    width: 80%;
    margin: 20px auto;

}

.slider-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.slider-content p {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    margin-bottom: 12px;
    width: 80%;
}

.slider-btn-container {
    display: flex;
    align-items: center;
    padding: 10px 30px 10px 60px;
}

.slider-btn-container p {
    font-size: 24px;
    margin-bottom: 0;
    cursor: pointer;
}

.btn-arrow img {
    width: 50px;
    cursor: pointer;
}

p {
    margin: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.slider-main {
    animation-name: fadeIn;
    animation-duration: 0.2s;
    animation-fill-mode: both;
}
</style>