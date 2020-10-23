<template>
  <div class="container">
    <h1 class="title">ToDo</h1>
    <ul class="panel">
      <li v-for="(todo, index) in todos" :key="index" class="panel-block">
        {{ todo.name }}
        <span @click.prevent="onCheck(todo)" class="panel-icon" style="margin-left:auto">
          <i v-if="todo.done" class="fas fa-check" aria-hidden="true"></i>
          <i v-else class="fas fa-times" aria-hidden="true"></i>
        </span>
        <span @click.prevent="onRemove(todo)" class="panel-icon">
          <i class="fas fa-trash" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
    <form @submit.prevent="onAdd" class="box has-background-light">
      <div class="field">
        <label for="task" class="label">Task</label>
        <div class="control">
          <input v-model="task" type="text" class="input" id="task">
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-primary" type="submit">Ajouter</button>
        </div>
        <div class="control">
          <button @click.prevent="onDelete" class="button is-danger" type="button">Supprimer</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  methods: {
    onAdd() {
      if (!this.task) return false;
      this.todos.push({
        name: this.task,
        done: false,
      });
      this.task = '';
    },
    onRemove(task) {
      this.todos = this.todos.filter(function(todo) {
        return todo != task;
      });
    },
    onCheck(task) {
      task.done = !task.done;
    },
    onDelete() {
      this.todos.length = 0;
    }
  },
  data() {
    return {
      todos: [],
      task: '',
    };
  },
};
</script>