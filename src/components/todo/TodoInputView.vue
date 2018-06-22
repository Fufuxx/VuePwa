<template>
  <form class="p-3">
    <div class="form-group row">
      <input type="text" class="form-control col-9" id="todoInput" placeholder="Add Todo..." 
          v-model="text" />
      <div class="col-3 pl-2">
        <button type="button" class="btn btn-primary" v-on:click="addTodo()">Submit</button>
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
