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
 store.searchMealsRandomly();
})

</script>
<style scoped>

</style>