<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">{{ message }}</h1>
    <p>Twitter Search</p>
    <p v-if="tweets.length === 0">No tweet found...</p>
    <ul v-if="tweets.length > 0" class="list-unstyled">
      <div class="media tweet-cmp mb-2" v-for="tweet in tweets" :key="tweet.id">
        <img class="mr-3 media-img" v-bind:src="tweet.user.profile_image_url_https" alt="Profile Img">
        <div class="media-body">
          <h5 v-if="tweet.entities.urls.length == 0" class="mt-0" v-html="tweet.source"></h5>
          <h5 v-if="tweet.entities.urls.length > 0" class="mt-0"><a v-bind:href="tweet.entities.urls[0].url" target="_blank">Direct Link</a></h5>
          {{ tweet.text }}
        </div>
      </div>
    </ul>
  </div>
</template>

<script src="./SearchView.js"></script>
<style src="./SearchView.css" scoped></style>