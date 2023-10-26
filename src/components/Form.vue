<template>
  
  <v-container>
    <v-sheet width="300" class="mx-auto">
    <h1 class="text-center pa-5">Benvenuto {{ username }}</h1>
    <v-form @submit.prevent="addTask">
      <v-text-field v-model="taskText" label="Inserisci un nuovo task"></v-text-field>
      <v-btn type="submit" block class="mt-2">AGGIUNGI</v-btn>
    </v-form>
    
    <v-list>
      <v-list-item v-for="(task, index) in tasks" :key="index">
        <v-text-field v-if="!task.completed" v-model="task.name" outlined dense></v-text-field>
        <del v-else>{{ task.name }}</del>
        <div>Creato da: {{ task.creator }}</div>
        <v-btn class="ma-3" icon @click="completeTask(index)">
          <v-icon>{{ task.completed ? 'mdi-checkbox-marked-circle' : 'mdi-checkbox-blank-circle-outline' }}</v-icon>
        </v-btn>
        
        <v-btn class="ma-3" icon @click="deleteTask(task)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn class="ma-3" icon @click="archiveTask(index)">
          <v-icon>mdi-archive</v-icon>
        </v-btn>
      </v-list-item>
      
      <v-divider v-if="tasks.length > 0"></v-divider>
      
    </v-list>
  </v-sheet>
  </v-container>
  
</template>

<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/store/app';

const taskText = ref('');
const appStore = useAppStore();
const username = appStore.username;

const tasks = appStore.tasks;

function addTask() {
  if (taskText.value.trim() !== '') {
    appStore.addTask({ name: taskText.value, completed: false, editing: false });
    taskText.value = '';
  }
}

function completeTask(index) {
  appStore.completeTask(index);
}

function deleteTask(task) {
  appStore.deleteTask(task);
}

function archiveTask(index) {
  const task = tasks[index];
  if (task.completed) {
    task.editing = true;
    appStore.moveTaskToCompleted(task);
  } else {
    alert("Devi completare la Task prima di archiviarla.");
  }
}

</script>
