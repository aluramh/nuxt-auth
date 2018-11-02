<template>
  <div class="sidebar__item d-flex justify-content-between">
    <span><slot /></span>
    <ion-icon name="ios-arrow-forward"></ion-icon>
  </div>
</template>

<script>
export default {
  components: {
    // ArrowForward
  }
};
</script>

<style lang="scss">
.sidebar__item {
  font-family: "Hind", sans-serif;
  font-size: 16px;
  color: rgb(86, 77, 77);
  padding: 15px 24px 15px 34px;
  transition: 250ms background-color;

  &:hover {
    background-color: rgb(197, 202, 215);
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
