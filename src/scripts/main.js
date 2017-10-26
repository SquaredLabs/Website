import "../styles/_reset.scss";

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
const app = new Vue({
  router,
  template: "<App/>",
  components: { App }
}).$mount('#app');