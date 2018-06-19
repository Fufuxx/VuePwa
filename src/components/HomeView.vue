<template>
  <div class="ui main text container">
    <span><sui-button primary>{{message}}</sui-button></span>
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

<style scoped>
    .main.container{ padding-top: 5em; }
</style>