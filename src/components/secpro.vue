<template>
  <div class="p">
    <sections class="cards" id="services">
      <h2 class="title">services</h2>
      <div class="content">
        <div class="card">
          <div class="icon">
            <fa icon="fa-solid fa-laptop-code" />
          </div>
          <div class="info">
            <h3>create web site</h3>
            <p>create your ui/ux to website by framework vue.js</p>
          </div>
        </div>
        <div class="card">
          <div class="icon">
            <fa icon="fa-solid fa-laptop-code" />
          </div>
          <div class="info">
            <h3>ahmed Frontend</h3>
            <p>create your ui/ux to website by framework vue.js</p>
          </div>
        </div>
      </div>
    </sections>
  </div>
</template>
<script>
export default {
  name: "secpro",
};
</script>
<style>
.title {
  display: flex;
  justify-content: center;
  color: #3a6cf4;
  font-size: 2.2em;
  font-weight: 800;
  margin-bottom: 30px;
  margin-top: 60px;
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.card {
  background-color: #fff;
  width: 21.25em;
  box-shadow: 0 5px 25px rgba(1, 1, 1, 15%);
  border-radius: 10px;
  padding: 25px;
  margin: 15px;
  transition: 1s ease;
}
.card:hover {
  transform: scale(1.1);
}
.icon {
  color: #0a49f6;
  font-size: 8em;
  text-align: center;
}
.info {
  text-align: center;
}
.info h3 {
  color: #0a49f6;
  font-size: 1.2em;
  font-weight: 700;
  margin: 10px;
}
</style>
