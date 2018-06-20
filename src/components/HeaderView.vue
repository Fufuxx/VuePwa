<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link @click.native="sethome()"  to="/" class="navbar-brand" tag="a">Cryptocus</router-link>
    <button id="hamburger" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="collapsible" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link v-for="item in menu_items" :key="item.name" v-bind:class="{ 'active': item.isActive, 'nav-item': true }"
          tag="li" :to="item.url" @click.native="menuclick(item)">
          <a class="nav-link">{{ item.name }}</a>
        </router-link>
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
      if (document.getElementById('collapsible').classList.contains('show')) {
        document.getElementById('collapsible').classList.remove('show')
      }
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
