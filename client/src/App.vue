<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAuthCustomer, getAuthToken } from "./utils/persistentStorage";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "App",
  created() {
    this.refreshCustomer();
  },
  methods: {
    ...mapMutations({
      doLogin: "LOGIN_CUSTOMER", // map `this.add()` to `this.$store.commit('increment')`
    }),
    refreshCustomer() {
      const authCookie = getAuthToken();
      const customer = getAuthCustomer();
      if (authCookie && authCookie === "customer" && customer !== null) {
        this.doLogin(customer);
      }
    },
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", Arial, sans-serif;
}
</style>
