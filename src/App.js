import HeaderView from './components/header/HeaderView.vue'

export default {
  name: 'app',
  components: { HeaderView },
  methods: {
    slide: function (event) {
      console.log('Slide !', event)
    }
  },
  data () {
    return {
      todos: []
    }
  }
}
