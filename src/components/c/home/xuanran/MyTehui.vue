<template>
  <div>
    <XuanRan :mess="attr"></XuanRan>
  </div>
</template>
<script>
import axios from "axios";
import XuanRan from "./XuanRan.vue";
export default {
  name: "MyTehui",
  components: {
    XuanRan,
  },
  data() {
    return {
      attr: "",
    };
  },
  methods: {
    async getData() {
      let { data } = await axios.get("/api/home");
      this.attr = data;
      console.log(this.attr);
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped>
</style>