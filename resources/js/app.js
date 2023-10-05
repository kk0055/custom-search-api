require("./bootstrap");

import { createApp } from "vue";
import ExampleComponent from "./components/ExampleComponent.vue";
import Main from "./Main.vue";
import Router from "./router";
createApp(Main).use(Router).mount("#app");
