<template>
  <div>
    <b-navbar toggleable="md" class="App__header">
      <b-navbar-toggle target="nav_collapse" />

      <b-navbar-brand class="App__brand" to="/">Registria</b-navbar-brand>

      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav v-if="$auth.loggedIn" class="App__navbar">
          <b-nav-item to="/brand/management">Brand</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-if="$auth.loggedIn">
            <UniversalSearch class="align-self-center mx-3"/>

            <div :style="styles.divider"/>
            
            <b-nav-item-dropdown right class="dropdown__toggle">
              <!-- Using button-content slot -->
              <div slot="button-content" class="d-flex flex-row mx-4">
                <span :style="styles.circle" />
                Admin
                <i class="material-icons">arrow_drop_down</i>
              </div>
              <!-- <b-dropdown-item to="/profile">Profile</b-dropdown-item> -->
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
import UniversalSearch from "@/components/inputs/UniversalSearch";

const styles = {
  circle: {
    borderRadius: "20px",
    height: "20px",
    width: "20px",
    backgroundColor: "white",
    opacity: 0.29,
    marginRight: "0.75rem"
  },
  divider: {
    borderLeft: "1px solid white"
  }
};

export default {
  components: {
    UniversalSearch
  },
  data() {
    return { styles };
  },
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
