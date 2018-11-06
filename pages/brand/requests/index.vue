<template>
  <div>
    <Management title="Brand requests">
      <template slot="content">
        <BrandToolbar />
        This is the content
      </template>
    </Management>
  </div>
</template>

<script>
import Management from "@/components/shared/ManagementLayout";
import SidebarItem from "@/components/SidebarItem";
import BrandToolbar from "@/components/BrandToolbar";

export default {
  components: {
    Management,
    SidebarItem,
    BrandToolbar
  }
};
</script>

<style>
</style>
