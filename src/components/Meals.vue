<template>
  <div class="title">
    <h1>{{ title }} 🔥</h1>
    <p class="description">Discover our top recipes that are currently trending!</p>
  </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
      There are no meals
    </div>
    <div v-else class="grid-meals">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import MealItem from './MealItem.vue';
    const props = defineProps({
        meals:{
            type:Array,
            required:true,
        },
        title:{
          type:String,
          required:true,
        }
    })
    console.log(props);
</script>

<style>
.title{
  text-align: left;
  margin-left: 2rem;
  /*border-bottom: 1px solid silver; */
  color: var(--vt-c-orange);
  color: black;
  font-size: 1.4rem;
  font-weight: bold;
}
.grid-meals {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr)); 
  gap: 1.25rem; 
  padding-left: 2rem; 
  padding-right: 2rem; 
}

@media (min-width: 768px) {
  .grid-meals {
    grid-template-columns: repeat(3, minmax(0, 1fr)); 
  }
}
.title h1 {
  font-family: 'Playfair Display', serif; 
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff5722;
  text-align: center;
  margin-bottom: 0.5rem;
}

.description {
  font-family: 'Roboto', sans-serif; 
  font-size: 1.125rem; 
  font-weight: 300;
  color: #555;
  text-align: center;
  line-height: 1.6; 
  max-width: 600px; 
  margin: 0 auto; 
}
</style>