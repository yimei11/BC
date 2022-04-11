<template>
  <div class="home">
    <MyHome></MyHome>
    <MyInput></MyInput>
    <div class="myrouter">
      <router-link to="/jinxuan" tag="span">
        <div class="xuan">
          <span class="top-tit">精选</span>
          <span class="bom-tit">猜你喜欢</span>
        </div>
      </router-link>
      <router-link to="/tehui" tag="span">
        <div class="xuan">
          <span class="top-tit">特惠</span>
          <span class="bom-tit">多买多省</span>
        </div>
      </router-link>
      <router-link to="/meizhuang" tag="span">
        <div class="xuan">
          <span class="top-tit">美妆</span>
          <span class="bom-tit">魅力装扮</span>
        </div>
      </router-link>
      <router-link to="/muying" tag="span">
        <div class="xuan">
          <span class="top-tit">母婴</span>
          <span class="bom-tit">家有萌宝</span>
        </div>
      </router-link>
      <router-link to="/shuma" tag="span">
        <div class="xuan">
          <span class="top-tit">数码</span>
          <span class="bom-tit">酷玩科技</span>
        </div>
      </router-link>
    </div>
    <TabBar></TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHome from "../components/c/home/MyHome.vue";
import MyInput from "../components/c/home/MyInput.vue";
import TabBar from '../components/c/tabbar/TabBar.vue';
export default {
  name: "HomeView",
  components: {
    MyHome,
    MyInput,
    TabBar
  },

};
</script>
<style scoped>
.myrouter {
  display: flex;
  justify-content: space-around;
  padding: .5rem 0;
  background: #e5e2e2;
}

.xuan {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top-tit {
  font-size: 0.32rem;
  color: #666;
}
.bom-tit {
  font-size: 0.24rem;
  color: #999;
}

.bom-tit::selection {
    color:#FFFFFF;
    background-color:#E84893;
    text-shadow:none;
}


</style>