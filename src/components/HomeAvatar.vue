<script setup>
</script>
<template>
<div class="background row justify-center align-center relative">
    <div class="overlay-content absolute text-center">
        <img src="src/assets/ready_player_me_logo.png" alt="logo">
        <div class="q-mt-md" style="font-size: 18px; color: white; max-width: 469px;">
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
	<div class="text-center col-12" style="font-size: 50px; line-height: 1; color: white; font-weight: bolder; margin-top: 100px;">
		A <span style="color: #86ECE9;">LIVE</span> <br> CHAPTER FOR
	</div>
	<div class="q-mt-md text-center" style="font-size: 18px; color: white; max-width: 700px;">
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
	</div>
<img src="src/assets/avatar_home.png" alt="" style="height: 683px; object-fit: contain; width: 100%;"/>
</div>
</template>
<style scoped>
/* Set bg to src/assets/backgrounds/Bar_Under_Tower_2_1.png */
.background {
    background-color: #212121;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh; /* Adjust as needed */
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
