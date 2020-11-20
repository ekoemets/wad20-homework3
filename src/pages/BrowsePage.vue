<template>
  <div class = "container">
    <div class = "accontainer" >
    <div v-for="profile in profiles" :key=profile.id>
      <Profile :profile="profile"></Profile>
    </div>
    </div>
  </div>
  
</template>

<script>
import Profile from "../components/ProfileCard";
export default {
  name: "BrowsePage",
  components: {
    Profile
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

<style>
.container {
  background: #ffffff;
  width: 50%;
  padding-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
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


</style>