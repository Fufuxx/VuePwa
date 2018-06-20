<template>
  <div id="app">
    <header-view/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue'

export default {
  name: 'app',
  components: { HeaderView },
  methods: {
    slide: function (event) {
      console.log('Slide !', event)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
