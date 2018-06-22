import moment from 'moment'

export default {
  data () {
    return {
      message: 'Hello Search',
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
  }
}
