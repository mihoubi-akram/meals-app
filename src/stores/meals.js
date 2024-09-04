import { ref} from 'vue'
import { defineStore } from 'pinia'
export const useMealsStore = defineStore('Meals', () => {
    //State
    const meals = ref([])

    //Actions
    const setMeals = (data) => {
        meals.value = data
    }
    const addMeal = (meal)=>{
        meals.value.push(meal);
    }

    return { meals,setMeals,addMeal}
})
  