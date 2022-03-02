<template>
  <div>
    <popup-layer :visible.sync="layer.show1" @onOpen="open" @onClose="close">
      <button @click="layer.show1 = false" class="btan">close</button>
      <h1>{{ project.name }}</h1>
      <div class="carousel_item" v-for="mmm in project.gallery" :key="mmm">
        <div class="gallery" v-if="mmm.type === '1'">
          <a target="_blank" href="img_5terre.jpg">
            <img
              :src="`${mmm.url}`"
              alt="Cinque Terre"
              width="600"
              height="400"
            />
          </a>
        </div>
        <div class="gallery" v-if="mmm.type === '3'">
          <a target="_blank" :href="`${mmm.url}`" class="logo">
            <div class="desc">link project</div>
          </a>
        </div>
      </div>
    </popup-layer>
    <div class="p-card">
      <div class="p-img">
        <img :src="`${project.f_img}`" alt="" />
      </div>
      <div class="p-info">
        <p class="p-cat">{{ project.short_discribtion }}</p>
        <strong class="p-title"
          ><span>{{ project.name }}</span>
          <button @click="layer.show1 = true" class="more">more</button>
        </strong>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    project: Object,
  },

  data() {
    return {
      layer: {
        show1: false,
      },
    };
  },
  methods: {
    open() {
      console.log("The first bomb layer opened");
    },
    /**
     * @param {Boolean} isPopstate：Whether the close shell event comes from the physical return key
     */
    close({ isPopstate }) {
      console.log(
        isPopstate
          ? "Click the physical return button to close the first layer of bullets."
          : "Use other non-physical return key methods to close the first layer of bullets."
      );
    },
  },
};
</script>
<style>
.logo {
  text-decoration: none;
  color: #3a6cf4;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8em;
}
.btan {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  border: 2px;
  border-radius: 2px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}

.p-card {
  background-color: #fff;
  border: 1px solid #fff;
  min-height: 14em;
  width: 18em;
  overflow: hidden;
  border-radius: 10px;
  margin: 20px;
  transition: 1s ease;
}
.p-card:hover {
  transform: scale(1.1);
}
.p-img img {
  width: 100%;
  height: 250px;
}
.p-card:hover {
  opacity: 0.85;
}
.p-info {
  padding: 1em;
}
.p-cat {
  font-size: 0.8em;
  color: #000;
}
.p-title {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 800;
}
.more {
  text-decoration: none;
  color: #0a49f6;
}
.more:hover {
  color: #601cfc;
}
div.gallery {
  margin: 5px;
  border-radius: 2em;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
img{
  border-radius: 3px !important;
}
</style>
