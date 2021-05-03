import { State } from "vue";
import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      count: 0,
      number: 5,
    };
  },
  mutations: {
    increment(state: State) {
      state.count++;
    },
  },
  actions: {},
});
