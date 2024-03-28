<script setup>
import { ref } from 'vue' 
import { api } from 'src/boot/axios'

// CONSTANTS //

const mail = ref('')
const password = ref('')
const passwordValidation = ref('')
const isLoading = ref(false)
const isPwd = ref(true)
const isPwd2 = ref(true)

const validPasswordLength = ref(false);
const validPasswordCapital = ref(false);
const validPasswordNumber = ref(false);
const validPasswordSymbol = ref(false);

// FUNCTIONS //

function validatePassword(password) {
  validPasswordLength.value = password.length >= 8;
  validPasswordCapital.value = /^(?=.*[A-Z]).*$/.test(password)
  validPasswordNumber.value = /^(?=.*[0-9]).*$/.test(password);
  validPasswordSymbol.value = /^(?=.*[!@#$%^&*()\-_+=]).*$/.test(password);

  return validPasswordLength.value && validPasswordCapital.value && validPasswordNumber.value && validPasswordSymbol.value;
}

async function register() {
  isLoading.value = true
  try {
    const data = await api.post('/auth/local/register', {
      username: mail.value,
      password: password.value,
      email: mail.value
    })
    console.log(data)
    isLoading.value = false
  } catch(error) {
    console.error(error)
    isLoading.value = false
  }
}
</script>
<template>
<q-form 
  @submit="register"
  class="q-gutter-md"
  style="max-width: 500px;"
>
  <q-input 
    filled 
    type="email" 
    v-model="mail" 
    label="mail *" 
    hint="Insert your mail." 
    lazy-rules
    :rules="[ (val, rules) => rules.email(val) || 'Insert a valid mail.']" 
  />
  <q-input 
    v-model="password" 
    label="password *" 
    filled 
    :type="isPwd ? 'password' : 'text'" hint="Insert a valid password."
    :rules = "[ val => validatePassword(val) || 'Password does not meet the criteria.']"
  >
    <template 
      v-slot:append
    >
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
  <q-input 
    v-model="passwordValidation" 
    label="confirm password *" 
    filled 
    :type="isPwd2 ? 'password' : 'text'" lazy-rules :rules="[ (val) => ( val === password) || 'Password must match.']"
    >
    <template 
      v-slot:append
    >
      <q-icon
        :name="isPwd2 ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd2 = !isPwd2"
      />
    </template>
  </q-input>
  <div class="password-criteria q-pa-xm">
    <div>
      <q-icon
        :name="validPasswordLength ? 'check' : 'clear'"
        :color="validPasswordLength ? 'positive' : 'negative'"
      ></q-icon>
      At least 8 characters.
    </div>
    <div>
      <q-icon
        :name="validPasswordCapital ? 'check' : 'clear'"
        :color="validPasswordCapital ? 'positive' : 'negative'"
      ></q-icon>
      Must contain a capital letter.
    </div>
    <div>
      <q-icon
        :name="validPasswordNumber ? 'check' : 'clear'"
        :color="validPasswordNumber ? 'positive' : 'negative'"
      ></q-icon>
      Must contain a number.
    </div>
    <div>
      <q-icon
        :name="validPasswordSymbol ? 'check' : 'clear'"
        :color="validPasswordSymbol ? 'positive' : 'negative'"
      ></q-icon>
      Must contain a special characters : !@#$%^&*()-_+=
    </div>
  </div>
  <div class="row">
    <div class="col-6 center-item">
      <q-btn 
        color="secondary" 
        text-color="black"
        :loading="isLoading" 
        label="Submit" 
        type="submit" 
        style="background: #9dcc24; color: black" 
      />
    </div>
  </div>
</q-form>
</template>