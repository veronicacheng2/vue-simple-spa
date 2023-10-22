import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";

const router = createRouter({
  /* how history is going to be treated */
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: PageViewer,
    },
    {
      path: "/create",
      component: CreatePage,
    },
  ],
});

export default router;
