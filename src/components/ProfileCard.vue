<template>
  <div class="account">
    <img v-bind:src="profile.avatar" alt="avatar" />
    <h2>{{ profile.firstname }} {{ profile.lastname }}</h2>
    <button
      class="followbutton"
      v-bind:class="{ followed: isFollowed }"
      @click="toggleFollow()"
    >
      {{ isFollowed ? "Followed" : "Follow" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    profile: Object,
  },
  data: function () {
    return {
      isFollowed: false,
    };
  },
  methods: {
    toggleFollow: function () {
      this.isFollowed = !this.isFollowed;
    },
  },
};
</script>

<style>
.account {
  width: 250px;
  flex: 1 0 40%;
  margin: 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(168, 168, 168);
  border-radius: 10px;
}

.followbutton {
  margin-bottom: 2em;
  padding: 12px 70px;
  font-size: 1em;
  background-color: #82008f;
}

.followbutton.followed {
  background-color: white;
  border: 1px solid #82008f;
  color: #82008f;
}

.account > h2 {
  margin: 1em 1em;
}

.account > img {
  margin-top: 2em;
  height: 120px;
  width: 120px;
  object-fit: cover;
  object-position: 50% 10%;
  border-radius: 50%;
}
</style>
