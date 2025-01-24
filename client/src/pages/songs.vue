<template class="parent">
    <Header />
    <div class="border w-100 d-flex justify-center align-center">
        <v-app-bar class="m-auto mt-4">
            <v-app-bar-title class="text-center text-cyan text-h5">Song Library</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn @click="createSong" class="ma-2 mr-10 bg-cyan" color="white"> Add new Song<v-icon class="ml-4"
                    size="large" icon="mdi-plus"></v-icon> </v-btn>

            <v-btn class="bg-cyan text-red" @click="deleteAll">delete all <v-icon icon="mdi-delete ml-4"></v-icon></v-btn>
        </v-app-bar>
        <!-- <h1 class="text-center ma-6 bg-cyan text-white">Library</h1> -->
        <v-row class=" mt-10">

            <v-col class="d-flex justify-center w-50 " v-for="song in songs" :key="song.title" cols="12" md="4">
                <v-card class="ml-10 h-100">
                    <v-card-title class="text-center bg-cyan text-white">{{ song.title }}</v-card-title>
                    <v-card-title>Singer: {{ song.artist }}</v-card-title>
                    <v-card-title>Type: {{ song.gener }}</v-card-title>
                    <!-- <v-card-title>Album Name: {{ song.album }}</v-card-title> -->
                    <!-- <v-card-subtitle>Video Link :
                        <a class="text-cyan text-decoration-none" :href="song.albumImageUrl" target="_blank">{{
                            song.albumImageUrl }}</a>
                    </v-card-subtitle> -->
                    <!-- <v-card-title>{{ song.utubeId }}</v-card-title> -->
                    <!-- <v-card-title>Lyrics: {{ song.lyrics }}</v-card-title> -->
                    <!-- <v-card-title>Tab: {{ song.tab }}</v-card-title> -->
                    <v-btn class="bg-cyan text-white" @click="viewSong(song)">View</v-btn>
                    <v-btn @click="deleteSong(song.id)" class="bg-red text-white" small>
                        Delete
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import SongsServices from '@/services/SongsServices'
import Header from '@/components/Header.vue';
import router from '@/router';

const songs = ref([]);
onMounted(async () => {
    try {
        const response = await SongsServices.getSongs();
        songs.value = response.data;
    } catch (err) {
        console.error('Error fetching songs:', err);
    }
});

// Delete a song
const deleteSong = async (songId) => {
    // try {
    //     await SongsServices.delete(songId);
    //     songs.value = songs.value.filter(song => song.id !== songId); // Remove from local list
    // } catch (error) {
    //     console.error("Error deleting song:", error);
    // }
};

const createSong = () => {
    router.push({ name: 'create-song' })
}

// View a song by navigating to the song detail page with its ID
const viewSong = (song) => {
    router.push({ name: 'song-detail', params: { songId: song.id } })
};

const deleteAll = () => {
    SongsServices.delAll()
    router.push('/songs')
    alert('Are you Sure to delte All songs')
    // console.log('hi')
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

.parent {
    font-family: 'Montserrat';
}
</style>