// src/store/index.js

import { createStore } from "vuex";

// Create the Vuex store
const store = createStore({
  state: {
    token: null,// Store the token in the state
    user: null,
    isUserLoggedIn: false
  },
  
  mutations: {
    // Mutation to set the token
    setToken(state, token) {
      state.token = token;
      if(token){
        state.isUserLoggedIn = true
      }
      else {
        state.isUserLoggedIn = false
      }
    },
    setUser(state,user){
      state.user = user
    }
  },

  actions: {
    // Action to commit the setToken mutation
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({commit}, user){
      commit('setUser',user)
    }
  },
});

export default store;
