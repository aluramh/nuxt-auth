<template>
  <div>
    <Sidebar>
      <template slot="sidebar">
        <nuxt-link to="/brand/management">
          <SidebarItem :active="$route.path.includes('/brand/management')">
            Brand management
          </SidebarItem>
        </nuxt-link>

        <nuxt-link to="/brand/requests">
          <SidebarItem :active="$route.path.includes('/brand/requests')">
            Brand requests
          </SidebarItem>
        </nuxt-link>
        
        <!-- Any additional content could go in this slot. -->
        <slot name="sidebar-items" />
      </template>

      <template slot="content">
        <div :class="contentClass">
          <h1 v-if="title">{{ title }}</h1>
          <slot name="content" />
        </div>
      </template>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";

export default {
  name: "ManagementLayout",
  components: {
    Sidebar,
    SidebarItem
  },
  props: {
    title: { type: String, default: undefined },
    contentClass: { type: String, default: "p-3" }
  }
};
</script>

<style>
</style>
