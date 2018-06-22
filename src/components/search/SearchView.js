export default {
  data () {
    return {
      message: 'Twitter Search',
      tweetsearch: '',
      tweets: []
    }
  },
  created: function() {
    let query = 'World Cup';
    this.$http.get('/tweets?search='+query)
      .then(function (data) {
        console.log('Data from http', data.body)
        if(!data.body.error){
          this.tweets = data.body.tweets.statuses;
        }
      })
  },
  searchTweet: function () {
    let query = this.tweetsearch;
    this.$http.get('/tweets?search='+query)
      .then(function (data) {
        console.log('Data from http', data.body)
        if(!data.body.error){
          this.tweets = data.body.tweets.statuses;
        }
      })
  }
}
