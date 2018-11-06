<template>
  <button class="registria__button" v-on="inputListeners">
    <slot />
  </button>
</template>

<script>
export default {
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
$start: rgb(70, 173, 236);
$end: rgb(77, 211, 201);

.registria__button {
  min-width: 140px;
  height: 35px;
  background-image: linear-gradient(to right, $start, $end);

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
}
</style>
