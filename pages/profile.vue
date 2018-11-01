<template>
  <div>
    <h1>Profile</h1>
    <div v-if="user" class="container">

      <h2>User saved in store</h2>
      <table>
        <tbody>
          <tr v-for="field in Object.keys(user)" :key="field">
            <th>{{ field }}</th>
            <td>
              <input :value="user[field]" disabled>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  data() {
    return {
      user: this.$auth.user
    };
  },
  beforeCreate() {
    console.log(this.$auth.user);
  }
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
