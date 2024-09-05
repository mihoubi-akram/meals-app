import { computed, ref} from 'vue'
import { defineStore } from 'pinia'
import axiosClient from '@/axiosClient'
import {useRouter } from 'vue-router'
export const useMealsStore = defineStore('Meals', () => {
    //State
    const meals = ref([])

    //Actions
    const searchMealsRandomly = async()=>{
        meals.value = [];
        for (let i=0;i<3;i++){
            const response = await axiosClient.get('random.php');
            meals.value.push(response.data.meals[0])
          }
    }
    const route = useRouter();
    
    const searchMealsByname = async(name)=>{
        route.push({ name: 'home' });
        if(name.trim() != ""){
            axiosClient.get(`search.php?s=${name}`)
                .then(({ data }) => {
                   setMeals(data.meals);
                })
                .catch(error => {
                    console.log("error");
                    meals.value=[];
                })
        }else{
            searchMealsRandomly();
        }
    }
    const setMeals = (data) => {
        meals.value = [];
        if(data){
            meals.value = data;
        }
    }
    const addMeal = (meal)=>{
        meals.value.push(meal);
    }

    return { meals,setMeals,addMeal,searchMealsRandomly,searchMealsByname}
})
  