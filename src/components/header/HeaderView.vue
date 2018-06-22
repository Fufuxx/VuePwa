<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link @click.native="sethome()"  to="/" class="navbar-brand" tag="a">VueJs App</router-link>
    <button id="hamburger" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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

<script src="./HeaderVIew.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./HeaderView.css" scoped></style>
