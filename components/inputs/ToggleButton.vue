<template>
  <ToggleButton
    :height="25" 
    :width="52"
    :color="buttonColors"
    :switchColor="switchBackground"
    sync
    v-on="inputListeners"
  />
</template>

<script>
import ToggleButton from "@/node_modules/vue-js-toggle-button/src/Button";

export default {
  components: {
    ToggleButton
  },
  data() {
    const button = "#e2e4e9";

    return {
      switchBackground: {
        unchecked: "rgb( 70, 176, 216)",
        checked: "rgb(129, 131, 134)"
      },
      buttonColors: {
        checked: button,
        unchecked: button
      }
    };
  },
  computed: {
    inputListeners() {
      return { ...this.$listeners };
    }
  }
};
</script>

<style>
</style>
