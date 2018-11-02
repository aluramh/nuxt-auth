<template>
  <div>
    <b-row no-gutters>
      <b-col cols="3" class="App__sidebar">
        <slot name="sidebar" />
      </b-col>
      <b-col>
        <slot name="content" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.App__sidebar {
  background-color: rgb(226, 228, 233);
  min-height: 500px;
}
</style>
