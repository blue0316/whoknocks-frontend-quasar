<script setup>
import { useQuasar } from 'quasar'
import { computed } from 'vue'

const $q = useQuasar()
const layout = computed(() => {
        return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
      })
</script>
<template>
    <div 
    class="background row justify-center flex items-center"
    >
        <div class="col-12 roadmap-min lt-lg text-center">
            ROADMAP
        </div>
        <div class="col-md-6 col-sm-12 gt-md text-center" style="align-self: flex-start;">
            <div class="col-12 roadmap" style="margin-bottom: 20px; margin-top: 80px">
                ROADMAP
            </div>
                    
            <img src="../assets/block_metarise.png" alt="metarise_block" style="width: 70%;">
        </div>
        <div class="col-6 gt-sm q-ma-md" style="max-width: 500px;">
            <q-timeline :layout="layout" color="white">
                <q-timeline-entry
                style="color: white;"
                title="METARISE ANNOUNCEMENT"
                subtitle="Q4 2023"
                side="right"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="START OF WORLD BUILDING"
                    subtitle="Q4 2023"
                    side="left"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="EXLUSIVE AVATAR ASSETS"
                    subtitle="Q4 2023"
                    side="right"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="LAND SALES OPEN"
                    subtitle="Q1 2024"
                    side="left"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="OFFICIAL WEB PLATFORM RELEASE"
                    subtitle="Q3 2024"
                    side="right"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="VEHICLES DEPLOY"
                    subtitle="Q4 2024"
                    side="left"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="ASSET BUILDER RELEASE"
                    subtitle="Q1 2025"
                    side="right"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="GAME BUILDER RELEASE"
                    subtitle="Q2 2025"
                    side="left"
                >
                </q-timeline-entry>
            </q-timeline>
        </div>
        <div class="col-6 lt-md q-ma-md" style="max-width: 500px;">
            <q-timeline :layout="layout" color="white">
                <q-timeline-entry
                style="color: white;"
                title="METARISE ANNOUNCEMENT"
                subtitle="Q4 2023"
                side="right"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="START OF WORLD BUILDING"
                    subtitle="Q4 2023"
                    side="left"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="EXLUSIVE AVATAR ASSETS"
                    subtitle="Q4 2023"
                    side="right"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="VEICHLES DEPLOY"
                    subtitle="Q4 2023"
                    side="left"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="BUILDING SYSTEM"
                    subtitle="Q4 2023"
                    side="right"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="MATARISEFULL FULL ONLINE"
                    subtitle="Q4 2023"
                    side="left"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="METARISE ANNOUNCEMENT"
                    subtitle="Q4 2023"
                    side="right"
                >
                </q-timeline-entry>

                <q-timeline-entry
                    style="color: white;"
                    title="METARISE ANNOUNCEMENT"
                    subtitle="Q4 2023"
                    side="left"
                >
                </q-timeline-entry>
            </q-timeline>
        </div>
    </div>
</template>
<style scoped>
    /* Set bg to src/assets/backgrounds/Bar_Under_Tower_2_1.png */
.background {
    background-color: #967BF8;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh; /* Adjust as needed */
    width: 100%; /* Adjust as needed */
}

.roadmap {
    font-size: 80px;
    font-weight: 800;
    color: white;
    margin-left: 40px;
    margin-top: 50px;
}
.roadmap-min {
    font-size: 40px;
    font-weight: 800;
    color: white;
    margin-top: 50px;
}
::v-deep .q-timeline .q-timeline__dot::before {
    border-radius: 0%;
    transform: rotate(45deg)

}
</style>
