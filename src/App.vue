<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <div class="nav-links">
          <RouterLink to="/by-name">Search Meals</RouterLink>
          <RouterLink to="/by-letter">Meals By Letter</RouterLink>
          <RouterLink to="/ingredients">Meals By Ingredients</RouterLink>
        </div>
      </nav>
  </header>
  <RouterView />
</template>

<style >
header{
  background-color: white;
  width: 100%;
  height: 4rem;
}
header .router-link-active{
  color:rgb(249 115 22);
} 
header nav {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;  
  gap: 20px;
  padding: 1.2rem;
  font-size:20px ;
  color: black;
  font-weight: bold;
}

header .nav-links{
  display: flex;
  gap: 20px;
}

body{
  margin: 0;
  background-color: rgb(243 244 246);
  color: black;
}
#app {
  font-weight: normal;
}

a {
  text-decoration: none;
  color: black;
}

header{

}
</style>
