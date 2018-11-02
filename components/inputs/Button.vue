<template>
  <button class="registria__button">
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style>
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
}
</style>
