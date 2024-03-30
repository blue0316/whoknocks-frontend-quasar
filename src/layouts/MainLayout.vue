<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import LoginCard from 'src/components/LoginCard.vue'
import { useLoginViewStore } from 'src/stores/login-view'

const loginView = useLoginViewStore()
const rightDrawerOpen = ref(false)

const linksList = [
  {
    title: 'Avatar',
    caption: 'Customize your avatar',
    icon: 'face',
    link: '/'
  },
  {
    title: 'Lands',
    caption: 'Buy a land',
    icon: 'landscape',
    link: '/land'
  }
]

function toggleLeftDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
<template>
<q-layout view="lHh Lpr lFf">
  
      <!-- <q-btn
      class="q-my-md"
      color="secondary"
      label="Login"
      text-color="black"
      aria-label="login"
      @click="loginView.openLogin()"
    /> -->
<div 
	class="row justify-between q-mt-md q-mb-md q-ml-md q-mr-md"
	style="position: fixed; top: 0; right: 0; left:0; z-index: 9999; display: flex; align-items: center;">
	<div
	  class="col-4"
	>
		<img 
			class=""
			src="src/assets/metarise_logo_extended.png" 
			alt="logo"
		/>
	</div>

	<div
		class="col-4"
		style="display: flex; justify-content: center; align-items: center;"
	>
	<img 	
		class="	"
		src="src/assets/metarise_logo.svg" 
		alt="Logo" 
	/>
	</div>
	<div
		class="col-4"
		style="display: flex; justify-content: flex-end; align-items: center;"
	>
		<q-btn
			size="20px"
			class=""
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
  class="q-mt-md"
  >
   <div
	 	style="height: 55px;"
   >

   </div>
   <!-- Login -->
	 <div
	 	class="q-mr-xl"
	 >
		 <q-item
			 clickable
			 @click="loginView.openLogin"
		 >
		 <q-item-section class="text-h4" style="text-align: right; color: white">
			 Login
		 </q-item-section>
		 </q-item>
		 <q-item
			 clickable
			 @click="loginView.openLogin"
		 >
		 <q-item-section class="text-h4" style="text-align: right; color: white">
			 World Map
		 </q-item-section>
		 </q-item>
		 <q-item
			 clickable
			 @click="loginView.openLogin"
		 >
		 <q-item-section class="text-h4" style="text-align: right; color: white">
			 F.Q.A
		 </q-item-section>
		 </q-item>
		 <q-item
			 clickable
			 @click="loginView.openLogin"
		 >
		 <q-item-section class="text-h4" style="text-align: right; color: white">
			 Support
		 </q-item-section>
		 </q-item>

		 <q-item
			 clickable
			 @click="loginView.openLogin"
			 class="q-mt-xl"
		 >
		 <q-item-section class="text-h2" style="text-align: right; color: white">
			 METAARISE
		 </q-item-section>
		 </q-item>
		 <q-item
			 clickable
			 @click="loginView.openLogin"
		 >
		 <q-item-section class="text-h4" style="text-align: right; color: white">
			 CHAINLIGHT CITY
		 </q-item-section>
		 </q-item>  
		 <q-item
			 clickable
			 @click="loginView.openLogin"
		 >
		 <q-item-section class="text-h4" style="text-align: right; color: white">
			 LIVE, PLAY, EARN
		 </q-item-section>
		 </q-item>
		 <q-item
			 clickable
			 @click="loginView.openLogin"
		 >
		 <q-item-section class="text-h4" style="text-align: right; color: white">
			 BE YOUR SELF
		 </q-item-section>
		 </q-item>
		 <q-item
			 clickable
			 @click="loginView.openLogin"
		 >
		 <q-item-section class="text-h4" style="text-align: right; color: white">
			 COMMUNITY 
		 </q-item-section>
		 </q-item>
		 <q-item
			 clickable
			 @click="loginView.openLogin"
		 >
		 <q-item-section class="text-h4" style="text-align: right; color: white">
			 ROADMAP
		 </q-item-section>
		 </q-item> 
		 <q-item
			 clickable
			 @click="loginView.openLogin"
		 >
		 <q-item-section class="text-h4" style="text-align: right; color: white">
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