<template>
  
  <v-container class="mb-16">
    <v-app-bar
    color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random"
    >
    <template v-slot:image>
      <v-img
      gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>
    
    <v-app-bar-title class="ms-5 pa-auto"><v-icon class="">mdi-list-status</v-icon> To Do List</v-app-bar-title>
    
    <ul class="mx-auto">
      <li><router-link :to="{name: 'Home'}">Home</router-link></li>
      <li><router-link :to="{name: 'CompletedTasks'}">Completati</router-link></li>
      <li><router-link :to="{name: 'Login'}">Login</router-link></li>
    </ul>
  </v-app-bar>
</v-container>

</template>

<script setup>

</script>

<style>
a:-webkit-any-link, ul{
  text-decoration: none;
  color: aliceblue;
  list-style: none;
  display: flex;
  width: 50%;
  padding-right: 12px;
}
a:hover{
  color: rgb(21, 0, 255);
}
</style>