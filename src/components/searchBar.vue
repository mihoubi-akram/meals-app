<template>
    <div class="search-bar">
        <input
            type="text"
            v-model="searchQuery"
            placeholder="What do you want to cook ?"
        />
    </div>
</template>

<script setup>

</script>
<style scoped>
 .search-bar {
      position: relative;
      width: 100%;
      margin: 0 auto;
    }

  .search-bar input[type="text"] {
    width: 70%;
    padding: 10px 15px 10px 40px;
    border-radius: 20px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
    transition: all 0.3s ease;
  }

  .search-bar input[type="text"]:focus {
    border-color: #007bff;
  }

  .search-bar input[type="text"]::placeholder {
    color: #aaa;
  }
</style>
