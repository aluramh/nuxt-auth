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
$borderColor: rgb(151, 151, 151);
$activeColor: rgb(70, 176, 216);

.registria__checkbox {
  margin: 0 !important;

  &.custom-control {
    .custom-control-label {
      &:before {
        border-radius: 2px;
        border: 1px solid $borderColor !important;
        background-color: transparent;
        border: 1px solid black;
      }
    }

    .custom-control-input:checked ~ .custom-control-label::before {
      background-color: $activeColor;
      border-color: $activeColor !important;
    }
  }
}
</style>
