<script setup>
</script>
<template>
<div class="background row justify-center align-center relative">
    <div class="overlay-content absolute text-center">
        <img src="src/assets/ready_player_me_logo.png" alt="logo">
        <div class="q-mt-md" style="font-size: 18px; max-width: 469px;">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <q-btn
          class="q-mt-xl"
          style="border-radius: 120px;"
          color="primary"
          text-color="white"
          label="Create Your Avatar"
        />
    </div>
	<div class="text-center col-12" style="font-size: 50px; line-height: 1; font-weight: 800; margin-top: 100px;">
		BECOME A <span style="color: #86ECE9;">RISER</span>
	</div>
	<div class="q-mt-md text-center" style="font-size: 18px; color: white; max-width: 700px;">
        In Metarise you are free to truly be whoever you want. 
        Each riser in Chainlight City is perfectly recognizable and different from the others: 
        you can choose to wear a jacket for a gala date or a tracksuit 
        for a cricket match by quickly going through your wardrobe in the villa.
	</div>
<img src="src/assets/avatar_home.png" alt="" style="height: 100%; object-fit: contain; margin-top: 30px"/>
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
    position: absolute;
    top: 50%;
    left: 15%;
    z-index: 1;
}
</style>
