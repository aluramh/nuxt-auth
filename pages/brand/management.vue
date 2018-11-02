<template>
  <div>
    <Sidebar>
      <template slot="sidebar">
        <SidebarItem>Brand Management</SidebarItem>
        <SidebarItem>Brand Requests</SidebarItem>
      </template>

      <template slot="content">
        <h1>Brand management</h1>
      </template>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";

export default {
  components: {
    Sidebar,
    SidebarItem
  }
};
</script>

<style>
</style>
