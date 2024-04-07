<script setup>
import { ref } from 'vue'
import { useLoginViewStore } from '../stores/login-view'
import { ethers } from 'ethers'

// CONSTANTS //

const loginView = useLoginViewStore()

const mail = ref('')
const password = ref('')

// FUNCTIONS //

async function loginWithMetaMask() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress()
      console.log('address', address)
    } catch (error) {
      console.error('error', error)
    }
  }
}


</script>
<template>
  <q-dialog
    v-model="loginView.getLoginView"
    persistent
  >
    <q-card>
      <q-form
        @submit="login"
        class="q-pa-md"
      >
        <q-input
          class="q-mb-md"
          type="mail"
          v-model="mail"
          label="mail"
          outlined
          lazy-rules
          :rules="[ (val, rules) => rules.mail(val) || 'Invalid mail address']"
        />
        <q-input
          v-model="password"
          label="Password"
          type="password"
          outlined
        />
        <q-card-section>
          <router-link
            to="/register"
            @click="loginView.closeLogin()"
          >
            Register new account
          </router-link>
        </q-card-section>
        <q-btn
          class="q-mr-md"
          color="secondary"
          text-color="black"
          label="Login with metamask"
          @click="loginWithMetaMask"
        />
        <q-btn
          class="q-mr-md"
          color="secondary"
          text-color="black"
          label="Login"
          type="submit"
        />
        <q-btn
          color="grey"
          text-color="black"
          label="Cancel"
          @click="loginView.closeLogin()"
        />
      </q-form>
    </q-card>
  </q-dialog>
</template>
