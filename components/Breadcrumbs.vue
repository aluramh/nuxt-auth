<template>
  <b-breadcrumb class="registria__breadcrumbs" :items="items"/>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.registria__breadcrumbs {
  padding: 0;
  margin-bottom: 1rem;
  background-color: transparent;
  font-size: 12px;
  font-family: Helvetica, sans-serif;
  color: rgb(86, 77, 77);

  li {
    display: flex !important;
  }

  .breadcrumb-item.active {
    color: rgb(71, 179, 218);
    // text-decoration: underline;
  }

  .breadcrumb-item + .breadcrumb-item {
    padding-left: 2px;

    &::before {
      font-family: "Material Icons";
      content: "chevron_right";
      font-size: 18px;
      height: 20px;
      width: 20px;
      text-decoration: none !important;
      position: relative;
      top: -5px;
    }
  }
}
</style>
