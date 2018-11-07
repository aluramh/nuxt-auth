<template>
  <div class="brand__toolbar mb-3">
    <div class="d-flex align-self-center">
      <IconButton size="35px" class="mr-1">
        <i class="material-icons">sync</i>
      </IconButton>

      <span :style="{ opacity: 0.43 }" class="align-self-center">
        Last Updated October 18, 2017
      </span>
    </div>
    <nuxt-link to="/brand/management/create">
      <Button>Create new brand</Button>
    </nuxt-link>
  </div>
</template>

<script>
import IconButton from "@/components/inputs/IconButton";
import Button from "@/components/inputs/Button";

export default {
  components: {
    IconButton,
    Button
  }
};
</script>

<style>
</style>
