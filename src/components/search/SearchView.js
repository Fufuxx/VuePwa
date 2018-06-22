export default {
  data () {
    return {
      message: 'Hello Search',
      tweets: []
    }
  },
  created: function() {
    let body = JSON.stringify({ query: 'World Cup' });
    this.$http.post('/tweets', body)
      .then(function (data) {
        console.log('Data from http', data.body)
        if(!data.body.error){
          this.tweets = data.body.tweets.statuses;
        }
      })
  }
}
