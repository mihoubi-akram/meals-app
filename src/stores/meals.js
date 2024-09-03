import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useMealsStore = defineStore('Meals', () => {
    const meals = ref([])
    return { meals}
})
  