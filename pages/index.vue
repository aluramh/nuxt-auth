<template>
  <div>
    <div class="container-fluid">Main page</div>
  </div>
</template>

<script>
// This is the index/landing page.
export default {
  fetch({ app, redirect }) {
    if (app.$auth.loggedIn) {
      redirect(301, "/brand/management");
    } else {
      redirect(301, "/login");
    }
  }
};
</script>
