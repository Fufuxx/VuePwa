import TodoInputView from './TodoInputView'

export default {
  data () {
    return {
      message: 'Todo Home',
      todos: [
        { id: 0, text: 'Test Todo' }
      ],
      nextId: 1
    }
  },
  methods: {
    addTodo: function (text) {
      this.todos.push({ id: this.nextId, text: text })
      this.nextId++
    },
    removeTodo: function (todo) {
      let index = this.todos.map(function (e) { return e.id }).indexOf(todo.id)
      if( index > -1){ this.todos.splice(index, 1); }
    }
  },
  components: { TodoInputView }
}
