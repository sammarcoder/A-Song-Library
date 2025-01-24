=<template>
    <div>
        <Header />
        <v-row class="d-flex flex-column justify-center mt-5 ma-4">
            <v-col cols="12" sm="7" md="4">
                <v-text-field v-model="song.title" label="Title" variant="outlined" />
                <v-text-field v-model="song.artist" label="Artist" variant="outlined" />
                <v-text-field v-model="song.genre" label="Genre" variant="outlined" />
                <v-text-field v-model="song.album" label="Album" variant="outlined" />
                <v-btn @click="updateSong( song )">Update Song</v-btn>
                <!-- <v-btn @click="deleteSong" color="red">Delete Song</v-btn> -->
                <div>{{ song.title }}</div>
                <div>{{ song.id }}</div>
            </v-col>
            
        </v-row>
    </div>
</template>


<script setup>
import SongsServices from '@/services/SongsServices';
import { onMounted,ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { tr } from 'vuetify/locale';

const route = useRoute()
const router = useRouter()

const song = ref({})
console.log(song.id)

onMounted(async () => {
    try {
        const response = await SongsServices.getById(route.params.songId)
        // alert(response.data)
        song.value = response.data
    }
    catch (error) {
        console.error('Error fetching song:', error);
    }

})

const updateSong = async (song)=>{
    try{
    await SongsServices.updateById(song.id, song);
    router.push('/songs')
    alert(route.params.songId)
    }
    catch(erorr){
        alert(error)
    }
}

</script>

<style lang="scss" scoped></style>