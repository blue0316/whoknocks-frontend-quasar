<script setup>
</script>
<template>
<div class="background row justify-center align-center relative">
    <div class="text-center col-12" style="font-size: 50px; line-height: 1; font-weight: 800; margin-top: 100px;">
		BECOME A <span style="color: #86ECE9;">RISER</span>
	</div>
	<div class="q-mt-md text-center" style="font-size: 18px; color: white; max-width: 700px; margin-bottom: 20px;">
        In Metarise you are free to truly be whoever you want. 
        Each riser in Chainlight City is perfectly recognizable and different from the others: 
        you can choose to wear a jacket for a gala date or a tracksuit 
        for a cricket match by quickly going through your wardrobe in the villa.
	</div>
    <div style="position: relative; width: 100%;">
        <video
            src="../assets/avatar/metarise_ready_player_me.mp4"
            autoplay
            loop
            muted
            style="height: 750px; width: 100%; object-fit: cover; object-position: center top;"
        />
        <div class="overlay-content gt-xs" style="position: absolute; top: 200px; left: 100px; width: 100%; height: 100%;">
            <!-- add a video with autoplay -->
            <img src="../assets/ready_player_me_logo_white.svg" alt="logo">
            <div class="q-mt-md" style="font-size: 18px; max-width: 469px;">
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
        <div class="overlay-content lt-sm" style="position: absolute; top: 200px; left: 20px; width: 100%; height: 100%;">
            <!-- add a video with autoplay -->
            <img src="../assets/ready_player_me_logo_white.svg" alt="logo">
            <div class="q-mt-md" style="font-size: 18px; max-width: 300px;">
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
