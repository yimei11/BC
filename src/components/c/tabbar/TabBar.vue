<template>
  <div class="bom">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">
        <router-link to="/"> 标签 </router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
          <router-link to="/c/classify"> 标签 </router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
          <router-link to="/"> 标签 </router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "TabBar",
};
</script>
<style scoped>
.bom{
    position: absolute;
    bottom: 0;
}
</style>