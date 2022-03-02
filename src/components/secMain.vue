<template>
  <div class="o">
    <section class="main">
      <div class="bware">
        <h2>
          Hello, I'm {{ wows[0].userInfo[0].name }} <br /><span>Frontend</span>
        </h2>
        <h3>{{ wows[0]._id[0].About }}</h3>
        <a href="#Projects" class="main-btn">view my work</a>
        <div class="sociala-icons">
          <a :href="`${wows[0].userInfo[0].github}`"
            ><fa :icon="['fab', 'github']"
          /></a>
          <a :href="`${wows[0].userInfo[0].facebook}`"
            ><fa :icon="['fab', 'facebook']"
          /></a>
          <a :href="`${wows[0].userInfo[0].twitter}`"
            ><fa :icon="['fab', 'twitter']"
          /></a>
          <a :href="`${wows[0].userInfo[0].linkedin}`"
            ><fa :icon="['fab', 'linkedin']"
          /></a>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.bware {
  left: 0px;
}
section {
  padding: 100px 200px;
}
.main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url(images/—Pngtree—pure\ watercolor\ gradient\ colorful\ background_964413.jpg)
    no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.main h2 {
  color: #fff;
  font-size: 1.4em;
  font-weight: 500;
}
.main h2 span {
  display: inline-block;
  margin-top: 10px;
  color: #4c9eff;
  font-size: 3em;
  font-weight: 600;
}
.main h3 {
  color: #fff;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-bottom: 30px;
}
.main-btn {
  color: #fff;
  background-color: #3a6cf4;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 600;
  display: inline-block;
  padding: 0.9375em 2.1875em;
  letter-spacing: 1px;
  border-radius: 15px;
  margin-bottom: 40px;
  transition: 1s ease;
}
.main-btn:hover {
  background-color: #0a49f6;
  transform: scale(1.1);
}
.sociala-icons a {
  color: #fff;
  font-size: 1.7em;
  padding-right: 30px;
}
</style>
<script>
export default {
  name: "secMain",
  props: {
    wows: Object,
  },
};
</script>
