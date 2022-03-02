<template>
  <div class="hooop">
    <footer class="footer">
      <p class="footer-title">Copyrights @ <span>Ahmed khaled</span></p>
      <div class="sociala-icons">
        <a href="#"><fa :icon="['fab', 'github']" /></a>
        <a href="https://www.facebook.com/profile.php?id=100004185466950"
          ><fa :icon="['fab', 'facebook']"
        /></a>
        <a href="https://twitter.com/ahmedab15796385"
          ><fa :icon="['fab', 'twitter']"
        /></a>
        <a href="https://www.linkedin.com/in/ahmed-khaled-88a817224"
          ><fa :icon="['fab', 'linkedin']"
        /></a>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "footerr",
};
</script>
<style>
.footer {
  background-color: #000016;
  color: #fff;
  padding: 2em;
  display: flex;
  justify-content: space-between;
}

.footer-title {
  font-size: 1.3em;
  font-weight: 600;
}

.footer-title span {
  color: #3a6cf4;
}

.footer .sociala-icons a {
  font-size: 1.3em;
  padding: 0 12px 0 0;
}
</style>
