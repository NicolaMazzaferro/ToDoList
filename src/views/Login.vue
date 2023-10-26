<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="login">
      <v-text-field v-model="username" label="Inserisci il tuo nome"></v-text-field>
      <v-btn type="submit" block class="mt-2">LOGIN</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/store/app';
import { useRouter } from 'vue-router';

const username = ref('');
const appStore = useAppStore();
const router = useRouter();

function login() {
  if (username.value.trim() !== '') {
    appStore.setUsername(username.value);
    router.push({ name: 'Home' });
  }
}
</script>
