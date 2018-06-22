<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">{{ message }}</h1>
    <div class="form-group row">
      <input type="text" class="form-control col-9" id="searchInput" placeholder="Search Tweets..." 
          v-model="tweetsearch" />
      <div class="col-3 pl-2">
        <button type="button" class="btn btn-primary" v-on:click="searchTweet()">Submit</button>
      </div>
    </div>
    <p v-if="tweets.length === 0">No tweet found...</p>
    <ul v-if="tweets.length > 0" class="list-unstyled">
      <div class="media tweet-cmp mb-2" v-for="tweet in tweets" :key="tweet.id">
        <img class="mr-3 media-img" v-bind:src="tweet.user.profile_image_url_https" alt="Profile Img">
        <div class="media-body">
          <!-- <h5 v-if="tweet.entities.urls.length == 0" class="mt-0" v-html="tweet.source"></h5> -->
          <p class="font-weight-light small-text mt-0 mb-1" v-if="tweet.entities.urls.length === 0">{{ tweet.created_at | formatDate }}</p>
          <p v-if="tweet.entities.urls.length > 0" class="font-weight-light small-text mt-0 mb-1"><a v-bind:href="tweet.entities.urls[0].url" target="_blank">{{ tweet.created_at | formatDate }}</a></p>
          {{ tweet.text }}
        </div>
      </div>
    </ul>
  </div>
</template>

<script src="./SearchView.js"></script>
<style src="./SearchView.css" scoped></style>