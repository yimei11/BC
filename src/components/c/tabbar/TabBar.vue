<template>
  <div class="bom">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">
        <router-link to="/"> 首页 </router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
          <router-link to="/c/classify"> 分类 </router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
          <router-link to="/login"> 登录 </router-link>
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