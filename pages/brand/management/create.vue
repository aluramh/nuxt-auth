<template>
  <div>
    <Management>
      <template slot="content">
        <Breadcrumbs 
          :items="[
            { text: 'Brand', to: '/brand' },
            { text: 'Brand management', to: '/brand/management' },
            { text: 'Create new brand', active: true }
          ]"
        />
        <div>
          <h4 class="mb-0">{{ sample['Name'] }}</h4>
          <div class="mb-3">Other brand</div>
          
          <Container class="w-100 mb-3">
            <div slot="body" class="p-4">
              <table>
                <tr v-for="[key, value] in Object.entries(sample)" :key="key">
                  <th><span class="pr-3">{{ key }}</span></th>
                  <td>{{ value }}</td>
                </tr>
              </table>
            </div>
          </Container>

          <Container class="w-100 mb-3">
            <div slot="head" class="d-flex h-100 pl-3">
              <h5 class="align-self-center m-0">Permissions</h5>
            </div>
            <div slot="body" class="p-4">
              <b-form-radio-group v-model="brandType" class="d-flex justify-content-around">
                <b-form-radio value="part">Participating brand</b-form-radio>
                <b-form-radio value="other">Other brand</b-form-radio>
              </b-form-radio-group>
              
              <div :style="{ borderTop: '1px solid #e9e9eb' }" class="my-3" />

              <div class="row no-gutters px-lg-5">
                <div class="col-md-5 d-flex flex-column">
                  <div class="d-flex flex-row justify-content-between mb-2">
                    <span class="mr-4">Allow images</span>
                    <ToggleButton />
                  </div>
                  <div class="d-flex flex-row justify-content-between mb-2">
                    <span class="mr-4">Allow videos</span>
                    <ToggleButton />
                  </div>
                  <div class="d-flex flex-row justify-content-between mb-2">
                    <span class="mr-4">Allow tips</span>
                    <ToggleButton />
                  </div>
                </div>
                <div class="col-md-5 offset-md-2 d-flex flex-column">
                  <div class="d-flex flex-row justify-content-between mb-2">
                    <span class="mr-4">Allow contact</span>
                    <ToggleButton />
                  </div>
                  <div class="d-flex flex-row justify-content-between mb-2">
                    <span class="mr-4">Allow warranty</span>
                    <ToggleButton />
                  </div>
                  <div class="d-flex flex-row justify-content-between mb-2">
                    <span class="mr-4">Allow parts and accesories</span>
                    <ToggleButton />
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <div class="d-flex">
            <Button class="ml-auto">Create</Button>
          </div>
        </div>
      </template>
    </Management>
  </div>
</template>

<script>
import Management from "@/components/shared/ManagementLayout";
import Container from "@/components/Container";
import IconButton from "@/components/inputs/IconButton";
import Checkbox from "@/components/inputs/Checkbox";
import ToggleButton from "@/components/inputs/ToggleButton";
import Button from "@/components/inputs/Button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  components: {
    Management,
    IconButton,
    Checkbox,
    Container,
    ToggleButton,
    Button,
    Breadcrumbs
  },
  data() {
    return {
      brandType: null,
      toggleVal: false,
      sample: {
        Name: "Brand #1",
        Address: `120 Private Drive \nDenver, Colorado\n98765 USA`,
        Contact: "contact@brand.com",
        Email: "user@gmail.com",
        "Phone Number": "123 456 7899"
      }
    };
  }
};
</script>
