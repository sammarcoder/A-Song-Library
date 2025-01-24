<!-- <template>
    <div>
      <p>Token from Vuex Store: {{ token }}</p>
      <button @click="updateToken('new-token-123')">Set Token</button>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  
  export default {
    setup() {
      const store = useStore();
  
      const token = computed(() => store.state.token);
  
      const updateToken = (newToken) => {
        store.dispatch('setToken', newToken);
      };
  
      return { 
        token,
        updateToken,
      };
    },
  };
  </script>
   -->

   <template>
    <div v-if="isUserLoggedIn">
      <!-- Content to show when the user is not logged in -->
      <p>Please log in to access this content.</p>
    </div>
    <div v-else>
      <!-- Content to show when the user is logged in -->
      <p>Welcome, you are logged in!</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';  // Import 'computed' from 'vue'
  import { useStore } from 'vuex';  // Import 'useStore' from Vuex
  
  const store = useStore();  // Access the Vuex store instance
  
  // Create a computed property to access the isUserLoggedIn state reactively
  const isUserLoggedIn = computed(() => store.state.isUserLoggedIn);
  </script>
  