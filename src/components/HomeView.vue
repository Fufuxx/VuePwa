<template>
  <div class="hero">
    <div>
      <h1 class="display-3">{{ message }}</h1>
      <p class="lead">This is the homepage of your vue app</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello Home'
    }
  }
}
</script>

<style>
  .hero {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 1.5rem;
  }
</style>