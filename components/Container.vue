<template>
  <div class="rcontainer">
    <div class="rcontainer__header"><slot name="head" /></div>
    <div class="rcontainer__body"><slot name="body" /></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.rcontainer {
}

.rcontainer__header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 35px;
  background-color: rgb(226, 228, 233);
}

.rcontainer__body {
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
