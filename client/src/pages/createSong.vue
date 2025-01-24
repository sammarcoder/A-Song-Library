
<template>
    <div>
      <Header />
      <v-row class="d-flex flex-column justify-center mt-5 ma-4">
        <!-- Use v-form to manage form validation -->
        <v-form ref="form" v-model="isFormValid" @submit.prevent="handleSubmit">
          <v-col cols="12" sm="7" md="4">
            <v-text-field
              v-model="newSong.title"
              :rules="[rules.required]"
              placeholder="Enter title"
              label="Song title"
              variant="outlined"
              density="compact"
            />
            <v-text-field
              v-model="newSong.artist"
              :rules="[rules.required]"
              placeholder="Artist"
              label="Artist"
              variant="outlined"
              density="compact"
            />
            <v-text-field
              v-model="newSong.gener"
              :rules="[rules.required]"
              placeholder="Genre"
              label="Genre"
              variant="outlined"
              density="compact"
            />
            <v-text-field
              v-model="newSong.album"
              :rules="[rules.required]"
              placeholder="Album"
              label="Album"
              variant="outlined"
              density="compact"
            />
            <v-text-field
              v-model="newSong.albumUrl"
              :rules="[rules.required]"
              placeholder="Album URL"
              label="Album Image URL"
              variant="outlined"
              density="compact"
            />
            <v-text-field
              v-model="newSong.youtubeId"
              label="YouTube ID"
              variant="outlined"
            />
          </v-col>
          <v-col>
            <v-textarea
              v-model="newSong.lyrics"
              label="Lyrics"
              variant="outlined"
            />
            <v-textarea
              v-model="newSong.tab"
              :rules="[rules.required]"
              placeholder="Tab"
              label="Tab"
              variant="outlined"
              density="compact"
            />
            <v-btn class="bg-cyan text-white" type="submit">Add Song</v-btn>
          </v-col>
        </v-form>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import SongsServices from '@/services/SongsServices';
  import { ref } from 'vue';
  import router from '@/router';
  
  // Form data object
  const newSong = ref({
    title: '',
    artist: '',
    gener: '',
    album: '',
    albumUrl: '',
    youtubeId: '',
    lyrics: '',
    tab: '',
  });
  
  // Form validity state
  const isFormValid = ref(false);
  
  // Validation rules for fields
  const rules = {
    required: value => !!value || 'This field is required.',
  };
  
  // Handle form submission
  async function handleSubmit() {
    try {
      // Ensure form is valid before submitting
      if (!isFormValid.value) {
        console.log('Form is not valid');
        return;
      }
  
      await SongsServices.create(newSong.value);
  
      // Reset form after successful submission
      newSong.value = {
        title: '',
        artist: '',
        gener: '',
        album: '',
        albumUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: '',
      };
      router.push({ name: 'songs' });
      console.log('Form submitted successfully');
    } catch (err) {
      console.log('Error:', err);
    }
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add your styles here */
  </style>


[
name,
age,
price
]
  