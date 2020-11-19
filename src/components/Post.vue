<template>
  <div class="post">
    <div class="post-header">
      <img v-bind:src="post.author.avatar" alt="avatar" />
      <span>{{ post.author.firstname }} {{ post.author.lastname }}</span>
      <div class="spacer"></div>
      <span class="post-date">{{ post.createTime }}</span>
    </div>
    <div v-if="post.media" class="post-image">
      <img v-if="post.media.type == 'image'" :src="post.media.url" />
      <video v-else controls :src="post.media.url" />
    </div>
    <div class="post-title">
      <h2>{{ post.text }}</h2>
    </div>
    <div class="post-footer">
      <button
        class="like-button"
        v-bind:class="{ liked: isLiked }"
        @click="toggleLike()"
      >
        {{ post.likes }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
  data: function () {
    return {
      isLiked: false,
    };
  },
  methods: {
    toggleLike: function () {
      this.isLiked = !this.isLiked;
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 5px;
  padding: 10px 0;
  margin-bottom: 25px;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 20px;
}
.post-header img {
  height: 40px;
  width: 40px;
  object-position: top;
  object-fit: cover;
  border-radius: 100%;
  margin-right: 10px;
}

.post-header .post-date {
  color: rgb(165, 165, 165);
  font-size: 13px;
}
.spacer {
  flex: 1;
  display: inline;
}

.post .post-image img,
video {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}

.post-title {
  padding: 0 20px;
}

.post-title h2 {
  font-size: 21px;
}

.post-footer {
  padding: 0 20px;
}
.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}

.like-button.liked {
  background-color: #01579b;
}
</style>
