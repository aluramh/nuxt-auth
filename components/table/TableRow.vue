<template>
  <tr class="table__row">
    <slot />
  </tr>
</template>

<script>
export default {};
</script>

<style lang="scss">
.table__row {
  transition: 250ms background-color;
  &:hover {
    font-weight: bold;
    background-color: rgb(243, 253, 239) !important;
  }
}
</style>
