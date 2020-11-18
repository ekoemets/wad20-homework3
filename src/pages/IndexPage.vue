<template>
  <div>
    <h1>Index</h1>
    <div v-for="post in posts" :key=post.id>{{post}}</div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    this.$store.dispatch("FETCH_POSTS");
  },
  computed: {
    posts: function() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style></style>
