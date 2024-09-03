<template>
  <div class="meal-card">
    <div class="meal-img">
      <img :src="meal.strMealThumb" :alt="meal.strMeal">
    </div>
    <div class="meal-info">
      <div class="meal-title">
        <h3>{{ meal.strMeal }}</h3>
      </div>
      <div class="meal-tags">
        <div v-if="meal.strCategory && meal.strCategory.trim() !== ''">
          <span class="tag">{{ meal.strCategory }}</span>
        </div>
        <div v-if="meal.strArea && meal.strArea.trim() !== ''">
          <span class="tag">{{ meal.strArea }}</span>
        </div>
        <div v-if="meal.strTags && meal.strTags.trim() !== ''" v-for="(tag, index) in tagsArray" :key="index">
            <span class="tag">
              {{ tag }}
            </span>
        </div>
      </div>
      <div class="meal-ingredients">
        <strong>Ingredients:</strong>
        <div class="ingredients">
          <span v-for="value in ingredients" :key="value" class="ingredient-tag">{{ value }}</span>
        </div>
      </div>
      <div class="meal-instructions">
        <strong>Instructions:</strong>
        <p>{{ meal.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const meal = ref({});
const route = useRoute();

const tagsArray = computed(() => {
  return meal.value.strTags ? meal.value.strTags.split(',') : [];
});

const ingredients = computed(() => {
  let ingredients = [];
  for (const key in meal.value) {
    if (meal.value.hasOwnProperty(key)) {
      const value = meal.value[key];
      if (key.startsWith("strIngredient") && value.trim() !== "") {
        ingredients.push(value);
      }
    }
  }
  return ingredients;
});

onMounted(async () => {
  const { data } = await axiosClient.get(`lookup.php?i=${route.params.id}`);
  meal.value = data.meals[0];
});
</script>
<style scoped>
.meal-card {
  display: flex;
  gap: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.meal-img {
  max-width: 400px;
}

.meal-img img {
  width: 100%;
  border-radius: 15px;
}

.meal-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.meal-title h3 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.meal-tags{
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: left;
}
.meal-ingredients {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

.tag {
  background-color: #ff6347;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
}

.ingredient-tag {
  background-color: #ffa500;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
  margin-right: 5px;
}

.meal-ingredients .ingredients {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.meal-instructions {
  margin-top: 20px;
  font-size: 1.1rem;
  color: #555;
}

.meal-instructions p {
  line-height: 1.6;
}
</style>
