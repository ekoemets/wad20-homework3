<template>
  <div class="container">
    <div class="accontainer">
      <div v-for="profile in profiles" :key="profile.id">
        <Profile :profile="profile"></Profile>
      </div>
    </div>
    <div class="filler"></div>
  </div>
</template>

<script>
import Profile from "../components/Profile";
export default {
  name: "BrowsePage",
  components: {
    Profile,
  },
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

<style scoped>
.container {
  background: #ffffff;
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
.accontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media only screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding: 0;
  }
}
.filler {
  flex: 1;
}
</style>
