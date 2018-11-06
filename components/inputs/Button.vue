<template>
  <button 
    :class="styleClass"
    class="registria__button"
    v-on="inputListeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: undefined
    }
  },
  computed: {
    styleClass() {
      switch (this.variant) {
        case "outline":
          return "registria__button--outline";
        default:
          return "";
      }
    },
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
$mainColor: rgb(70, 176, 216);
$start: rgb(70, 173, 236);
$end: rgb(77, 211, 201);

.registria__button {
  min-width: 140px;
  height: 35px;
  background-color: $mainColor;
  // background-image: linear-gradient(to right, $start, $end);

  color: white;
  font-size: 12px;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: 200ms background-color;
  &:hover {
    // background-color: $buttonColorHover;
  }

  &--outline {
    border: 1px solid white;
    background-color: transparent;
    color: white;
  }
}
</style>
