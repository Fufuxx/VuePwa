<template>
  <form class="p-3">
    <div class="form-group row">
      <input type="text" class="form-control col-sm-10" id="todoInput" placeholder="Add Todo..." 
          v-model="text" />
      <div class="col-sm-2 pl-2">
        <button type="submit" class="btn btn-primary" v-on:click="addTodo()">Add New Todo</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        text: ''
      }
    },
    methods: {
      addTodo: function () {
        console.log('Add up Todo ' + this.$data.text)
        this.$emit('todo:add', this.text)
        this.text = ''
      }
    }
  }
</script>
