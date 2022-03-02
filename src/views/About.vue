<template>
  <div class="about">
    <HelloWorld />
    <sec-main :wows="wows" />
    <secpro />
    <secp :wows="wows" />
    <secontact :wows="wows" />
    <footerr :wows="wows" />
  </div>
</template>
<script>
import HelloWorld from "@/components/headerme.vue";
import Footerr from "../components/footerr.vue";
import SecMain from "../components/secMain.vue";
import Secontact from "../components/secontact.vue";
import Secp from "../components/secp.vue";
import Secpro from "../components/secpro.vue";
import event0 from "@/services/event0.js";

export default {
  name: "about",
  components: {
    SecMain,
    Secpro,
    Secp,
    Secontact,
    Footerr,
    HelloWorld,
  },
  data() {
    return {
      wows: [],
    };
  },
  created() {
    event0
      .getWow(this.$route.params._id)
      .then((response) => {
        this.wows = response.data;
      })
      .catch((error) => {
        console.log("there error was " + error.response);
      });
  },
};
</script>
