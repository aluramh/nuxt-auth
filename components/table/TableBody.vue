<template>
  <tbody class="table__body">
    <slot />
  </tbody>
</template>

<script>
export default {};
</script>

<style lang="scss">
.table__body {
  tr:nth-child(odd) {
    background: rgb(245, 245, 247);
  }
}
</style>
