<template>
  <div>
    <b-navbar toggleable="md" class="App__header">
      <b-navbar-toggle target="nav_collapse" />

      <b-navbar-brand class="App__brand" to="/">Registria</b-navbar-brand>

      <b-collapse id="nav_collapse" is-nav>
        <!-- <b-navbar-nav v-if="$auth.loggedIn" class="App__navbar">
          <b-nav-item to="/contacts">Contacts</b-nav-item>
          <b-nav-item href="#">Link #2</b-nav-item>
          <b-nav-item href="#">Link #3</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-if="$auth.loggedIn">
            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content">
                User
              </template>
              <b-dropdown-item to="/profile">Profile</b-dropdown-item>
              <b-dropdown-item @click="handleLogout">Sign out</b-dropdown-item>
            </b-nav-item-dropdown>
          </template>

          <template v-else>
            <b-nav-item to="/login">Login</b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    async handleLogout() {
      this.$auth.logout();
      console.log("logout");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";

$gradientStart: rgb(1, 10, 130);
$gradientEnd: rgb(85, 212, 235);

.App__header {
  background-image: linear-gradient(to right, $gradientStart, $gradientEnd);
  color: whitesmoke;
  // height: 45px;

  & > * {
    color: whitesmoke !important;
  }

  .nav-item,
  .nav-item > * {
    color: whitesmoke !important;
  }
}

.App__brand {
  font-weight: 600;
}

.App__navbar {
  & > * {
    transition: color 250ms;
  }
}
</style>
