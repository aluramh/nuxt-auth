<template>
  <div>
    <Management>
      <template slot="content">
        <div>
          <div class="brand__toolbar">
            <div class="d-flex align-self-center">
              <IconButton size="35px" class="mr-1">
                <ion-icon 
                  name="md-sync" 
                  :style="{ fontSize: '20px' }">
                </ion-icon>
              </IconButton>

              <span :style="{ opacity: 0.43 }" class="align-self-center">
                Last Updated October 18, 2017
              </span>
            </div>
            <Button>Create new brand</Button>
          </div>
        </div>
      </template>
    </Management>
  </div>
</template>

<script>
import Management from "@/components/shared/ManagementLayout";
import SidebarItem from "@/components/SidebarItem";
import Button from "@/components/inputs/Button";
import IconButton from "@/components/inputs/IconButton";

export default {
  components: {
    Management,
    SidebarItem,
    Button,
    IconButton
  }
};
</script>

<style>
.brand__toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-family: Helvetica, sans-serif;
  font-style: italic;
  font-size: 12px;
  color: rgb(86, 77, 77);
}
</style>
