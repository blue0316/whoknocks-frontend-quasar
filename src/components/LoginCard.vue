<script setup>
import { ref } from 'vue'
import { useLoginViewStore } from 'src/stores/login-view'

const loginView = useLoginViewStore()
const username = ref('')
const password = ref('')

</script>
<template>
  <q-dialog
    v-model="loginView.getLoginView"
    persistent
  >
    <q-card>
      <q-form
        class="q-pa-md"
      >
        <q-input
          class="q-mb-md"
          v-model="username"
          label="Username"
          outlined
        />
        <q-input
          class="q-mb-md"
          v-model="password"
          label="Password"
          type="password"
          outlined
        />
        <q-btn
          class="q-mb-md q-mr-md"
          color="primary"
          label="Login"
          @click="login"
        />
        <q-btn
          class="q-mb-md"
          color="primary"
          label="Cancel"
          @click="loginView.closeLogin()"
        />
      </q-form>
    </q-card>
  </q-dialog>
</template>
