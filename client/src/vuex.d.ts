import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { StoreOptions } from "vuex";
import { ICustomer } from "./types/customerTypes";
declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    authCustomer: ICustomer;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
