export default {
  data () {
    return {
      message: 'Hello Search',
      tweets: []
    }
  },
  created: function() {
    this.$http.get('/tweets')
      .then(function (data) {
        console.log('Data from http', data.body)
        if(!data.body.error){
          this.tweets = data.body.tweets.statuses;
        }
      })
  }
}
