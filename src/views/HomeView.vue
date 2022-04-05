<template>
  <div class="home">
    <MyHome></MyHome>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHome from '../components/c/home/MyHome.vue';
export default {
  name: "HomeView",
  components: {
    MyHome,
  },
};
</script>
<style scoped>
.home {
}


</style>