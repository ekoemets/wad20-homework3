<template>
  <div class="container">
    <div v-for="post in posts" :key="post.id">
      <Post :post="post"></Post>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";

export default {
  name: "IndexPage",
  components: {
    Post
  },
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

<style scoped>
.container {
  background: #ffffff;
  width: 50%;
  padding: 20px 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding: 0;
  }
}
</style>
