import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import DKToast from "vue-dk-toast";

import App from "./App.vue";
import { router } from "./router";
import { store } from "./store/store";

library.add(faUserSecret);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);
app.use(DKToast);
app.mount("#app");
