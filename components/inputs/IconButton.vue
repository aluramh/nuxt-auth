<template>
  <button 
    :style="{ height: size, width: size }" 
    class="registria__icon-button"
    v-on="inputListeners"
  >
    <span class="d-flex justify-content-center">
      <slot class="align-self-center" />
    </span>
  </button>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    size: {
      type: String,
      default: "35px"
    }
  },
  computed: {
    inputListeners() {
      return {
        ...this.$listeners,
        input(event) {
          this.$emit("input", event.target.value);
        }
      };
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
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
