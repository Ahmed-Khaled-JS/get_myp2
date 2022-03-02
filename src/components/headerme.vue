<template>
  <div class="hello">
    <header>
      <router-link to="/" class="logo">Home</router-link>
      <nav class="navgition">
        <a href="#services">Services</a>
        <a href="#Projects">Projects</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
    <div id="nav"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
<style>
header {
  background-color: #f0f0f0;
  width: 100%;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 200px;
}
.logo {
  text-decoration: none;
  color: #3a6cf4;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.8em;
}
.navgition a {
  color: #3a6cf4;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  padding-left: 30px;
}
.navgition a:hover {
  color: #601cfc;
}
</style>
