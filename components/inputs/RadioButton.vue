<template>
  <b-form-radio 
    class="registria__radio" 
    value="first"
  >
    <slot />
  </b-form-radio>
</template>

<script>
export default {};
</script>

<style lang="scss">
.registria__radio {
  .custom-control-label::before {
    background-color: rgb(233, 237, 243) !important;
  }

  .custom-control-input:checked ~ .custom-control-label::after {
    background-image: url("../../assets/img/circle.svg");
  }
}
</style>
