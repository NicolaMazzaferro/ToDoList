<template>
  <v-container>
    <v-col
      v-for="n in 8"
      :key="n"
      cols="12"
    >
    <v-card
      :title="`Content ${n}`"
      :subtitle="`Subtitle for Content ${n}`"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
    ></v-card>
  </v-col>
  </v-container>
</template>

<script setup>
//
</script>
