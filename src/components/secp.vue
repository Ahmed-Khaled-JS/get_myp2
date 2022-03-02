<template>
  <div class="po">
    <section class="Projects" id="Projects">
      <h2 class="title">Projects</h2>
      <div class="content">
        <card
          v-for="project in wows[0].projects"
          :key="project"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>
<script>
import card from "./card.vue";
export default {
  components: { card },
  name: "secp",
  props: {
    wows: Object,
  },
};
</script>
<style>
.Projects {
  background-color: #000016;
}
.Projects .content {
  margin-top: 30px;
}
</style>
