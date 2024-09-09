<template>
    <span  :class="[tag,colorClass]">{{ label }}</span>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    label:{
        type:String,
        required:true
    },
    type:{
        type:String,
        default:'default'
    }
})

const colorClass = computed(()=>props.type+'-color')
const tag = computed(()=>props.type == "meal" ? "meal-tag":"tag")
</script>
<style scoped>
.tag {
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
.meal-tag {
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ddd;
}
.default-color,.meal-color {
  background-color: #f0f0f0;
  color: #555;
}
.category-color,
.area-color,
.tag-color{
  background-color: #ff6347; 
}
.ingredient-color {
  background-color: #ffa500;
}
</style>