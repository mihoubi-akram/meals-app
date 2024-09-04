<template>
  <Navbar></Navbar>
  <div class="container">
        <router-view />
  </div>
</template>


<script setup>
import Navbar from './components/Navbar.vue';

</script>
<style >
  a {
    text-decoration: none;
    color: black;
  }

  :root{
    --vt-c-orange:  rgb(249,115,22);
  }
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(243 244 246);
    background-color: #f4f4f4;
    background-color: #fff;
    color: black;
    font-family: Arial, sans-serif;
    font-family:  sans-serif;

  }
  #app {
    font-weight: normal;
  }
  header{
    background-color: white;
    width: 100%;
    height: 4rem;
  }

  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0 0 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

</style>
