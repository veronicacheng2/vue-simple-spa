import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $bus from "./utils/Events.js";

const app = createApp(App);

// global Properties allow us to add properties to every components within our application (can be accessed anywhere)
app.config.globalProperties.$bus = $bus;
app.mount("#app");

/*
automatically optimized when going through the build tools
*/
