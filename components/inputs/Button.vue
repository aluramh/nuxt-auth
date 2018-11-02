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
.registria__button {
  min-width: 140px;
  height: 35px;
  background-color: rgb(70, 176, 216);
  color: white;
  font-size: 12px;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: 200ms background-color;
  &:hover {
    background-color: rgb(39, 144, 182);
  }
}
</style>
