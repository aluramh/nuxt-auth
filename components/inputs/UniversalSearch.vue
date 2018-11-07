<template>
  <form class="registria__search" @submit.prevent="handleSearch">
    <input 
      v-model="searchTerm"
      :placeholder="placeholder"
      v-on="inputListeners"
    >
    <i class="material-icons" @click="handleSearch">search</i>
  </form>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Search"
    }
  },
  data() {
    return {
      searchTerm: null
    };
  },
  computed: {
    inputListeners() {
      return { ...this.$listeners };
    }
  },
  methods: {
    handleSearch(e) {
      const { searchTerm } = this;

      if (searchTerm != null && searchTerm !== "") {
        console.log({ searchTerm });
        this.$emit("onSearch", searchTerm);
      }
    }
  }
};
</script>

<style lang="scss">
.registria__search {
  position: relative;

  input {
    height: 31px;
    width: 238px;
    background-color: rgba(255, 255, 255, 0.29);
    color: white;
    border: none;
    padding: 9px 11px 5px 38px;
    border-radius: 2px;

    &::placeholder {
      color: whitesmoke;
    }
  }

  i {
    top: 4px;
    left: 8px;
    position: absolute;
    cursor: pointer;
    user-select: none;
  }
}
</style>
