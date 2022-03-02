import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PopupLayer from "vue-popup-layer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FullpageModal from "vue-fullpage-modal";

Vue.use(FullpageModal);

Vue.use(PopupLayer);

Vue.config.productionTip = false;
library.add(fas, fab);
Vue.component("fa", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
