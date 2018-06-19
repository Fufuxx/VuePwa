<template>
  <div class="minimal pushable">
    <div id="app">
      <header-view/>
      <div style="position:absolute; left:100px; top: 300px;">
        <sui-button primary v-on:click="slide">Test Sidebar</sui-button>
      </div>
      <router-view></router-view>
    </div>
    <div id="sidebar" class="ui left demo vertical inverted sidebar labeled icon menu">
      <a class="item active" v-on:click="slide">
        <i class="home icon"></i>
        Home
      </a>
      <a class="item" v-on:click="slide">
        <i class="block layout icon"></i>
        Topics
      </a>
      <a class="item" v-on:click="slide">
        <i class="smile icon"></i>
        Friends
      </a>
    </div>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
global.jQuery = require('jquery')
var $ = global.jQuery

export default {
  name: 'app',
  components: { HeaderView },
  methods: {
    slide: function (event) {
      console.log('Slide !', event)
      $('#sidebar').toggleClass('visible')
      $('#app').toggleClass('dimmed pusher')
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

#sidebar{
  background: #2185d0;
}

.ui.inverted.menu .active.item{
  color: #2185d0 !important;
  background: white;
}

</style>
