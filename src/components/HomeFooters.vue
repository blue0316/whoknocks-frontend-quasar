<script setup>
    import { ref } from 'vue'
    const email = ref('')
</script>
<template>
    <div 
        class="background column justify-center align-center"
    >
    <div class="row justify-center flex flex-center">
        <div class="text col-12 text-center gt-sm">
            FOLLOW US
        </div>
        <div class="text-small col-12 text-center lt-md">
            FOLLOW US
        </div>
        <!-- <q-input class="col-6 q-ma-md" v-model="email" filled type="email" bg-color="white" square/>
        <q-btn 
            class="col-6 col-md-2 q-ma-md"
            style="border-radius: 120px;"
            color="primary"
            text-color="white"
            label="submit"
        /> -->
        <div class="col-3 text-center q-mt-md">
            <a href="https://t.me/metariseworld" target="_blank">
                <img src="../assets/social_icons/telegram.svg" alt="telegram">
            </a>
        </div>
        <div class="col-3 text-center q-mt-md">
            <a href="https://www.facebook.com/profile.php?id=61557032901757" target="_blank"> 
            <img src="../assets/social_icons/facebook.svg" alt="facebook">
        </a>
        </div>
        <div class="col-3 text-center q-mt-md">
            <a href="https://www.instagram.com/m20metarise/" target="_blank">
                <img src="../assets/social_icons/instagram.svg" alt="instagram">
            </a>
        </div>
        <div class="col-3 text-center q-mt-md">
            <a href="https://twitter.com/metariseworld" target="_blank">
                <img src="../assets/social_icons/x.svg" alt="x">
            </a>
        </div>
    </div>
    </div>
</template>
<style scoped>
    /* Set bg to src/assets/backgrounds/Bar_Under_Tower_2_1.png */
    .background {
        background-color: #86ECE9;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 462px; /* Adjust as needed */
        width: 100%; /* Adjust as needed */
    }
    .text {
        font-size: 100px;
        line-height: 1;
        color: white;
        font-weight: 800;
    }
    .text-small {
        font-size: 35px;
        line-height: 1;
        color: white;
        font-weight: 800;
    }
</style>
