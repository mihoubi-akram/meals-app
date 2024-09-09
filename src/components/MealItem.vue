<template>
    <div class="card">
      <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }">
        <img :src="meal.strMealThumb" alt="Meal Image" class="card-image">
        <div class="card-body">
          <h2 class="card-title">{{ meal.strMeal }}</h2>
          <div class="tags">
            <Tag :label="meal.strCategory" :type="meal"></Tag>
            <Tag :label="meal.strArea" :type="meal"></Tag>
          </div>
        </div>
      </router-link>
      <a :href="meal.strYoutube" class="youtube-link" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
    </div>
  </template>
  
  <script setup>
  import Tag from '../components/Tag.vue';
 defineProps({
    meal: {
      required: true,
      type: Object
    }
  })
  </script>
  
  <style scoped>
  .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-body {
    padding: 0.5rem 1rem;
    text-align: center;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    white-space: nowrap; /* Prevents text wrapping */
  overflow: hidden; /* Hides overflowing text */
  text-overflow: ellipsis; /* Adds ellipsis (...) for overflowed text */
  }
  
  .tags {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .tag {
    background-color: #f0f0f0;
    border-radius: 50px;
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
    color: #555;
    border: 1px solid #ddd;
  }
  
  .youtube-link {
    display: inline-block;
    background-color: #ff6347;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
    margin-bottom: 10px;
  }
  
  .youtube-link:hover {
    background-color: #e55347;
  }
  </style>
  