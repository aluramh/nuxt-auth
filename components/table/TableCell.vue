<template>
  <component :is="cellTag" class="table__cell">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    inHeader: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cellTag() {
      return this.inHeader ? "th" : "td";
    }
  }
};
</script>

<style>
.table__cell {
  font-family: "Hind", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: rgb(63, 66, 70);
  padding: 9px 12px 6px 12px;
}
</style>
