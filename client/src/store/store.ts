import { State } from "vue";
import { createStore } from "vuex";

import { router } from "../router";
import {
  ICustomer,
  ICustomerd,
  ICustomerPayload,
  ILoginInfo,
} from "../types/customerTypes";
import { doCustomerLogin, registerCustomer } from "../api/authCustomer";
import { setAuthCustomer, setAuthToken } from "../utils/persistentStorage";

// Create a new store instance.
export const store = createStore({
  state(): State {
    return {
      authCustomer: {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        height: 0,
        weight: 0,
        trainerId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };
  },
  mutations: {
    LOGIN_CUSTOMER: (state: State, payload: ICustomer) => {
      state.authCustomer = payload;
      setAuthToken("customer");
      setAuthCustomer(payload);
    },
  },
  actions: {
    async loginCustomer({ commit }, payload: ILoginInfo) {
      return doCustomerLogin(payload).then((res) => {
        commit("LOGIN_CUSTOMER", res.data);
        router.push("/");
      });
    },
    async registerCustomer({ commit }, payload: ICustomerPayload) {
      return registerCustomer(payload).then((res) => {
        commit("LOGIN_CUSTOMER", res.data);
        router.push("/");
      });
    },
  },
});
