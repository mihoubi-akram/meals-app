<template>
    <nav class="navbar">
      <RouterLink :to="{ name: 'home' }" class="navbar-title">Forkify</RouterLink>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="What do you want to cook?"/>
        <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
        </svg>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-title {
    flex-shrink: 0; 
    color: #ff6347;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .navbar-title:hover {
    color: #d9534f;
  }
  
  .search-bar {
    flex-grow: 1;
    display: flex;
    align-items: center;
    max-width: 500px;
    margin-left: 20px;
  }
  
  .search-bar input {
    width: 100%;
    border: 1px solid #d5e3ec;
    border-radius: 25px;
    padding: 8px 16px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .search-bar input:focus {
    border-color: #ff6347;
    box-shadow: 0 0 5px rgba(255, 99, 71, 0.3);
  }
  

  #search-icon {
    width: 20px;
    height: 20px;
    fill: #888;
    margin-left: 10px; 
  }
  </style>
  