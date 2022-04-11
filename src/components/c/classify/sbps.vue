<template>
  <div>
    <div class="block" v-for="(item, index) in arrs" :key="index">
      <p class="nav">{{ index }}</p>
      <div class="pp">
        <div class="wrapper" v-for="(item, index) in arrs[index]" :key="index">
          <div class="img">
            <img :src="item.imgUrl" alt="" srcset="" />
          </div>
          <p class="title">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block {
  width: 100%;
  box-sizing: border-box;
  padding: 0.1rem 0.2rem;
  border-bottom: 0.01px solid #d7d7d7;
}
.nav {
  font-size: 0.23rem;
  margin: 0.1rem;
}
.pp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0.2rem 0;
}
.pp .wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1.64rem;
}
.pp .img {
  width: 1.64rem;
  height: 1.64rem;
}
.pp .img img {
  width: 100%;
  height: 100%;
}
.title {
  font-size: 0.2rem;
}
</style>

<script>
import axios from "axios";
export default {
  name: "ppq",
  data() {
    return {
      arrs: null,
    };
  },
  methods: {
    async getClassifycontent() {
      let { data } = await axios.get("/api/classify");
      let url = window.location.href.split("/"),
        hash = decodeURI(url[url.length - 1]),
        Arrs;
      for (var i in data) {
        // console.log(i, data[i]);
        if (i == hash) {
          Arrs = data[i];
          break;
        }
      }
      console.log(Arrs);
      this.arrs = Arrs;
    },
  },
  created() {
    this.getClassifycontent();
  },
};
</script>