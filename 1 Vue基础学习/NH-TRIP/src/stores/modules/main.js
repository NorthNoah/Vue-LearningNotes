import { defineStore } from "pinia";
const useMainStore = defineStore("main", {
    state: () => ({
        token: "",

        isLoading: true
    }),
    actions: {
        async fetchMainData() {
        }
    }
})
export default useMainStore