<template>
  <div>
    <Management>
      <template slot="content">
        <Breadcrumbs 
          :items="[
            { text: 'Brand', to: '/brand' },
            { text: 'Brand requests', active: true },
          ]"
        />
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
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  components: {
    Management,
    SidebarItem,
    BrandToolbar,
    Breadcrumbs
  }
};
</script>

<style>
</style>
