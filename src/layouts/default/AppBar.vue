<template>
  
  <v-container class="mb-10">
    <v-app-bar
    color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random"
    >
    <template v-slot:image>
      <v-img
      gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>
    <v-btn icon class="ps-10">
      <v-icon>mdi-list-status</v-icon>
    </v-btn>
    <v-app-bar-title>To Do List</v-app-bar-title>
    
    <v-app-bar-title>
      <ul>
        <li><router-link :to="{name: 'Home'}">Home</router-link></li>
        <li><router-link :to="{name: 'CompletedTasks'}">Completati</router-link></li>
        <li><router-link :to="{name: 'Login'}">Login</router-link></li>
      </ul>
    </v-app-bar-title>
    
    <v-btn icon class="pe-16">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
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