<template>
  <div>
    <Header />
    <div class="App__background">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
body {
  font-family: "Hind", sans-serif;
  background-color: rgb(247, 248, 250);
}

.App__background {
  background-color: rgb (247, 248, 250);
}
</style>
