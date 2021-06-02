import { resolveTransitionHooks, State } from "vue";
import { createStore } from "vuex";

import { router } from "../router";
import {
  ICustomer,
  ICustomerd,
  ICustomerPayload,
  ICustomerUpdate,
  ILoginInfo,
} from "../types/customerTypes";
import { doCustomerLogin, registerCustomer } from "../api/authCustomer";
import {
  getAuthCustomer,
  removeAuthCustomer,
  removeAuthToken,
  setAuthCustomer,
  setAuthToken,
} from "../utils/persistentStorage";
import { updateCustomer } from "../api/customer";

const AuthCustomerInitial = () => ({
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  height: 0,
  weight: 0,
  trainerId: null,
  createdAt: new Date(),
  updatedAt: new Date(),
});
// Create a new store instance.
export const store = createStore({
  state(): State {
    return {
      authCustomer: getAuthCustomer() || AuthCustomerInitial(),
    };
  },
  mutations: {
    LOGIN_CUSTOMER: (state: State, payload: ICustomer) => {
      state.authCustomer = payload;
      setAuthToken("customer");
      setAuthCustomer(payload);
    },
    LOGOUT_CUSTOMER: (state: State) => {
      state.authCustomer = AuthCustomerInitial();
      removeAuthToken();
      removeAuthCustomer();
    },
    UPDATE_CUSTOMER: (state: State, payload: ICustomer) => {
      state.authCustomer = { ...state.authCustomer, ...payload };
      setAuthCustomer(payload);
    },
  },
  actions: {
    async registerCustomer({ commit }, payload: ICustomerPayload) {
      return registerCustomer(payload).then((res) => {
        commit("LOGIN_CUSTOMER", res.data);
        router.push("/profile");
      });
    },
    async loginCustomer({ commit }, payload: ILoginInfo) {
      return doCustomerLogin(payload).then((res) => {
        commit("LOGIN_CUSTOMER", res.data);
        router.push("/profile");
      });
    },
    async logOutCustomer({ commit }) {
      commit("LOGOUT_CUSTOMER");
      await router.push("/");
    },
    async updateCustomer({ commit }, data) {
      return updateCustomer(data.id, data.payload).then((res) => {
        commit("UPDATE_CUSTOMER", res.data);
      });
    },
  },
});
