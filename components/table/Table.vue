<template>
  <table class="table__main">
    <slot />
  </table>
</template>

<script>
export default {};
</script>

<style lang="scss">
.table__main {
  font-family: "Hind", sans-serif;
  font-size: 12px;
  font-weight: 500;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
}
</style>
