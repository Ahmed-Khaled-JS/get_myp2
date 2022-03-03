<template>
  <div class="hela">
    <section class="cards contact" id="contact">
      <h2 class="title">Let's work together</h2>
      <div class="content">
        <div class="card">
          <div class="icon">
            <fa icon="fa-solid fa-phone" />
          </div>
          <div class="info">
            <h3>Phone</h3>
            <p>{{ wows[0].userInfo[0].phone }}</p>
          </div>
        </div>
        <div class="card">
          <div class="icon">
            <fa icon="fa-solid fa-envelope" />
          </div>
          <div class="info">
            <h3>Email</h3>
            <p>{{ wows[0].userInfo[0].email }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "secontact",
  props: {
    wows: Object,
  },
};
</script>
<style>
.contact .icon {
  font-size: 4.5em;
}
.contact .info h3 {
  color: #000;
}
.contact .info p {
  font-size: 1.3em;
}
</style>
