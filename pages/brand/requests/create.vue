<template>
  <div>
    <Management>
      <template slot="content">
        <div>
          <div class="mb-4">Brand management > Create a brand</div>

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

          <Container class="w-100">
            <div slot="body" class="p-4">
              <div class="d-flex flex-row justify-content-around">
                <RadioButton>Participating brand</RadioButton>
                <RadioButton>Other brand</RadioButton>
              </div>   
              
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
import Container from "@/components/Container";
import RadioButton from "@/components/inputs/RadioButton";

export default {
  components: {
    Management,
    IconButton,
    Checkbox,
    Container,
    RadioButton
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
