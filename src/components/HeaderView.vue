<template>
  <div class="ui fixed inverted menu">
    <div class="ui container">
      <div class="header item">
        <img class="logo" src="/static/img/icons/twitter.png" />
        {{ header_text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header_text: 'Cyptocus'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo{ margin-right: 1em !important; }
  .ui.inverted{ background: rgb(33, 133, 208); }
  .ui.inverted.menu .header.item{ border: none !important; }
  .ui.menu .item:before{ background: none !important; }
  .header.item{ font-size:18px; }
</style>
