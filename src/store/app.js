// app.js
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    tasks: [],
    completedTasks: [],
  }),
  getters: {
    getCompletedTasks: (state) => state.completedTasks,
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    completeTask(taskIndex) {
      const task = this.tasks[taskIndex];
      task.completed = true;
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
  },
});
