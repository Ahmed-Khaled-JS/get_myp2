<template>
  <div class="carousel_item">
    <div class="gallery">
      <a target="_blank" href="img_5terre.jpg">
        <img
          :src="`${project.gallery[0].url}`"
          alt="Cinque Terre"
          width="600"
          height="400"
        />
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "carsoulll",
};
</script>
<style>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>
