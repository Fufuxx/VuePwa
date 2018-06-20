<template>
  <!-- <div class="ui fixed inverted menu">
    <div class="ui container">
      <div class="header item">
        <img class="logo" src="/static/img/icons/twitter.png" />
        {{ header_text }}
      </div>
    </div>
  </div> -->
  <!-- <div class="ui inverted vertical masthead center aligned segment">
    <div class="ui container">
      <div class="ui large secondary inverted pointing menu">
        <a class="toc item">
          <i class="sidebar icon"></i>
        </a>
        <a class="active item">Home</a>
        <a class="item">Route</a>
      </div>
    </div>
  </div> -->
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link @click.native="sethome()"  to="/" class="navbar-brand" tag="a">Cryptocus</router-link>
    <button id="hamburger" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link v-for="item in menu_items" :key="item.name" v-bind:class="{ 'active': item.isActive, 'nav-item': true }"
          tag="li" :to="item.url" @click.native="menuclick(item)">
          <a class="nav-link">{{ item.name }}</a>
        </router-link>
        <!-- <router-link class="nav-item" tag="li" to="/search">
          <a class="nav-link">Search</a>
        </router-link> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      header_text: 'Cyptocus',
      menu_items: [
        { name: 'Home', url: '/', isActive: true },
        { name: 'Search', url: '/search', isActive: false }
      ]
    }
  },
  methods: {
    menuclick: function (item) {
      document.getElementById('hamburger').click()
      this.$data.menu_items.forEach(function (e) { e.isActive = false })
      item.isActive = true
    },
    sethome: function () {
      this.$data.menu_items.forEach(
        function (e) {
          if (e.name === 'Home') {
            e.isActive = true
          } else {
            e.isActive = false
          }
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar{ background-color: rgb(33, 133, 208); }
</style>
