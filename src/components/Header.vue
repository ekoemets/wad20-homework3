<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="postIt" />
      </div>
      <div class="search-container">
        <input type="text" name="search" /><button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img
          v-if="user"
          class="avatar"
          v-bind:src="user.avatar"
          @click="toggleMenu()"
        />
        <img v-else src="@/assets/avatar.png" @click="toggleMenu()" />
        <div v-if="showMenu" v-on-clickaway="away" class="dropdown-container">
          <template v-if="user">
            <span id="user-name">{{ user.firstname }} {{ user.lastname }}</span>
            <span id="user-email">{{ user.email }}</span>
            <span class="separator"></span>
          </template>
          <span>
            <router-link to="browse">Browse</router-link>
          </span>
          <span class="separator"></span>
          <span>
            <router-link to="login">Log Out</router-link>
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "Header",
  mixins: [clickaway],
  mounted() {
    this.$store.dispatch("FETCH_USER");
  },
  data: () => ({
    showMenu: false,
  }),
  computed: {
    user: function () {
      return this.$store.state.user;
    },
  },
  methods: {
    toggleMenu: function () {
      this.showMenu = !this.showMenu;
    },
    away: function() {
        this.showMenu = false;
        console.log("clicked away")
    }
  },
};
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
  display: flex;
  background-color: #f5f5f5;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}

.dropdown-container {
  position: absolute;
  background-color: #ffffff;
  min-width: 150px;
  right: 0;
  top: 50px;
  text-align: left;
  padding: 10px;
  height: auto;
}

.dropdown-container span {
  display: block;
}

.dropdown-container span.separator {
  border-bottom: 1px solid #d7d7d7;
  margin: 10px -10px;
}
</style>
