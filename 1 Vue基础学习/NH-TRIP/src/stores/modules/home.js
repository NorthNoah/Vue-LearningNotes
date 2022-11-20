
import { defineStore } from "pinia";
import getSuggestCityAll from "@/service/modules/home";
const useHomeStore = defineStore("home", {
    state: () => ({
        suggestCities: [],
        categories: []
        // 注意是对象形式
    }),
    actions: {
        async fetchSuggestData() {
            const res = await getSuggestCityAll()
            this.suggestCities = res.data
        }
    }
})
export default useHomeStore