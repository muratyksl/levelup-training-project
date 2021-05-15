<template>
  <div>This will be starting point of our program</div>
</template>

<script>
import { getAllCustomers } from "../api/customer";

export default {
  name: "Layout",
  methods: {
    getAll() {
      getAllCustomers()
        .then((res) => {
          const customers = res.data;
          console.log("All Customers: ", { customers: customers });
        })
        .catch((err) => {
          console.log("get all customers unsuccesfull");
        });
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style scoped></style>
