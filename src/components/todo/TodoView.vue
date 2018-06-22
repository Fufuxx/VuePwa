<template>
  <div class="container-fluid">
    <h1 class="h1">{{ message }}</h1>
    <todo-input-view v-on:todo:add="addTodo"></todo-input-view>
    <ul v-if="todos.length > 0" class="list-group">
      <li v-for="todo in todos" :key="todo.id" class="list-group-item p-2">
        <button v-on:click="removeTodo(todo)" type="button" class="btn btn-danger mr-2">Remove</button> {{ todo.text }}
      </li>
    </ul>
    <p v-if="todos.length === 0" class="text-left">You have nothing to do! Happy days...</p>
  </div>
</template>

<script src="./TodoView.js"></script>
<style src="./TodoView.css" scoped></style>