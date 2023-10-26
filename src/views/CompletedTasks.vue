<template>
  <v-sheet width="300" class="mx-auto">
    <v-select
      v-model="selectedUsername"
      :items="usernames"
      label="Seleziona un nome"
    ></v-select>

    <v-text-field
    v-model="filterText"
    label="Filtra per testo"
    class="mt-4"
  ></v-text-field>

    <v-list>
      <v-list-item v-for="(task, index) in filteredCompletedTasks" :key="index">
        <del>{{ task.name }}</del>
        <div>Creato da: {{ task.creator }}</div>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
const completedTasks = appStore.getCompletedTasks;

const usernames = computed(() => [...new Set(completedTasks.map(task => task.username))]);

const selectedUsername = ref('User');

const filterText = ref('');

const filteredCompletedTasks = computed(() => {
  let filteredTasks = completedTasks;

  if (selectedUsername.value) {
    filteredTasks = filteredTasks.filter(task => task.username === selectedUsername.value);
  }

  if (filterText.value.trim() !== '') {
    const searchText = filterText.value.toLowerCase();
    filteredTasks = filteredTasks.filter(task => task.name.toLowerCase().includes(searchText));
  }

  return filteredTasks;
});
</script>