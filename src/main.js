import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $bus from "./utils/Events.js";
import $pages from "./data.js";
import router from "./routes";

const app = createApp(App);

app.use(router);

// global Properties allow us to add properties to every components within our application (can be accessed anywhere)
app.config.globalProperties.$bus = $bus;
app.config.globalProperties.$pages = $pages;
app.mount("#app");

/*
automatically optimized when going through the build tools
*/
