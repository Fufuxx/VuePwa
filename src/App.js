import HeaderView from './components/header/HeaderView.vue'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';

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
      count: 0,
      todos: [],
      obs: Observable.interval(1000)
    }
  },
  created () {
    this.obs
      .filter((value) => value % 2 === 0)
      .subscribe(
        (data) => this.count = data,
        (err) => console.log(err)
    )
  },
  beforeDestroy () {
    this.obs.unsubscribe()
  }
}
