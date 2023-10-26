import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    tasks: [],
    completedTasks: [],
    username: 'User',
  }),
  getters: {
    getCompletedTasks: (state) => state.completedTasks,
  },
  actions: {
    addTask(task) {
      task.username = this.username;
      task.creator = this.username;
      this.tasks.push(task);
    },
    completeTask(taskIndex) {
      const task = this.tasks[taskIndex];
      task.completed = !task.completed;
    
      if (task.completed) {
        task.completed = true;
      } else {
        const index = this.completedTasks.indexOf(task);
        if (index > -1) {
          this.completedTasks.splice(index, 1);
        }
      }
    },  
    deleteTask(task) {
      const index = this.tasks.indexOf(task);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
    },
    moveTaskToCompleted(task) {
      const index = this.tasks.indexOf(task);
      if (index > -1) {
        this.tasks.splice(index, 1);
        this.completedTasks.push(task);
      }
    },
    setUsername(username) {
      this.username = username;
    },
  },

  mutations: {
    setUsername(username) {
      this.username = username; // Imposta il nome utente
    },
  }
});
