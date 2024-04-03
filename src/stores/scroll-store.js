import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
    state: () => ({
        section: ""
    }),

    getters: {
        getSection(state) {
            return state.section
        }
    },

    actions: {
        setSection(section) {
            this.section = section
        }
    }
})