<template>
    <div>
        <Header />
        <v-row class="d-flex flex-column justify-center mt-5 ma-4">
            <v-col cols="12" sm="7" md="4" class="">
                <v-card class="">
                    <div class="text-center bg-cyan">Ttile : {{ song.title }}</div>
                    <div class="pl-10">
                        <div>artist : {{ song.artist }}</div>
                        <div>Genre : {{ song.gener }}</div>
                        <div>album : {{ song.album }}</div>
                        <a :href='song.albumUrl' target="_blank"></a>
                        <div>{{ song.title }}</div>
                        <div>{{ song.title }}</div>
                        <v-btn @click="updateSong" class="bg-cyan">Update Song</v-btn>
                        <v-btn @click="deleteSong" color="red">Delete Song</v-btn>
                    </div>
                </v-card>

            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SongsServices from '@/services/SongsServices';
import { useRoute, useRouter } from 'vue-router';
const song = ref({})
const route = useRoute()
const router = useRouter()

console.log(route.params.songId)

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

const deleteSong = async () => {
    await SongsServices.deleteById(route.params.songId);
    router.push({ name: 'songs' })
    alert('hi')

}

const updateSong = () => {
    // router.push(`/songs/update/${route.params.songId}`)
    router.push({ name: 'update', params: { songId: song.id } })
}


</script>