import { defineStore } from 'pinia'

export const useLoginViewStore = defineStore('loginView', {
  state: () => ({
    loginView: false
  }),

  getters: {
    getLoginView (state) {
      return state.loginView
    }
  },

  actions: {
    openLogin () {
      this.loginView = true
    },
    closeLogin () {
      this.loginView = false
    }
  }
})
