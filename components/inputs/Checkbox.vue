<template>
  <b-form-checkbox 
    :id="id"
    v-model="status"
    :value="true"
    :unchecked-value="false"
    class="registria__checkbox"
  />
</template>

<script>
export default {
  props: {
    initialValue: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "15px"
    }
  },
  data() {
    return {
      status: this.initialValue
    };
  },
  watch: {
    status(status) {
      this.$emit("onChange", status, this.id);
    }
  }
};
</script>

<style lang="scss">
.registria__checkbox {
  margin: 0 !important;
}
</style>
