<template>
  <div>
    <Management title="Brand requests">
      <template slot="content">
        This is the content
      </template>
    </Management>
  </div>
</template>

<script>
import Management from "@/components/shared/ManagementLayout";
import SidebarItem from "@/components/SidebarItem";

export default {
  components: {
    Management,
    SidebarItem
  }
};
</script>

<style>
</style>
