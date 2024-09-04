<template>
   <Meals :meals="store.meals" title="Trending Recipes"></Meals>
</template>
<script setup>
import { onMounted } from 'vue';
import Meals from '../components/Meals.vue';
import { useMealsStore } from '@/stores/meals';
import axiosClient from '@/axiosClient';
const store = useMealsStore();

onMounted(async ()=>{
  for (let i=0;i<15;i++){
    const response = await axiosClient.get('random.php');
    store.addMeal(response.data.meals[0])
  }
})

</script>
<style scoped>

</style>