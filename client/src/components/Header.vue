<template>
    <v-app-bar class="bg-cyan" :elevation="2">
        <v-app-bar-title class="bg-cyan text-white text-h5">Song Store</v-app-bar-title>
        <v-btn
       v-if="isUserLoggedIn"
        color="white"
        @click="GoToBrowser({name : 'songs'})"
        >
            Browser
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
        v-if="!isUserLoggedIn"
        @click="GoToRegister" color="white">
            REGISTER
        </v-btn>
        <v-btn
        v-if="!isUserLoggedIn"
        color="white" @click="GoLogin">
            Login
        </v-btn>
        <v-btn  
        v-if="isUserLoggedIn"
        @click="GoLogout" color="white">
            Logout
        </v-btn>
    </v-app-bar>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

const router = useRouter();
const store = useStore()

const isUserLoggedIn = computed(() => store.state.isUserLoggedIn);
// const yes = store.state.isUserLoggedIn

const GoToBrowser = (name) =>{
router.push(name)

}

const GoToRegister = () => {
    router.push('/')

}

const GoLogin = () => {
    router.push( "/login" )

}

const GoLogout = () => {
    store.dispatch('setToken',null)
    store.dispatch('setUser',null)
    router.push({ name: 'login' })
    alert('You Logout')
}


</script>