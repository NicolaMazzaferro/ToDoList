<template>
  <v-sheet width="300" class="mx-auto">
    <v-list>
      <v-list-item v-for="(task, index) in completedTasks" :key="index">
        <del>{{ task.name }}</del>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script setup>
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
const completedTasks = appStore.getCompletedTasks;

</script>
