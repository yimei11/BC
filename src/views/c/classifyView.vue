<template>
  <div class="classify">
    <div class="nav">
      <div class="wrapper">
        <router-link
          v-for="(item, index) in arrs"
          :key="index"
          :to="index"
          class="subnav"
        >
          {{ index }}
        </router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import axios from "axios";
import TabBar from '../../components/c/tabbar/TabBar.vue';
export default {
  name: "classifyView",
  data() {
    return {
      arrs: null,
    };
  },
  components: {
    TabBar
  },
  methods: {
    async getClassifyNav() {
      let { data } = await axios.get("/api/classify");
      this.arrs = data;
      console.log(data);
    },
  },
  created() {
    this.getClassifyNav();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #545454;
}
.classify {
  display: flex;
}
.classify .nav {
  width: 1.86rem;
  height: 100vh;
  font-size: 0.24rem;
  border-right: 0.01rem solid #d7d7d7;
  overflow-y: scroll;
  box-sizing: border-box;
}
.classify .nav::-webkit-scrollbar {
  display: none;
}
.classify .nav .wrapper {
  width: 1.86rem;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.1rem;
}
.classify .nav .wrapper .subnav {
  margin: 0.21rem 0;
}
.classify .content {
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  box-sizing: border-box;
}

.router-link-active {
  padding: 0.13rem 0.17rem;
  border-radius: 0.3rem;
  background: linear-gradient(to right, #f3306b, #fd0507);
  white-space: nowrap;
  color: #fff;
}
.content {
  padding-bottom: 1rem;
}
</style>