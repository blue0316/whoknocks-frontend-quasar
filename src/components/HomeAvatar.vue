<script setup>
import { ref } from 'vue';
const videoRef = ref(null);

const playVideo = () => {
  videoRef.value.play();
};

defineExpose({
  playVideo,
});
</script>
<template>
<div class="background row justify-center align-center relative">
    <div class="text-center text-h-desktop-extrabold col-12 gt-sm" style="margin-top: 100px;">
		BECOME A <span style="color: #86ECE9;">RISER</span>
	</div>
    <div class="text-center text-h-mobile-extrabold q-px-md col-12 lt-md" style="margin-top: 100px;">
		BECOME A <span style="color: #86ECE9;">RISER</span>
	</div>
	<div class="q-mt-md text-p-desktop text-center gt-sm" style="margin-bottom: 20px; max-width: 850px;">
        In Metarise you are free to truly be whoever you want. 
        Each riser in Chainlight City is perfectly recognizable and different from the others: 
        you can choose to wear a jacket for a gala date or a tracksuit 
        for a cricket match by quickly going through your wardrobe in the villa.
	</div>
	<div class="q-ma-md text-p-mobile text-center lt-md">
        In Metarise you are free to truly be whoever you want. 
        Each riser in Chainlight City is perfectly recognizable and different from the others: 
        you can choose to wear a jacket for a gala date or a tracksuit 
        for a cricket match by quickly going through your wardrobe in the villa.
	</div>
    <div class="gt-sm" style="width: 100%;">
        <div style="position: relative; width: 100%;">
            <video
                src="../assets/avatar/metarise_ready_player_me.mp4"
                autoplay
                loop
                muted
                style="height: 750px; width: 100%; object-fit: cover; object-position: center top;"
            />
            <div class="overlay-content" style="position: absolute; top: 200px; left: 100px;">
                <!-- add a video with autoplay -->
                <img src="../assets/ready_player_me_logo_white.svg" alt="logo">
                <div class="q-mt-md text-p-desktop" style="font-size: 18px; max-width: 469px;">
                    Numerous custom assets created from scratch integrated within the Ready 
                    Player Me platform will allow you to represent your riser while respecting inclusiveness.
                </div>
                <q-btn
                class="q-mt-xl"
                style="border-radius: 120px;"
                color="primary"
                text-color="white"
                label="Create Your Avatar"
                disable
                />
            </div>
        </div>
    </div>
    <div class="lt-md">
        <video
        src="../assets/avatar/metarise_ready_player_me.mp4"
        controls
        loop
        autoplay
        style="width: 100%; object-fit: cover; object-position: center top;"
        @click="playVideo"
        />
<div style="display: flex; flex-direction: column; align-items: center;">
    <img src="../assets/ready_player_me_logo_white.svg" alt="logo">
    <div class="q-mt-md text-center text-p-mobile" style="max-width: 300px;">
        Numerous custom assets created from scratch integrated within the Ready 
        Player Me platform will allow you to represent your riser while respecting inclusiveness.
    </div> 
</div>
    </div>
</div>
</template>
<style scoped>
/* Set bg to src/assets/backgrounds/Bar_Under_Tower_2_1.png */
.background {
    background-color: #212121;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh; /* Adjust as needed */
    width: 100%; /* Adjust as needed */
    position: relative;
}
.overlay-content {
    z-index: 9999;
    position: absolute;
}
</style>
