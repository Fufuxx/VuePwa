export default {
  data () {
    return {
      header_text: 'VueJs app',
      menu_items: [
        { name: 'Home', url: '/', isActive: true },
        { name: 'Todo', url: '/todo', isActive: false },
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