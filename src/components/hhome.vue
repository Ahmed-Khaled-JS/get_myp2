<template>
  <div class="alaa">
    <div class="sidebar-container">
      <div class="sidebar-logo">Project Name</div>
      <ul class="sidebar-navigation">
        <li class="header">Navigation</li>
        <li>
          <router-link to="/" class="logo">
            <a href="#">
              <fa :icon="['fa', 'house']" aria-hidden="true" />
              Homepage
            </a>
          </router-link>
        </li>
        <li class="header">Another Menu</li>
        <li>
          <a href="#" @click="openModal">
            <fa :icon="['fa', 'fa-circle-info']" aria-hidden="true" />
            about me
          </a>
        </li>
      </ul>
    </div>

    <div class="content-container">
      <div class="container-fluid">
        <!-- Main component for a primary marketing message or call to action -->
        <div class="jumbotron">
          <router-link
            v-for="event in events"
            :key="event._id"
            :to="{ path: `/about/${event.users_Portfolios[0]._id}` }"
          >
            <div class="set">
              <img
                :src="`${event.users_Portfolios[0].profile_img}`"
                class="myimg"
              />
              <!-- src=event.users_Portfolios.profile_img -->
              <div class="own"></div>
              <div class="hide">avilabel for hire</div>
              <h2>{{ event.name }}</h2>
              <h3>frontend devloper</h3>
              <p>create your ui/ux to website by framework vue.js</p>
              <h3>skills</h3>
              <div class="hbb">
                <div
                  class="wwe"
                  v-for="skil in event.users_Portfolios[0].skils"
                  :key="skil"
                >
                  <span>{{ skil }}</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.sidebar-container {
  position: fixed;
  width: 220px;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #1a1a1a;
  color: #fff;
}

.content-container {
  padding-top: 20px;
}

.sidebar-logo {
  padding: 10px 15px 10px 30px;
  font-size: 20px;
  background-color: #2574a9;
}

.sidebar-navigation {
  padding: 0;
  margin: 0;
  list-style-type: none;
  position: relative;
}

.sidebar-navigation li {
  background-color: transparent;
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 20px;
}

.sidebar-navigation li a {
  padding: 10px 15px 10px 30px;
  display: block;
  color: #fff;
}

.sidebar-navigation li .fa {
  margin-right: 10px;
}

.sidebar-navigation li a:active,
.sidebar-navigation li a:hover,
.sidebar-navigation li a:focus {
  text-decoration: none;
  outline: none;
}

.sidebar-navigation li::before {
  background-color: #2574a9;
  position: absolute;
  content: "";
  height: 100%;
  left: 0;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}

.sidebar-navigation li:hover::before {
  width: 100%;
}

.sidebar-navigation .header {
  font-size: 12px;
  text-transform: uppercase;
  background-color: #151515;
  padding: 10px 15px 10px 30px;
}

.sidebar-navigation .header::before {
  background-color: transparent;
}

.content-container {
  padding-left: 220px;
}
.hbb {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0.4em;
  text-align: center;
}
.wwe {
  background-color: #5252b9;
  color: #fff;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  padding: 2px;
  width: 5em;
  height: 1.5em;
  margin: 0.4em;
}
.myimg {
  display: flex;
  top: 10px;
  left: 15px;
  width: 5em;
  height: 5em;
  object-fit: cover;
  border-radius: 50% !important;
}
.set {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 65em;
  box-shadow: 0 5px 25px rgba(1, 1, 1, 15%);
  border-radius: 10px;
  padding: 25px;
  margin: 15px;
  transition: 1s ease;
}
.set:hover {
  transform: scale(1.05);
}
.own {
  display: flex;
  top: 10px;
  left: 15px;
  width: 1em;
  height: 1em;
  background-color: #34d64a;
  border-radius: 50%;
}
.hide {
  display: none;
}

.own:hover + .hide {
  display: block;
  color: red;
}
@media (max-width: 1023px) {
  header {
    padding: 12px 20px !important;
  }
  .alaa {
    padding: 12px 20px !important;
  }

  .navgition a {
    padding-left: 10px;
  }

  .title {
    font-size: 1.8em;
  }

  .main h2 {
    font-size: 1em;
  }

  .main h3 {
    font-size: 1.6em;
  }

  .content {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 641px) {
  body {
    font-size: 12px;
  }

  .main h2 {
    font-size: 0.8em;
  }
  .set {
    width: 23em !important;
  }
  .main h3 {
    font-size: 1.4em;
  }
  section {
    padding: 80px 20px !important;
  }
  .sidebar-container {
    width: 0em !important;
  }
  .content-container {
    padding-left: 0em;
  }
  .wwww {
    display: none !important;
  }
  .more {
    display: none;
  }
}

@media (max-width: 300px) {
  body {
    font-size: 10px;
  }
  section {
    padding: 80px 20px !important;
  }
}
</style>
<script>
import event0 from "@/services/event0.js";
import massege from "../components/massege.vue";
export default {
  name: "hhome",
  data() {
    return {
      events: [],
    };
  },
  created() {
    event0
      .getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log("there error was " + error.response);
      });
  },
  methods: {
    openModal() {
      this.$FModal.show({
        component: massege,
      });
    },
  },
};
</script>
