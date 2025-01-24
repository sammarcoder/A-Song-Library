<template>
  <v-row class="w-100 fill-height d-flex align-center justify-center m-auto">
    <v-col cols="12" sm="6" md="4" class="ml-6 pa-10 border-lg">
      <div class="w-100 h-50 rounded-lg d-flex flex-column justify-center align-center">
        <h1 class="mb-4 w-100 rounded-lg border-lg text-center border bg-cyan text-white text-capitalize">{{ title }}
        </h1>
        <p class="mb-5">{{ title }} with your email, password</p>
        <div class=" w-100">
          <v-text-field class="input width-sm-100" label="Enter your Email" v-model="email" placeholder="Email"
            variant="outlined"></v-text-field>
        </div>
        <div class="w-100">
          <v-text-field label="Enter your Password" v-model="password" placeholder="Enter your password"
            variant="outlined" type="password"></v-text-field>
        </div>

        <v-btn @click="register" class="text-white" width="200" min-height="40" color="cyan">{{ title }}</v-btn>
        <div v-html="error" class="text-red mt-3"></div>

      </div>
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from 'vue';
import AuthenticationServices from '@/services/AuthenticationServices';
import { defineProps } from 'vue';
import { useStore } from 'vuex'
// import { useStore } from 'vuex/types/index.js';


const email = ref('');
const password = ref('');
const error = ref(null);

const props = defineProps({
  title: String,
})

const store = useStore()

const register = async () => {
  error.value = null;
  try {
    const response = await AuthenticationServices.register
      ({
        email: email.value,
        password: password.value
      });
      store.dispatch('setToken', response.data.token)
      store.dispatch('setUser', response.data.user)
      console.log( store.dispatch('setToken', response.data.token))
    // console.log(response)

    email.value = '';
    password.value = '';

  } catch (err) {
    error.value = err.response.data.error;
  }

};
</script>
<style scoped></style>