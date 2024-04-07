<script setup>
import { ref } from 'vue'
import LoginCard from '../components/LoginCard.vue'
import { useLoginViewStore } from '../stores/login-view'
import { useScrollStore } from '../stores/scroll-store.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginView = useLoginViewStore()

const scrollStore = useScrollStore()

const rightDrawerOpen = ref(false)

function toggleLeftDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

function moveToSection(section) {
	const currentRoute = router.currentRoute.value.path

	if (currentRoute === '/') {
		scrollStore.setSection(section)
	} else {
		router.push({ path: '/', hash: '#' + section })
	}

	rightDrawerOpen.value = false
}
</script>
<template>
<q-layout view="lHh Lpr lFf">
<div 
	class="row justify-between q-pt-md q-pb-md q-pl-md q-pr-md header-bg"
	style="position: fixed; top: 0; right: 0; left:0; z-index: 9999; display: flex; align-items: center;">
	<div
	  class="col-4 gt-xs"
	>
		<img 
			src="../assets/metarise_logo_extended.png" 
			alt="logo"
		/>
	</div>
	<div
		class="col-4"
		style="display: flex; justify-content: center; align-items: center;"
	>
	<img 	
		class="cursor-pointer" 
		src="../assets/metarise_logo.svg" 
		alt="Logo" 
		@click="moveToSection('home')"
	/>
	</div>
	<div
		class="col-4"
		style="display: flex; justify-content: flex-end; align-items: center;"
	>
		<q-btn
			style="margin-right: 45px;"
			size="20px"
			color="primary"
			text-color="white"
			dense
			round
			:icon="rightDrawerOpen ? 'close' : 'menu'"
			aria-label="Menu"
			@click="toggleLeftDrawer"
		/>
	</div>
</div>



<q-drawer
  side="right"
  style="background-color: #86ECE9;"
  v-model="rightDrawerOpen"
  overlay
  width=450
>
  <q-list 
	style="margin-right: 40px; margin-top: 40px;"
  >
   <div
	 	style="height: 55px;"
   >

   </div>
   <!-- Login -->
	 <div
	 	class="q-mr-md"
	 >
		 <q-item>
			<q-item-section 
				class="text-h4 cursor-pointer" 
				style="text-align: right; color: gray"
				>
				<!-- @click="loginView.openLogin" -->
				<!-- clicable -->
				Login
		 	</q-item-section>
		 </q-item>
		 <q-item>
		 <q-item-section 
		 	class="text-h4 cursor-pointer" 
			style="text-align: right; color: gray"
			>
			<!-- @click="router.push('/land')" -->
			 World Map
		 </q-item-section>
		 </q-item>
		 <q-item>
		 <q-item-section 
		 	class="text-h4 cursor-pointer" 
			style="text-align: right; color: gray"
			>
			<!-- @click="router.push('/fqa')" -->
			 F.Q.A
		 </q-item-section>
		 </q-item>
		 <!-- <q-item>
		 <q-item-section 
		 	class="text-h4 hover-effect cursor-pointer" 
			style="text-align: right; color: white"
			@click="router.push('/support')"
		>
			 Support
		 </q-item-section>
		 </q-item> -->

		 <q-item class="q-mt-xl">
		 <q-item-section 
		 	class="text-h2 hover-effect cursor-pointer" 
			style="text-align: right; color: white"
			@click="moveToSection('home')"
		>
			 METARISE
		 </q-item-section>
		 </q-item>
		 <q-item>
		 <q-item-section 
		 	class="text-h4 hover-effect cursor-pointer" 
			 style="text-align: right; color: white"
			 @click="moveToSection('chainlight-city')"
		>
			 CHAINLIGHT CITY
		 </q-item-section>
		 </q-item>  
		 <q-item>
		 <q-item-section 
		 	class="text-h4 hover-effect cursor-pointer" 
			style="text-align: right; color: white"
			@click="moveToSection('live-play-earn')"
		>
			 LIVE, PLAY, EARN
		 </q-item-section>
		 </q-item>
		 <q-item>
		 <q-item-section 
			class="text-h4 hover-effect cursor-pointer" 
			style="text-align: right; color: white"
			@click="moveToSection('be-your-self')"
		>
			 BE YOUR SELF
		 </q-item-section>
		 </q-item>
		 <q-item>
		 <q-item-section 
		 	class="text-h4 hover-effect cursor-pointer" 
			style="text-align: right; color: white"
			@click="moveToSection('community')"
		>
			 COMMUNITY 
		 </q-item-section>
		 </q-item>
		 <q-item>
		 <q-item-section 
		 	class="text-h4 hover-effect cursor-pointer" 
			style="text-align: right; color: white"
			@click="moveToSection('roadmap')"
		 >
			 ROADMAP
		 </q-item-section>
		 </q-item> 
		 <q-item>
		 <q-item-section 
		 	class="text-h4 hover-effect cursor-pointer" 
			style="text-align: right; color: white"
			@click="moveToSection('contact')"
		 >
			 CONTACT
		 </q-item-section>
		 </q-item> 
	 </div>
  </q-list>
</q-drawer>
<q-page-container>
  <router-view />
</q-page-container>
</q-layout>
<LoginCard />
</template>
<style scoped>
.hover-effect:hover {
  color: #967BF8 !important;
}
.header-bg {
	background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 100%);
}
</style>