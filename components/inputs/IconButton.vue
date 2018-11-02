<template>
  <button class="registria__icon-button" :style="{ height: size, width: size }">
    <span class="d-flex justify-content-center">
      <slot class="align-self-center" />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "35px"
    }
  }
};
</script>

<style lang="scss">
.registria__icon-button {
  padding: 0 !important;
  border: none;
  border-radius: 2px;
  background-color: transparent;
  transition: 200ms background-color;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
}
</style>
