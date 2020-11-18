<template>
  <div>
    <h1>Browse</h1>
    <div v-for="profile in profiles" :key=profile.id>{{profile}}</div>
  </div>
</template>

<script>
export default {
  name: "BrowsePage",
  mounted() {
    this.$store.dispatch("FETCH_PROFILES");
  },
  computed: {
    profiles: function () {
      return this.$store.state.profiles;
    },
  },
};
</script>

<style>
</style>