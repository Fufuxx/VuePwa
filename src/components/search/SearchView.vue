<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">{{ message }}</h1>
    <p>Twitter Search</p>
    <p v-if="tweets.length === 0">No tweet found...</p>
    <ul v-if="tweets.length > 0" class="list-unstyled">
      <div class="media" v-for="tweet in tweets" :key="tweet.id">
        <img class="mr-3" src="/assets/logo.png" alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0" v-html="tweet.source"></h5>
          {{ tweet.text }}
        </div>
      </div>
    </ul>
  </div>
</template>

<script src="./SearchView.js"></script>
<style src="./SearchView.css" scoped></style>