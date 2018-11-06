<template>
  <div>
    <Management>
      <template slot="content">
        <div>
          <b-form-radio value="first">Toggle this custom radio</b-form-radio>

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

          <Container class="w-100">
            <div slot="body" class="p-4">
              <div class="my-3" :style="{ borderTop: '1px solid #e9e9eb' }"/>
            </div>
          </Container>
        </div>
      </template>
    </Management>
  </div>
</template>

<script>
import Management from "@/components/shared/ManagementLayout";
import IconButton from "@/components/inputs/IconButton";
import Checkbox from "@/components/inputs/Checkbox";
import BrandToolbar from "@/components/BrandToolbar";
import Container from "@/components/Container";

export default {
  components: {
    Management,
    IconButton,
    Checkbox,
    BrandToolbar,
    Container
  },
  data() {
    return {
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
