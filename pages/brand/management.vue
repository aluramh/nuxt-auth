<template>
  <div>
    <Management>
      <template slot="content">
        <div>
          <div class="brand__toolbar mb-3">
            <div class="d-flex align-self-center">
              <IconButton size="35px" class="mr-1">
                <i class="material-icons">sync</i>
              </IconButton>

              <span :style="{ opacity: 0.43 }" class="align-self-center">
                Last Updated October 18, 2017
              </span>
            </div>
            <Button>Create new brand</Button>
          </div>

          <div>
            <Table class="w-100">
              <TableHead>
                <TableRow>
                  <Cell inHeader class="table__checkboxes">{{ "" }}</Cell>
                  <Cell inHeader>Name</Cell>
                  <Cell inHeader>Requested by</Cell>
                  <Cell inHeader>Date</Cell>
                  <Cell inHeader>Status</Cell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow v-for="(row, index) in data" :key="index">
                  <Cell class="table__checkboxes">
                    <Checkbox :id="`${index}-checkbox`" @onChange="handleCheckboxChange" />
                  </Cell>
                  <Cell>{{ row.name }}</Cell>
                  <Cell>{{ row.requested }}</Cell>
                  <Cell>{{ row.date }}</Cell>
                  <Cell>{{ row.status }}</Cell>
                </TableRow>
              </TableBody>
            </Table>
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
import Checkbox from "@/components/inputs/Checkbox";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell as Cell
} from "@/components/table";

export default {
  components: {
    Management,
    SidebarItem,
    Button,
    IconButton,
    Checkbox,
    Table,
    TableHead,
    TableBody,
    TableRow,
    Cell
  },
  data() {
    return {
      data: [
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        },
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        },
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        },
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        },
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        },
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        },
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        },
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        },
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        },
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        },
        {
          name: "Samsung",
          requested: "Alex",
          date: "9 Nov 2018",
          status: "Active"
        }
      ]
    };
  },
  methods: {
    handleCheckboxChange(value, id) {
      console.log(value, id);
    }
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

.table__checkboxes {
  width: 30px !important;
}
</style>
